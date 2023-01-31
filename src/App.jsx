
import './App.scss';
import Main from './Main';
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
