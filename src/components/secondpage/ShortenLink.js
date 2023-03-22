function ShortenLink(props) {
  const { shortenLink } = props
  return (
    <div className="mt-10 bg-white mobile:w-[336.98px] desktop:w-[1110px] mobile:h-[155px] desktop:h-[72px] rounded-md flex mobile:flex-col desktop:flex-row mobile:items-start desktop:px-8 desktop:items-center mobile:justify-center desktop:justify-between">
      <h1 className=" h-10 mobile:px-4 desktop:px-0 flex items-center">
        {shortenLink.oldLink}
      </h1>
      <hr className="h-1 w-full desktop:hidden" />
      <div className="flex mobile:px-4 desktop:px-0 w-full desktop:w-fit mobile:flex-col desktop:flex-row mobile:gap-2 desktop:gap-[25px]">
        <a href="/" className="text-cyan h-10 flex items-center">
          {shortenLink.newLink}
        </a>
        <button className="bg-cyan hover:bg-[#A7E2E3] mobile:w-full desktop:w-[103px] h-10 text-white font-bold rounded-md">
          Copy
        </button>
      </div>
    </div>
  )
}

export default ShortenLink
