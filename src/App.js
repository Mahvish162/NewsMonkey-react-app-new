
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
      <div>
       <Router>
      
      <Navbar/>
      <Routes>
              <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" />}>
              </Route>
              <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business" />}>
              </Route>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />}>
              </Route>
              <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general" />}>           
              </Route>
              <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health" />}>
              </Route>
              <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science" />}>                
              </Route>
              <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />}>                
              </Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>}>                
              </Route>
      </Routes>
      </Router>
      </div>
      </>
    )
  }
}
