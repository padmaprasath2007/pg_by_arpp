import heroImage from '../assets/hero/hero-image.png'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">
        {/* TEXT ON LEFT */}
        <div className="hero-left">
          <h1>Secure Your Future with the <br /> Best Gold Saving Platform</h1>
          <p className="hero-subtext">✨ We help you shine in every moment of life ✨</p>
          <p className="hero-description">
            Start saving gold digitally with trusted jewellers, zero platform
            fees, and complete transparency. Simple, secure, and smart.
          </p>
         <div className="hero-buttons">
  <button 
    className="store-btn playstore" 
    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.peppygold.user', '_blank')}
  >
    Google Play
  </button>
  
  <button 
    className="store-btn appstore" 
    onClick={() => window.open('https://apps.apple.com/us/app/peppy-gold-offers-schemes/id6755230672 ', '_blank')}
  >
    App Store
  </button>
</div>
        </div>

        {/* IMAGE ON RIGHT */}
        <div className="hero-right">
          <img src={heroImage} alt="Gold illustration" className="hero-image" />
        </div>
      </div>
    </section>
  )
}