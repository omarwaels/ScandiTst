import Card from 'react-bootstrap/Card';
import { useContext , createContext } from 'react';
import {RemoveContext} from '../Productcontext'
function ProductCard(props) {

  
  const {handlecheckbutton} = useContext(RemoveContext);
  

 function handleRemove(event){
  
  handlecheckbutton(event.target.value);
 }

  
  return (
    <Card style={{ width: '18rem' }} className='col-3 m-3' >
      <Card.Body>
        <Card.Title>{props.product.SKU.toString(16)} <input type="checkbox" onChange={handleRemove} style={{marginLeft:'100%'}} value={props.product.SKU}></input></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.product.name}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.product.price} $</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.product.type_value_id == '1'? 'Width':null} </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.product.type_value_id == '2'? 'Weight':null} </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.product.type_value_id == '3'? 'Dimension':null} </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;