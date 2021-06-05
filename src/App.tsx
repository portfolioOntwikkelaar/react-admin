import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path={'/'} exact component={Dashboard} />
            <Route path={'/users'} component={Users} />
            <Route path={'/register'} component={Register} />
            <Route path={'/login'} component={Login} />
            </BrowserRouter>

    </div>
  );
}

export default App;
