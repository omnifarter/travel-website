import dayjs from "dayjs";
import { url } from "inspector";

export const data = {
    summary:{
        countries: 12,
        places: 12
    },
    timeline:[
        {
            date:"30th April 2022",
            title:"France Pre-Graduation Trip",
            duration:"14 days",
            places:[
                "Paris",
                "Reims",
                "Tours",
                "Bordeaux",
                "Arcachon",
                "Dordogne Valley",
                "Clermont-Ferrand",
                "Annecy",
                "Chamonix",
                "Nice"
            ],
            image:'https://storage.googleapis.com/omnifarter-travel/france.jpg',
            transport:["DRIVE","TRAIN","PLANE","BUS"]
        },
    ]
}
export const mapboxInitialViewState = {
    latitude: 46.733917318226105,
    longitude:2.5424071031964104,
    zoom:5.394351247727393
}
export const geojson = {
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };
  
// export const importImages = (days:number):any[] => {
//     let images:any[][] = [];
//     let r = require.context(`../assets/images`, true)
//     for (let day = 0; day < days; day++) {
//         let rFilter = r.keys().filter((value)=>value.toString().includes(`/day${day + 1}/`))
//         let tempArray:any = []
//         //@ts-ignore
//         rFilter.map((item, index) => { tempArray.push({source:r(item)}); });
//         images.push(tempArray)
//     }
    
//     return images;
// }
 
// export const importThumbnail = (day:string):string[] => {
//     let images:any[] = [];
//     let r = require.context(`../assets/images`, true)
//     let rFilter = r.keys().filter((value)=>value.toString().includes(`thumbnail`))
//     rFilter.sort((a,b)=>{
//         //@ts-ignore
//         return (parseInt(a.match(/(\d+)/)[0]) < parseInt(b.match(/(\d+)/)[0]) ? -1 : 1)
//     })
//     rFilter.map((item, index) => { images.push(r(item)); });
//     console.log(images)
//     // images.sort((a,b)=>)
//     return images;
// }