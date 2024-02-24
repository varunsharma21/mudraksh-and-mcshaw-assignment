import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Login/SignIn";
import HomePage from "./components/Home/HomePage";
import EntryPage from "./components/Entry/EntryPage";
import TablePage from "./components/Table/TablePage";
import ChartPage from "./components/Chart/ChartPage";
import ContextProvider from "./store";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          {/* </Route> */}
          <Route path="entry" element={<EntryPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="charts" element={<ChartPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

// import "./App.css";
// import EntryPage from "./components/Entry/EntryPage";
// import Home from "./components/Home/HomePage";
// import SignIn from "./components/Login/SignIn";
// import ContextProvider from "./store";

// function App() {
//   return (
//     <>
//       <ContextProvider>
//         <SignIn />
//         {/* <EntryPage /> */}
//         {/* <Home /> */}
//       </ContextProvider>
//     </>
//   );
// }

// export default App;
