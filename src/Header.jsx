import Suhbat from './assets/Header_Image.png'
import ipsum from './assets/ipsum.svg'
import ipsu from './assets/ipsu.svg'
import ips from './assets/ips.svg'
import ip from './assets/ip.svg'
import summ from './assets/summ.svg'

export default function Header() {
    
    return (
        <div className="flex flex-col  bg-[#232536] px-[30px] md:px-[160px]">
         <div className="flex flex-col  items-center bg-[#232536] md:flex-row md:justify-between ">
           <div className='flex flex-col gap-[27px]'>
           <h1 className='text-[#FFFFFF] text-[56px]'>Transform Your Idea <br /> Into Reality with <br /> Finsweet</h1>
           <p className='text-[#FFFFFF] text-[16px]'>The entire Finsweet team knows what's good with Webflow and <br /> you can too with 1 week and  a good attitude.</p>
           <button className='text-[#FFFFFF] text-4 bg-[#444CFC] px-[32px] py-[20px] max-w-[200px]'>Request Quote</button>
           </div>
           <div><img className='pt-[96px] pb-[32px]' src={Suhbat} alt="" /></div>
        </div>
        <div className='grid grid-cols-3 items-center md:grid-cols-6'>
            <div className='flex flex-col gap-1'>
                <button className='text-[#FFFFFF] text-[14px] '>Our Clients</button>
                <button className='text-[#FFFFFF] text-[18px]  '>We've Worked with</button>
            </div>
            <div>
                <a href="#"><img src={ipsum} alt="" /></a>
               
            </div>
            <div>
               <a href="#"><img src={ipsu} alt="" /></a>
               
            </div>
            <div>
                <a href="#"><img src={ips} alt="" /></a>
               
            </div>
            <div>
             <a href="#"><img src={ip} alt="" /></a>
            </div>
            <div>
                <a href="#"><img src={summ} alt="" /></a>
                
            </div>
        </div>
        </div>
    )
}