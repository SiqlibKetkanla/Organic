import React from 'react'
import Header from '../components/Header'
import bg from '../assets/usmanov/background.jpg'
import chel from '../assets/usmanov/chel.jpg'
import hand from '../assets/usmanov/hand.png'
import pod from '../assets/usmanov/photo.jpg'
import sea from '../assets/usmanov/sea.png'
// import Footer from '../components/Footer'




const ServiceSingle = () => {
  return (
    <div >
        <Header/>
        <section className='py-[50px]'>
            <div cclassName="w-[100%]   bg-no-repeat  bg-center bg-cover"
                style={{ backgroundImage: `url(${bg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',}}>
                    <h1 className='text-[#274C5B] font-[800] py-[150px] mx-auto w-[500px] text-[60px]'>Quality Standard</h1>
            </div>
        </section > 
        <section className='max-w-full py-[50px] w-[80%] mx-auto  '>
            <img src={chel} alt="Chel" />
        </section>
        <section className='max-w-full py-[50px] w-[80%] mx-auto '>
    <h1 className='text-[#274C5B] font-[800]   text-[40px]'>Organic Store Services</h1>
    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        <br /><br /> 

Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
        </section>
        <section>
    <div className="max-w-full mx-auto w-[80%] py-[50px] font-sans text-slate-800">
      

      <div className="grid gap-8 mb-16">
        

        <div className="flex flex-col md:flex-row bg-[#F8F9FA] rounded-3xl overflow-hidden shadow-sm">
          <div className="md:w-1/2">
            <img 
              src={hand} 
              alt="Hands in soil" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-[#2D4A53]">Why Organic</h2>
            <p className="text-gray-500 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat. 
              page editors now use Lorem Ipsum as their default model text, and auncover.
            </p>
          </div>
        </div>


        <div className="flex flex-col md:flex-row-reverse bg-[#F8F9FA] rounded-3xl overflow-hidden shadow-sm">
          <div className="md:w-1/2">
            <img 
              src={pod} 
              alt="Potted seedlings" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-[#2D4A53]">Speciality Produce</h2>
            <p className="text-gray-500 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat. 
              page editors now use Lorem Ipsum as their default model text, and auncover.
            </p>
          </div>
        </div>
      </div>


      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#2D4A53] mb-4">We farm your land</h1>
        <p className="text-gray-500 max-w-4xl leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page 
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using 'Content here, content here', making it look like 
          readable English.
        </p>
      </div>


      <div className="flex flex-wrap gap-4">
        <div className="flex items-center bg-[#F8F9FA] rounded-full pr-8 pl-2 py-2 gap-4 shadow-sm">
          <div className="bg-[#79B496] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
            01
          </div>
          <span className="font-bold text-[#2D4A53]">Best quality support</span>
        </div>

        <div className="flex items-center bg-[#F8F9FA] rounded-full pr-8 pl-2 py-2 gap-4 shadow-sm">
          <div className="bg-[#79B496] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
            02
          </div>
          <span className="font-bold text-[#2D4A53]">Money back guarantee</span>
        </div>
      </div>

    </div>
        </section>
         <section className='py-[20px]'>
                    <div className='w-[95%]  rounded-3xl overflow-hidden mx-auto bg-no-repeat  bg-center bg-cover'>
                        <div cclassName=" flex flex-col  items-center overflow-hidden mx-auto bg-no-repeat  bg-center bg-cover"
                        style={{ backgroundImage: `url(${sea})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '0 50px',}}>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-[#FFFF] font-[800] py-[90px] mx-auto  text-[50px]'>Subscribe to <br />our Newsletter</h1>
                                <div className='flex gap-4'>
                                    <input type="email" placeholder='Your Email Address' className='p-[20px] bg-[#FFFFFF] rounded-[16px] w-[300px]' />
                                    <button className='bg-[#274C5B]  rounded-[16px] p-[20px] text-white font-[500] text-[16px] '>Subscribe</button>
                                </div>
                            </div>
                    </div>
                    </div>
                </section > 
        {/* <Footer/> */}
    </div>
  )
}

export default ServiceSingle