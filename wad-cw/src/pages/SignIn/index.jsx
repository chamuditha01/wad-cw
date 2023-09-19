
import Footer from "../../components/molecules/Footer"
import Form1 from "../../components/molecules/Form"
import Navbar from "../../components/molecules/Navbar"

import './index.css'

const SignIn=()=>{
    return(
        <div class="sign">
            <p style={{marginTop:'1px'}}>.</p>   
            <Navbar/>
            <Form1/> 
            <p style={{marginTop:'1px'}}>.</p>  
            <Footer/>  
        </div>
       
    )
}
export default SignIn;