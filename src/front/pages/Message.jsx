import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Message.module.css";
import { socket } from "./socket";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function Message() {
  const [searchParams] = useSearchParams();
  const initialChatId = searchParams.get("chat");

  const [conversations, setConversations] = useState([]);
  const [activeChatId, setActiveChatId] = useState(initialChatId ? String(initialChatId) : null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const token = localStorage.getItem("token");
  const myUserId = localStorage.getItem("user_id");

  const activeChat = conversations.find((c) => String(c.id) === String(activeChatId));

  // ── Auto scroll al último mensaje ──
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  // ── Conexión del socket ──
  useEffect(() => {
    socket.auth = { token };
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket conectado:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("Error de conexión:", err.message);
    });

    // Mensaje recibido en tiempo real
    socket.on("receive_message", (msg) => {
      setConversations((prev) =>
        prev.map((c) =>
          String(c.id) === String(msg.chat_id)
            ? { ...c, preview: msg.message }
            : c
        )
      );
      setActiveChatId((currentChatId) => {
        if (String(msg.chat_id) === String(currentChatId)) {
          setMessages((prev) => {
            const exists = prev.find(
              (m) => m.message === msg.message && m.created_at === msg.created_at
            );
            if (exists) return prev;
            return [...prev, msg];
          });
        }
        return currentChatId;
      });
    });

    return () => {
      socket.off("receive_message");
      socket.off("connect");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, []);


  // ── Cargar lista de chats del usuario ──
  useEffect(() => {
    fetch(`${BACKEND_URL}api/chat/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((chats) => {
        setConversations(chats);

        // Unirse a todas las salas
        chats.forEach((chat) => {
          socket.emit("join_chat", { token, chat_id: chat.id });
        });

        // Si venimos desde ProductDetail con un chat_id nuevo, asegurarnos que esté en la lista
        if (initialChatId) {
          const exists = chats.find((c) => String(c.id) === String(initialChatId));
          if (!exists) {
            // Traer el chat puntual del backend
            fetch(`${BACKEND_URL}api/chat/`, {
              headers: { Authorization: `Bearer ${token}` },
            });
          }
          socket.emit("join_chat", { token, chat_id: parseInt(initialChatId) });
        }
      })
      .catch((err) => console.error("Error cargando chats:", err));
  }, []);


  // ── Cargar mensajes del chat activo ──
  useEffect(() => {
    if (!activeChatId) return;

    fetch(`${BACKEND_URL}api/chat/${activeChatId}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((msgs) => setMessages(msgs))
      .catch((err) => console.error("Error cargando mensajes:", err));
  }, [activeChatId]);


  // ── Seleccionar chat desde el sidebar ──
  const joinChat = (conv) => {
    setActiveChatId(String(conv.id));
    setMessages([]);
    socket.emit("join_chat", { token, chat_id: conv.id });
  };


  // ── Enviar mensaje ──
  const sendMessage = () => {
    if (!input.trim() || !activeChatId) return;

    socket.emit("send_message", {
      token,
      chat_id: parseInt(activeChatId),
      message: input.trim(),
    });

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <div className={styles.messageLayout}>

      {/* ── SIDEBAR ── */}
      <aside className={styles.chatSidebar}>

        <div className={styles.sidebarHeader}>
          <h2 className={styles.logo}>Mensajes</h2>
        </div>


        {conversations.length === 0 && (
          <p className={styles.emptyState}>No tenés chats aún</p>
        )}

        {conversations.map((conv) => {
          const otherUser = conv.other_user;
          const name = otherUser
            ? `${otherUser.first_name} ${otherUser.last_name}`
            : conv.name || "Usuario";
          const initial = otherUser
            ? `${otherUser.first_name[0]}${otherUser.last_name[0]}`
            : "U";

          return (
            <div
              key={conv.id}
              onClick={() => joinChat(conv)}
              className={`${styles.conversationItem} ${String(activeChatId) === String(conv.id) ? styles.active : ""
                }`}
            >
              <div className={styles.avatarCircle}>{initial}</div>
              <div>
                <div className={styles.convTop}>
                  <span className={styles.convName}>{name}</span>
                </div>
                <div className={styles.convBottom}>
                  {conv.preview || conv.last_message?.message || "Sin mensajes"}
                </div>
              </div>
            </div>
          );
        })}

      </aside>


      {/* ── CHAT AREA ── */}
      <main className={styles.chatArea}>

        {activeChat ? (
          <>
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.chatUser}>
                <div className={styles.avatarCircle}>
                  {activeChat.other_user
                    ? `${activeChat.other_user.first_name[0]}${activeChat.other_user.last_name[0]}`
                    : "U"}
                </div>
                <div>
                  <div className={styles.chatName}>
                    {activeChat.other_user
                      ? `${activeChat.other_user.first_name} ${activeChat.other_user.last_name}`
                      : activeChat.name || "Usuario"}
                  </div>
                </div>
              </div>
            </div>

            {/* Mensajes */}
            <div className={styles.chatMessages}>
              {messages.map((msg, index) => (
                <div
                  key={msg.message_id || index}
                  className={`${styles.message} ${String(msg.sender_id) === String(myUserId)
                    ? styles.sent
                    : styles.received
                    }`}
                >
                  {msg.message}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={styles.chatInputArea}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe un mensaje..."
              />
              <button className={styles.sendBtn} onClick={sendMessage}>
                Enviar
              </button>
            </div>

          </>
        ) : (
          <div className={styles.noChat}>
            <div className={styles.emptyState}>
              <h3>Seleccioná un chat para comenzar</h3>
              <p>Tus conversaciones aparecerán en el panel izquierdo.</p>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}