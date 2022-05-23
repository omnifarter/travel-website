import { FunctionComponent, useState } from "react";

type Indicator = {
    abbr: string
    full: string
}

interface IndicatorsProps {
    data: Indicator[]
    selected: string
    onClickIndicator(abbr:string):void
    horizontal?: boolean
}

interface IndicatorProps {
    abbr: string
    full: string
    onClickIndicator(abbr:string):void
    isSelected: boolean
    horizontal?: boolean
}

const Indicator = (props: IndicatorProps) => {

    return(
        <div 
        onClick={()=>props.onClickIndicator(props.abbr)}
        className={`p-1 text-center whitespace-nowrap rounded-3xl ${props.horizontal ? "w-16" : ""}`} 
        >
            <p className={`text-slate-300 ${props.isSelected ? 'font-bold' : "text-slate-300/60"}`}>{props.isSelected ? props.abbr : props.abbr}</p>
        </div>
    )
}
const Indicators: FunctionComponent<IndicatorsProps> = (props:IndicatorsProps) => {

    return (
        <div className={`flex ${props.horizontal ? "flex-row justify-around items-center font-bold":"flex-col w-8 fixed left-6 top-6 "}  bg-slate-600/50 rounded-3xl  h-fit`}>
            {
                props.horizontal &&
                <p className='text-white/50 leading-none h-4'>Day</p>
            }
            {
                props.data.map(i => <Indicator key={i.abbr} {...i} onClickIndicator={props.onClickIndicator} isSelected={props.selected === i.abbr} horizontal={props.horizontal}/>)
            }
        </div>
    );
}
 
export default Indicators;