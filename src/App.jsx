import React from 'react'
import styles from './style'

import { Navbar, Hero, Stats,Business,Billing ,CardDeal ,Testimonials ,Clients ,CTA ,Footer} from './Components'

const App = () => {
  return (
    <div className='w-full bg-primary overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
                <Navbar/>
          </div>
      </div>

      <div className={` bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
                <Hero/>
          </div>
      </div>

      <div className={` bg-primary ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
                <Stats/>
                <Business/>
                <Billing />
                <CardDeal />
                <Testimonials/> 
                <Clients />
                <CTA/>
                <Footer/>
          </div>
      </div>
    </div>
  )
}

export default App
