import { FunctionComponent } from "react";
import { Route, Switch } from "react-router";
import { Home, NotFound } from ".";

export const AppSwitch: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
