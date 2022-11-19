import Button from "./Button";
const CardBody = ({title, text, url}) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{title }</h5>
      <p>{text}</p>
      <Button url={url} />
    </div>
  );
};
export default CardBody;
