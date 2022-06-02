import React, { useContext } from "react";
import MessageContext from "../../contexts/messages";

const MsgTeste = () => {
	const ctx = useContext(MessageContext);
	return (
		<div>
			<p>{ctx.mensagens[0].date}</p>
		</div>
	);
};

export default MsgTeste;
