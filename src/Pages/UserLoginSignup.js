import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {FaUsers,FaLock,FaUser,FaEyeSlash,FaArrowRight,FaM} from 'react-icons/fa';
import EmailIcon from '@mui/icons-material/Email';
import UserAlreadyLogged from './UserAlreadyLogged';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function UserLoginSignup(props) {
  const [currentForm,setCurrentForm] = useState('LogInChecker')
  const {pHead,loginStatus} = props;
  return (
    <div className='PageBody UserLoginSignup'>
      {loginStatus===false && pHead}
      <div className='container'>
        {loginStatus===true?<UserAlreadyLogged />:
          <div className='UserLoginSignupSub'>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                  <Item data-aos="fade-right" data-aos-duration="400">
                  <div className="signInLogo">
                              <img src="images/login.jpg" alt="" className="h-100 w-100"/>
                          </div>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                  <Item data-aos="fade-left" data-aos-duration="400">
                  <div id="signIn_signUp_Box">
                              <h1><FaUsers /></h1>
                              {currentForm==='LogInChecker'&&<>
                               <form id={currentForm}>
                                  <div className="mb-3 signIn_signUp_input">
                                    <FaUser /> | <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                                  </div>
                                  <div className="mb-3 signIn_signUp_input">
                                      <FaLock /> | <input type="password" id="exampleInputPassword1" placeholder="***********"/><FaEyeSlash id="showPassword" />
                                  </div>
                                  <div className="mb-3 signIn_signUp_Check">
                                      <div>
                                    <input type="checkbox" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                  </div>
                                    <button type="submit">LOGIN</button>
                                  </div>
                                  <p>Don't have an account?</p>
                                </form>
                                <button onClick={()=>setCurrentForm("UserSignUp")} className="mb-3 signIn_signUp_Toogle"><span>CREATE ACCOUNT  <FaArrowRight /></span><span>SIGN UP</span> </button>
                                  </>
                                  }
                                  {
                                    currentForm==='UserSignUp'&&
                                    <>
                                    <form id={currentForm}>
                                  <div className="mb-3 signIn_signUp_input">
                                    <FaUser /> | <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                                  </div>
                                  <div className="mb-3 signIn_signUp_input">
                                      <EmailIcon /> | <input type="email" id="exampleInputPassword1" placeholder="Email"/>
                                  </div>
                                  <div className="mb-3 signIn_signUp_input">
                                      <FaLock /> | <input type="password" id="exampleInputPassword1" placeholder="Password"/><FaEyeSlash id="showPassword" />
                                  </div>
                                  <div className="mb-3 signIn_signUp_input">
                                      <FaLock /> | <input type="password" id="exampleInputPassword1" placeholder="Confirm Password"/>
                                  </div>
                                  <div className="mb-3 signIn_signUp_Check">
                                      <div>
                                    <input type="checkbox" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">By clicking, You are agree to MyHuse Terms & Conditions.</label>
                                  </div>
                                    <button type="submit">SIGNUP</button>
                                  </div>
                                </form>
                                <button onClick={()=>setCurrentForm("LogInChecker")} className="mb-3 signIn_signUp_Toogle"><span>LOGIN  <FaArrowRight /></span><span>Already have an account?</span> </button>
                                  </>
                                  }
                                </div>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        } 
      </div>
      </div>
  )
}
