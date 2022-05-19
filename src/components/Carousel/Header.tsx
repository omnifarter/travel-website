import { FunctionComponent } from "react";
import {FaMapMarkerAlt} from "react-icons/fa"
interface HeaderProps {
    text:string
    location:string
}
 
const Header: FunctionComponent<HeaderProps> = (props:HeaderProps) => {
    return (
        <div onClick={()=>{window.open(props.location)}} >
            <p className="flex fixed top-6 right-6 text-white text-xl font-semi-bold bg-slate-600/50 px-4 py-2 rounded-3xl">
                <FaMapMarkerAlt size="0.9em" className="mt-1 mr-1" /> {props.text}
            </p>
        </div>
    );
}
 
export default Header;