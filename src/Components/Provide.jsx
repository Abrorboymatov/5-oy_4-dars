import Bola from '../assets/Bola.png'
import Pitichka from '../assets/Pitichka.svg'

export default function Provide() {
    return (
        <div className="pt-[80px] px-[30px] grid grid-cols-1 items-center pb-[80px] gap-[30px] md:grid-cols-2 md:px-[160px] md:pb-[130px]">
             <div><img src={Bola} alt="" /></div>
             <div className='flex flex-col gap-[20px]'>
                <h3 className='text-[#0B132A] text-[35px]'>We Provide Many <br /> Features You Can Use</h3>
                <p className='text-[#4F5665] text-[16px]'>You can explore the features that we provide with fun and <br /> have their own functions each feature.</p>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='flex gap-2'>
                        <div><img src={Pitichka} alt="" /></div>
                        <p className='text-[#4F5665] text-[14px]'>Powerfull online protection.</p>
                    </div>

                    <div className='flex gap-2'>
                        <div><img src={Pitichka} alt="" /></div>
                        <p className='text-[#4F5665] text-[14px]'>Internet without borders.</p>
                    </div>

                    <div className='flex gap-2'>
                        <div><img src={Pitichka} alt="" /></div>
                        <p className='text-[#4F5665] text-[14px]'>Supercharged VPN</p>
                    </div>

                    <div className='flex gap-2'>
                        <div><img src={Pitichka} alt="" /></div>
                        <p className='text-[#4F5665] text-[14px]'>No specific time limits.</p>
                    </div>
                </div>
             </div>
        </div>
    )
}