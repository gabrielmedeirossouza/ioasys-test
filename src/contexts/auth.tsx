import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "@/services";

interface ILogin {
  email: string;
  password: string;
}

interface IAuthContextData {
  signed: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object | null;
  Login(data: ILogin): Promise<void>;
  Logout(): void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));

      if (api.defaults.headers) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
    }
  }, []);

  const Login = async ({ email, password }: ILogin) => {
    const response = await api.post("/auth/sign-in", {
      email,
      password,
    });

    setUser(response.data);

    if (api.defaults.headers) {
      api.defaults.headers.Authorization = `Bearer ${response.headers.authorization}`;
    }

    localStorage.setItem("@App:user", JSON.stringify(response.data));
    localStorage.setItem("@App:token", response.headers.authorization);
  };

  const Logout = () => {
    setUser(null);

    sessionStorage.removeItem("@App:user");
    sessionStorage.removeItem("App:token");
  };

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
