
import './App.scss';
import Main from './Main';
import { Container } from "./Styled/Container.style"
import { Global } from './Styled/Global.style';

function App() {
  return (
    <>
    <Global font={['Impact', 'Arial']}/>
    <Main />
    </>
  );
}

export default App;
