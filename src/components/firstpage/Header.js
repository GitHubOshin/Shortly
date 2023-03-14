import { useState } from 'react'

function Header() {
  const [isMenuOpening, setIsMenuOpening] = useState(false)

  function MenuDesktop(props) {
    return (
      <a className="text-greyishViolet hover:text-black" href={props.link}>
        {props.menu}
      </a>
    )
  }

  function MenuMobile(props) {
    return (
      <a className="text-white" href={props.link}>
        {props.menu}
      </a>
    )
  }

  function SignUp() {
    return (
      <button className="bg-cyan hover:bg-[#A7E2E3] mobile:w-full desktop:w-[103px] h-10 rounded-3xl text-white">
        Sign Up
      </button>
    )
  }

  return (
    <section className="w-full h-full min-w-[327px] min-h-[96px] max-w-[1110px] max-h-[136px] flex flex-col items-center">
      <div className="w-full h-full flex justify-between mobile:py-[31.5px] desktop:py-[51.5px]">
        <div className="flex items-center gap-[46px]">
          <img alt="Logo" src="images/logo.svg" />
          <div className="mobile:hidden flex gap-[32px] ">
            <MenuDesktop link="" menu="Features" />
            <MenuDesktop link="" menu="Pricing" />
            <MenuDesktop link="" menu="Resoures" />
          </div>
        </div>
        <div className="mobile:hidden desktop:block flex items-center gap-[6px]">
          <button className="w-[103px]">
            <MenuDesktop link="" menu="Login" />
          </button>
          <SignUp />
        </div>
        <button
          className="desktop:hidden"
          onClick={() => setIsMenuOpening(!isMenuOpening)}
        >
          <img alt="Menu button" src="images/menu-btn.svg" />
        </button>
      </div>
      {isMenuOpening === true ? (
        <div className="desktop:hidden bg-darkViolet w-[327px] h-[383px] rounded-xl flex flex-col text-center px-6 py-10">
          <div className="flex flex-col gap-8">
            <MenuMobile link="" menu="Features" />
            <MenuMobile link="" menu="Pricing" />
            <MenuMobile link="" menu="Resoures" />
          </div>
          <hr className=" my-9 w-full" />
          <div className="flex flex-col gap-6">
            <MenuMobile link="" menu="Login" />
            <SignUp />
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Header
