

import FormLogin from "../../components/molecules/FormLogin"
import Navbar from "../../components/molecules/Navbar"

import './index.css'

const LogIn=()=>{
    return(
        <div class="log">
            
            <Navbar/>
            <p style={{marginTop:'100px'}}>.</p>    
            <FormLogin/> 
            <p style={{marginTop:'160px'}}>.</p>    
            
            
        </div>
       
    )
}
export default LogIn;