import './App.css';
import Switch from './Switch'
import Spinner from './Spinner'
import TabPicker from './TabPicker'
import TaskList from './TaskList'
import Login from './Login'
import Carousel from './Carousel'

function App() {
  return (
    <div className="App">
      Switch:
      <Switch />
      Spinner:
      <Spinner />
      TabPicker:
      <TabPicker tabs={['Alice', 'Bob', 'Carol', 'Dave']} />
      TaskList:
      <TaskList />
      Login:
      <Login />
      Carousel:
      <Carousel />
    </div>
  );
}

export default App;
