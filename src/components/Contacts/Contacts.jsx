import Contact from 'components/Contact/Contact';
import React, { Component } from 'react'

export default class Contacts extends Component {

    state = {
        filter: ''
    };  

    handleChange = (e) => {
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
        // console.log(this.state.filter)
        // this.props.onChange(e.currentTarget.value);
        
    }

    onFilterChange = () => { 
        return (this.props.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())));
    }

  render() {
    return (
        <div>
            <p>Contacts</p>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                value={this.state.filter}
                onChange={this.handleChange}
            />

            <ul>
                {this.onFilterChange().map((contact) => {
                    return (
                        <Contact
                            key={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    )
                 })
                        
                }
            </ul>
        </div>
    )
  }
}
