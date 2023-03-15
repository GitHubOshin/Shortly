function LastPage() {
  function FooterLinks(props) {
    const { array, title } = props

    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold">{title}</h1>
        <ul className="flex flex-col gap-3">
          {array.map((item, index) => {
            return (
              <li
                key={index}
                className="text-grey hover:text-cyan cursor-pointer"
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  function BtnImg(props) {
    const { alt, src } = props
    return (
      <button>
        <img alt={alt} src={src} />
      </button>
    )
  }

  return (
    <section className="bg-pink-300 mobile:h-[1076px] desktop:h-[560px]">
      <div className="relative w-full h-full max-h-[300px] desktop:h-[250px] flex justify-center items-center">
        <img
          alt="Background"
          src="images/backgrounds/bg-boost-desktop.svg"
          className="absolute mobile:hidden desktop:block min-w-[1440px] bg-darkViolet"
        />
        <img
          alt="Background"
          src="images/backgrounds/bg-boost-mobile.svg"
          className="absolute desktop:hidden w-full min-w-[375px] max-h-[300px] bg-darkViolet"
        />
        <div className="absolute flex flex-col items-center mobile:gap-4 desktop:gap-10">
          <h1 className="text-white font-bold mobile:text-2xl desktop:text-4xl">
            Boost your links today
          </h1>
          <button className=" bg-cyan hover:bg-[#A7E2E3] w-[197px] h-[56px] rounded-full text-white font-bold tracking-[0.02em]">
            Get Started
          </button>
        </div>
      </div>

      <footer className="bg-[#232027] w-full mobile:h-[774px] desktop:h-[310px] flex flex-col justify-center items-center mobile:text-center desktop:text-start">
        <div className=" w-full max-w-[1110px] flex mobile:flex-col desktop:flex-row justify-between mobile:items-center  desktop:items-start mobile:gap-12 desktop:gap-0">
          <img alt="Shortly logo" src="images/logo-white.svg" />
          <div className="flex mobile:flex-col desktop:flex-row mobile:gap-11 desktop:gap-[100px] mobile:items-center desktop:items-start">
            <div className="flex mobile:flex-col desktop:flex-row mobile:gap-9 desktop:gap-[75px]">
              <FooterLinks
                title="Features"
                array={['Link Shortening', 'Branded Links', 'Analytics']}
              />
              <FooterLinks
                title="Resources"
                array={['Blog', 'Developers', 'Support']}
              />
              <FooterLinks
                title="Company"
                array={['About', 'Our Team', 'Careers', 'Contact']}
              />
            </div>
            <div className="flex gap-6">
              <BtnImg alt="Facebook" src={'images/icons/icon-facebook.svg'} />
              <BtnImg alt="Twitter" src="images/icons/icon-twitter.svg" />
              <BtnImg alt="Pinterest" src="images/icons/icon-pinterest.svg" />
              <BtnImg alt="Instagram" src="images/icons/icon-instagram.svg" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default LastPage
