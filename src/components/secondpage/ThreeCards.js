import Card from './Card'

function ThreeCards() {
  return (
    <div className="relative mobile:h-[1046px] desktop:w-[1110px] desktop:h-[400px] flex justify-center items-center mobile:mb-10 desktop:mb-[120px]">
      <div className="mobile:hidden desktop:block z-10 absolute bg-cyan w-[730px] h-2"></div>
      <div className="mobile:block desktop:hidden z-10 absolute bg-cyan w-2 h-[730px]"></div>
      <div className="z-20 flex mobile:flex-col desktop:flex-row mobile:gap-[92px] desktop:gap-0 ">
        <div className="desktop:absolute top-[45px] left-0">
          <Card
            alt="Brand Recognition"
            src="images/icons/icon-brand-recognition.svg"
            heading="Brand Recognition"
            content="Boost your brand recognition with each click. Generic link don't mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <div className="desktop:absolute top-[88px] left-[380px]">
          <Card
            alt="Detailed Records"
            src="images/icons/icon-detailed-records.svg"
            heading="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage whit your content helps inform better decisions."
          />
        </div>
        <div className="desktop:absolute bottom-0 right-0">
          <Card
            alt="Fully Customizable"
            src="images/icons/icon-fully-customizable.svg"
            heading="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagment."
          />
        </div>
      </div>
    </div>
  )
}

export default ThreeCards
