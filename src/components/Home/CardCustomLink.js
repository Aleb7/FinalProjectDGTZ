//componente per la creazioni delle card nella Home, preso da CodePen

const CardCustomLink = (props) => {
  return (
    <>
      <a href={props.href}>
        <figure>
          <img {...props} src={props.src}
            alt={props.alt} />
          <figcaption>{props.label}</figcaption>
        </figure>
      </a>
    </>
  )
}
export default CardCustomLink;