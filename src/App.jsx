
import './App.scss';
import Main from './Main';
import { Global } from './Styled/Global.style';
import AppRouter from "./AppRouter"
import { Navbar } from './Styled/Navbar.style';
import { Footer } from './Styled/Footer.style';
import { Hero } from './Styled/Hero.styled';
import { Posters } from './Styled/Posters.style';
import Poster from './Poster';
import Fetch from './Fetch';

function App() {
  return (
    <>
    <Global font={['Impact', 'Arial']}/>
    <Navbar>
      <ul>
        <li>HOME</li>
        <li>PLAKATER</li>
        <li>OM OS</li>
        <li>KONTAKT</li>
        <li>LOGIN</li>
      </ul>
    </Navbar>
    <Hero>
      <img src="" alt="" />
    </Hero>
    <Posters>
    <Fetch />
    </Posters>
    <Footer>
      <div>
        <h3>WALLYWOOD</h3>
        <p>Øster Utterup vej 1</p>
        <p>9000 Aalborg</p>
      </div>
      <div>
        <p>CVR: 000000</p>
        <p>MAIL: admin@admin.dk</p>
        <p>MOBIL: 112</p>
      </div>
      <div>
        <a href="http://">Pintrest</a>
        <a href="http://">Pintrest</a>
        <a href="http://">Pintrest</a>
        <a href="http://">Pintrest</a>
      </div>
    </Footer>
    </>
  );
}

export default App;
