import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

function Login() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      // on appelle le back
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/");
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="w-[50rem] h-96 bg-[#293A4E] shadow-2xl rounded-lg mx-auto text-center py-12 mt-[10rem]">
      <h1 className="text-gray-200 text-center font-extrabold mt-3 mb-2 text-3xl">
        Connectez-vous
      </h1>
      <div className="container py-5 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="shadow appearance-none rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
            />
          </div>
          <div className="mb-6">
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="shadow appearance-none  rounded w-full py-4 px-3 mb-3 mt-2 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-[4rem]  py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <h3 className="text-lg">Sign In</h3>
            </button>
            <p className="text-white underline cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </form>
      </div>
      <div>{errorMessage}</div>
    </div>
  );
}

export default Login;
