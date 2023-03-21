import Input from '../components/secondpage/Input'
import ThreeCards from '../components/secondpage/ThreeCards'

function SecondPage() {
  return (
    <section className="relative bg-[#F0F1F6] flex flex-col items-center px-6 pt-[84px]">
      <Input />
      {
        <div className="mt-10 bg-white mobile:w-[336.98px] desktop:w-[1110px] mobile:h-[155px] desktop:h-[72px] rounded-md flex mobile:flex-col desktop:flex-row mobile:items-start desktop:px-8 desktop:items-center mobile:justify-center desktop:justify-between">
          <h1 className=" h-10 mobile:px-4 desktop:px-0 flex items-center">
            Hellooooooooooooooooooooooooooo
          </h1>
          <hr className="h-1 w-full desktop:hidden" />
          <div className="flex mobile:px-4 desktop:px-0 w-full desktop:w-fit mobile:flex-col desktop:flex-row mobile:gap-2 desktop:gap-[25px]">
            <a href="/" className="text-cyan h-10 flex items-center">
              CopyCopyCopyCopyCopy
            </a>
            <button className="bg-cyan hover:bg-[#A7E2E3] mobile:w-full desktop:w-[103px] h-10 text-white font-bold rounded-md">
              Copy
            </button>
          </div>
        </div>
      }
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
