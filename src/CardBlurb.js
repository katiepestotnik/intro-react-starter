import cardData from "./cardData"
const CardBlurb = () => {
    return (
        <p className="card-text">
            {cardData[0].text}
      </p>
    )
}
export default CardBlurb