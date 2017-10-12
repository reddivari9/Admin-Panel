import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export default class LoginForm extends React.Component {

  _onClick = () => {
    window.location.href = "http://localhost:3000/app"
  }
  render(){
    return(
       <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' alt="logo" />
              {' '}Log-in to your account
            </Header>
            <Form size='large'>
              <Segment>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <div className="remember"><Checkbox checked label={<label>Remember me</label>} /></div>

                <Button color='teal' fluid size='small' onClick={this._onClick.bind(this)}>Login</Button>
              </Segment>
            </Form>
            <Message>
              Don't have account? <Link to='/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
