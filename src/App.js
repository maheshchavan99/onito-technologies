import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormGenrate from './pages/FormGenrate';
import TableData from './pages/TableData';
import { useState } from 'react';
function App() {
  const [userDetails,setUsersDetails]=useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FormGenrate setUsersDetails={setUsersDetails} userDetails={userDetails}/>}/>
        <Route path='/tabledata' element={<TableData/>}/>
      </Routes>
    </div>
  );
}

export default App;
