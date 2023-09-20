import "./App.css";
import CatProduct from "./pages/CatItem";
import DogProduct from "./pages/DogItem";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Cat" element={<CatProduct/>}/>
          <Route path="/Dog" element={<DogProduct/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
