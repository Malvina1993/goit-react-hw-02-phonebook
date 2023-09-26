import { Component } from "react"
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";

export class App extends Component{
  state = {
    contacts: [],
    // filter: '',
    name: '',
    number: ''
  }

  formSubmitHandle = (data, id) => {
    this.setState({
      contacts: [{ id, ...data }, ...this.state.contacts],
      name: data.name,
      number: data.number
    })

    console.log(this.state.contacts)
  }

  // filterChangeHandle = data => {
  //   this.setState({
  //     filter: data
  //   })


  //  }


  render() {
    return (
      <div
        style={{
          padding: '32px',
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >

        <Form
          onSubmit={this.formSubmitHandle}
        />
        <Contacts
          contacts={this.state.contacts}
          // onChange={this.filterChangeHandle}
        />

      </div>
    );
  }
};
