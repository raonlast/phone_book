import React, { Component } from 'react';
import './index.css';

class PhoneInfo extends Component {
   static defaultProps = {
      info: {
         name: '이름',
         phone: '010-0000-0000',
         id: 0
      }
   }

   state = {
      editing: false,
      
      name:'',
      phone:''
   }

   handleRemove = () => {
      const { info, onRemove } = this.props;
      onRemove(info.id);
   }

   handleToggleEdit = () => {
      const { editing } = this.state;
      this.setState({ editing: !editing });
   }

   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value
      });
   }

   componentDidUpdate(prevProps, prevState) {
      const { info, onUpdate } = this.props;

      if(!prevState.editing && this.state.editing) {

         this.setState({
            name: info.name,
            phone: info.phone
         });
      }

      if(prevState.editing && !this.state.editing) {

         onUpdate(info.id, {
            name: this.state.name,
            phone: this.state.phone
         });
      }
   }

   render() {
      const { editing } = this.state;
      //수정모드
      if(editing) {
         return(
            <div className="style">
               <div>
                  <input 
                     value={this.state.name}
                     name="name"
                     placeholder="이름"
                     onChange={this.handleChange}
                  />
               </div>
               <div>
                  <input 
                     value={this.state.phone}
                     name="phone"
                     placeholder="전화번호"
                     onChange={this.handleChange}
                  />
               </div>
               <button onClick={this.handleToggleEdit}>적용</button>
               <button onClick={this.handleRemove}>삭제</button>
            </div>
         );
      }

      //일반모드
      const {
         name, phone
      } = this.props.info;

      return (
         <div className="style">
            <div><b>{name}</b></div>
            <div>{phone}</div>
            <button onClick={this.handleToggleEdit}>change</button>
            <button onClick={this.handleRemove}>delete</button>
         </div>
      );
   }
}

export default PhoneInfo;