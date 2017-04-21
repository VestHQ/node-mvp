import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

class Header extends React.Component {
  state = { activeItem: 'Home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    // const { activeItem } = this.state

    return (
      <Menu borderless stackable>
        <Container>
          <Menu.Item>
            Vest
          </Menu.Item>

        </Container>
      </Menu>
    );
  }
}

export default Header;