import { url } from "inspector";
import { FunctionComponent, useEffect, useRef, useState } from "react";
// import { importImages, importThumbnail } from "../../helpers/data";
import Header from "./Header";
import Indicators from "./Indicators";

interface CarouselProps {
    hideSticky:boolean
    onClick():void
    selected:string
    setSelected(i:string):void
    data: any[]
}
 
const Carousel: FunctionComponent<CarouselProps> = (props:CarouselProps) => {

    const [thumbnail, setThumbnail] = useState<string[]>([])

    const ref = useRef(null)

    useEffect(()=>{
        // setThumbnail(importThumbnail(props.selected))
      },[])

    const onClickIndicator = (abbr:string) => {
        scrollTo(parseInt(abbr))
    }

    const onScroll = (evt:any) => {
        let diff = evt.target.scrollHeight - evt.target.scrollTop
        if(diff % evt.target.clientHeight == 0){
            // fully scrolled
            let index = props.data.length - (diff / evt.target.clientHeight)
            props.setSelected((index + 1).toString())
        }
    }

    const scrollTo = (index:Number) => {
        //@ts-ignore
        ref.current.scroll({top:ref.current.clientHeight * (index - 1),left:0,behavior:'smooth'})
    }
    
    return (        
        <div ref={ref} className="h-full snap-y snap-mandatory overflow-y-scroll snap-always scroll-smooth" onScroll={onScroll}>
        {
            props.data.map((i,index)=>(
                <section onClick={props.onClick} key={i.abbr} className={`bg-cover bg-center bg-no-repeat w-screen h-screen snap-start`} style={{backgroundImage:`url(${thumbnail[index]})`}} />
            ))
        }
        {!props.hideSticky && <Header text={props.data[parseInt(props.selected) - 1].full} location={props.data[parseInt(props.selected) - 1].location} />}
        {!props.hideSticky && <Indicators data={props.data} onClickIndicator={onClickIndicator} selected={props.selected} />}
        </div>
);
}
 
export default Carousel;