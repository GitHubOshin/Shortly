import { useState } from 'react'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'
import Pinterest from './icons/PinterestIcon'
import TwitterIcon from './icons/TwitterIcon'

function SocialMedia() {
  const [icons, setIcons] = useState({
    fb: false,
    tw: false,
    pt: false,
    ig: false
  })

  function handleHoverIcons(icon) {
    setIcons({
      ...icons,
      [icon]: !icons[icon]
    })
  }

  return (
    <div>
      <button
        onMouseEnter={() => handleHoverIcons('fb')}
        onMouseLeave={() => handleHoverIcons('fb')}
      >
        <FacebookIcon fill={icons.fb ? 'white' : 'hsl(180, 66%, 49%)'} />
      </button>
      <button
        onMouseEnter={() => handleHoverIcons('tw')}
        onMouseLeave={() => handleHoverIcons('tw')}
      >
        <TwitterIcon fill={icons.tw ? 'white' : 'hsl(180, 66%, 49%)'} />
      </button>
      <button
        onMouseEnter={() => handleHoverIcons('pt')}
        onMouseLeave={() => handleHoverIcons('pt')}
      >
        <Pinterest fill={icons.pt ? 'white' : 'hsl(180, 66%, 49%)'} />
      </button>
      <button
        onMouseEnter={() => handleHoverIcons('ig')}
        onMouseLeave={() => handleHoverIcons('ig')}
      >
        <InstagramIcon fill={icons.ig ? 'white' : 'hsl(180, 66%, 49%)'} />
      </button>
    </div>
  )
}

export default SocialMedia
