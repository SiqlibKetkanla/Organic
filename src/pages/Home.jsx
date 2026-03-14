import React, { useEffect, useState } from 'react'
import img from '../assets/baner.jpg'
import mini from '../assets/mini.png'
import melkiy from '../assets/Photo.png'
import bgp from '../assets/Image.jpg'
import miniimg from '../assets/img.png'
import uchta from '../assets/Gallery.png'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => {

  

  const productData = [
    { "id": 1, "name": "Broccoli", "category": "Vegetable", "price": 13, "img": "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&auto=format&fit=crop&q=60" },
    { "id": 2, "name": "Banana", "category": "Fresh", "price": 14, "img": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=60" },
    { "id": 4, "name": "Tomato", "category": "Vegetable", "price": 17, "img": "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400&auto=format&fit=crop&q=60" },
    { "id": 7, "name": "Eggs", "category": "Fresh", "price": 17, "img": "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&auto=format&fit=crop&q=60" },
    { "id": 8, "name": "Bread Rusk", "category": "Fresh", "price": 15, "img": "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&auto=format&fit=crop&q=60" },
    { "id": 9, "name": "Carrot", "category": "Vegetable", "price": 9, "img": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&auto=format&fit=crop&q=60" },
    { "id": 10, "name": "Cucumber", "category": "Vegetable", "price": 8, "img": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&auto=format&fit=crop&q=60" },
    { "id": 11, "name": "Spinach", "category": "Greens", "price": 7, "img": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop&q=60" },
    { "id": 12, "name": "Lettuce", "category": "Greens", "price": 6, "img": "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=400&auto=format&fit=crop&q=60" },
    { "id": 13, "name": "Potato", "category": "Vegetable", "price": 5, "img": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=60" },
    { "id": 14, "name": "Onion", "category": "Vegetable", "price": 6, "img": "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&auto=format&fit=crop&q=60" },
    { "id": 15, "name": "Garlic", "category": "Vegetable", "price": 10, "img": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400&auto=format&fit=crop&q=60" },
    { "id": 16, "name": "Apple", "category": "Fruit", "price": 14, "img": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&auto=format&fit=crop&q=60" },
    { "id": 17, "name": "Orange", "category": "Fruit", "price": 12, "img": "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&auto=format&fit=crop&q=60" },
    { "id": 18, "name": "Strawberry", "category": "Fruit", "price": 16, "img": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&auto=format&fit=crop&q=60" },
    { "id": 19, "name": "Watermelon", "category": "Fruit", "price": 18, "img": "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&auto=format&fit=crop&q=60" },
    { "id": 20, "name": "Pineapple", "category": "Fruit", "price": 19, "img": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&auto=format&fit=crop&q=60" },
    { "id": 21, "name": "Mango", "category": "Fruit", "price": 20, "img": "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=60" },
    { "id": 22, "name": "Avocado", "category": "Fruit", "price": 21, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68QdXl_bSZSi2KMNpUtoGbQ7RNLfg8piWYQ&s" },
    { "id": 24, "name": "Walnut", "category": "Nuts", "price": 23, "img": "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400&auto=format&fit=crop&q=60" },
    { "id": 27, "name": "Pumpkin", "category": "Vegetable", "price": 13, "img": "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&auto=format&fit=crop&q=60" },   
    { "id": 30, "name": "Chili Pepper", "category": "Vegetable", "price": 8, "img": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&auto=format&fit=crop&q=60" },
    { "id": 32, "name": "Basil", "category": "Greens", "price": 6, "img": "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&auto=format&fit=crop&q=60" },
    { "id": 35, "name": "Pear", "category": "Fruit", "price": 13, "img": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&auto=format&fit=crop&q=60" },
    { "id": 36, "name": "Peach", "category": "Fruit", "price": 14, "img": "https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?w=400&auto=format&fit=crop&q=60" },
    { "id": 37, "name": "Plum", "category": "Fruit", "price": 12, "img": "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=400&auto=format&fit=crop&q=60" },
    { "id": 38, "name": "Kiwi", "category": "Fruit", "price": 15, "img": "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&auto=format&fit=crop&q=60" },
    { "id": 39, "name": "Grapes", "category": "Fruit", "price": 16, "img": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&auto=format&fit=crop&q=60" },
    { "id": 40, "name": "Lemon", "category": "Fruit", "price": 7, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDcVicMzsGNEI1_kWI7cXdBkpjoD9W53nXTPuqVup5yxYfto_iJFxZoAUr6d1807R0mOiV1525eK63MV38s1elqCWF1of7zK3Oa_UZA&s=10" }
  ];
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setProducts(productData); 
    } else {
      setProducts(productData.slice(0, 8)); 
    }
  }, [showAll]);





  return (
    
    <div>

<Header/>

<div className="">
  <img  src={img} alt="" />
</div>
<div className=" px-30 py-10 ">
<img src={mini} alt="" />
</div>
<div className="bg-[#F9F8F8] flex items-center gap-16 max-w-7xl mx-auto px-20 py-20">


  <img src={melkiy} className="w-[550px]" alt="" />

 
  <div className="max-w-xl">

    <p className="text-green-500 italic text-xl mb-3">About Us</p>

    <h1 className="text-4xl font-bold text-slate-700 leading-tight mb-5">
      We Believe in Working <br />
      Accredited Farmers
    </h1>

    <p className="text-gray-500 mb-8">
      Simply dummy text of the printing and typesetting industry.
      Lorem had ceased to been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley.
    </p>

  
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <img
          className="w-10"
          src="https://cdn-icons-png.flaticon.com/512/2909/2909765.png"
          alt=""
        />
      </div>

      <div>
        <h3 className="font-semibold text-lg text-slate-700">
          Organic Foods Only
        </h3>
        <p className="text-gray-500 text-sm">
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div>
    </div>

  
    <div className="flex items-start gap-4 mb-8">
      <div className="bg-white p-4 rounded-xl shadow">
        <img
          className="w-10"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
          alt=""
        />
      </div>

      <div>
        <h3 className="font-semibold text-lg text-slate-700">
          Quality Standards
        </h3>
        <p className="text-gray-500 text-sm">
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div>
    </div>

    <button className="bg-slate-700 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">
      Shop Now →
    </button>

  </div>

</div>

<section className="max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <p className="text-green-500 italic text-lg">Categories</p>
        <h2 className="text-4xl font-bold text-slate-700">Our Products</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-[#F9F8F8] p-6 rounded-2xl relative hover:shadow-lg transition">
            <span className="absolute top-4 left-4 bg-[#274C5B] text-white text-xs px-3 py-1 rounded-lg">
              {item.category}
            </span>

            <div className="flex justify-center mb-6">
              <img src={item.img} alt={item.name} className="w-40 h-40 object-contain" />
            </div>

            <h3 className="text-slate-700 font-semibold mb-2">{item.name}</h3>

            <div className="flex justify-between items-center text-sm">
              <div>
                <span className="line-through text-gray-400 mr-2">$20.00</span>
                <span className="text-[#274C5B] font-bold">${item.price}</span>
              </div>
              <div className="text-orange-400">★★★★★</div>
            </div>
          </div>
        ))}
             {!showAll && (
        <div className="items-center  mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#274C5B] text-white px-6 py-3 rounded-lg "
          >
            Learn More
          </button>
        </div>
      )}
      </div>
    </section>


<div
  className="w-full py-28 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgp})` }}
>

  <div className="max-w-5xl mx-auto text-center">

    <p className="text-green-500 italic text-lg mb-2">Testimonial</p>

    <h1 className="text-4xl font-bold text-slate-700 mb-10">
      What Our Customer Saying?
    </h1>

    <div className="flex justify-center mb-4">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        className="w-20 h-20 rounded-full object-cover"
        alt=""
      />
    </div>

    <div className="flex justify-center gap-1 text-orange-400 mb-4 text-xl">
      ★★★★★
    </div>

    <p className="text-gray-500 max-w-xl mx-auto mb-6 text-sm">
      Simply dummy text of the printing and typesetting industry.
      Lorem Ipsum simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been.
    </p>

    <h3 className="font-semibold text-slate-700">Sara Taylor</h3>
    <p className="text-gray-400 text-sm mb-10">Consumer</p>

  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

    <div className="w-40 h-40 mx-auto rounded-full border-4 border-green-300 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-slate-700">100%</h2>
      <p className="text-gray-500 text-sm">Organic</p>
    </div>

    <div className="w-40 h-40 mx-auto rounded-full border-4 border-green-300 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-slate-700">40</h2>
      <p className="text-gray-500 text-sm">Active Product</p>
    </div>

    <div className="w-40 h-40 mx-auto rounded-full border-4 border-green-300 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-slate-700">350+</h2>
      <p className="text-gray-500 text-sm">Organic Orchads</p>
    </div>

    <div className="w-40 h-40 mx-auto rounded-full border-4 border-green-300 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-slate-700">1</h2>
      <p className="text-gray-500 text-sm">Years of Farming</p>
    </div>

  </div>

</div>






<section className="w-full flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-16 py-12">
      
    
      <div className="flex-1">
        <img
          src={miniimg}
          alt="eco farm"
          className="w-full h-[500px] object-cover rounded-xl"
        />
      </div>

  
      <div className="flex-1 bg-gray-100 p-10 rounded-2xl shadow-sm">
        
        <p className="text-green-600 italic text-lg mb-2">
          Eco Friendly
        </p>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Econis is a Friendly Organic Store
        </h1>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Start with Our Company First
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Learn How to Grow Yourself
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Farming Strategies of Today
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

        </div>

      </div>
    </section>

<div className="py-10 ">
  <img src={uchta} alt="" />
</div>



<section className="px-6 lg:px-16 py-16 bg-gray-50">

 
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
        <div>
          <p className="text-green-600 italic text-lg">News</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 max-w-xl">
            Discover weekly content about organic food, & more
          </h2>
        </div>

        <button className="mt-6 lg:mt-0 border border-slate-600 px-6 py-3 rounded-xl font-medium hover:bg-slate-700 hover:text-white transition">
          More News →
        </button>
      </div>

   
      <div className="grid md:grid-cols-2 gap-10">

        
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src={img1}
              alt="lettuce"
              className="w-full h-full object-cover"
            />
          </div>

        
          <div className="absolute top-6 left-6 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center text-sm font-bold">
            25
            <span className="text-xs font-normal">Nov</span>
          </div>

    
          <div className="bg-white shadow-xl rounded-2xl p-6 w-[85%] mx-auto -mt-16 relative z-10">
            <p className="text-sm text-gray-500 mb-2">👤 By Rachi Card</p>

            <h3 className="font-bold text-lg text-slate-700 mb-2">
              The Benefits of Vitamin D & How to Get It
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum
            </p>

            <button className="bg-yellow-400 px-5 py-2 rounded-lg font-medium">
              Read More →
            </button>
          </div>
        </div>

       
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img
              src={img2}
              alt="tomato"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-6 left-6 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center text-sm font-bold">
            25
            <span className="text-xs font-normal">Nov</span>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 w-[85%] mx-auto -mt-16 relative z-10">
            <p className="text-sm text-gray-500 mb-2">👤 By Rachi Card</p>

            <h3 className="font-bold text-lg text-slate-700 mb-2">
              Our Favourite Summertime Tomato
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum
            </p>

            <button className="bg-yellow-400 px-5 py-2 rounded-lg font-medium">
              Read More →
            </button>
          </div>
        </div>

      </div>
    </section>








<Footer/>







    </div>
  )
}

export default Home