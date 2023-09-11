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
                <button className= {isShowing?"accordion-button":"accordion-button collapsed"} type="button" onClick={toggle} data-bs-toggle="collapse" data-bs-target="#collapse01" aria-expanded="true" aria-controls="collapse01" >
                  <div className= "container mx-auto sm:px-4 container-1290">
                    <div className= "accordian-title">
                    <p> {props.title} </p> <span className="accodiansymbol">{isShowing? '-':'+'}</span>
                    </div>
                  </div>
                </button>
              </h2>
              {/* <div id="collapse01"  style={{ display: isShowing ? "block" : "none", padding: "5px" }} className= "accordion-collapse hidden opacity-100 block" aria-labelledby="heading01" data-bs-parent="#GeneralExample"> */}
              <div id="collapse01"   className= {isShowing? "accordion-collapse show":"accordion-collapse hidden"} aria-labelledby="heading01" data-bs-parent="#GeneralExample">
              
                <div className= "accordion-body">
                  <div className= "container mx-auto sm:px-4 container-1290">
                 <p> {props.content}</p>
                  </div>
                </div>
              </div>
            </div>
   

   
  );
}
