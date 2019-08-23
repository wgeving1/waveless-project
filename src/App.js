import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { AppContainer, LeftSide, RightSide } from './components/styles';

// import Home from './components/homepage';
// import Login from './components/loginpage';
// import Register from './components/register';
// import Reset from './components/reset';
import UserTable from './components/homepage/UserTable';



const App = () => {
  const usersData = [
    { id: 1, name: 'Billy', username: 'trippsdaddy' }, 
    { id: 2, name: 'Megan', username: 'trippsmommy' }, 
    { id: 3, name: 'Tripp', username: 'coolguy' }
  ]

  const [users, setUsers ] = useState(usersData)

  return (
    <div className="container">
      <h1>Welcome to Waveless Medtation!</h1>
      <h2>Please sign in to your account or register for access...</h2>
      <div className="flex-row">
        <div className="flex-large">
          <h3>Add user</h3>
        </div>
        <div className="flex-large">
          <h3>View users</h3>
          <UserTable />
        </div>
      </div>
    </div>
    
  )
  // <AppContainer>
  //   <LeftSide />
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route exact path="/login" component={Login} />
  //       <Route exact path="/create-account" component={Register} />
  //       <Route exact path="/reset-password" component={Reset} />
  //     </Switch>
  //   <RightSide />
  // </AppContainer>  
}

export default App