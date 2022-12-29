import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./redux/userSlice";

// const API_Key = "84dd2c64ab7ab086af5629f61404de0b";
// const Example_API_Request =
//   "https://api.themoviedb.org/3/movie/550?api_key=84dd2c64ab7ab086af5629f61404de0b";
// const API_Read_Access_Token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkMmM2NGFiN2FiMDg2YWY1NjI5ZjYxNDA0ZGUwYiIsInN1YiI6IjYzODAxNzJhMmEwOWJjMDA5OGM5YmZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_Tw0qLuFQSMJRRCq85o3gAGiPkaaDt2MkKHe54gY1A";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log("userAuth", userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
 

    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
          ) : (
            <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
   
  );
}

export default App;
