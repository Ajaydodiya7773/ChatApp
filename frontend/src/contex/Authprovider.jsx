import React, { createContext, useContext} from "react";
import Cookies from "js-cookie";

// Create an AuthContext for the app
export const AuthContext = createContext();

export const Authprovider= ({children}) =>  {
    // Get initial state from cookies or local storage
  const getInitialAuthState = () => {
    const cookieJWT = Cookies.get("jwt");
    const localStorageUser = localStorage.getItem("Messenger");
    
    try {
      // Parse the JSON safely
      if (cookieJWT) return JSON.parse(cookieJWT);
      if (localStorageUser) return JSON.parse(localStorageUser);
    } catch (error) {
      console.error("Failed to parse auth state:", error);
      return null;
    }

    return null;
  };

  // Initialize authUser state
  const [authUser, setAuthUser] = React.useState(getInitialAuthState());

  // Function to log out the user (clear cookies and localStorage)
  const logout = () => {
    Cookies.remove("jwt");
    localStorage.removeItem("Messenger");
    setAuthUser(null);
  };

  return (
     // Provide the authUser and setter function to the rest of the app
    <>
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider> 
    </>
  )
}

// Custom hook to easily access the auth context
export const useAuth = () => useContext(AuthContext);
