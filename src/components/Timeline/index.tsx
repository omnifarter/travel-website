import { FunctionComponent } from "react";
import { data } from "../../helpers/data";
import Summary from "./Summary";

interface TimelineProps {
    
}
 
const Timeline: FunctionComponent<TimelineProps> = () => {
    console.log(data.timeline[0].date)
    return (
        <div className='px-20'>
            <Summary />
            <ol className="relative border-l-2 border-gray-300">                  
            {data.timeline.map((trip)=>(
                <li key={trip.title} className='mb-12 ml-4 w-[600px] p-2'>
                    <div className="absolute w-5 h-5 rounded-full -left-2.5 border border-white bg-gray-300"></div>
                    <h5 className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">{trip.date + ' - ' + trip.duration}</h5>
                    <h3 className="text-3xl font-semibold text-gray-900">{trip.title}</h3>
                    <img src={trip.image} className="w-full rounded-md" />
                    <p className='text-gray-500'>{trip.places.reduce((previousValue, currentValue)=>(currentValue + ' • ' + previousValue))}</p>
                </li>
            ))}
            </ol>
        </div>
    );
}
 
export default Timeline;