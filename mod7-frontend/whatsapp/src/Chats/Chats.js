import Chat from './Chat';
import chatArray from './chat.json';

function Chats() {
  return (
    <div className="chat-list">
      {chatArray.map(c =>
        <Chat key={c.id} chat={c} />
      )}
    </div>
  );
}

export default Chats;
