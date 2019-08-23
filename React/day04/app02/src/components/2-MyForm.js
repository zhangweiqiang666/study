import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: [{
        value: 'eating',
        name: '吃'
      }, {
        value: 'drink',
        name: '喝'
      }, {
        value: 'playing',
        name: '玩'
      }, {
        value: 'happy',
        name: '乐'
      },],
      form: {
        hobbies: ['playing', 'happy']
      }
    }
  }

  checkboxChange = (value, e) => {
    console.log(e.target);
    let form = Object.assign({}, this.state.form)
    form.hobbies.includes(value) ? form.hobbies.splice(form.hobbies.indexOf(value), 1) : form.hobbies.push(value)
   
    this.setState({
      form: {
        ...this.state.form,
        hobbies: form.hobbies
      }
    }
    )
  }
  render() {
    const { form } = this.state
    return (
      <div>
        {
          this.state.hobby.map((item, index) => {
            return (
              <label htmlFor={item.value} key={index}>
                <input type="checkbox" checked={form.hobbies.includes(item.value)} onChange={this.checkboxChange.bind(this, item.value)} />
              </label>
            )
          })
        }
      </div>
    );
  }
}

export default MyForm;