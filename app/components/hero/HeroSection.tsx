import React from 'react';
import './hero-section.css';

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <>
        <div className="heroSection">
            <center>
                <h3 className='font-semibold text-5xl ' style={{fontFamily: "Poppins, serif"}}>Now express more thoughts freely, hehe! :D</h3>
                <input type="button" value="Start right now!" className='mt-6 hover:bg-gray-800 cursor-pointer transition-all px-3 py-2 bg-black text-white rounded-[8px]' onClick={() => {
                    alert("bro seriously? it's just kinda below and you can't even use it? you really need a button to move you there, like what is this dude? stop procrastinating -Armaan!");
                    window.scrollTo(0, 200);
                }}/>
            </center>
        </div>
    </>
  )
}

export default HeroSection