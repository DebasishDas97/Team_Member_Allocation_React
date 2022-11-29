import './App.css';
import Header from "./Components/Header";
import Employee from "./Components/Employee";
import Footer from "./Components/Footer";
import { Data } from "./Components/Data";
import Navbar from "./Components/Navbar";
import GroupedTeamMembers from "./Components/GroupedTeamMembers"
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/DataContext"

export default function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  )
}
