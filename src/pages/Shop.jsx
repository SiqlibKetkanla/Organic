
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "../components/Header.jsx";




import BgImage from "../assets/BGRasmchi.png"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Shop = () => {

  const productData = [
    {
      id: 1,
      name: "Broccoli",
      category: "Vegetable",
      price: 13,
      img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fresh",
      price: 14,
      img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Tomato",
      category: "Vegetable",
      price: 17,
      img: "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 7,
      name: "Eggs",
      category: "Fresh",
      price: 17,
      img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 8,
      name: "Bread Rusk",
      category: "Fresh",
      price: 15,
      img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 9,
      name: "Carrot",
      category: "Vegetable",
      price: 9,
      img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 10,
      name: "Cucumber",
      category: "Vegetable",
      price: 8,
      img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 11,
      name: "Spinach",
      category: "Greens",
      price: 7,
      img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 12,
      name: "Lettuce",
      category: "Greens",
      price: 6,
      img: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 13,
      name: "Potato",
      category: "Vegetable",
      price: 5,
      img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 14,
      name: "Onion",
      category: "Vegetable",
      price: 6,
      img: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 15,
      name: "Garlic",
      category: "Vegetable",
      price: 10,
      img: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 16,
      name: "Apple",
      category: "Fruit",
      price: 14,
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 17,
      name: "Orange",
      category: "Fruit",
      price: 12,
      img: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 18,
      name: "Strawberry",
      category: "Fruit",
      price: 16,
      img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 19,
      name: "Watermelon",
      category: "Fruit",
      price: 18,
      img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 20,
      name: "Pineapple",
      category: "Fruit",
      price: 19,
      img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 21,
      name: "Mango",
      category: "Fruit",
      price: 20,
      img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 22,
      name: "Avocado",
      category: "Fruit",
      price: 21,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68QdXl_bSZSi2KMNpUtoGbQ7RNLfg8piWYQ&s",
    },
    {
      id: 24,
      name: "Walnut",
      category: "Nuts",
      price: 23,
      img: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 27,
      name: "Pumpkin",
      category: "Vegetable",
      price: 13,
      img: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 30,
      name: "Chili Pepper",
      category: "Vegetable",
      price: 8,
      img: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 32,
      name: "Basil",
      category: "Greens",
      price: 6,
      img: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 35,
      name: "Pear",
      category: "Fruit",
      price: 13,
      img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 36,
      name: "Peach",
      category: "Fruit",
      price: 14,
      img: "https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 37,
      name: "Plum",
      category: "Fruit",
      price: 12,
      img: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 38,
      name: "Kiwi",
      category: "Fruit",
      price: 15,
      img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 39,
      name: "Grapes",
      category: "Fruit",
      price: 16,
      img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&auto=format&fit=crop&q=60",
    },

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
      <Header />


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={BgImage} alt="" className="w-full h-[400px] object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/previews/038/049/181/non_2x/organic-food-horizontal-banner-template-design-vector.jpg" alt="" className="w-full h-[400px] object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={BgImage} alt="" className="w-full h-[400px] object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/previews/038/049/181/non_2x/organic-food-horizontal-banner-template-design-vector.jpg" alt="" className="w-full h-[400px] object-cover" />
        </SwiperSlide>
      </Swiper>



      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <p className="text-green-500 italic text-lg">Categories</p>
          <h2 className="text-4xl font-bold text-slate-700">Our Products</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
         {products.map((item) => (
  <Link to={`/shop/${item.id}`} key={item.id}>
    <div className="bg-[#F9F8F8] p-6 rounded-2xl relative hover:shadow-lg transition">

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
  </Link>
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

    



   
    </div>
  );
};

export default Shop;
