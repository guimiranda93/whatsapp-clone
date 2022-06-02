import React, { createContext, useState } from "react";

const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
	const [mensagens, setMensagens] = useState([
		{
			mensagem: "Mensagem inicial",
			send: false,
			date: "18/05/2022 21:00",
			read: false,
		},
	]);

	return (
		<MessageContext.Provider value={{ mensagens, setMensagens }}>
			{children}
		</MessageContext.Provider>
	);
};

export default MessageContext;
