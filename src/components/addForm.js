import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Categoryform from './categoryForm';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

function Addform() {
    const navigate  = useNavigate();
    const [active , setActive ] = useState("sizeForm");
    
    let [inputs ,setinputs] = useState({});


    function getvalue(value){
        inputs = {
            ...inputs,
            ...value
        };
        
    }

    function intCheck(checkData){
      checkData = parseInt(checkData);
      if(isNaN(checkData)){

        return false;
      }
      return true;

    }
    function stringCheck(checkData){
      if(typeof (checkData) === 'string'){
        return true;
      }
      return false;

    }
    const handleChange = (event)=> {

      inputs [event.target.name] = event.target.value;

    }



    const handleSubmit = (event)=>{
      event.preventDefault();
      console.log(inputs);
      inputs['type'] = active == 'sizeForm'? 'sizeProducts' : active == 'dimensionForm'? 'dimProducts':'weightForm';
        if(!intCheck(inputs ['sku'])  ){
          document.getElementById("errMsg").innerHTML = "&#128308; SkU must be Integer ";
          return
        }
        if(!stringCheck(inputs['name'])  ){
          document.getElementById("errMsg").innerHTML = "&#128308; Name must be string ";
          return
        }
        if( !intCheck(inputs ['price'] ) ){
          document.getElementById("errMsg").innerHTML = "&#128308; Price must be float ";
          return
        }
          if(active == 'sizeForm'){
            if(!intCheck(inputs ['size']) ){
              document.getElementById("errMsg").innerHTML = "&#128308; size must be float ";
              return
            }  
        }
          if(active == 'weightForm'){
            if(!intCheck(inputs ['weight']) ){
              document.getElementById("errMsg").innerHTML = "&#128308; weight must be float ";
              return
            }  
        }
          if(active == 'dimensionForm'){
            if(!intCheck(inputs ['Length']) ){
              document.getElementById("errMsg").innerHTML = "&#128308; length must be float ";
              return
            }  
            if(!intCheck(inputs ['Width']) ){
              document.getElementById("errMsg").innerHTML = "&#128308; width must be float ";
              return
            }  
            if(!intCheck(inputs ['height']) ){
              document.getElementById("errMsg").innerHTML = "&#128308; height must be float ";
              return
            }  
        }
                
        document.getElementById("errMsg").innerHTML = "";
                  
                  axios.post("http://localhost/scandiTest/server/",inputs).then(function(response) {
                    navigate('/');
                  });
      }

  return (
    <Form className='container mt-3' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SKU</Form.Label>
        <Form.Control  placeholder="Enter email" name='sku' onChange={handleChange } required/>

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

        <select name="categories"  onChange={e =>setActive(e.target.value) }>
        <option value="sizeForm">Size</option>
        <option value="dimensionForm">Dimension</option>
        <option value="weightForm">Weight</option>
        
        </select>
        {active === 'sizeForm' && <Categoryform type = 'size'  getvalue = {getvalue}/ > }
        {active === 'dimensionForm' && <Categoryform type = 'dimension' getvalue = {getvalue}/> }
        {active === 'weightForm' && <Categoryform type = 'weight' getvalue = {getvalue}/> }
        </Form.Group>


      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h5 style={{color:'red'}} id='errMsg' className='mt-3'> </h5>



    </Form>
  );
}

export default Addform;