function Card(props) {
  const { alt, src, heading, content } = props
  return (
    <div className="relative bg-white min-w-[327px] max-w-[350px] h-[267px] pt-[80px] px-[32px] rounded-md flex flex-col mobile:items-center desktop:items-start">
      <div className="absolute top-[-43px] bg-darkViolet w-[88px] h-[88px] rounded-full flex justify-center items-center">
        <img alt={alt} src={src} />
      </div>
      <h1 className="font-bold text-[22px] mb-3">{heading}</h1>
      <p className="text-greyishViolet text-[15px] leading-[26px] mobile:text-center desktop:text-start">
        {content}
      </p>
    </div>
  )
}

export default Card
