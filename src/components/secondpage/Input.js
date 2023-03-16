function Input() {
  return (
    <div className="absolute top-[-80px]">
      <div className="relative w-[1110px] h-[168px]">
        <img
          className="absolute mobile:hidden desktop:block bg-darkViolet rounded-lg"
          alt="Background"
          src="images/backgrounds/bg-shorten-desktop.svg"
        />
        <img
          className="absolute mobile:block desktop:hidden h-[182px] bg-darkViolet rounded-xl"
          alt="Background"
          src="images/backgrounds/bg-shorten-mobile.svg"
        />
        <div className="absolute w-full h-full flex justify-center items-center gap-[24px]">
          <input
            className="w-full h-full min-h-[48px] max-w-[769px] max-h-[64px] rounded-lg mobile:px-3 desktop:px-[30px] text-xl"
            placeholder="Shorten a link here..."
          />
          <button className="bg-cyan hover:bg-[#A7E2E3] text-white disabled:none h-[64px] desktop:w-[188px] rounded-lg text-xl font-bold">
            Shorten It!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
