

import FormLogin from "../../components/molecules/FormLogin"
import Navbar from "../../components/molecules/Navbar"

import './index.css'

const LogIn=()=>{
    return(
        <div class="log">
            
            <Navbar/>
            <FormLogin/> 
            <p style={{marginTop:'160px'}}>.</p>    
            
            
        </div>
       
    )
}
export default LogIn;