import { useState } from 'react'
import { CHARS, HASH_LENGTH } from '../components/crashs'
import Input from '../components/secondpage/Input'
import ShortenLink from '../components/secondpage/ShortenLink'
import ThreeCards from '../components/secondpage/ThreeCards'

function SecondPage() {
  const [inputLink, setInputLink] = useState('')
  const [shortenLink, setShortenLink] = useState([])

  function handleCreateShortenLink(old) {
    const shortLink = `https://reLink/${hashShortlyURL()}`
    setShortenLink([...shortenLink, { oldLink: old, newLink: shortLink }])
  }

  function hashShortlyURL() {
    const hash = Array.from({ length: HASH_LENGTH }, (_item, index) => {
      const randomNumber = Math.floor(Math.random() * CHARS.length)
      return CHARS[randomNumber]
    })
    return hash.join('')
  }

  return (
    <section className="relative bg-[#F0F1F6] flex flex-col items-center px-6 pt-[84px]">
      <Input
        inputLink={inputLink}
        setInputLink={setInputLink}
        handleCreateShortenLink={handleCreateShortenLink}
      />
      {shortenLink.map((item, index) => {
        return <ShortenLink shortenLink={item} key={index} />
      })}
      <div className="text-center min-w-[289px] max-w-[515px] mobile:mb-[47px] desktop:mb-[57px] mt-20">
        <h1 className="font-bold mobile:text-2xl desktop:text-4xl mb-5">
          Advanced Statistics
        </h1>
        <p className="text-greyishViolet text-lg">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <ThreeCards />
    </section>
  )
}

export default SecondPage
