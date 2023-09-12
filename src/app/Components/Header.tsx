'use client'
import { useState } from "react"
const menuData=[{
  "menuName":"LOREM IPSUM",
  "url":"#home"
},
{
  "menuName":"LOREM IPSUM",
  "url":"#AboutUs"
},
{
  "menuName":"LOREM IPSUM",
  "url":"#DolorSet"
}
]
export default function Header() {
  const[Active,setActive]=useState<boolean>(false)

  const toggle =()=>{
    let oldact:boolean=Active;
setActive(!oldact)
  }
    return (
      <div >
       <header className="header-main">
       <div className="container mx-auto sm:px-4 container-1290">
      <div className="header-menu flex items-center justify-between flex-wrap">
          <div className="header-logo">
            <a href="#">
              <img src="/logo.png" alt="" className="img-fluid"/>
            </a>
          </div>

          <div className="menu-toggle-bar">
            <button className="menu-toggle" onClick={toggle}>
              <span className="bar-rows"></span>
              <span className="bar-rows"></span>
            </button>
          </div>

          <div id="SideBar" className={Active?"header-content ms-auto active":"header-content ms-auto"}>
          <div className="sidbar-menu flex justify-between">
              <div className="header-logo">
                <a href="#">
                  <img src="/logo.png" alt="" className="img-fluid" />
                </a>
              </div>
              <span className="close-menus" onClick={toggle}></span>
            </div>
            <nav className="header-navmain">
              <ul className="nav-menu flex flex-wrap list-reset pl-0 mb-0 lg:my-0">
                {menuData && menuData.map((e,i)=>{
                  return <li  key={'menu'+ i} > <a href={e.url} onClick={toggle}>{e.menuName}</a></li>
                })}
                {/* <li>
                  <a href="#home" onClick={toggle}>LOREM IPSUM</a>
                </li>
                <li>
                  <a href="#AboutUs" onClick={toggle}>LOREM IPSUM</a>
                </li>
                <li>
                  <a href="#DolorSet" onClick={toggle}>LOREM IPSUM</a>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="bgBlack"></div>


        </div>
      </div>
    </header>
      </div>
    )
}