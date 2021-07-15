import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

export default function AuthenticatedRoute({
  children,
  exact,
  path,
  ...rest
}: any) {
  useEffect(() => {
    // Analytics page change
    // @ts-ignore
    window.dataLayer?.push({
      event: "pageView",
    });
  }, []);

  return (
    <Route exact={exact} path={path}>
      <Redirect to="/" />
    </Route>
  );
}
