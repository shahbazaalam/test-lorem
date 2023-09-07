'use client'
import { useState } from "react";

export default function Accordion(props:any) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    
  
         
            <div className= "accordion-item">
              <h2 className= "accordion-header" id="heading01">
                <button className= "accordion-button" type="button" onClick={toggle} >
                  <div className= "container mx-auto sm:px-4 container-1290">
                    <div className= "accordian-title">
                    <p> {props.title} </p> <span className="accodiansymbol">{isShowing? '-':'+'}</span>
                    </div>
                  </div>
                </button>
              </h2>
              <div id="collapse01"  style={{ display: isShowing ? "block" : "none", padding: "5px" }} className= "accordion-collapse hidden opacity-100 block" aria-labelledby="heading01" data-bs-parent="#GeneralExample">
                <div className= "accordion-body">
                  <div className= "container mx-auto sm:px-4 container-1290">
                  {props.content}
                  </div>
                </div>
              </div>
            </div>
   

   
  );
}
