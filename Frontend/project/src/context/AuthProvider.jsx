import { createContext, useContext, useEffect, useState } from "react";

import {fetchData} from "../utils/rapidapi";
// ✅ Named context export
export const AuthContext = createContext();

// ✅ Named provider export
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents || []); // ✅ prevent undefined
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Named hook export
export const useAuth = () => useContext(AuthContext);
