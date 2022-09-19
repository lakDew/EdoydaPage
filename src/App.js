import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {

  const [hide, setHide] = useState(true);
  console.log(1)
  return (
  
    <div className="App" onClick={(e)=>{
      if(e.target.classList[0]!="explore"&&e.target.classList[0]!="explore-categories"&&e.target.classList[0]!="arrow"){
         setHide(true)
      }
    }}>
     

      <Header hide={hide} setHide={setHide}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
