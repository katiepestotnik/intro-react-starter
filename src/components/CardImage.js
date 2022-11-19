const CardImage = (props) => {
    return (
        <img
        src={props.img}
        className="card-img-top"
        alt={props.title}
          />
    )
}
export default CardImage