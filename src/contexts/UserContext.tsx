import React, { createContext } from 'react';

export function getCookie(name: string): string {
  const value = `; ${document.cookie}`;
  const parts: string[] = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export const getToken = () => getCookie('token');

function updateUser(jwt?: string) {
    if (!jwt) jwt = getToken();
    const newUser = parseJWT(jwt);

    for (const key of Object.keys(newUser)) {
        this[key] = newUser[key];
    }
}

function updateXP(xp) {
    sessionStorage.setItem('xp', xp);
}

function getXP() {
    fetch(`${process.env.REACT_APP_BACKEND_API}/users/xp`, {
        headers: {
            'Authorization': getToken()
        }
    })
        .then(response => response.json())
        .then(({ xp }) => updateXP(xp));
}

export const initUser = {
    avatar: '',
    firstName: '',
    name: '',
    googleId: ''
};

interface IUserContext {
    avatar: string;
    firstName: string;
    name: string;
    googleId: string;
    xp: number;
    getStoredXP(): number;
    updateXP(xp: number): void;
    updateUser(jwt: string): void;
}

export const UserContext = createContext(initUser as IUserContext);

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
    
    // request user xp
    const getStoredXP = () => parseInt(sessionStorage.getItem('xp') || '0');
    getXP();
    
    return (
      <UserContext.Provider value={{ ...user, getStoredXP, updateXP, updateUser }}>
          {props.children}
      </UserContext.Provider>
    );
};

export default UserContextComponent;