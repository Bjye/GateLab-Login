import React from "react";
import "./Style.css";
import Image from "../Images/3D-Secuirty-badge 1.png";
import Image2 from "../Images/Social Media/Facebook.png";
import Image3 from "../Images/Social Media/Twitter.png";
import Image4 from "../Images/Logo.png";
<<<<<<< HEAD
import {Stack, TextField, Button} from '@mui/material';
=======
>>>>>>> 4d1ddeb215251fe31175b9b6497d73d7ca451fb0



const Signup=()=>{
    return(
        <>
          
        <div className="container">
          <div className="div1">
          <div className="LogoContainer">
               <img className="logo" src={Image4} alt="logo" />
               <p className="LogoText">GateLab secures your company</p>
           </div>
           <div className="ImageContainer">
           <img className="picture" src={Image} alt="securitypic"/>
           </div>           
            <div className="div2">
              <form className="Form">
                <h1 className="accTitle">Create Account</h1>
                  <Stack>
                    <Stack direction= "row" spacing={4}>
                    <TextField label="First Name" variant= "outlined" size="small" style={{width:'165px', marginLeft:'65px'}} />
                    <TextField label="Last Name" variant="outlined" size="small" style={{width:'165px', marginRight:'20px'}} />                  
                    </Stack>
                    <Stack direction="row" spacing={4} marginTop={2}>
                    <TextField label="Email" variant= "outlined" size="small" required style={{width:'165px', marginLeft:'65px'}} />
                    <TextField label="Gender" variant="outlined" size="small" style={{width:'165px', marginRight:'20px'}} /> 
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField label='Password' type="password" size='small' required style={{width:'363px', marginLeft:'65px'}}/>
                    </Stack>
                  </Stack>
                 
                 <div>
                 <Stack margin={2}>
                 <Button variant="contained"  className="button1" style={{marginLeft: "3.2rem", width:'22.6rem', backgroundColor:'#c49650'}}>Create Account</Button>
                 </Stack>
                 <p className="Stext">Already have an account? <span className="login"><a href="/">Login</a></span></p>
                  <div className="OrContainer">
                  <hr className="line1" />
                       <p className="Ortext">Or</p>
                       <hr className="line1" />
                  </div> 
                  <div className="TwoButtons">
<<<<<<< HEAD
                       <Button style={{fontSize:'12px', textTransform:'none', marginRight:'35px', backgroundColor:'lightblue', borderRadius:'5px'}} className="buttonOne1"><img className="imagetwo" src={Image2} alt="fbimage"/>Signup with Facebook</Button>
                       <Button  style={{fontSize:'12px', textTransform:'none', marginRight:'5px', backgroundColor:'lightblue', borderRadius:'5px', marginLeft:'5px'}} className="buttonTwo2"><img className="imagethree" src={Image3} alt="twimage"/>Signup with Twitter</Button>
                     
=======
                      <button className="buttonOne"><img className="imagetwo" src={Image2} alt="fbimage" />Signup using Facebook</button>
                       <button className="buttonTwo"><img className="imagethree" src={Image3} alt="tweimage" />Signup using Twitter</button>
>>>>>>> 4d1ddeb215251fe31175b9b6497d73d7ca451fb0
                  </div>                 
                 </div>
              </form>
              
            </div>

          </div>
          </div>
        </>
        
    )
}

export default Signup;
