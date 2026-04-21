import Svet from "./assets/Svet.svg"
import Xat from "./assets/Xat.svg"
import Fron from "./assets/Fron.svg"
import Test from "./assets/Test.svg"
import Uchar from "./assets/Uchar.svg"
import Klyuch from "./assets/Klyuch.svg"



export default function Process() {

    return (
        <div className="px-[30px] py-[96px] flex flex-col md:px-[160px]  ">
            <div className="flex flex-col gap-[16px]">
            <h4 className='text-[#000000] text-[14px]'>Our Process</h4>
            <h2 className='text-[#232536] text-[48px] pb-[40px]'>The process we are working <br /> With Our client Worldwide</h2>
            <p className='text-[#232536] text-[16px] pb-[68px]'>Through True Rich Attended does no end it his mother since real had half every <br /> him case in packages enquire we up ecstatic unsatiable.</p>

           </div>

           
              <div className="grid grid-cols-1  gap-3 md:grid-cols-3 md:gap-[48px]">
                          <div className="flex gap-[16px] border hover:border-[#2325362B] bg-[#FFFFFF] pl-[32px] pr-[112px] py-[32px]">
                              <div><img src={Svet} alt="" /></div>
                              <div className="flex flex-col gap-2">
                                  <h3 className='text-[#000000] text-[16px]'>Discover</h3>
                                  <p className='text-[#232536] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                              </div>
                          </div>
              
                          <div className="flex gap-[16px] border hover:border-[#2325362B] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                              <div><img src={Xat} alt="" /></div>
                              <div className="flex flex-col gap-2">
                                  <h3 className='text-[#000000] text-[16px]'>Designing</h3>
                                  <p className='text-[#232536] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                              </div>
                          </div>
              
                          <div className="flex gap-[16px] border hover:border-[#2325362B] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                              <div><img src={Fron} alt="" /></div>
                              <div className="flex flex-col gap-2">
                                  <h3 className='text-[#000000] text-[16px]'>Development</h3>
                                  <p className='text-[#232536] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                              </div>
                          </div>


                           <div className="flex gap-[16px] border hover:border-[#2325362B] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                              <div><img src={Test} alt="" /></div>
                              <div className="flex flex-col gap-2">
                                  <h3 className='text-[#000000] text-[16px]'>Testing</h3>
                                  <p className='text-[#232536] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                              </div>
                          </div>

                           <div className="flex gap-[16px] border hover:border-[#2325362B] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                              <div><img src={Uchar} alt="" /></div>
                              <div className="flex flex-col gap-2">
                                  <h3 className='text-[#000000] text-[16px]'>Deployment</h3>
                                  <p className='text-[#232536] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                              </div>
                          </div>

                           <div className="flex gap-[16px] border hover:border-[#2325362B] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                              <div><img src={Klyuch} alt="" /></div>
                              <div className="flex flex-col gap-2">
                                  <h3 className='text-[#000000] text-[16px]'>Maintenance</h3>
                                  <p className='text-[#232536] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                              </div>
                          </div>
            
           </div>
        </div>
    )
    
}