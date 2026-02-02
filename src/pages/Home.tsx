import Hero from '../components/Hero'
import WhyPeppyGold from '../components/WhyPeppyGold'
import HowItHelps from '../components/HowItHelps'
import Certifications from '../components/Certifications'
import UserBenefits from '../components/UserBenefits'
import Testimonials from '../components/Testimonials'
import PartnersSay from '../components/PartnersSay'
import Partners from '../components/Partners'
// Import FAQ (Adjust path if it's in /pages/FAQ)
import FAQ from './FAQ' 

export default function Home() {
  return (
    <>
      <Hero />
      <WhyPeppyGold />
      <HowItHelps />
      <Certifications />
      <UserBenefits />
      <Testimonials />
      <PartnersSay />
      <Partners />
      {/* 1. Added FAQ here so the Navbar can find it */}
      <FAQ /> 
    </>
  )
}