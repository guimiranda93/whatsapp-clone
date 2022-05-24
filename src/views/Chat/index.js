import React, { useState } from "react";
import SpeechBubble from "../../components/SpeechBubble";
import "./styles.css";

const Chat = () => {
	const [inputMsg, setInputMsg] = useState("");
	const [mensagens, setMensagens] = useState([
		{
			mensagem: "Olá, sr. Guilherme",
			send: false,
			date: "18/05/2022 20:45",
			read: true,
		},
		{
			mensagem: "Olá, tudo bem?",
			send: true,
			date: "18/05/2022 20:48",
			read: true,
		},
	]);

	const sendMessage = (msg) => {
		const newMsg = {
			mensagem: msg,
			send: true,
			date: "18/05/2022 21:00",
			read: false,
		};
		setMensagens([...mensagens, newMsg]);
	};

	return (
		<div className="main">
			<div className="chat">
				<h1>Chat</h1>
				<div className="messages">
					{mensagens.map((item) => (
						<SpeechBubble chat={item} />
					))}
				</div>
				<input
					className="input"
					onChange={(t) => setInputMsg(t.target.value)}
					value={inputMsg}
				/>
				<button onClick={() => sendMessage(inputMsg)} className="btn">
					Enviar
				</button>
			</div>
		</div>
	);
};

export default Chat;
