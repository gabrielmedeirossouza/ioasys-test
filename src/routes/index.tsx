import { useAuth } from "@/hooks";

import { SignRoutes } from "./SignRoutes";
import { OtherRoutes } from "./OtherRoutes";

export const Routes = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};
