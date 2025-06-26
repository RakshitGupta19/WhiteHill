import React from 'react'
import ContactCards from '../components/contactus/ContactCards'
import ContactForm from '../components/contactus/ContactForm'
import ContactMap from '../components/contactus/ContactMap'
import Banner from '../common/banner/Banner'

export default function Contact() {
  return (
    <div>
        <Banner />
        <ContactCards />
        <ContactForm />
        <ContactMap />
    </div>
  )
}
