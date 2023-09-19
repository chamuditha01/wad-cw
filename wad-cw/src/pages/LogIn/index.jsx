

import Footer from "../../components/molecules/Footer"
import FormLogin from "../../components/molecules/FormLogin"
import Navbar from "../../components/molecules/Navbar"

import './index.css'

const LogIn=()=>{
    return(
        <div class="log">
            
            <Navbar/>
            <p style={{marginTop:'1px'}}>.</p>    
            <FormLogin/> 
            <p style={{marginTop:'160px'}}>.</p>    
            <Footer/>
            
        </div>
       
    )
}
export default LogIn;