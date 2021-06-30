
import Index from "./pages/index";
import Nosotros from "./pages/nosotros";
import Error404 from "./pages/error404";
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, Navlink, Redirect} from "react-router-dom";

function App() {
  return (

         <div id="container-fluid overflow-hidden">
    <Router>
        
         <Switch>
           <Route exact path="/" render={() => (<Redirect to="/home"/>)}>
          </Route>

           <Route path="/home">
            <Index/>
          </Route>


          <Route path="/nosotros">
            <Nosotros/>
          </Route>

          <Route  path="*" component={Error404}/>
       </Switch>
   
    </Router>
    </div>

  );
}

export default App;
