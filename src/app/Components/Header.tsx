export default function Header() {
    return (
      <div >
         <header className="header-main">
         <div className="container mx-auto sm:px-4 container-1290">
            <div className="header-menu flex items-center justify-between flex-wrap">
            <div className="header-logo">
              <a href="#">
                <img src="/logo.png" alt="" className="img-fluid" />
              </a>
            </div>
  
            <div className="menu-toggle-bar">
              <button className="menu-toggle">
                <span className="bar-rows"></span>
                <span className="bar-rows"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      </div>
    )
}