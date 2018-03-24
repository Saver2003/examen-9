import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import ContactList from "./containers/ContactList";
import Contacts from "./containers/Contacts";
import NavigationItems from "./components/navigationItems/NavigationItems";


class App extends Component {
  render() {
    return (
      <div>
        <NavigationItems />
          <Switch>
            <Route path="/" exact conponent={Contacts}/>
            <Route path="/addcontact" component={ContactList}/>
          </Switch>
      </div>
    
    );
  }
}

export default App;
