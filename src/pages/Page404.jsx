import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import bg from '../assets/404bg.png'
// import Footer from '../components/Footer';

const Page404 = () => {
  let navigate = useNavigate();
  return (
   <div>
  <Header/>
  <div
    className="w-[100%] my-[50px] flex flex-col items-end bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className='flex p-[50px] w-[50%] flex-col items-start gap-[10px]'>
      <h1 className='text-[#8FA8A8] text-[210px] font-[700]'>404</h1>
      <h2 className='text-[#274C5B] font-[800] text-[60px]'>Page not found</h2>
      <p className='text-[#525C60] font-[600] text-[18px]'>
        The page you are looking for doesn't exist or has been moved
      </p>

      <button
        className='bg-[#274C5B] my-[20px] rounded-[16px] p-[20px] text-white font-[700] text-[20px]'
        onClick={() => navigate('/')}
      >
        Go to Homepage
      </button>
    </div>
  </div>
  {/* <Footer/> */}
</div>
  )
}

export default Page404