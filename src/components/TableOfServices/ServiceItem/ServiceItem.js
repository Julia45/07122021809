import React from 'react'
import "./ServiceItem.css"

function ServiceItem({ serviceName, width, backgroundColor }) {
  return (
    <div className="ServiceItemWrapper">
      <div className="ServiceItem">{serviceName}</div>
      <div style={{width: `${width}%`, backgroundColor}} className="ServiceNumber"></div>
    </div>
  )
}

export default ServiceItem