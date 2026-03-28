import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import { ToastContainer } from 'react-toastify';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const playersData = async () => {
  const res = await fetch("/players.json");
  return res.json();
}

function App() {

  const playersPromise = playersData();

  const [coin, setCoin] = useState(50000);

  return (
    <div>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={
        <div className='py-10 text-center'>
          <span className="loading loading-dots loading-xl"></span>
        </div>
      }>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
      </Suspense>
      <div className='relative'>
        <div className='border border-gray-300 rounded-3xl p-3 lg:p-5 container mx-auto -mb-28 relative z-10'>
          <Newsletter />
        </div>
        <Footer />
      </div>

      {/* react toastify component */}
      <ToastContainer />
    </div>
  )
}

export default App
