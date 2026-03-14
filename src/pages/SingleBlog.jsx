import React from 'react'
import imagebg from "../assets/Image3.png"
import vector from "../assets/Vector.png"

const SingleBlog = () => {

  return (
    <div>
      <main>
        <section className='w-full h-[898px] bg-cover bg-center bg-no-repeat flex justify-center items-end  ' style={{ backgroundImage: `url(${imagebg})` }}>
          <div id="card" className='w-[1400px] p-[80px] bg-white rounded-[30px] relative bottom-[-200px] '>
            <div className=' flex gap-[30px] '>
              <p className='font-semibold text-[18px] text-[#274C5B] '>Posted On:January 6, 2022</p>
              <div className='flex justify-center items-center gap-[10px]'><img src={vector} alt="img" /> <p className='font-normal text-[18px] text-[#274C5B]'>By Rachi Card</p></div>
            </div>
            <p className='font-extrabold text-[70px] text-[#274C5B] '>Research More Organic Food</p>
            <p className='font-normal text-[18px] text-[#525C60] w-[915px] '>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
          </div>


        </section>

        <section className=' pt-[300px] mx-auto'>
          <div id="container" className='max-w-full w-[85%] mx-auto flex justify-center '>
            <div className='w-[936px]'>
              <p className='font-normal text-[18px] text-[#525C60] w-[936px]'>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
              <p className='font-extrabold text-[50px] text-[#274C5B] '>Preferred Form of Vitamin D?</p>
              <p className='font-normal text-[18px] text-[#525C60] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <ul className='flex flex-col gap-[20px] list-disc p-[20px]'>
                <li className='font-normal text-[18px] text-[#525C60]'> Publishing packages and web pageLorem Ipsum as their default</li>
                <li className='font-normal text-[18px] text-[#525C60]'> Content here, content here', making it look like readable</li>
                <li className='font-normal text-[18px] text-[#525C60]'> Packages and web pageLorem Ipsum as their default</li>
              </ul>
              <div className='w-[936px] p-[55px] bg-[#F1EDEA] rounded-[30px] my-[40px] '>
                <p className='font-bold text-[20px] text-[#274C5B] text-center '>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</p>
              </div>

              <p className='font-extrabold text-[35px] text-[#274C5B] '>Make perfect organic product with us</p>
              <p className='font-normal text-[18px] text-[#525C60] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <ol className=' flex flex-col gap-[15px] p-[25px] list-decimal my-[20px]'>
                <li className='font-normal text-[18px] text-[#525C60] '>Publishing packages and web pageLorem Ipsum as their default</li>
                <li className='font-normal text-[18px] text-[#525C60] '>Content here, content here', making it look like readable</li>
                <li className='font-normal text-[18px] text-[#525C60] '>Packages and web pageLorem Ipsum as their default</li>
                <li className='font-normal text-[18px] text-[#525C60] '>more-or-less normal distribution of letters</li>
                
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SingleBlog