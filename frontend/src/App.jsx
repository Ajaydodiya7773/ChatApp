import SideBar from "./Home/Left/SideBar";
import Chats from "./Home/Right/Chats";
import Logout from "./Home/Left1/Logout";
import Login from "./componant/Login";
import Signup from "./componant/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contex/Authprovider";

function App() {
  // Destructure authUser from the useAuth hook
  const { authUser } = useAuth();
  console.log( authUser);  // Add this to see the value of authUser
  

  return (
    <>
     <Routes>
  <Route
    path="/"
    element={
      authUser !== undefined ? (
        authUser ? (
          <div className="flex h-screen">
            <Logout />
            <SideBar />
            <Chats />
          </div>
        ) : (
          <Navigate to="/login" />
        )
      ) : (
        <div>Loading...</div>  // Show loading while checking authUser
      )
    }
  />
  <Route
    path="/login"
    element={authUser ? <Navigate to="/" /> : <Login />}
  />
  <Route
    path="/signup"
    element={authUser ? <Navigate to="/" /> : <Signup />}
  />
  <Route path="*" element={<div>404 Page Not Found</div>} />
</Routes>

    </>
  );
}

export default App;
