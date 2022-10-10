import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { auth } from '../firebase';
import './App.css';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import SignIn from './Components/SignIn';
import { logout, signIn } from "./features/authSlice";
function App() {
  const dispatch = useDispatch()

  
  useEffect(() =>{
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        signIn({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        })
      );
    } else {
     dispatch(logout());
    }
  });
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<PrivateRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App
