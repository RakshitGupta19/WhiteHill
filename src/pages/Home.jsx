import React from 'react'
import ReadMore from '../components/home/ReadMore'
import BrandSlider from '../components/home/BrandSlider'
import RiceVariety from '../components/home/RiceVariety'
import CertificationSlider from '../components/home/CertificationSlider'
import Countries from '../components/ourbrands/Countries'
import Parallax from '../components/home/Parallax'
import WeServe from '../components/home/WeServe'
import Banner from '../common/banner/Banner'

export default function Home() {
  return (
    <div>
        <Banner />
        <ReadMore />
        <BrandSlider />
        <RiceVariety />
        <WeServe />
        <Parallax />
        <Countries />
        <CertificationSlider />
    </div>
  )
}
