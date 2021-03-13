import { Fragment, FunctionComponent } from "react";
import { AppFooter, AppSwitch, AppNav } from ".";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <AppNav />
      <AppSwitch />
      <AppFooter />
    </Fragment>
  );
};
