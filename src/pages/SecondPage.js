import Input from '../components/secondpage/Input'
import ThreeCards from '../components/secondpage/ThreeCards'

function SecondPage() {
  return (
    <section className="relative bg-[#F0F1F6] flex flex-col items-center px-6 pt-[84px]">
      <Input />
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
