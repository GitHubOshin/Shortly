function MobileMenu() {
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
  )
}

export default MobileMenu
