import Raketa from "./assets/Rakete.svg"
import gul from "./assets/gul.svg"
import navish from "./assets/navish.svg"




export default function Expertise() {
    return (
       <div className="px-[30px] bg-[#ECF8F9] pt-[142px] pb-[96px] flex flex-col gap-4 md:px-[160px] md:flex-row md:justify-between  ">
           <div className="flex flex-col gap-[20px]">
            <h4 className='text-[#000000] text-[14px]'>Our expertise</h4>
            <h2 className='text-[#232536] text-[48px]'>We want to get local  identification in every  corner <br /> of the world  in this era of global citizenship</h2>
            <p className='text-[#5D5F6D] text-[16px]'>Through True Rich Attended does no end it his mother since real had half <br /> every him case in packages enquire we up ecstatic unsatiable saw his giving <br /> Remain expense you position concluded. </p>

           </div>
           <div className="flex flex-col gap-2">
            <div className="flex gap-[16px] bg-[#FFFFFF] pl-[32px] pr-[112px] py-[32px]">
                <div><img src={Raketa} alt="" /></div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-[#000000] text-[16px]'>On Time Delivery</h3>
                    <p className='text-[#5D5F6D] text-[14px]'>Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                </div>
            </div>

            <div className="flex gap-[16px] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                <div><img src={gul} alt="" /></div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-[#000000] text-[16px]'>Best Quality</h3>
                    <p className='text-[#5D5F6D] text-[14px]'>Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                </div>
            </div>

            <div className="flex gap-[16px] bg-[#FFFFFF] px-[32px] pr-[112px] py-[32px]">
                <div><img src={navish} alt="" /></div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-[#000000] text-[16px]'>Support Assist</h3>
                    <p className='text-[#5D5F6D] text-[14px]'>Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
                </div>
            </div>


           </div>
       </div>
    )
}