
export default function WidgetText(props:any) {
    return (
        <div className="md:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
    {props.title &&   <div className="lorem-box">
      {props.src &&  <div className="lorem-img">
                <img className="img-fluid" src="/Frame1.jpg" alt="" />
                
     </div>
     }
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
                <path d="M19 21.9481V15.9481M16 18.9481H22M12 15.9481H8C6.13623 15.9481 5.20435 15.9481 4.46927 16.2526C3.48915 16.6586 2.71046 17.4373 2.30448 18.4174C2 19.1525 2 20.0844 2 21.9481M15.5 4.23888C16.9659 4.83227 18 6.26943 18 7.94812C18 9.62681 16.9659 11.064 15.5 11.6574M13.5 7.94812C13.5 10.1573 11.7091 11.9481 9.5 11.9481C7.29086 11.9481 5.5 10.1573 5.5 7.94812C5.5 5.73898 7.29086 3.94812 9.5 3.94812C11.7091 3.94812 13.5 5.73898 13.5 7.94812Z" stroke="#20AB76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        }
      </div>


  )}