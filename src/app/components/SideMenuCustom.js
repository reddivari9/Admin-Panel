import React, { Component } from 'react'
import { Input, Label, Menu, Image, Icon, Divider } from 'semantic-ui-react'

export default class SideMenu extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="side-menu">
        <Image className="profile-img-main" src='../images/praveen.jpg' size='tiny' shape='circular' />
        <Divider inverted />
        <ul>
          <li className="active"><Icon link name='dashboard' /><span>Dashboard</span></li>
          <li><Icon link name='tasks' /><span>Tasks</span></li>
          <li><Icon link name='mail' /><span>mail</span><Icon link name='chevron right' className="menu-arrow"/>
            <ul>
              <li><span>Profile</span></li>
              <li><span>Profile</span><Icon link name='chevron right' className="menu-arrow"/>
                <ul>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                </ul>
              </li>
              <li><span>Profile</span><Icon link name='chevron right' className="menu-arrow"/>
                <ul>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                </ul>
              </li>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
            </ul>
          </li>
          <li><Icon link name='suitcase' /><span>Click me</span><Icon link name='chevron right' className="menu-arrow"/>
            <ul>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
              <li><span>Profile</span><Icon link name='chevron right' className="menu-arrow"/>
                <ul>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                  <li><span>Profile</span></li>
                </ul>
              </li>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
              <li><span>Profile</span></li>
            </ul>
          </li>
          <li><Icon link name='grid layout' /><span>Grid layout</span></li>
          <li><Icon link name='list layout' /><span>List layout</span></li>
          <li><Icon link name='cloud download' /><span>Downloads</span></li>
        </ul>
      </div>
    )
  }
}



/*

        <Responsive minWidth={320} maxWidth={1300}>
        </Responsive>

*/