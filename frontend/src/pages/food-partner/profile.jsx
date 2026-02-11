import React, { useEffect, useState } from 'react'
import '../../styles/profile.css'
import axios from 'axios'

const Profile = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let mounted = true
    axios.get('/api/food/public')
      .then((res) => {
        if (!mounted) return
        setItems(res.data.foodItems || [])
      })
      .catch((err) => {
        console.error('Failed to load partner videos:', err.message)
      })
    return () => { mounted = false }
  }, [])

  // sample business info (replace with real data as needed)
  const business = {
    name: 'Business Name',
    address: '123 Main St, City',
    totalMeals: items.length,
    customersServed: '15K'
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar" aria-hidden />
          <div className="profile-info">
            <div className="profile-name-address">
              <div className="biz-name">{business.name}</div>
              <div className="biz-address">{business.address}</div>
            </div>
            <div className="profile-stats">
              <div className="stat">
                <div className="label">total meals</div>
                <div className="value">{business.totalMeals}</div>
              </div>
              <div className="stat">
                <div className="label">customers serve</div>
                <div className="value">{business.customersServed}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="video-grid">
          {items.map((it) => (
            <div className="video-thumb" key={it._id}>
              <video src={it.video} muted playsInline preload="metadata" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile