import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Input } from 'semantic-ui-react';
import { Page, Content, Title, Description, Form } from './styles';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputEmail = (event) => {
    event.preventDefault()
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) =>{
    const { email, password } = this.statethis.props.login(email, password)
  }

  render() {
    return (
      <Page>
        <Content>
          <Title>Welcome to Waveless Meditation!</Title>
          <Description>Sign in with your information below:</Description>

          <Form onSubmit = {this.handleSubmit}>
            <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
              value={this.state.email} onChange={this.handleInputPassword} />
            <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Password" type="text"
              value={this.state.password} onChange={this.state.handleInputPassword} />
            <Button type="submit" animated color="green">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>   
          </Form>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Content>
      </Page>
    )
  }
}
export default LoginPage