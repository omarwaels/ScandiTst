import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Categoryform from './categoryForm';
import axios from 'axios';
function Addform() {
    const [active , setActive ] = useState("sizeForm");
    let [inputs ,setinputs] = useState({});

    function getvalue(value){
        inputs = {
            ...inputs,
            ...value
        };
        
    }

    const handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values =>({...values , [name] :value}));


    //     const SKU = event.target.sku ; 
    //     const NAME = event.target.name ; 
    //     const PRICE = event.target.price ; 
    //     if(active == 'sizeForm'){
    //         const size = event.target.size;
    //         setinputs(values=> )
    //     }
    //     if(active == 'dimensionForm'){
    //         const HEIGHT = event.target.height;
    //         const WIDTH = event.target.Width;
    //         const LENGTH = event.target.Length;
    //     }
    //     const WEIGHT = event.target.weight;
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(inputs);

    }
  return (
    <Form className='container mt-3' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SKU</Form.Label>
        <Form.Control  placeholder="Enter email" name='sku' onChange={handleChange} required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label>
        <Form.Control  placeholder="Enter email" name='name'onChange={handleChange} required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PRICE</Form.Label>
        <Form.Control  placeholder="Enter email" name='price'onChange={handleChange} required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

 
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Form.Group className="mb-3">

      <label for="categories">Choose detail type : </label>

        <select name="categories" id="categories" onChange={e =>setActive(e.target.value) }>
        <option value="sizeForm">Size</option>
        <option value="dimensionForm">Dimension</option>
        <option value="weightForm">Weight</option>
        
        </select>
        {active === 'sizeForm' && <Categoryform type = 'size' inputs={inputs} getvalue = {getvalue}/ > }
        {active === 'dimensionForm' && <Categoryform type = 'dimension'inputs={inputs} getvalue = {getvalue}/> }
        {active === 'weightForm' && <Categoryform type = 'weight'inputs={inputs} getvalue = {getvalue}/> }
        </Form.Group>



      <Button variant="primary" type="submit">
        Submit
      </Button>



    </Form>
  );
}

export default Addform;