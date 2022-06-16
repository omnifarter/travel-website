import { FunctionComponent } from "react";
import CountUp from "react-countup";
import {data} from '../../helpers/data'
interface SummaryProps {
    
}
 
const Summary: FunctionComponent<SummaryProps> = () => {
    return (
        <div className='h-screen mt-64'>
            <h1 className='text-2xl mb-24'>Summary</h1>
            <div className='flex w-full text-center'>
                <div className='flex-1'>
                    <CountUp end={data.summary.countries} className='font-bold text-5xl' duration={1} />
                    <h3 className='text-neutral-600 text-lg mt-2'>
                        Countries
                    </h3>
                </div>
                {/* <div className='flex-1'>
                    <CountUp end={data.summary.cities} className='font-bold text-5xl' duration={1} />
                    <h3 className='text-neutral-600 text-lg mt-2'>
                        Cities
                    </h3>
                </div> */}
                <div className='flex-1'>
                    <CountUp end={data.summary.places} className='font-bold text-5xl' duration={1} />
                    <h3 className='text-neutral-600 text-lg mt-2'>
                        Places
                    </h3>
                </div>
            </div>
        </div>
    );
}
 
export default Summary;