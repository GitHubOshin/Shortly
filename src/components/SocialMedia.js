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
    <div className="flex gap-6">
      <button
        onMouseEnter={() => handleHoverIcons('fb')}
        onMouseLeave={() => handleHoverIcons('fb')}
      >
        <FacebookIcon fill={icons.fb ? 'hsl(180, 66%, 49%)' : 'white'} />
      </button>
      <button
        onMouseEnter={() => handleHoverIcons('tw')}
        onMouseLeave={() => handleHoverIcons('tw')}
      >
        <TwitterIcon fill={icons.tw ? 'hsl(180, 66%, 49%)' : 'white'} />
      </button>
      <button
        onMouseEnter={() => handleHoverIcons('pt')}
        onMouseLeave={() => handleHoverIcons('pt')}
      >
        <Pinterest fill={icons.pt ? 'hsl(180, 66%, 49%)' : 'white'} />
      </button>
      <button
        onMouseEnter={() => handleHoverIcons('ig')}
        onMouseLeave={() => handleHoverIcons('ig')}
      >
        <InstagramIcon fill={icons.ig ? 'hsl(180, 66%, 49%)' : 'white'} />
      </button>
    </div>
  )
}

export default SocialMedia
