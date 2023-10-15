import React from "react";
import "./Style.css";
import Image from "../Images/3D-Secuirty-badge 1.png";
import Image2 from "../Images/Social Media/Facebook.png";
import Image3 from "../Images/Social Media/Twitter.png";
import Image4 from "../Images/Logo.png";
import { Stack, TextField, Button } from '@mui/material';



const Login=()=>{

  return(
        <>
          
        <div className="container">
          <div className="div1">
          <div className="LogoContainer2">
               <img className="logo2" src={Image4} alt="logo" />
               <p className="LogoTextTwo">GateLab secures your company</p>
           </div>
           <div className="ImageContainer">
           <img className="picture" src={Image} alt="securitypic"/>
           </div>           
            <div className="div2">
              <form className="Form">
                <h1 className="accTitle2">Login</h1>                 
                  
                   <Stack paddingX={9} paddingY={-1} >

                   <Stack className="mui-field">
                   <TextField label="Email" size="small" variant="outlined" color="primary" required  InputProps={{ sx: {height:39}}} style={{marginRight: '-60px', marginTop:'19px'}}  />
                   <TextField  label={"Password"} type="password" size="small" color='primary' required helperText='Donot share your password with anyone.'InputProps={{ sx: {height:39}}} style={{marginTop: '15px', marginBottom: '5px', marginRight: '-60px', borderRadius:'20px'}} />

                 </Stack>
                   </Stack>
                 <div>
                  <Button className="button22" variant="contained" color="secondary" style={{marginTop:'10px', height:'27px', marginLeft:'4.6rem', width:'292px', backgroundColor:'#c49650'}}>Create Account</Button>
                  <p className="Ltext">Don't have an account? <span className="signup"><a href="/signup">Signup</a></span></p>

                  <div className="OrContainer2">
                  <hr className="line2" />
                       <p className="Ortext2">Or Continue with</p>
                       <hr className="line2" />
                  </div> 

                  <div className="TwoButtons2">
                      <Button style={{fontSize:'11px', textTransform:'none', marginRight:'10px', backgroundColor:'lightblue', borderRadius:'5px'}} className="buttonOne1"><img className="imagetwo" src={Image2} alt="fbimage"/>Signup with Facebook</Button>
                       <Button  style={{fontSize:'11px', textTransform:'none', marginRight:'5px', backgroundColor:'lightblue', borderRadius:'5px', marginLeft:'5px'}} className="buttonTwo2"><img className="imagethree" src={Image3} alt="twimage"/>Signup with Twitter</Button>
                  </div>                 
                 </div>
              </form>
              
            </div>

          </div>
          </div>
        
        </>
        
    )
}

export default Login;