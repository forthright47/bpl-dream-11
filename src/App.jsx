import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import { ToastContainer } from 'react-toastify';
import Newsletter from './components/Newsletter/Newsletter';

const playersData = async() => {
  const res = await fetch("/players.json");
  return res.json();
}

function App() {

  const playersPromise = playersData();

  const [coin, setCoin] = useState(50000);

  return (
    <div>
      <Navbar coin={coin}/>
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}/>
      </Suspense>
      <Newsletter />

      {/* react toastify component */}
      <ToastContainer />
    </div>
  )
}

export default App
