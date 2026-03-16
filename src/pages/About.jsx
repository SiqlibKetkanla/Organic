import React from 'react'
import heroImage from '../assets/Image.png'
import heroSideImage from '../assets/Image (1).png'
import tractorIcon from '../assets/Tractor.png'
import chemicalIcon from '../assets/Chemical Plant.png'
import checkIcon from '../assets/Icon.png'
import cardSecurityIcon from '../assets/Card Security.png'
import phoneTimeIcon from '../assets/Phone Time.png'
import naturalFoodIcon from '../assets/Natural Food.png'
import cartIcon from '../assets/Icon (1).png'
import teamOne from '../assets/Photo.jpg'
import teamTwo from '../assets/Photo (1).jpg'
import teamThree from '../assets/Photo (2).jpg'
import instaIcon from '../assets/Insta.png'
import twitterIcon from '../assets/Twiter.png'
import fbIcon from '../assets/Fb.png'
import offerOne from '../assets/Image (2).png'
import offerTwo from '../assets/Image (3).png'
import offerThree from '../assets/Image (4).png'

const About = () => {
  return (
    <div className="bg-[#f5fbf9]">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={heroSideImage}
                alt="Fresh organic vegetables"
                className="max-w-full h-auto rounded-[40px] shadow-xl"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-lg text-[#7eb693] italic mb-3">
                About Us
              </p>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#274c5b] leading-snug mb-6">
                We do Creative Things
                <br />
                for Success
              </h1>

              <p className="text-sm lg:text-base text-[#525c60] leading-relaxed mb-4">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                printer took a galley.
              </p>
              <p className="text-sm lg:text-base text-[#525c60] leading-relaxed mb-8">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                printer took a galley.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffffff] shadow-md flex items-center justify-center">
                    <img
                      src={tractorIcon}
                      alt="Modern agriculture equipment"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#274c5b] text-sm lg:text-base">
                      Modern Agriculture
                    </p>
                    <p className="text-xs lg:text-sm text-[#525c60]">Equipment</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffffff] shadow-md flex items-center justify-center">
                    <img
                      src={chemicalIcon}
                      alt="No growth hormones"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#274c5b] text-sm lg:text-base">
                      No growth hormones
                    </p>
                    <p className="text-xs lg:text-sm text-[#525c60]">are used</p>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#274c5b] text-white text-sm lg:text-base font-semibold shadow-md hover:bg-[#1d3741] transition-colors">
                Explore More
                <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#335b6b] text-xs">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-[#7eb693] italic mb-3">
              Why Choose us?
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#274c5b] leading-snug mb-6">
              We&apos;re Qualified &
              <br />
              Professional Organic Farm
            </h2>
            <p className="text-sm lg:text-base text-[#525c60] leading-relaxed mb-6">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
              took a galley.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-7 h-7 rounded-full bg-[#e4f1e8] flex items-center justify-center">
                  <img src={checkIcon} alt="bullet" className="w-3.5 h-3.5 object-contain" />
                </span>
                <div>
                  <p className="font-semibold text-[#274c5b] text-sm lg:text-base">
                    100% Natural Product
                  </p>
                  <p className="text-xs lg:text-sm text-[#525c60]">
                    Simply dummy text of the printing and typesetting industry Lorem Ipsum.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-7 h-7 rounded-full bg-[#e4f1e8] flex items-center justify-center">
                  <img src={checkIcon} alt="bullet" className="w-3.5 h-3.5 object-contain" />
                </span>
                <div>
                  <p className="font-semibold text-[#274c5b] text-sm lg:text-base">
                    Increases resistance
                  </p>
                  <p className="text-xs lg:text-sm text-[#525c60]">
                    Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Organic farm illustration"
              className="w-full max-w-md rounded-[30px] shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#f5fbf9]">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-[30px] py-10 px-8 shadow-sm flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f5fbf9] flex items-center justify-center">
                <img src={cartIcon} alt="Return policy icon" className="w-9 h-9 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-[#274c5b]">Return Policy</p>
              <p className="text-xs lg:text-sm text-[#525c60]">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="bg-white rounded-[30px] py-10 px-8 shadow-sm flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f5fbf9] flex items-center justify-center">
                <img src={naturalFoodIcon} alt="Fresh icon" className="w-9 h-9 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-[#274c5b]">100% Fresh</p>
              <p className="text-xs lg:text-sm text-[#525c60]">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="bg-white rounded-[30px] py-10 px-8 shadow-sm flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f5fbf9] flex items-center justify-center">
                <img src={phoneTimeIcon} alt="Support icon" className="w-9 h-9 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-[#274c5b]">Support 24/7</p>
              <p className="text-xs lg:text-sm text-[#525c60]">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="bg-white rounded-[30px] py-10 px-8 shadow-sm flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f5fbf9] flex items-center justify-center">
                <img src={cardSecurityIcon} alt="Secured payment icon" className="w-9 h-9 object-contain" />
              </div>
              <p className="text-base lg:text-lg font-semibold text-[#274c5b]">Secured Payment</p>
              <p className="text-xs lg:text-sm text-[#525c60]">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-lg text-[#7eb693] italic mb-3">Team</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#274c5b] mb-4">
              Our Organic Experts
            </h2>
            <p className="text-sm lg:text-base text-[#525c60] leading-relaxed">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-transparent">
              <div className="rounded-[30px] overflow-hidden">
                <img src={teamOne} alt="Giovani Bacardo" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#f9f8f8] rounded-[30px] px-7 py-6 mt-[-20px] mx-4 shadow-md flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-[#274c5b]">
                    Giovani Bacardo
                  </p>
                  <p className="mt-2 text-base font-bold text-[#7eb693] italic">Farmer</p>
                </div>
                <div className="flex items-center gap-3 text-[#274c5b]">
                  <img src={instaIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                  <img src={fbIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                  <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-contain" />
                </div>
              </div>
            </div>
            <div className="bg-transparent">
              <div className="rounded-[30px] overflow-hidden">
                <img src={teamTwo} alt="Marianne Loreno" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#f9f8f8] rounded-[30px] px-7 py-6 mt-[-20px] mx-4 shadow-md flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-[#274c5b]">
                    Marianne Loreno
                  </p>
                  <p className="mt-2 text-base font-bold text-[#7eb693] italic">Designer</p>
                </div>
                <div className="flex items-center gap-3 text-[#274c5b]">
                  <img src={instaIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                  <img src={fbIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                  <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-contain" />
                </div>
              </div>
            </div>
            <div className="bg-transparent">
              <div className="rounded-[30px] overflow-hidden">
                <img src={teamThree} alt="Riga Pelore" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#f9f8f8] rounded-[30px] px-7 py-6 mt-[-20px] mx-4 shadow-md flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-[#274c5b]">
                    Riga Pelore
                  </p>
                  <p className="mt-2 text-base font-bold text-[#7eb693] italic">Farmer</p>
                </div>
                <div className="flex items-center gap-3 text-[#274c5b]">
                  <img src={instaIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                  <img src={fbIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                  <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#274c5b]">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-center mb-12">
            <p className="text-lg text-[#7eb693] italic mb-3">About Us</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">What We Offer for You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-[220px] aspect-square bg-white rounded-[30px] flex items-center justify-center overflow-hidden shadow-md">
                <img src={offerOne} alt="Spicy" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm lg:text-base font-medium text-white">Spicy</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-[220px] aspect-square bg-white rounded-[30px] flex items-center justify-center overflow-hidden shadow-md">
                <img src={offerTwo} alt="Nuts & Feeds" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm lg:text-base font-medium text-white">Nuts & Feeds</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-[220px] aspect-square bg-white rounded-[30px] flex items-center justify-center overflow-hidden shadow-md">
                <img src={offerThree} alt="Fruits" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm lg:text-base font-medium text-white">Fruits</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-[220px] aspect-square bg-white rounded-[30px] flex items-center justify-center overflow-hidden shadow-md">
                <img src={heroImage} alt="Vegetable" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm lg:text-base font-medium text-white">Vegetable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About