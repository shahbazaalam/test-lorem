import WidgetText from "./WidgetText"
import WidgetSideImage from './WidgetSideImage'
const data=[{
    "title":"Lorem ipsum dolor",
    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "src":"",
    "type":"type6"

},
{
    "title":"dolor sit amet",
    "content":" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "src":"",
    "type":"type6"

}]
const data2=[
    {
    "title":"Lorem ipsum",
    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "src":"/Frame3.jpg",
    "type":"type8"

}]
export default function LoremSection(){
    return (

<section className="lorem-section section">
      <div className="container mx-auto sm:px-4 container-1290">
        <h2 className="esTitle uppercase">lorem ipsum dolor set</h2>
        <p className="md:py-4 py-2 mb-1"></p>
        <div className="flex flex-wrap ">

        {data && data.map((e:any)=>{
    return e.type ==="type6"? <WidgetText src={e.src} title={e.title} content={e.content} />: <WidgetSideImage src={e.src} title={e.title} content={e.content} />
})

}
        </div>

        <div className="flex flex-wrap section8offset">
      
         
          {data2 && data2.map((e:any)=>{
    return e.type ==="type6"? <WidgetText src={e.src} title={e.title} content={e.content} />: <WidgetSideImage src={e.src} title={e.title} content={e.content} />
        })
    }

         
          </div>
        </div>
        </section>

    )
}