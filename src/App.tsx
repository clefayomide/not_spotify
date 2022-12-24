import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Auth from "./components/button/Auth";
import { auth } from "./feature/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  let req_code;
  const query = window.location.search;

  useEffect(() => {
    if (query.length > 0) {
      const param = new URLSearchParams(query);
      req_code = param.get("code");
      auth({
        grant_type: "authorization_code",
        code: req_code,
        redirect_uri: encodeURI("http://127.0.0.1:5173/"),
      })()
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          setIsAuth(true);
          navigate("/");
        })
        .catch((error) => console.log(error.response.data.error));
    }
  }, []);
  if (!isAuth)
    return (
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <Auth />
      </div>
    );

  return (
    <div className="w-full h-screen bg-black">
      <Home />
    </div>
  );
}

export default App;
