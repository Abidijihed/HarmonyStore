import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'; // Import the styles
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { get_current, register, update_current_user } from '../../redux/action/UserAction';
// import "./Step.css"
function StepTowSaveInformation({handleNext}) {
  const dispatch=useDispatch()
  const [validated, setValidated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [FirstName,setFirstName]=useState('')
  const [LastName,setLastName]=useState('')
  const [Email,setEmail]=useState('')
  const [Address,setAddress]=useState('')
  const [country,setCountry]=useState('')
  const [Zip,setZip]=useState('')
  const [City,setCity]=useState('')
  const [Password,setPassword]=useState("")
  useEffect(() => {
    const id = localStorage.getItem("id");
      dispatch(get_current(id))
  }, [dispatch]);
  const user=useSelector((state)=>state.UserReducer.users)
  useEffect(() => {
    if (user) {
      setFirstName(user.FirstName || '');
      setPhoneNumber(user.phoneNumber || '');
      setLastName(user.LastName || '');
      setEmail(user.Email || "");
      setAddress(user.Address || "");
      setCountry(user.country || '');
      setCity(user.City || '');
      setZip(user.Zip || 0);
    }
  }, [user]);
  const handleSubmit = (event) => {
    event.preventDefault()
    const id =localStorage.getItem('id')
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
   
    setValidated(true);
    event.preventDefault();
      event.stopPropagation();
    if(validated && user){
        dispatch(update_current_user(id,{
          FirstName:FirstName,
          LastName:LastName,
          Email:Email,
          Address:Address,
          country:country,
          City:City,
          Zip:Zip,
          phoneNumber:phoneNumber
        }),handleNext())
    }else if(validated && !user){
      event.preventDefault();
      event.stopPropagation();
        dispatch(register({
          FirstName:FirstName,
          LastName:LastName,
          Email:Email,
          Address:Address,
          country:country,
          City:City,
          Zip:Zip,
          phoneNumber:phoneNumber,
          Password:Password
        }),handleNext())
    }
  };

  return (
    <div className='steptow' >
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={FirstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={LastName}
            onChange={(e)=>setLastName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="Email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Votre Adress</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre Adress"
            value={Address}
            onChange={(e)=>setAddress(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {!user ?<Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Votre Adress"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>:null}
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Country</Form.Label>
          <Form.Control
           type="text"
            placeholder="Country"
             required  
             value={country}
             onChange={(e)=>setCountry(e.target.value)}
             />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>City</Form.Label>
          <Form.Control
           type="text"
            placeholder="City"
             required 
             value={City}
             onChange={(e)=>setCity(e.target.value)}
             />
          <Form.Control.Feedback type="invalid">
            Please provide a valid City.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Code postal</Form.Label>
          <Form.Control 
          type="text"
           placeholder="Code postal"
            required 
            value={Zip}
            onChange={(e)=>setZip(e.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Code postal.
          </Form.Control.Feedback>
        </Form.Group>
           <Form.Group as={Col} md="4" controlId="validationCustomPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type='submit' style={{backgroundColor:"#708090"}}>confirmer</Button>
    </Form>
    </div>
  );
}

export default StepTowSaveInformation;