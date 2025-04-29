import React from "react";
import Tabbutton from "./tabbutton";
import 'primeicons/primeicons.css';
import './login&signin.css';

export const LoginNsignin=()=>{
    let tabContant;
    const[activeButton,setActiveButtton]=React.useState("login");
    if(activeButton=="login")
    {
      tabContant=(<form><div className="entry">
      <p>Login with:</p>
      <div className="iconsFeatures">
      <i className="pi pi-facebook" style={{ color: 'var(--primary-color)' }}></i>
      <i className="pi pi-google" style={{ color: 'var(--primary-color)' }}></i>
      <i className="pi pi-twitter" style={{ color: 'var(--primary-color)' }}></i>
      <i className="pi pi-github"></i>
      </div>
      
        <p>or</p>
        <input type="email" placeholder="Email or username"></input>
        <input type="text" placeholder="Password"></input>
        <div><input type="checkbox"></input><label>Remember me</label></div>
        <p style={{ color: 'blue' }}>Forgot password?</p>
        <button>Login</button>
        <p>Not a member? <a style={{color:"blue"}}>Register</a></p>
      </div>
    </form>)
    }
    else{
      tabContant=(<form>
        <div className="entry">
        <p>Sign in with:</p>
        <div className="iconsFeatures">
          <i className="pi pi-facebook" style={{ color: 'var(--primary-color)' }}></i>
          <i className="pi pi-google" style={{ color: 'var(--primary-color)' }}></i>
          <i className="pi pi-twitter" style={{ color: 'var(--primary-color)' }}></i>
          <i className="pi pi-github"></i>
        </div>
            <p>or</p>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Repeat password"></input>
            <div><input type="checkbox"></input><label>I have read and agree to the terms.</label></div>
            <button>Sign in</button>
        </div>
      </form>);
    }
    return (
        <div className="loginPageMain">
          <h1>Let’s Get You In</h1>
          <menu>
            <Tabbutton
              isActive={activeButton=="login"}
              onClick={()=>setActiveButtton("login")}
              >Login</Tabbutton>
            <Tabbutton
              isActive={activeButton=="signin"}
              onClick={()=>setActiveButtton("signin")}
            >Sign in</Tabbutton>
          </menu>
          <div>{tabContant}</div>
        </div>
      );
}