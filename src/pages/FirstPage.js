import { useState } from 'react'
import Header from '../components/firstpage/Header'
import TwoItems from '../components/firstpage/TwoItems'
import MenuMobile from '../components/firstpage/MenuMobile'

function FirstPage() {
  const [isMenuOpening, setIsMenuOpening] = useState(false)

  return (
    <section className="flex flex-col items-center">
      <Header
        isMenuOpening={isMenuOpening}
        setIsMenuOpening={setIsMenuOpening}
      />
      {isMenuOpening === true ? <MenuMobile /> : null}
      <TwoItems isMenuOpening={isMenuOpening} />
    </section>
  )
}

export default FirstPage
