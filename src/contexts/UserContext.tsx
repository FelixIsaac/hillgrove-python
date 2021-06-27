import React, { createContext } from 'react';

export interface IUserContext {
    updateUser(jwt: string): void
}

const getToken = () => document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")

export const initUser = {
    "username": "",
    "avatar": "",
    "id": "",
    updateUser: () => { }
};

export const UserContext = createContext<typeof initUser & IUserContext>(initUser);

export const parseJWT = (token: string | undefined) => {
    if (!token) token = getToken();
    const base64 = token.split(".")[1]?.replace(/-/g, "+")?.replace(/_/g, "/");

    const jsonPayload = decodeURIComponent(
      atob(base64 || "")
        .split("")
        ?.map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        ?.join("")
    );

    return JSON.parse(jsonPayload || "{}");
};

const UserContextComponent = (props: any) => {
    const token = getToken();
    if (!token) return props.children;

    const user = parseJWT(token);

    if (new Date(user.iat * 1000) > new Date(Date.now() + 1.21e+9)) {
        document.cookie = "token=;";
        return props.children;
    }

    function updateUser(jwt) {
         if (!jwt) jwt = getToken();
        const newUser = parseJWT(jwt);

        for (const key of Object.keys(newUser)) {
            this[key] = newUser[key];
        }
    }

    return (
      <UserContext.Provider value={{ ...user, updateUser }}>
          {props.children}
      </UserContext.Provider>
    );
};

export default UserContextComponent;