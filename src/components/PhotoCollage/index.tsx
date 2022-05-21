import React, { FunctionComponent, useState } from "react";
import { useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import { importImages } from "../../helpers/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from 'react-modal';

  interface PhotoCollageProps {
      day:string
      isMobile:boolean
  }
   
  const PhotoCollage: FunctionComponent<PhotoCollageProps> = (props:PhotoCollageProps) => {
      const [photos, setPhotos] = useState<any[]>([])
      const [open, setOpen] = useState(false)
      const [selected, setSelected] = useState(0)
      useEffect(()=>{
        setPhotos(importImages(props.day))
      },[props.day])

      const requestClose = () => {
          setOpen(false)
      }

      const requestOpen = (index:number) => {
        setSelected(index)
        setOpen(true)
      }
      return (
          <>
            <div className='w-full'>
              <div className='flex flex-1'>
                {photos.map((photo,i)=> i<2 && (
                <div key={i} className='bg-black' onClick={()=>requestOpen(i)}>
                    <img className="w-full h-full object-cover border-2" src={photo.source}/>
                </div>))}
              </div>
              <div className='flex flex-1'>
                {photos.map((photo,i)=> (i>1 && i<4) && (
                <div key={i} className='bg-black' onClick={()=>requestOpen(i)}>
                    <img className="w-full h-full object-cover border-2" src={photo.source} />
                </div>))}
                {photos.length >= 5 && (
                <div className='bg-black relative border-2 text-white' onClick={()=>requestOpen(4)}>
                    <img className="w-full h-full object-cover  brightness-50" src={photos[4].source} />
                    <p className='text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>+{photos.length-4}</p>
                </div>)}
              </div>
            </div>
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
                    backgroundColor:'rgba(0, 0, 0, 0.5)'
                  }
                }}
            >
            {photos.length!=0 &&<Carousel showThumbs={false} showStatus={false} selectedItem={selected}>
              {photos.map((photo,i)=> <div className={`h-[80vh] w-auto bg-transparent`} key={i}><img className="h-full object-scale-down" src={photo.source} /></div>)}
              </Carousel>
            }
            </Modal>
          </>
      );
  }
   
  export default PhotoCollage;