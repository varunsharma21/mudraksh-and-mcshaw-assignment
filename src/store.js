import { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [job, setJob] = useState();
  const [salary, setSalary] = useState();
  const [city, setCity] = useState("");

  const contextValues = {
    username,
    setUsername,
    password,
    setPassword,
    name,
    setName,
    age,
    setAge,
    job,
    setJob,
    salary,
    setSalary,
    city,
    setCity,
  };

  return (
    <MyContext.Provider value={contextValues}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
