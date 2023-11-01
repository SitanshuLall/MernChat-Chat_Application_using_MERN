//import Register from "./Register"
import axios from "axios";
import {UserContextProvider} from "./UserContext";
// import { useContext } from "react";
import Routes from "./Routes";
function App() {
  axios.defaults.baseURL = 'http://127.0.0.1:4040';
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
  )
}

export default App
