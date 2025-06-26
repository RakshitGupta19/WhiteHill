import React from 'react'
import BasmatiRiceComponent from '../components/aboutus/BasmatiRiceComponent'
import MoreInformation from '../components/aboutus/MoreInformation'
import QuoteBanner from '../components/aboutus/QuoteBanner'
import BrandSlider from '../components/aboutus/BrandSlider'
import Banner from '../common/banner/Banner'

export default function About() {
  return (
    <div>
        <Banner />
        <BasmatiRiceComponent />
        <MoreInformation/>
        <QuoteBanner />
        <BrandSlider />
    </div>
  )
}
