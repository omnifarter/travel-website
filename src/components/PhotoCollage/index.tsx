import React, { FunctionComponent, useState } from "react";
import { useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import { data, importImages } from "../../helpers/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';
import {IoMdClose} from "react-icons/io"

  interface PhotoCollageProps {
      day:string
      isMobile:boolean
  }
   
  const PhotoCollage: FunctionComponent<PhotoCollageProps> = (props:PhotoCollageProps) => {
      const [photos, setPhotos] = useState<any[]>([])
      const [open, setOpen] = useState(false)
      const [selected, setSelected] = useState(0)

      useEffect(()=>{
        setPhotos(importImages(data.length))
        console.log(importImages(data.length))
      },[])

      const requestClose = () => {
          setOpen(false)
      }

      const requestOpen = (index:number) => {
        setSelected(index)
        setOpen(true)
      }
      return (
          <>
            {photos.map((photoDay,i)=><div className={`${i == parseInt(props.day) - 1 ? "flex opacity-1" : "hidden opacity-0"} flex-col w-full flex-auto min-h-0 animate-fadein`}>
              <div className='flex flex-auto min-h-0'>
                {photoDay.map((photo:any,i:number)=> i<2 && (
                <div key={i} className='flex bg-black min-h-0 flex-auto' onClick={()=>requestOpen(i)}>
                    <img className={`w-full h-auto object-cover border-2 ${i==1 ? 'rounded-tr-lg' :'rounded-tl-lg'}`} src={photo.source}/>
                </div>))}
              </div>
              <div className='flex flex-auto min-h-0'>
                {photoDay.map((photo:any,i:number)=> (i>1 && i<4) && (
                <div key={i} className='flex bg-black min-h-0 flex-auto' onClick={()=>requestOpen(i)}>
                    <img className={`w-full h-auto object-cover border-2 ${i==2 ? 'rounded-bl-lg' :''}`} src={photo.source} />
                </div>))}
                {photoDay.length >= 5 && (
                <div className='flex bg-black relative min-h-0 flex-auto border-2 rounded-br-lg' onClick={()=>requestOpen(4)}>
                    <img className="w-full h-auto object-cover brightness-50 rounded-br-lg" src={photoDay[4].source} />
                    <p className='text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>+{photoDay.length-4}</p>
                </div>)}
              </div>
            </div>)}
            <Modal
                closeTimeoutMS={200}
                ariaHideApp={false}
                isOpen={open}
                onRequestClose={requestClose}
                style={{
                  content:{
                    backgroundColor:'rgba(0, 0, 0)',
                    borderRadius:'1rem',
                    border:0,
                    overflow:'hidden',
                    top: props.isMobile ? '16px' : '80px',
                    left: props.isMobile ? '16px' : '80px',
                    right: props.isMobile ? '16px' : '80px',
                    bottom: props.isMobile ? '16px' : '80px',              
                  },
                  overlay:{
                    backgroundColor:'rgba(0, 0, 0, 0.5)',
                    zIndex:10,
                  }
                }}
            >
            <IoMdClose className='absolute right-5 z-50' size="48px" fill='white' onClick={requestClose} />
            {photos.length!=0 &&<Carousel 
            showThumbs={false} 
            showStatus={false}
            selectedItem={selected} 
            >
              {photos[parseInt(props.day) - 1].map((photo:any,i:any)=> <div className={`h-[80vh] w-auto bg-transparent`} key={i}><img className="h-full object-scale-down" src={photo.source} /></div>)}
              </Carousel>
            }
            </Modal>
          </>
      );
  }
   
  export default PhotoCollage;