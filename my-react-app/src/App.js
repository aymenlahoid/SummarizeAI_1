import Header from './Header.jsx'
import Login_Register from './Compenent/Login_Register.jsx';
import Register_Login from './Compenent/Register_Login.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import useScript from './hooks/useScript.js';
function App() {
  return(
    <>
    <Helmet>
     <script
       src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
       integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
       crossorigin="anonymous"
       async
     ></script>
    </Helmet>
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Register_Login" element={<Register_Login/>}/>
        <Route path="/Login_Register" element={<Login_Register/>}/>
      </Routes>
    </Router>
    <Register_Login/>
    <Login_Register/>
    </>
  );

}

export default App
