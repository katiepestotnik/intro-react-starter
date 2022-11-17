import Button from "./Button"
import CardBlurb from "./CardBlurb"
const CardBody = () => {
    return (
        <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <CardBlurb/>
        <Button/>
      </div>
    )
}
export default CardBody