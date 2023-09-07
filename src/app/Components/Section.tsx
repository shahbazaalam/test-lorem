import WidgetText from "./WidgetText"
import {APIdata} from '../../../helper/APIdata'
import WidgetSideImage from './WidgetSideImage'



export default function Section() {
    return (
<section className="lorem-section section">
<div className="container mx-auto sm:px-4 container-1290">
<h2 className="esTitle uppercase">lorem Ipsum</h2>
  <p className="py-md-3 py-2 mb-1"></p>
  <div className="flex flex-wrap ">
{APIdata && APIdata.map((e:any)=>{
    return e.type ==="type6"? <WidgetText src={e.src} title={e.title} content={e.content} />: <WidgetSideImage src={e.src} title={e.title} content={e.content} />
})

}



  </div>
</div>
  </section>


  )}