import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu, Segment } from 'semantic-ui-react'



export default class Home extends Component {

	render(){
		const { match } = this.props;
		return(
		  <div>
		    <Menu fixed='top' inverted style={{zIndex: 105}}>
		        <Menu.Item as='a' header style={{width:'15rem'}}>
		          {
		          	// <Image
      		     //        size='mini'
      		     //        src='/logo.png'
      		     //        style={{ marginRight: '1.5em' }}
      		     //      />
      		      }
		          Project Name
		        </Menu.Item>
		        <Menu.Item as='a' style={{float:'right'}}>Home</Menu.Item>

		        <Dropdown item simple text='Dropdown' style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
		          <Dropdown.Menu>
		            <Dropdown.Item>List Item</Dropdown.Item>
		            <Dropdown.Item>List Item</Dropdown.Item>
		            <Dropdown.Divider />
		            <Dropdown.Header>Header Item</Dropdown.Header>
		            <Dropdown.Item>
		              <i className='dropdown icon' />
		              <span className='text'>Submenu</span>
		              <Dropdown.Menu>
		                <Dropdown.Item>List Item</Dropdown.Item>
		                <Dropdown.Item>List Item</Dropdown.Item>
		              </Dropdown.Menu>
		            </Dropdown.Item>
		            <Dropdown.Item>List Item</Dropdown.Item>
		          </Dropdown.Menu>
		        </Dropdown>
		    </Menu>
		    <Menu fixed='left' vertical inverted>
		        <Menu.Item as='a' header>
		          -
		        </Menu.Item>
		        <Menu.Item as='a'>
		        	<Image className="profile-img-main" src='../images/praveen.jpg' size='tiny' shape='circular' />
		        </Menu.Item>
		        <Menu.Item as='a'>Profile</Menu.Item>

		        <Dropdown item simple text='Dropdown'>
		          <Dropdown.Menu>
		            <Dropdown.Item>List Item</Dropdown.Item>
		            <Dropdown.Item>List Item</Dropdown.Item>
		            <Dropdown.Divider />
		            <Dropdown.Header>Header Item</Dropdown.Header>
		            <Dropdown.Item>
		              <i className='dropdown icon' />
		              <span className='text'>Submenu</span>
		              <Dropdown.Menu>
		                <Dropdown.Item>List Item</Dropdown.Item>
		                <Dropdown.Item>List Item</Dropdown.Item>
		              </Dropdown.Menu>
		            </Dropdown.Item>
		            <Dropdown.Item>List Item</Dropdown.Item>
		          </Dropdown.Menu>
		        </Dropdown>
		    </Menu>


		    <Segment
		      inverted
		      vertical
		      style={{ position: 'fixed', bottom: '0', left:'0', right: '0', padding: '2em 0em' }}
		    >
		      
		    </Segment>
		  </div>
		)
	}
}