export default function WidgetSideImage(props:any) {
    return (
       
        <div className="md:w-2/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 md:mx-1/3 ">
        <div className="lorem-box">
          <div className="flex flex-wrap ">
            <div className="md:w-1/2 pr-4 pl-4">
              <div className="lorem-img">
                <img className="max-w-full h-auto" src={props.src} alt="" />
              </div>
            </div>

            <div className="md:w-1/2 pr-4 pl-4">
              <h3 className="lorem-title mb-1">
                <a href="#">{props.title}</a>
              </h3>
              <div className="lorem-text">
             {props.content}
              </div>
              <p className="py-2 mb-1"></p>
              <div className="lorem-icon">
                <a href="#">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 7.34577L12 12.068M12 12.068L3.49997 7.34577M12 12.068L12 21.568M21 16.1266V8.00946C21 7.66682 21 7.4955 20.9495 7.3427C20.9049 7.20752 20.8318 7.08344 20.7354 6.97875C20.6263 6.86041 20.4766 6.77721 20.177 6.61081L12.777 2.4997C12.4934 2.34214 12.3516 2.26336 12.2015 2.23248C12.0685 2.20514 11.9315 2.20514 11.7986 2.23248C11.6484 2.26336 11.5066 2.34214 11.223 2.4997L3.82297 6.61081C3.52345 6.77721 3.37369 6.86042 3.26463 6.97875C3.16816 7.08344 3.09515 7.20752 3.05048 7.3427C3 7.4955 3 7.66682 3 8.00946V16.1266C3 16.4692 3 16.6405 3.05048 16.7933C3.09515 16.9285 3.16816 17.0526 3.26463 17.1573C3.37369 17.2756 3.52345 17.3588 3.82297 17.5252L11.223 21.6363C11.5066 21.7939 11.6484 21.8727 11.7986 21.9036C11.9315 21.9309 12.0685 21.9309 12.2015 21.9036C12.3516 21.8727 12.4934 21.7939 12.777 21.6363L20.177 17.5252C20.4766 17.3588 20.6263 17.2756 20.7354 17.1573C20.8318 17.0526 20.9049 16.9285 20.9495 16.7933C21 16.6405 21 16.4692 21 16.1266Z" stroke="#20AB76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
              
            </div>

          </div>
        </div>
        
      </div>
      

    )}