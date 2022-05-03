import React,{useState} from 'react'
import logosign from './image/png-logo.png'


const Verify = () => {
  console.log(JSON.parse(localStorage.getItem('userData')))
  const [userData, setuserData] = useState(JSON.parse(localStorage.getItem('userData')))
  // const [user, setuser] = useState({
  //   number:"",
  //   otp:"",
  // })
  let nm, val;
  const handlechange=(e)=>{
        nm =e.target.name;
        val= e.target.value;
      
      // setuser({
      //     ...user ,[nm]:val
      //  })
      setuserData({
        ...userData,[nm]:val
      })
     localStorage.setItem("userData",JSON.stringify(userData))
  }

  return (
    <div className="sign-wrapper">
        <div className="signup-logo-cont"><img className='signup-logo' src={logosign} alt="" /></div>
        <div className="signup-form-cont">
            <h5 style={{padding:"5rem 1rem 1rem ",}}>Enter Your Contact No.</h5>
            <input onChange={handlechange} style={{marginLeft:"1rem"}} name="mobileNumber" type="tel" placeholder='Mobile Number' />
            <button style={{border:"none",outline:"none" , width:"5rem", height:"2rem"}} >Send OTP</button>
            <input  style={{marginLeft:"1rem"}} name="otp" type="tel" placeholder='otp' />
            <button style={{border:"none",outline:"none" , width:"5rem", height:"2rem"}} >Verify OTP</button>
        </div>
    </div>
  )
}

export default Verify