import { useState } from "react";
import NavbarLinks from "../NavbarLinks";
import NavbarMenu from "../NavbarMenu";

export default function Navbar(props) {

    const [icon,setIcon] = useState("👻")

    function changeIcon(e) {
      e.preventDefault();
      if( icon == "👻" ){
        setIcon("👽")
      }else if(icon == "👽"){
        setIcon("🕵🏻‍♂️")
      }else{
        setIcon("👻")
      }
    }

    const [menuStatus,setMenuStatus] = useState("open")

    function showMenu(){
      if(menuStatus =="open"){
        setMenuStatus("closed")
      }else{
        setMenuStatus("open")
      }
    }
  
    return (
      <>
      <div className="Header">
        <div className="Header-item f2 Header-item--full" onClick={changeIcon}>
          <a href="#" className="Header-link d-flex flex-items-center">
            <span>{icon}</span>
          </a>
        </div>
        <NavbarLinks links={[{name:"Home", value:"/"},{name:"About", value:"/about"}]}></NavbarLinks>
        <div className="Header-item mr-0 d-lg-none" onClick={showMenu} >
          <div className="btn btn-large m-0 pt-1 pb-1">
            <svg aria-hidden="true" role="img" className="octicon" viewBox="0 0 16 16" width="26" height="26" fill="currentColor"><path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
          </div>
        </div>
      </div>
      <NavbarMenu links={["account","profile","settings"]} status={menuStatus}></NavbarMenu>
      </>
    );
  }