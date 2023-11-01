import {createContext, useEffect, useState} from "react";
// import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    try {
        fetch("http://127.0.0.1:4040/profile", { credentials: "include" }).then(
          (response) =>
            response.json().then((response1) => {
              // setusername(userInfo.username);
              console.log(response1);
              setUsername(response1.username);
              setId(response1.userId);
              console.log(username);
            })
        );
      } catch (error) {
        console.log(error);
  }
  
    // axios.get('/profile').then(response => {
    //   setId(response.data.userId);
    //   setUsername(response.data.username);
    // });
  }, []);
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}