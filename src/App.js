import React from 'react';
 
//components
import Header from "./components/Header";
import FetchData from "./components/FetchData";
import Todo from "./components/Todo";
import PaginationLink from "./components/PaginationLink";


 
import './App.css';
 
function App() {
 return (
   <div className="App">
     <Header />
     <Todo />
     <FetchData/>
     <PaginationLink/>
   </div>
 );
}
 
export default App;