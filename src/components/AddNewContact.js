import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewContact} from "../store/actions";

class AddNewContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    photo: ''
  };
  
  onChangeInput = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value})
  };
  
  render() {
    // console.log(this.state);
    return (
      <div>
        <p>Add New Contact</p>
        <p>Name <input type="text" onChange={this.onChangeInput} value={this.state.name} name="name"/></p>
        <p>Phone <input type="text" onChange={this.onChangeInput} value={this.state.phone} name="phone"/></p>
        <p>Email <input type="text" onChange={this.onChangeInput} value={this.state.email} name="email"/></p>
        <p>Photo <input type="text" onChange={this.onChangeInput} value={this.state.photo} name="photo"/></p>
        <img src={this.state.photo} alt="contactPhoto"/>
        <button onClick={this.props.addContact}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    phone: state.phone,
    email: state.email,
    photo: state.photo
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: () => dispatch(addNewContact())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);