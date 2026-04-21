import Negr from "./assets/Negr.svg"
import Oqtanli from "./assets/Oqtanli.svg"
import Achki from "./assets/Achki.svg"
import Tayoqcha from "./assets/Tayoqcha.png"



export default function Testimonials() {
    
    return (
            <div className="px-[30px] py-[110px] gap-[20px] flex flex-col md:px-[160px] md:flex-row  md:justify-between">
                <div className="flex flex-col gap-[18px]">
            <h4 className='text-[#000000] text-[48px]'>Our customers love  what we do</h4>
            <h2 className='text-[#232536] text-[18px]'>Transform your idea into reality with finsweet  With Our client <br /> Worldwide</h2>
            <p className='text-[#232536] text-[16px]'>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. </p>
             <div className="flex gap-2">
                <img src={Negr} alt="" />
                <img src={Oqtanli} alt="" />
                <img src={Achki} alt="" />
            </div>
            <h5 className='text-[#000000] text-[12px]'>30+ Customer Reviews</h5>
           </div>
           
           <div className="flex flex-row gap-[40px]">
            <div><img src={Tayoqcha} alt="" /></div>
            <div className="flex flex-col gap-[30px] justify-center">
            <p className='text-[#232536] text-[24px]'>Finsweet has been a wonderful partner <br /> to work with. I have been a customer <br /> now for the past few months now and I <br /> have had nothing but positive experiences!</p>
            <div flex flex-row>
                <div><img src={Negr} alt="" /></div>
                <div className="flex flex-col gap-2">
                    <h4 className='text-[#232536] text-[16px]'>Johnny Andro</h4>
                    <p className='text-[#232536] text-[14px]'>Director, Company</p>
                </div>
            </div>
            </div>
           </div>
            </div>
    
    )
} 