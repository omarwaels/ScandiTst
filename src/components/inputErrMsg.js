
import Form from 'react-bootstrap/Form';
function InputErrMsg(props) {
  return (
    <Form.Text className="text-muted text-danger">
          {'X '+props.text}
    </Form.Text>
  );
}

export default InputErrMsg;