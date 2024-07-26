import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from "./components/Menu";
import Home from "./components/Home";
// import Categories from "./components/Categories";
import Add from "./components/Add";
import Update from "./components/Update";
import FooterPage from "./components/Footer";
import List from "./components/List";
import Login from './components/Login';
import Register from './components/Register';

// Define useStore function or hook here
// export function useStore() {
//   // Replace with your actual data or state logic
//   const applications = [
//     { id: 1, name: 'App 1' },
//     { id: 2, name: 'App 2' },
//     { id: 3, name: 'App 3' },
//   ];

//   return { applications };
// }

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;