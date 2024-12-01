import React, { useState } from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RawTxnPage from './RawTxnPage';
import WidgetPage from './WidgetPage';


const OKTO_CLIENT_API_KEY = process.env.REACT_APP_OKTO_CLIENT_API_KEY;
function App() {
 console.log('App component rendered');
 const [authToken, setAuthToken] = useState(null);
 const handleLogout = () => {
    console.log("setting auth token to null")
    setAuthToken(null); // Clear the authToken
  };
 return (
   <Router>
     <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
       <Routes>
         <Route path="/" element={<LoginPage setAuthToken={setAuthToken} authToken={authToken} handleLogout={handleLogout}/>} />
         <Route path="/home" element={authToken ? <HomePage authToken={authToken} handleLogout={handleLogout}/> : <Navigate to="/" />} />
         <Route path="/raw" element={authToken ? <RawTxnPage authToken={authToken} handleLogout={handleLogout}/> : <Navigate to="/" />} />
         <Route path="/widget" element={authToken ? <WidgetPage authToken={authToken} handleLogout={handleLogout}/> : <Navigate to="/" />} />       
       </Routes>
     </OktoProvider>
   </Router>
 );
}
export default App;


// REACT_APP_GOOGLE_CLIENT_ID=  "301666367171-gdi7g7c02pv97d8mbb553kbct9m611so.apps.googleusercontent.com"
// REACT_APP_OKTO_CLIENT_API_KEY= "8a001bd6-0804-4284-805c-b8191c07bae9"