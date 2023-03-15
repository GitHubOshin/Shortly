function Card(props) {
  const { alt, src, heading, content } = props
  return (
    <div>
      <div>
        <img alt={alt} src={src} />
      </div>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Card
