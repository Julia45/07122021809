import React, { useState } from 'react'
import ServiceItem from '../TableOfServices/ServiceItem/ServiceItem'

import './TableOfServices.css'

function TableOfServices() {
  const [services] = useState([
    { title: 'Ручное бронирование', value: 11, color: '#b1e19b' },
    { title: 'Пакетные туры', value: 3, color: '#ace2f8' },
    { title: 'Отели', value: 1, color: '#ace2f8' },
  ])

  const total = services.reduce((currentValue, service) => currentValue + service.value, 0)

  return (
    <div className="ServicesTable">
      <div className="Services">Услуги</div>
      <hr />

      {services.map((service, index) => (
        <div className="ServiceItemContainer" key={index}>
          <ServiceItem
            backgroundColor={service.color}
            width={(service.value / total * 100).toFixed(2)}
            serviceName={service.title}
          />
          <div className="ServiceNum">{service.value}</div>
        </div>
      ))}
      <hr />
      <div className="AllServicesContainer">
        <div className="AllServices">Всего</div>
        <div className="CalculatedSum">{total}</div>
      </div>
    </div>
  )
}

export default TableOfServices