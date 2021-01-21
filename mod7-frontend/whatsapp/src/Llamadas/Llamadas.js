import Compra from './Compra';
import Hashtag from './Hashtag';
import Contador from './Contador';
import Eurocalc from './Eurocalc';
import Login from './Login';
import UserViewer from './UserViewer';

function Llamadas() {
  return (
    <>
      <Contador />
      <Compra />
      <Hashtag />
      <Eurocalc />
      <Login />
      <UserViewer />
    </>
  );
}

export default Llamadas;
