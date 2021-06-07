import './App.css';
import  Header  from "./components/header/Header";
import Cards from "./components/cards/Cards";
import  FooterButtons from './components/footerButtons/FooterButtons';

function App() {
  return (
   <div className = "app">
     {/* header*/}
      <Header />
     {/* cards */}
     <Cards />
     {/*button footer */}
   <FooterButtons/> 
     </div>
   
  );
}

export default App;
