import React, { Component } from 'react';

class PhoneForm extends Component {
   state = {
      name: '',
      phone: ''
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   render() {
      const { name, phone, } = this.state;
      return (
         <form>
            <input
               placeholder="이름"
               value={name}
               onChange={this.handleChange}
               name="name"
            />
            <input
               placeholder="전화번호"
               value={phone}
               onChange={this.handleChange}
               name="phone"
            />
            <div>{name} {phone}</div>
         </form>
      );
   }
}

export default PhoneForm;