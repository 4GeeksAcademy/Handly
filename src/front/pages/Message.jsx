import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Message.module.css";
import { socket } from "./socket";

export function Message() {

  const [searchParams] = useSearchParams();
  const initialChatId = searchParams.get("chat");
  const initialChatName = searchParams.get("name");

  const [conversations, setConversations] = useState([]);
  const [activeChatId, setActiveChatId] = useState(initialChatId);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const token = localStorage.getItem("token");

  const activeChat = conversations.find((c) => String(c.id) === String(activeChatId));

  /*
  ─────────────────────────────
  SOCKET CONNECTION
  ─────────────────────────────
  */
  useEffect(() => {

    socket.auth = { token };
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket conectado:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.log("Error socket:", err.message);
    });

    /*
    ─────────────────────────────
    RECEIVE MESSAGE
    ─────────────────────────────
    */
    socket.on("receive_message", (msg) => {

      setConversations((prev) =>
        prev.map((c) =>
          c.id === msg.chat_id
            ? { ...c, preview: msg.message }
            : c
        )
      );

      if (String(msg.chat_id) === String(activeChatId)) {
        setMessages((prev) => [...prev, msg]);
      }

    });

    /*
    ─────────────────────────────
    NEW CHAT
    ─────────────────────────────
    */
    socket.on("new_chat", (chat) => {

      setConversations((prev) => {

        const exists = prev.find((c) => c.id === chat.id);
        if (exists) return prev;

        return [...prev, chat];
      });

      socket.emit("join_chat", {
        token,
        chat_id: chat.id
      });

    });

    return () => {
      socket.disconnect();
    };

  }, []);



  /*
  ─────────────────────────────
  LOAD USER CHATS
  ─────────────────────────────
  */
  useEffect(() => {

    fetch(`${import.meta.env.VITE_BACKEND_URL}api/chat/my_chats`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((chats) => {

        setConversations(chats);

        chats.forEach((chat) => {
          socket.emit("join_chat", {
            token,
            chat_id: chat.id
          });
        });

      })
      .catch((err) => console.error(err));

  }, []);



  /*
  ─────────────────────────────
  LOAD MESSAGES OF ACTIVE CHAT
  ─────────────────────────────
  */
  useEffect(() => {

    if (!activeChatId) return;

    fetch(`${import.meta.env.VITE_BACKEND_URL}api/chat/${activeChatId}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((msgs) => {
        setMessages(msgs);
      })
      .catch((err) => console.error(err));

  }, [activeChatId]);



  /*
  ─────────────────────────────
  JOIN CHAT FROM SIDEBAR
  ─────────────────────────────
  */
  const joinChat = (conv) => {

    setActiveChatId(conv.id);
    setMessages([]);

    socket.emit("join_chat", {
      token,
      chat_id: conv.id
    });

  };



  /*
  ─────────────────────────────
  SEND MESSAGE
  ─────────────────────────────
  */
  const sendMessage = () => {

    if (!input.trim()) return;

    socket.emit("send_message", {
      token,
      chat_id: activeChatId,
      message: input
    });

    setInput("");

  };

  useEffect(() => {

  if (!initialChatId) return;

  const exists = conversations.find(
    (c) => String(c.id) === String(initialChatId)
  );

  if (!exists) {

    const newChat = {
      id: initialChatId,
      name: initialChatName || "Usuario",
      avatar: "/default-avatar.png",
      product: "Producto",
      messages: []
    };

    setConversations((prev) => [...prev, newChat]);
  }

  setActiveChatId(initialChatId);

}, [initialChatId, initialChatName, conversations]);

console.log("conversations:", conversations);
console.log("activeChatId:", activeChatId);

  return (
    <div className={styles.messageLayout}>

      {/* SIDEBAR */}

      <aside className={styles.chatSidebar}>

        <div className={styles.sidebarHeader}>
          <h2 className={styles.logo}>Handly</h2>
          <span className={styles.inboxTitle}>Inbox</span>
        </div>

        <div className={styles.searchBox}>
          <input placeholder="Buscar chats..." />
        </div>

        {conversations.map((conv) => (

          <div
            key={conv.id}
            onClick={() => joinChat(conv)}
            className={`${styles.conversationItem} ${activeChatId === conv.id ? styles.active : ""}`}
          >

            <img src={conv.avatar || "/default-avatar.png"} alt="" />

            <div>

              <div className={styles.convTop}>
                <span className={styles.convName}>
                  {conv.other_user?.first_name || conv.name || "Usuario"}
                </span>
              </div>

              <div className={styles.convBottom}>
                {conv.preview || ""}
              </div>

            </div>

          </div>

        ))}

      </aside>



      {/* CHAT AREA */}

      <main className={styles.chatArea}>

        {activeChat ? (

          <>

            {/* HEADER */}

            <div className={styles.chatHeader}>

              <div className={styles.chatUser}>

                <img src={activeChat.avatar || "/default-avatar.png"} alt="" />

                <div>

                  <div className={styles.chatName}>
                    {activeChat.other_user?.first_name || activeChat.name}
                  </div>

                  <div className={styles.chatStatus}>
                    Interesado en: {activeChat.product || "Producto"}
                  </div>

                </div>

              </div>

            </div>



            {/* MESSAGES */}

            <div className={styles.chatMessages}>

              {messages.map((msg) => (

                <div
                  key={msg.id}
                  className={`${styles.message} ${
                    String(msg.sender_id) === localStorage.getItem("user_id")
                      ? styles.sent
                      : styles.received
                  }`}
                >
                  {msg.message}
                </div>

              ))}

            </div>



            {/* INPUT */}

            <div className={styles.chatInputArea}>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
              />

              <button
                className={styles.sendBtn}
                onClick={sendMessage}
              >
                Send
              </button>

            </div>

          </>

        ) : (

          <div className={styles.noChat}>

            <div className={styles.emptyState}>
              <h3>Aún no tienes conversaciones</h3>
              <p>Cuando alguien te escriba sobre un producto, tus chats aparecerán aquí.</p>
            </div>

          </div>

        )}

      </main>

    </div>
  );
}