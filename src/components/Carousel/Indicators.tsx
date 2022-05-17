import { FunctionComponent, useState } from "react";

type Indicator = {
    abbr: string
    full: string
}

interface IndicatorsProps {
    data: Indicator[]
    selected: string
    onClickIndicator(abbr:string):void
}

interface IndicatorProps {
    abbr: string
    full: string
    onClickIndicator(abbr:string):void
    isSelected: boolean
}

const Indicator = (props: IndicatorProps) => {

    return(
        <div 
        onClick={()=>props.onClickIndicator(props.abbr)}
        className={`p-1 text-center whitespace-nowrap rounded-3xl`} 
        >
            <p className={`text-slate-300 ${props.isSelected ? 'font-bold' : "text-slate-300/60"}`}>{props.isSelected ? props.abbr : props.abbr}</p>
        </div>
    )
}
const Indicators: FunctionComponent<IndicatorsProps> = (props:IndicatorsProps) => {

    return (
        <div className='flex flex-col w-8 z-10 absolute bg-slate-600/50 rounded-3xl top-2 left-4 h-fit'>
            {
                props.data.map(i => <Indicator key={i.abbr} {...i} onClickIndicator={props.onClickIndicator} isSelected={props.selected === i.abbr}/>)
            }
        </div>
    );
}
 
export default Indicators;