import React from "react";
import "./styles.css";

const SpeechBubble = ({ chat }) => {
	return (
		<div className={"speech-bubble " + (chat.send ? "sended" : "received")}>
			<p className="text-message">{chat.mensagem}</p>
			<p className="date-message">{chat.date}</p>
		</div>
	);
};

export default SpeechBubble;
