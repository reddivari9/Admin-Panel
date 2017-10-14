import React from 'react'
import { Grid, Icon, Label, Menu, Input } from 'semantic-ui-react';
import SideMenu from "./SideMenuCustom"


export default class Main extends React.Component {
 
  render(){    
    return(
      <Grid className="main-outer">
        <Grid.Row color="teal" verticalAlign="middle" className="header-row">
          <Grid.Column width={2} textAlign="right">
            <div>Logo</div>
          </Grid.Column>
          <Grid.Column width={11} textAlign="right">
            <div></div>
          </Grid.Column>
          <Grid.Column width={2}>
          <Menu compact secondary className="header-icon">
            <Menu.Item as='a'>
              <Icon name='mail' className="icon-custom"/> 
              <Label color='red' floating size="mini" className="label">22</Label>
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='alarm' className="icon-custom"/>
              <Label color='red' floating size="mini" className="label">2</Label>
            </Menu.Item>
          </Menu>
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon name='user circle' size="large" className="icon-custom" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="container-fixed">
        {
          // <Grid.Column width={2} color="teal" className="side-menu-column">
          //   <SideMenu />
          // </Grid.Column>
          // <Grid.Column width={14} >

          // </Grid.Column>
        }
        <SideMenu />
        </Grid.Row>
      </Grid>
    )
  }

}