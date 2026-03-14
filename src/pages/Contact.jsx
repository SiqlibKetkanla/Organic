import React, { useEffect, useState } from 'react'
import HeroImg from "../assets/Background.jpg"
import img1 from "../assets/Imagexob.png"
import cardichImg from "../assets/Icon.png"
import locn from "../assets/Iocnxob.png"
import p1 from "../assets/1.png"
import p2 from "../assets/2.png"
import p3 from "../assets/3.png"
import p4 from "../assets/4.png"
import img from "../assets/1 (1).png"



const Contact = () => {
    const [fullName, setFullName] = useState("")
    const [yourEmail, setYourEmail] = useState("")
    const [company, setCompany] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [randomSon, setRandomSon] = useState()
    const [kod, setKod] = useState("")




    const send = () => {
        if (fullName !== "" && yourEmail !== "" && company !== "" && subject !== "" && message !== "") {
            document.getElementById('my_modal_1').showModal()
            const code = Math.floor(Math.random() * 999999)

            setRandomSon(code)
            console.log(randomSon);

            const token = "8319088520:AAGz4SGlzGiiewl0SPIkXaAYEqAzF7zgyvc";
            const chatId = "-5163545027";

            fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `user : ${fullName} \n email : ${yourEmail} \n Tasdiqlash kodi --> ${code}`
                })
            });


        } else {
            alert("Iltimos bosh joylarni toldiring..!")
        }

    }






    const tasdiqlash = () => {
        if (randomSon === +kod) {
            alert("Tasdiqlash kodi togri..!")
        } else {
            alert("Tasdiqlash kodi notogri..!")
        }
    }
    return (
        <div>
            <main>
                <section style={{ backgroundImage: `url(${HeroImg})` }} className={`w-full h-[450px] flex justify-center items-center`}>
                    <p className='font-[800] text-[70px] text-[#274C5B] '>Contact Us</p>
                </section>

                <section className='py-[200px] '>
                    <div id="container" className='max-w-full w-[85%] mx-auto '>
                        <div id="hero_wrspper" className='flex justify-between items-center gap-[75px] '>
                            <img className='w-[623px]' src={img1} alt="img" />
                            <div id="wrapper" className='flex flex-col gap-[34px] items-start '>
                                <p className='font-[800] text-[50px] text-[#274C5B] '>We'd love to talk about how we can work together.</p>
                                <p className='font-normal text-[19px] text-[#525C60] '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <div className='flex flex-col gap-4.25 '>
                                    <div className='flex justify-center gap-5 items-center'>
                                        <img className='w-[89px]' src={cardichImg} alt="img" />
                                        <div className='flex flex-col gap-1 '>
                                            <p className='font-extrabold text-[25px] text-[#274C5B] '>Massege
                                            </p>
                                            <p className='font-normal text-[#525C60] text-[18px] '>support@organic.com</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center gap-5 items-center'>
                                        <img className='w-[89px]' src={locn} alt="img" />
                                        <div className='flex flex-col gap-1 '>
                                            <p className='font-extrabold text-[25px] text-[#274C5B] '>Massege
                                            </p>
                                            <p className='font-normal text-[#525C60] text-[18px] '>support@organic.com</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex items-center justify-center gap-3.75 '>
                                    <img src={p1} alt="img" />
                                    <img src={p2} alt="img" />
                                    <img src={p3} alt="img" />
                                    <img src={p4} alt="img" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div id="container" className='max-w-full w-[85%] mx-auto flex justify-center items-center '>
                        <div id="card" className='w-[514px] h-[514px] bg-white p-[50px] rounded-[50px] flex flex-col items-start justify-center gap-2 '>
                            <p className='font-normal text-[36px] text-[#7EB693] '>Location</p>
                            <p className='font-extrabold text-[50px] text-[#274C5B] '>Our Farms</p>
                            <p className='font-normal text-[18px] text-[#525C60] '>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
                            <img src={img} alt="img" />
                            <img src={img} alt="img" />
                        </div>
                    </div>
                </section>

                <section className='py-[30px] '>
                    <div id="container" className='max-w-full w-[85%] mx-auto'>
                        <form action="" className='flex flex-wrap justify-center items-center gap-[50px] '>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Full Name" className='font-semibold text-[18px] text-[#274C5B] '>Full Name*</label>
                                <input onChange={(e) => setFullName(e.target.value)} id='Full Name' className='w-[569px] outline-none border-2 border-[#ABABAB] h-[80px] px-[25px] flex items-center rounded-2xl font-normal text-[18px] text-[#ABABAB] ' placeholder='Your Email Address' type="text" />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Full Name" className='font-semibold text-[18px] text-[#274C5B] '>Your Email*</label>
                                <input onChange={(e) => setYourEmail(e.target.value)} id='Full Name' className='w-[569px] outline-none border-2 border-[#ABABAB] h-[80px] px-[25px] flex items-center rounded-2xl font-normal text-[18px] text-[#ABABAB] ' placeholder='example@yourmail.com' type="text" />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Full Name" className='font-semibold text-[18px] text-[#274C5B] '>Company*</label>
                                <input onChange={(e) => setCompany(e.target.value)} id='Full Name' className='w-[569px] outline-none border-2 border-[#ABABAB] h-[80px] px-[25px] flex items-center rounded-2xl font-normal text-[18px] text-[#ABABAB] ' placeholder='yourcompany name here' type="text" />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Full Name" className='font-semibold text-[18px] text-[#274C5B] '>Subject*</label>
                                <input onChange={(e) => setSubject(e.target.value)} id='Full Name' className='w-[569px] outline-none border-2 border-[#ABABAB] h-[80px] px-[25px] flex items-center rounded-2xl font-normal text-[18px] text-[#ABABAB] ' placeholder='how can we help' type="text" />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Full Name" className='font-semibold text-[18px] text-[#274C5B] '>Message*</label>
                                <textarea onChange={(e) => setMessage(e.target.value)}
                                    id='Full Name'
                                    className='w-[1184px] outline-none border-2 border-[#ABABAB] px-[25px] py-[20px] flex rounded-2xl font-normal text-[18px] text-[#ABABAB] resize-none'
                                    placeholder='hello there,i would like to talk about how to...'
                                    rows={8}
                                />
                            </div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button type='button' className="btn font-[700] text-[20px] text-[#fff] w-[220px] py-[30px] bg-[#274C5B] rounded-[16px]" onClick={send}>Send Message</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Tasdiqlash kodini kiriting..!</h3>
                                    <input onChange={(e) => setKod(e.target.value)} className='input outline-none m-[10px]' placeholder='Tasdiqlash kodi..!' type="text" />
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button onClick={tasdiqlash} className="btn">Yuborish</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact