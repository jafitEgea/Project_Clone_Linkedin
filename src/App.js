import React, { useEffect } from 'react';
import './App.css';
import { selectUser, login, logout } from './features/useSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Feed } from './components/Feed';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Widgets } from './components/Widgets';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          name: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      {user ? <div>
        <Header />
        <div className="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      </div> :
        <Login />}
    </div>
  );
}

export default App;
