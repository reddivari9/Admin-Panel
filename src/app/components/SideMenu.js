import React, { Component } from 'react'
import { Input, Label, Menu, Image, Divider, Responsive } from 'semantic-ui-react'

export default class SideMenu extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Image className="profile-img-main" src='../images/praveen.jpg' size='tiny' shape='circular' />
        <Divider inverted />
        <Input icon='search' placeholder='Search here...' />
        <Menu vertical secondary>
          <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
            <Label color='yellow'>1</Label>
            Inbox
          </Menu.Item>

          <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
            <Label color='yellow'>51</Label>
            Spam
          </Menu.Item>

          <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
            <Label color='yellow'>1</Label>
            Updates
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}



/*

        <Responsive minWidth={320} maxWidth={1300}>
        </Responsive>

*/