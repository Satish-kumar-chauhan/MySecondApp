import React from 'react'

export default function PageHeading({value,icon}) {
  return (
    <h1 className="PageHeading" data-aos="fade-up" data-aos-duration="400"><span>{icon} {value}</span></h1>
  )
}
