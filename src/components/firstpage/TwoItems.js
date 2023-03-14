function TwoItems() {
  function GetStartedBtn() {
    return (
      <button className="bg-cyan hover:bg-[#A7E2E3] w-[197px] h-[56px] rounded-full text-white">
        Get Started
      </button>
    )
  }

  return (
    <section className=" mt-[30px] mb-[152px] w-full min-w-[342px] max-w-[1110px] mobile:flex mobile:flex-col-reverse desktop:grid desktop:grid-cols-2 items-center">
      <div className="mobile:flex mobile:flex-col mobile:items-center desktop:items-start mobile:mt-[45px] desktop:mt-0">
        <h1 className="font-bold mobile:mb-5 desktop:mb-0 mobile:text-[40px] mobile:text-center desktop:text-left desktop:text-[67px] mobile:leading-[47px] desktop:leading-[77px]">
          More than just
          <br />
          shorter links
        </h1>
        <p className="text-greyishViolet text-[19.6px] leading-8 mobile:mb-8 desktop:mb-10 mobile:text-center desktop:text-left">
          Build your brand's recognition and
          <br className="desktop:hidden" />
          get detailed
          <br className="mobile:hidden desktop:block" />
          insignts on now your
          <br className="desktop:hidden" />
          links are performing.
        </p>
        <GetStartedBtn />
      </div>
      <img alt="Illustration working" src="images/illustration-working.svg" />
    </section>
  )
}

export default TwoItems
