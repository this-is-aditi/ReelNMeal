import React, { useEffect, useRef, useState } from 'react'
import '../../styles/reels.css'
import axios from 'axios'
import { Link } from 'react-router-dom'




const Home = () => {
    const [videos,setVideos]=useState([])
    const videoRefs=useRef(new Map())
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const videosEls = container.querySelectorAll('video')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
            video.currentTime = 0
          }
        })
      },
      { root: null, threshold: 0.75 }
    )

    videosEls.forEach((v) => observer.observe(v))

    return () => observer.disconnect()
  }, [videos])

  useEffect(()=>{
    let mounted = true
      axios.get('/api/food',{withCredentials:true})
    .then(response=>{
        if(mounted){
            setVideos(response.data.foodItems || [])
        }
    })
    .catch(err=>{
        console.error('Failed to load feed:', err.message)
    })
    return ()=>{ mounted = false }
  }, [])

  return (
    <div className="reels-container" ref={containerRef}>
      {videos.map((item) => (
        <section className="reel" key={item._id}>
          <video
            className="reel-video"
            src={item.video || item.src}
            playsInline
            muted
            loop
            preload="metadata"
          />

          <div className="reel-overlay">
            <div className="reel-description" title={item.description}>
              {item.description}
            </div>
            <Link
              className="reel-visit"
              to={`/food-partner/${item.foodPartner}`} aria-label="Visit store">
              Visit Store
            </Link>
              
            
              
          </div>
        </section>
      ))}
    </div>
  )
}

export default Home