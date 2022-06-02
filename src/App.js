import { MessageProvider } from "./contexts/messages";
import Chat from "./views/Chat";

function App() {
	return (
		<MessageProvider>
			<div className="main-bg">
				<div className="main-header"></div>
				<Chat />
			</div>
		</MessageProvider>
	);
}

export default App;
