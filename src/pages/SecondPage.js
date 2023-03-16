import Input from '../components/secondpage/Input'
import ThreeCards from '../components/secondpage/ThreeCards'

function SecondPage() {
  return (
    <section className="relative bg-[#F0F1F6] flex flex-col items-center px-6 pt-[84px]">
      <Input />
      <div className="mt-6 w-[1110px] flex flex-col gap-4">
        <div className="bg-white h-[72px] rounded-md px-8 flex justify-between items-center py-4">
          <h1>Hellooooooooooo</h1>
          <div className="h-full flex items-center gap-6">
            <a href="/" className="text-cyan">
              CopyCopyCopyCopyCopy
            </a>
            <button className="bg-cyan hover:bg-[#A7E2E3] w-[103px] h-full text-white font-bold rounded-md">
              Copy
            </button>
          </div>
        </div>
      </div>
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
