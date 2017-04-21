import React, { Component } from 'react';
import CustomerListItem from './CustomerListItem';
import { Container, Divider } from 'semantic-ui-react';


class App extends Component {

  constructor(props) {
    super();
    this.state = { customers: [] }

    fetch('/api/customers').then((response) => {
      return response.text();
    }).then((data) => {
      console.log(JSON.parse(data))
      this.setState({customers: JSON.parse(data)})
    })
  }

  render() {

    const customerList = this.state.customers.map((customer) => {
      return (
        <CustomerListItem
          key={customer._id}
          customer={customer} />
      );
    });

    return (
      <Container>
       
        <Divider hidden />
        {customerList}
      </Container>
    );
  }
}

export default App;

