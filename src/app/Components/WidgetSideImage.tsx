import SvgContainer from "../../../helper/SvgData"
export default function WidgetSideImage(props:any) {
    return (
       
        <div className="md:w-2/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 md:mx-1/3 ">
      {props.data && props.data.title &&   <div className="lorem-box">
          <div className="flex flex-wrap ">
            <div className="md:w-1/2 pr-4 pl-4">
              <div className="lorem-img">
                <img className="max-w-full h-auto" src={props.data.src} alt="" />
              </div>
            </div>

            <div className="md:w-1/2 pr-4 pl-4">
              <h3 className="lorem-title mb-1">
                <a href="#">{props.data.title}</a>
              </h3>
              <div className="lorem-text">
             {props.data.content}
              </div>
              <p className="py-2 mb-1"></p>
              {props.data.svgName &&   <div className="lorem-icon">
            <a href="#">
            {SvgContainer(props.data.svgName)}
              {/* <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21.9481V15.9481M16 18.9481H22M12 15.9481H8C6.13623 15.9481 5.20435 15.9481 4.46927 16.2526C3.48915 16.6586 2.71046 17.4373 2.30448 18.4174C2 19.1525 2 20.0844 2 21.9481M15.5 4.23888C16.9659 4.83227 18 6.26943 18 7.94812C18 9.62681 16.9659 11.064 15.5 11.6574M13.5 7.94812C13.5 10.1573 11.7091 11.9481 9.5 11.9481C7.29086 11.9481 5.5 10.1573 5.5 7.94812C5.5 5.73898 7.29086 3.94812 9.5 3.94812C11.7091 3.94812 13.5 5.73898 13.5 7.94812Z" stroke="#20AB76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> */}
            </a>
        
          </div>
        }
              
            </div>

          </div>
        </div>
}
        
      </div>
      

    )}