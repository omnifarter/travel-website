import { FunctionComponent } from "react";

interface HeaderProps {
    text:string
}
 
const Header: FunctionComponent<HeaderProps> = (props:HeaderProps) => {
    return (
        <div className="">
            <p className="fixed bottom-10 right-6 text-white text-xl font-semi-bold bg-slate-600/50 px-4 py-2 rounded-3xl">
                {props.text}
            </p>
        </div>
    );
}
 
export default Header;