function Header(props) {
  const { isMenuOpening, setIsMenuOpening } = props

  function MenuDesktop(props) {
    return (
      <a className="text-greyishViolet hover:text-black" href={props.link}>
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
          <div className="mobile:hidden desktop:flex gap-2 ">
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
    </section>
  )
}

export default Header
