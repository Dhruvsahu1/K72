import React, { useContext, useEffect, useRef } from 'react'
import { TransitionContext } from '../../components/common/Stairs'

const Video = ({ className = 'block h-full w-full object-cover', src = '/video/83c745cf.mp4', loop = true, muted = true, playsInline = false }) => {
  const { isTransitioning } = useContext(TransitionContext)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isTransitioning && videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {})
      }
    } else if (isTransitioning && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isTransitioning])

  return (
      <video ref={videoRef} className={className} loop={loop} muted={muted} playsInline={playsInline} src={src}></video>
  )
}

export default Video
