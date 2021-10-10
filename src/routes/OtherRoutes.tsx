import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "@/pages";

export const OtherRoutes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);
