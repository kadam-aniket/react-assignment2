import React from 'react';
import {BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout-component/LayoutComponent';
import DataTable from './Components/DataTable-Component/DataTableComponent';
import NewWSRComponent from './Components/NewWSRComponent/NewWSRComponent';

function App() 
{
    return (
      <div className="App">
        <Router>
            <Layout>
            </Layout>
            <DataTable></DataTable>
            
            <Route path='/wsr' component={NewWSRComponent}/>

        </Router>
      </div>
      );
}

export default App;
