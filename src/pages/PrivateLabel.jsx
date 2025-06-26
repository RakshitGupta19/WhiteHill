import React from 'react'
import WhyChooseUs from '../components/privatelabel/WhyChooseUs'
import GetStarted from '../components/privatelabel/GetStarted'
import HowItWorks from '../components/privatelabel/HowItWorks'
import Banner from '../common/banner/Banner'

export default function PrivateLabel() {
  return (
    <div>
        <Banner />
        <WhyChooseUs />
        <HowItWorks />
        <GetStarted />
    </div>
  )
}
