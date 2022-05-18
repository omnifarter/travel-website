import { useEffect, useRef } from "react"

import lottie from "lottie-web"

import animationData from '../../assets/9844-loading-40-paperplane.json'

const Loader = () => {
  const element = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<any>()

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
      })
    }
  }, [])

  return <div className="w-screen h-screen flex flex-col justify-center">
  <div className='relative bottom-20' ref={element} />
  <p className='text-white text-xl text-center relative bottom-32'>Bringing you to France...</p>
  </div>
}

export default Loader