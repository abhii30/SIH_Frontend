
import './App.css';
import NavBar from './NavBar';
import Crousal from './Crousal'
import Hero from './Hero';
import Footer from './Footer';
import Axios from "axios"
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Fetching Failed!")
  useEffect(()=> {
    Axios({
      method: "GET",
      url: "/",
      withCredentials: true
  }).then(res => {
      setMsg([...res.data.message]);
  })
  }, [])
  return (
   <div className='bg-indigo-600 w-full h-screen'>
     {/* <NavBar />
     <Crousal />
     <Hero />
     <Footer /> */}
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
