import React, { useState } from 'react'
import bannerImage from '../assets/Banner (1).jpg'
import centerImage from '../assets/Photo.png'
import dairyIcon from '../assets/Icon (3).png'
import storeIcon from '../assets/Icon (4).png'
import deliveryIcon from '../assets/Icon (5).png'
import agriculturalIcon from '../assets/Icon (6).png'
import organicIcon from '../assets/Icon (8).png'
import freshIcon from '../assets/Icon (7).png'
import arrowIcon from '../assets/Aerrow (1).png'
import videoBackground from '../assets/Photo (4).jpg'
import playIcon from '../assets/Polygon.png'

const Service = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="bg-[#f9f8f8]">
      <section className="w-full">
        <img
          src={bannerImage}
          alt="Service banner"
          className="w-full h-[220px] sm:h-[280px] lg:h-[360px] object-cover"
        />
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col items-center text-center">
          <p className="text-[18px] lg:text-[20px] text-[#7eb693] italic mb-3">What we Grow</p>
          <h1 className="text-[32px] sm:text-[38px] lg:text-[46px] font-extrabold text-[#274c5b] leading-[1.2] mb-6">
            Better Agriculture for
            <br />
            Better Future
          </h1>
        </div>
        <div className="container mx-auto px-4 lg:px-0 mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(260px,320px)_1.2fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 text-right">
            <div className="flex items-start justify-end gap-4">
              <div>
                <p className="text-[18px] lg:text-[20px] font-semibold text-[#274c5b]">
                  Dairy Products
                </p>
                <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60]">
                  Sed ut perspiciatis unde omnis iste natus error
                  <br />
                  sit voluptatem accusantium doloremque laudantium.
                  <br />
                  Sed ut perspiciatis.
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={dairyIcon} alt="Dairy products icon" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex items-start justify-end gap-4">
              <div>
                <p className="text-[18px] lg:text-[20px] font-semibold text-[#274c5b]">
                  Store Services
                </p>
                <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60]">
                  Sed ut perspiciatis unde omnis iste natus error
                  <br />
                  sit voluptatem accusantium doloremque laudantium.
                  <br />
                  Sed ut perspiciatis.
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={storeIcon} alt="Store services icon" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex items-start justify-end gap-4">
              <div>
                <p className="text-[18px] lg:text-[20px] font-semibold text-[#274c5b]">
                  Delivery Services
                </p>
                <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60]">
                  Sed ut perspiciatis unde omnis iste natus error
                  <br />
                  sit voluptatem accusantium doloremque laudantium.
                  <br />
                  Sed ut perspiciatis.
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={deliveryIcon} alt="Delivery services icon" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={centerImage}
              alt="Agriculture bag"
              className="max-w-xs lg:max-w-sm w-full h-auto rounded-[30px] shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={agriculturalIcon} alt="Agricultural services icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[18px] lg:text-[20px] font-semibold text-[#274c5b]">
                  Agricultural Services
                </p>
                <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60]">
                  Sed ut perspiciatis unde omnis iste natus error
                  <br />
                  sit voluptatem accusantium doloremque laudantium.
                  <br />
                  Sed ut perspiciatis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={organicIcon} alt="Organic products icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[18px] lg:text-[20px] font-semibold text-[#274c5b]">
                  Organic Products
                </p>
                <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60]">
                  Sed ut perspiciatis unde omnis iste natus error
                  <br />
                  sit voluptatem accusantium doloremque laudantium.
                  <br />
                  Sed ut perspiciatis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={freshIcon} alt="Fresh vegetables icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[18px] lg:text-[20px] font-semibold text-[#274c5b]">
                  Fresh Vegetables
                </p>
                <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60]">
                  Sed ut perspiciatis unde omnis iste natus error
                  <br />
                  sit voluptatem accusantium doloremque laudantium.
                  <br />
                  Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center justify-center gap-3 px-10 py-3 rounded-[12px] border border-[#274c5b] bg-transparent text-[#274c5b] text-sm lg:text-base font-semibold shadow-none">
            Explore More
            <span className="flex items-center justify-center">
              <img src={arrowIcon} alt="Arrow icon" className="w-4 h-4 object-contain" />
            </span>
          </button>
        </div>
      </section>
      <section
        className="relative py-24 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${videoBackground})` }}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
          <p className="text-[18px] lg:text-[20px] text-[#7eb693] italic mb-3">Organic Only</p>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] font-extrabold text-[#274c5b] mb-4">
            Everyday Fresh &amp; Clean
          </h2>
          <p className="text-[13px] lg:text-[14px] leading-[1.8] text-[#525c60] max-w-xl mx-auto">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
            the industry&apos;s standard dummy text ever since the
          </p>
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="mt-10 inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#7eb693] shadow-xl hover:bg-[#6aa582] transition-colors"
          >
            <img
              src={playIcon}
              alt="Play video"
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain pointer-events-none"
            />
          </button>
        </div>

        {isVideoOpen && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl leading-none"
              >
                ×
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7Dxu97R077w?si=FPn6caz_OZOlHxeU&autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Service