function Input(props) {
  const { inputLink, setInputLink } = props
  return (
    <div className="absolute w-full top-[0px] flex justify-center items-center">
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
      <div className="absolute mobile:w-[336.98px] mobile:h-[182px] desktop:w-full desktop:h-fit flex mobile:flex-col desktop:flex-row justify-center items-center gap-[24px]">
        <input
          className="w-full mobile:h-[48px] mobile:w-[280px] desktop:w-[769px] desktop:h-[64px] rounded-lg mobile:px-3 desktop:px-[30px] text-xl"
          placeholder="Shorten a link here..."
          value={inputLink}
          onChange={(e) => setInputLink(e.target.value)}
        />
        <button className="bg-cyan hover:bg-[#A7E2E3] text-white disabled:none mobile:h-[48px] desktop:h-[64px] mobile:w-[279px] desktop:w-[188px] rounded-lg text-xl font-bold">
          Shorten It!
        </button>
      </div>
    </div>
  )
}

export default Input
