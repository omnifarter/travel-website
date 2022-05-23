import { useEffect, useRef } from "react"

import lottie from "lottie-web"

import animationData from '../../assets/9844-loading-40-paperplane.json'

interface LoaderProps {
}

const Loader = (props: LoaderProps) => {
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

  return <div className="w-screen h-screen flex flex-col items-center justify-center absolute bg-slate-800 bg-cover z-50">
  <div className={`relative max-w-lg`} ref={element} />
  <p className={`text-white text-xl text-center relative bottom-20`} >Bringing you to France...</p>
  </div>
}

export default Loader