import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import All_Inbox from './all_inbox.jsx';
import Inbox from './inbox.jsx';
import Archived from './Archived.jsx';
import "./css/top_bar.css";

function Top_bar(){




    return (
        
        <Router>
            <div style={{textAlign: "center"}}>
      <button><Link to="/">Activity Feed </Link> </button>&nbsp;
      <button><Link to="/Inbox">All Inbox </Link></button>&nbsp;
      <button><Link to="/Archived">Archived </Link></button>&nbsp;
      <br/>


            </div>

            
        

        <Switch>
        <Route exact path="/">
        < Inbox/>
        </Route>
        <Route path="/Inbox">
        <All_Inbox/>
        </Route>
        <Route path="/Archived">
        <Archived/>
        </Route>
        </Switch>
        
        </Router>

        
      
    
            
        
    );

};

export default Top_bar;