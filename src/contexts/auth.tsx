import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "@/services";

interface ILogin {
  email: string;
  password: string;
}

interface IAuthorization {
  authorization: string;
}

interface IUserData {
  id: string;
  name: string;
  gender: string;
  birthdate: string;
  email: string;
}

interface ILoginResponse {
  data: IUserData;
  headers: IAuthorization;
}

interface IAuthContextData {
  signed: boolean;
  user: IUserData | null;
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
  const [user, setUser] = useState<IUserData | null>(null);

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
    const { data, headers }: ILoginResponse = await api.post("/auth/sign-in", {
      email,
      password,
    });

    setUser(data);

    if (api.defaults.headers) {
      api.defaults.headers.Authorization = `Bearer ${headers.authorization}`;
    }

    localStorage.setItem("@App:user", JSON.stringify(data));
    localStorage.setItem("@App:token", headers.authorization);
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
