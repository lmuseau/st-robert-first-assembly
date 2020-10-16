import React, { Component } from 'react';
import '../../App.css';
import './SignUp.css';
import axios from 'axios';


export default class SignUp extends Component {

  state={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    spouseFirstName:'',
    spouseLastName:'',
    spouseEmail:'',
    spousePhone:'',
    preferredContact:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    zip:'',
    sent:false,
    buttonText: 'Send Message',
  }

  // handle inputs 
  handleFirstName = (e)=>{
    this.setState({
      firstName:e.target.value
    })
  }
  handleLastName = (e)=>{
    this.setState({
      lastName:e.target.value
    })
  }
  handleEmail = (e)=>{
    this.setState({
      email:e.target.value
    })
  }
  handlePhone = (e)=>{
    this.setState({
      phone:e.target.value
    })
  }
  handleSpouseFirstName = (e)=>{
    this.setState({
      spouseFirstName:e.target.value
    })
  }
  handleSpouseLastName = (e)=>{
    this.setState({
      spouseLastName:e.target.value
    })
  }
  handleSpouseEmail = (e)=>{
    this.setState({
      spouseEmail:e.target.value
    })
  }
  handleSpousePhone = (e)=>{
    this.setState({
      spousePhone:e.target.value
    })
  }
  handleContact = (e)=> {
    this.setState({
      ...this.state,
      preferredContact: e.target.value
    })
  }
  handleAddress1 = (e)=> {
    this.setState({
      address1:e.target.value
    })
  }
  handleAddress2 = (e)=> {
    this.setState({
      address2:e.target.value
    })
  }
  handleCity = (e)=> {
    this.setState({
      city:e.target.value
    })
  }
  handleState = (e)=> {
    this.setState({
      state:e.target.value
    })
  }
  handleZip = (e)=> {
    this.setState({
      zip:e.target.value
    })
  }

  // submit form handling
  formSubmit=(e)=>{
    e.preventDefault();
    let data = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      phone:this.state.phone,
      spouseFirstName:this.state.spouseFirstName,
      spouseLastName:this.state.spouseLastName,
      spouseEmail:this.state.spouseEmail,
      spousePhone:this.state.spousePhone,
      preferredContact: this.state.preferredContact,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    console.log(data)
    axios.post('/api/forma',data)
    .then(res=>{
      this.setState({
        sent:true,
      },this.resetForm())
    })
    .catch(()=>{
      console.log('message not send');    
    })
  }

  // for reseting the form data
  resetForm=()=>{
    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      spouseFirstName:'',
      spouseLastName:'',
      spouseEmail:'',
      spousePhone:'',
      preferredContact:'',
      address1:'',
      address2:'',
      city:'',
      state:'',
      zip:'',
    })
    setTimeout(()=>{
      this.setState({
        sent:false,
      })
    },3000)
  }
  
  render() {
    return (
      <section className="get_in_touch">
        <h1 className="title">Get Connected With Us!</h1>
        <div className="container">
          <form onSubmit={this.formSubmit} className="contact-form row">
            <div className="col-lg-12">
              <h2 className="section-name">Name</h2>
            </div>
            <div className="form-field col-lg-6">
              <input id="firstname" className="input-text" type="text" name="firstname" value={this.state.firstName} onChange={this.handleFirstName}/>
              <label htmlFor="firstname" className="label">First Name</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="lastname" className="input-text" type="text" name="lastname" value={this.state.lastName} onChange={this.handleLastName}/>
              <label htmlFor="lastname" className="label">Last Name</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="email" className="input-text" type="email" name="email" value={this.state.email} onChange={this.handleEmail}/>
              <label htmlFor="email" className="label">Email</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="phone" className="input-text" type="text" name="phone" value={this.state.phone} onChange={this.handlePhone}/>
              <label htmlFor="phone" className="label">Phone</label>
            </div>
            <div className="col-lg-12">
              <h2 className="section-name">Spouse</h2>
            </div>
            <div className="form-field col-lg-6">
              <input id="firstname" className="input-text" type="text" name="firstname" value={this.state.spouseFirstName} onChange={this.handleSpouseFirstName}/>
              <label htmlFor="firstname" className="label">First Name</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="lastname" className="input-text" type="text" name="lastname" value={this.state.spouseLastName} onChange={this.handleSpouseLastName}/>
              <label htmlFor="lastname" className="label">Last Name</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="email" className="input-text" type="email" name="email" value={this.state.spouseEmail} onChange={this.handleSpouseEmail}/>
              <label htmlFor="email" className="label">Email</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="phone" className="input-text" type="text" name="phone" value={this.state.spousePhone} onChange={this.handleSpousePhone}/>
              <label htmlFor="phone" className="label">Phone</label>
            </div>
            <div className="form-field col-lg-12">
              <h3 className="section-name">Preferred Method of Contact</h3>
            </div>
            <div className="form-field col-lg-12 row">
              <div className="col">
                <label className="form-label form-check-label" htmlFor="email-contact"><input className="radio input-radio form-check-input" type="radio" id="email-contact" name="contact" value="Email" onChange={this.handleContact}/>Email</label>
              </div>
              <div className="col">
                <label className="form-label form-check-label" htmlFor="call"><input className="radio input-radio form-check-input" type="radio" id="call" name="contact" value="Phone Call" onChange={this.handleContact}/>Call</label>
              </div>
              <div className="col">
                <label className="form-label form-check-label" htmlFor="text"><input className="radio input-radio form-check-input" type="radio" id="text" name="contact" value="Text" onChange={this.handleContact}/>Text</label>
              </div>
            </div>
            <div className="col-lg-12">
              <h3 className="section-name">Address</h3>
            </div>
            <div className="form-field col-lg-6">
              <input id="address1" className="input-text" type="text" name="address1" value={this.state.address1} onChange={this.handleAddress1}/>
              <label htmlFor="address1" className="label">Address Line 1</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="address2" className="input-text" type="text" name="address2" value={this.state.address2} onChange={this.handleAddress2}/>
              <label htmlFor="address2" className="label">Address Line 2</label>
            </div>
            <div className="form-field col-lg-6">
              <input id="city" className="input-text" type="text" name="city" value={this.state.city} onChange={this.handleCity}/>
              <label htmlFor="city" className="label">City</label>
            </div>
            <div className="form-field col-lg-3">
              <input id="state" className="input-text" type="text" name="state" value={this.state.state} onChange={this.handleState}/>
              <label htmlFor="state" className="label">State</label>
            </div>
            <div className="form-field col-lg-3">
              <input id="zip" className="input-text" type="text" name="zip" value={this.state.zip} onChange={this.handleZip}/>
              <label htmlFor="zip" className="label">Zip Code</label>
            </div>
            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" value="submit" />
            </div>
          </form>
        </div>
      </section>
    )
  }
}