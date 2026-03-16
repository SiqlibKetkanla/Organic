import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
];

const ShopSingle = () => {
  const { id } = useParams();
  const [number, setNumber] = useState(1);

  const product = productData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  if (!product) {
    return <h1 className="text-center text-2xl mt-20">Product not found</h1>;
  }

  let relatedProducts = productData.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  if (relatedProducts.length < 4) {
    const extraProducts = productData.filter(
      (item) => item.category !== product.category && item.id !== product.id,
    );

    relatedProducts = [...relatedProducts, ...extraProducts];
  }

  relatedProducts = relatedProducts.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="border rounded-xl shadow-sm p-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-100 rounded-lg p-10 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-72 object-contain"
          />
        </div>

        <div>
          <span className="text-sm text-gray-400 uppercase">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-[#274C5B] mt-2">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-gray-700 mt-4">
            ${product.price}.00
          </p>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Fresh organic product directly from our farm.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg overflow-hidden text-black">
              <button className="px-3 py-2 bg-gray-100" onClick={decrease}>
                -
              </button>

              <input
                type="text"
                value={number}
                readOnly
                className="w-12 text-center outline-none"
              />

              <button className="px-3 py-2 bg-gray-100" onClick={increase}>
                +
              </button>
            </div>

            <button className="bg-[#274C5B] text-white px-6 py-3 rounded-lg hover:bg-[#1f3f4c]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div role="tablist" className="tabs tabs-boxed justify-center">
          <input
            type="radio"
            name="tabs"
            role="tab"
            className="tab"
            aria-label="Product Description"
            defaultChecked
          />

          <div className="tab-content max-w-3xl mx-auto p-6 text-gray-600">
            Welcome to the world of natural and organic products. Our vegetables
            are fresh and healthy for daily nutrition.
          </div>

          <input
            type="radio"
            name="tabs"
            role="tab"
            className="tab"
            aria-label="Additional Info"
          />

          <div className="tab-content max-w-3xl mx-auto p-6 text-gray-600">
            Weight: 1kg <br />
            Origin: Organic Farm <br />
            Quality: Premium Fresh
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Link key={item.id} to={`/shop/${item.id}`}>
              <div className="bg-[#F9F8F8] p-6 rounded-2xl relative hover:shadow-lg transition">
                <span className="absolute top-4 left-4 bg-[#274C5B] text-white text-xs px-3 py-1 rounded-lg">
                  {item.category}
                </span>

                <div className="flex justify-center mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-40 h-40 object-contain"
                  />
                </div>

                <h3 className="text-slate-700 font-semibold mb-2">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="line-through text-gray-400 mr-2">
                      $20.00
                    </span>

                    <span className="text-[#274C5B] font-bold">
                      ${item.price}
                    </span>
                  </div>

                  <div className="text-orange-400">★★★★★</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
