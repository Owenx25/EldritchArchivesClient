import React from "react";
import { Switch, Route } from "react-router-dom";
import "./scss/custom.scss";
import axios from "axios";

import Edit from "./components/edit";
import CreateEntry from "./components/CreateEntry";
import EntryList from "./components/entryList";
import AdminDashboard from "./components/AdminDashboard";
import Homepage from "./components/Homepage";
import CompendiumsPage from "./components/CompendiumsPage";
import CompendiumPage from "./components/CompendiumPage";

// TODO: Update with real backend
axios.defaults.baseURL = "https://my backend"

const App = () => {
  return (
    <Switch>
      <Route path="/compendiums/:compendium">
        <CompendiumPage />
      </Route>
      <Route exact path="/compendiums">
        <CompendiumsPage />
      </Route>
      
      <Route exact path="/admin/entry">
        <EntryList />
      </Route>
      <Route exact path="/admin">
        <AdminDashboard />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <CreateEntry />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};

export default App;