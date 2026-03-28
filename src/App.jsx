import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';

const playersData = async() => {
  const res = await fetch("/players.json");
  return res.json();
}

function App() {

  const playersPromise = playersData();

  return (
    <div>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
        <Players playersPromise={playersPromise}/>
      </Suspense>
    </div>
  )
}

export default App
