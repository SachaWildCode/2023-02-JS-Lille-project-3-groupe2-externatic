import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";
import api from "../services/api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const registerUser = async (form) => {
    try {
      await api.post("/register", form);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  const [isLogin, setIsLogin] = useState(false);
  const { Provider } = authContext;
  const [user, setUser] = useState({
    userAuth: {
      ID: null,
      account_type: null,
      active: null,
      creation_date: null,
      password: null,
      register_email: null,
    },
    userInfos: {
      about: null,
      auth_ID: null,
      birthdate: null,
      firstname: null,
      lastname: null,
      phone_number: null,
      picture_url: null,
    },
  });

  const verifyToken = async () => {
    try {
      const loginResult = await api.post("/login");
      const authResult = await api.get(
        `/auth/${loginResult.data.userInfos.auth_ID}`
      );
      const userAuth = authResult.data;
      const { userInfos } = loginResult.data;
      setUser({ userAuth, userInfos });
      setIsLogin(true);
      return { userAuth, userInfos };
    } catch (error) {
      return error;
    }
  };

  const login = async (email, password) => {
    try {
      const result = await api.post("/login", {
        email,
        password,
      });
      const { userAuth, userInfos } = result.data;
      setUser({ userAuth, userInfos });
      setIsLogin(true);
      return { userAuth, userInfos };
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = async () => {
    setIsLogin(false);
    setUser({
      userAuth: {
        ID: null,
        account_type: null,
        active: null,
        creation_date: null,
        password: null,
        register_email: null,
      },
      userInfos: {
        about: null,
        auth_ID: null,
        birthdate: null,
        firstname: null,
        lastname: null,
        phone_number: null,
        picture_url: null,
      },
    });
    await api.get("/logout");
  };

  const value = {
    user,
    setUser,
    login,
    verifyToken,
    logout,
    isLogin,
    setIsLogin,
    registerUser,
  };

  return <Provider value={value}>{children}</Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
