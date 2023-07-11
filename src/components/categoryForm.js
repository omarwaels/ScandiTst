import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Categoryform(props) {

    const [inputs ,setinputs] = useState({});


    const handleChange = (event)=> {


        inputs [event.target.name] = event.target.value; 
        

        props.getvalue(inputs)
    }
    if(props.type == 'size'){
        return(

    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Size</Form.Label>
        <Form.Control  placeholder="Enter email" name='size' onChange={handleChange} required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
    </>
        )
    }
    if(props.type == 'weight'){
        return(

    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>weight</Form.Label>
        <Form.Control  placeholder="Enter email" name='weight'onChange={handleChange} required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
    </>
        )
    }

  return (


    <>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Height</Form.Label>
      <Form.Control  placeholder="Enter email" name='height'onChange={handleChange} required/>
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Width</Form.Label>
      <Form.Control  placeholder="Enter email" name='Width'onChange={handleChange} required/>
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Length</Form.Label>
      <Form.Control  placeholder="Enter email" name='Length'onChange={handleChange} required/>
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>
  </>





  );
}

export default Categoryform;