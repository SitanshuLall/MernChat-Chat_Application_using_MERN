import { useContext, useState } from "react";
//import axios from "axios";
import { UserContext } from "./UserContext.jsx";
// import axios from "axios";
export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext)
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';

    // const {data} = await axios.post('/register', {username, password})
    // setLoggedInUsername(username);
    // setId(data.id);
    try{
      const response = await fetch("http://127.0.0.1:4040/"+url , {
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({username, password})
      })
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setLoggedInUsername(username);
      setId(response.id);

    }
    catch(err){
      console.log("Error : " + err);
    }
  }
  return (
    <div className="bg-blue-100 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="Username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="Password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="w-full bg-blue-500 text-white block rounded-sm p-2">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member?
              <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Dont have an account?
              <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
          
        </div>
      </form>
    </div>
  );
}
