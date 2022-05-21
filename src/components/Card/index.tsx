import { FunctionComponent } from "react";

interface CardProps {
    children:any
    className?:string
}
 
const Card: FunctionComponent<CardProps> = (props:CardProps) => {
    return (
        <div className={'bg-slate-600 rounded-lg p-8 ' + props.className}>
            {props.children}
        </div>
    );
}
 
export default Card;