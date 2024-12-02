import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function Authprovider({ children }) {
  const [authUser, setAuthUser] = useState(null);  // Holds the authenticated user
  const [loading, setLoading] = useState(true);    // Loading state for async auth checks

  useEffect(() => {
    // Example: Simulate checking local storage or API call for user auth
    const user = localStorage.getItem("user");  // or an API call
    if (user) {
      setAuthUser(JSON.parse(user));            // Set authUser if user found
    }
    setLoading(false);                          // Set loading to false once done
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
