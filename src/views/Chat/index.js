import React, { useContext, useEffect, useState } from "react";
import SpeechBubble from "../../components/SpeechBubble";
import MsgTeste from "../../components/MsgTeste";
import MessageContext from "../../contexts/messages";
import "./styles.css";

const Chat = () => {
	const ctx = useContext(MessageContext);

	const [inputMsg, setInputMsg] = useState("");
	const [mensagemAtual, setMensagemAtual] = useState();

	const arrayBot = [
		{
			cod: 1,
			text: "Olá, seja bem vindo ao canal de atendimento digital da Outcenter. Para que possamos dar continuidade em seu atendimento, selecione as opções abaixo: 1 - Quero ser Cliente 💛 2 - Sou Cliente 😀",
		},
		{
			cod: 2,
			text: "Por favor, digite o CPF ou CNPJ do titular do contrato.",
		},
		{
			cod: 3,
			text: "Olá, Guilherme Miranda. Selecione uma das opções abaixo para conseguirmos te ajudar: 1 - Retirar meu boleto 📃 | 2 - Suporte técnico ⚒ | 3 - Alterar minha senha (Área do assinante, Paramount) 🎬 | 4 - Assuntos Financeiros 💰",
		},
		{
			cod: 4,
			text: "Aguarde que você será direcionado para um de nossos atendentes. 😄",
		},
	];

	useEffect(() => {
		if (ctx.mensagens.length === 1) {
			const newMsg = {
				mensagem: arrayBot[0].text,
				send: false,
				date: "18/05/2022 21:00",
				read: false,
			};

			setTimeout(() => {
				ctx.setMensagens((mensagens) => [...mensagens, newMsg]);
				setMensagemAtual(1);
			}, 3000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ctx.mensagens]);

	/**
	 *
	 * 1 -> Quero ser cliente/Sou cliente
	 * 2 -> Digite o CPF
	 * 3 -> Selecione uma opção (1 a 5)
	 * 4 -> Aguarde um momento que estamos transferindo para um atendente
	 */

	const sendMessage = (msg) => {
		const newMsg = {
			mensagem: msg,
			send: true,
			date: "18/05/2022 21:00",
			read: false,
		};
		ctx.setMensagens((mensagens) => [...mensagens, newMsg]);
		setInputMsg("");

		switch (mensagemAtual) {
			case 1:
				if (msg === 1 || msg === 2) {
					const newReceivedMsg = {
						mensagem: arrayBot[1].text,
						send: false,
						date: "18/05/2022 21:00",
						read: false,
					};
					setTimeout(() => {
						ctx.setMensagens((mensagens) => [
							...mensagens,
							newReceivedMsg,
						]);
						setMensagemAtual(2);
					}, 3000);
				} else {
					const newReceivedMsg = {
						mensagem: "Por favor, digite 1 ou 2.",
						send: false,
						date: "18/05/2022 21:00",
						read: false,
					};
					setTimeout(() => {
						ctx.setMensagens((msg) => [...msg, newReceivedMsg]);
						setMensagemAtual(2);
					}, 3000);
				}
				break;

			default:
				break;
		}
	};

	return (
		<div className="main">
			<div className="chat">
				<h1>Chat</h1>
				<MsgTeste />
				<div className="messages">
					{ctx.mensagens.map((item) => (
						<SpeechBubble chat={item} />
					))}
				</div>
				<div className="footer">
					<span className="material-symbols-outlined icon">mood</span>
					<span className="material-symbols-outlined icon">
						attach_file
					</span>
					<input
						className="input"
						onChange={(t) => setInputMsg(t.target.value)}
						value={inputMsg}
					/>
					{inputMsg === "" ? (
						<button className="btn-icon">
							<span className="material-symbols-outlined icon">
								mic
							</span>
						</button>
					) : (
						<button
							onClick={() => sendMessage(inputMsg)}
							className="btn-icon"
						>
							<span
								className="material-symbols-outlined icon"
								fill={1}
							>
								send
							</span>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Chat;
