import React from "react";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Post from "./Components/Post/Post";

import { Route, Switch} from 'react-router-dom'

export default (
<Switch>
    <Route exact path="/" component={Auth}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/post/:postid" component={Post}/>
    <Route exact path="/new" component={Form}/>
</Switch>
)

