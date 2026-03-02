import { useState } from "react";
import styles from "./Message.module.css";

const conversations = [
    {
        id: 1,
        name: "Andrea",
        preview: "Esta disponible?",
        time: "2m",
        avatar: "https://i.pinimg.com/1200x/aa/9e/61/aa9e61cea0749fbe84dce06c25754365.jpg",
        product: "Vintage Chair",
        messages: [
            { text: "Esta disponible?", type: "received" },
            { text: "Si! Sigue disponible", type: "sent" },
        ],
    },
    {
        id: 2,
        name: "Daniel",
        preview: "Aceptas 50?",
        time: "1h",
        avatar: "https://i.pinimg.com/736x/9b/42/94/9b4294942ca1c3a269ebd0458a967025.jpg",
        product: "iPhone 14 Pro",
        messages: [
            { text: "Aceptas 50?", type: "received" },
            { text: "Podría dejarlo en 60.", type: "sent" },
        ],
    },

    {
        id: 3,
        name: "Juan Carlos",
        preview: "Envias a Malaga?",
        time: "2m",
        avatar: "https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2014/02/thumb-bodoque.jpg?fit=640%2C640&ssl=1",
        product: "Camara de fotos",
        messages: [
            { text: "Envias a Malaga?", type: "received" },
            { text: "Si!, hago envios a Malaga", type: "sent" },
        ],
    },

    {
        id: 4,
        name: "Laura",
        preview: "Me interesa, puedo pasar por ella mañana?",
        time: "2m",
        avatar: "https://img.buzzfeed.com/buzzfeed-static/static/2025-03/13/18/subbuzz/UjLcjUoUE0.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
        product: "Tabla de Surf",
        messages: [
            { text: "Me interesa, puedo pasar por ella mañana?", type: "received" },
            { text: "Mañana no habria problema, te parece a las 5 PM?", type: "sent" },
        ],
    },
];

export function Message() {
    const [activeChatId, setActiveChatId] = useState(1);

    const activeChat = conversations.find(
        (conv) => conv.id === activeChatId
    );

    return (
        <div className={styles.messageLayout}>


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
                        onClick={() => setActiveChatId(conv.id)}
                        className={`${styles.conversationItem} ${activeChatId === conv.id ? styles.active : ""
                            }`}
                    >
                        <img src={conv.avatar} alt="" />
                        <div>
                            <div className={styles.convTop}>
                                <span className={styles.convName}>{conv.name}</span>
                                <span className={styles.convTime}>{conv.time}</span>
                            </div>
                            <div className={styles.convBottom}>
                                {conv.preview}
                            </div>
                        </div>
                    </div>
                ))}
            </aside>


            <main className={styles.chatArea}>

                <div className={styles.chatHeader}>
                    <div className={styles.chatUser}>
                        <img src={activeChat.avatar} alt="" />
                        <div>
                            <div className={styles.chatName}>
                                {activeChat.name}
                            </div>
                            <div className={styles.chatStatus}>
                                Interesado en: {activeChat.product}
                            </div>
                        </div>
                    </div>

                    <button className={styles.viewListingBtn}>
                        Ir a producto
                    </button>
                </div>

                <div className={styles.chatMessages}>
                    {activeChat.messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`${styles.message} ${msg.type === "sent"
                                ? styles.sent
                                : styles.received
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                <div className={styles.chatInputArea}>
                    <input placeholder="Write a message..." />
                    <button className={styles.sendBtn}>Send</button>
                </div>

            </main>
        </div>
    );
}