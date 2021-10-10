import { BrowserRouter, Route } from "react-router-dom";

import { Login } from "@/pages";

export const SignRoutes = () => (
  <BrowserRouter>
    <Route path="/" component={Login} />
  </BrowserRouter>
);
