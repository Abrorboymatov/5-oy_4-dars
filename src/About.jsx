import Kom from './assets/Kom.png'
import negr from './assets/negr.png'
import chiroyli from './assets/chiroylii.png'
import shapes from './assets/Shapes.svg'


export default function about() {
    

    return (
        <div className="px-[30px] pt-[120px] pb-[98px] md:px-[160px]">
            <h5 className='text-[#000000] text-[14px]'>ABOUT US</h5>
            <div className="flex flex-col items-center md:flex-row md:justify-column md:gap-[92px]">
                <h2 className='text-[#232536] text-[48px]'>The company leads entire <br /> webdesign process from concept to delivery.</h2>
                <div className="flex flex-col gap-[16px]">
                    <h3 className='text-[#232536] text-[36px]'>The Era Of Technology.</h3>
                    <p className='text-[#5D5F6D] text-[16px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 py-[48px] flex-col md:flex-row md:justify-between'>
                <div><img src={Kom} alt="" /></div>
               <div> <img src={negr} alt="" /></div>
                <div><img src={chiroyli} alt="" /></div>
            </div>

            <div className='flex justify-between'>
                <div className='grid grid-cols-2 gap-[15px] items-center md:grid-cols-4 md:gap-[67px]'>
                    <div >
                    <h4 className='text-[#232536] text-[36px]'>1560+</h4>
                    <img src={shapes} alt="" />
                    <p className='text-[#000000] text-[24px]'>Project Delivered</p>
                    </div>
                     <div>
                    <h4 className='text-[#232536] text-[36px]'>100+</h4>
                    <img src={shapes} alt="" />
                    <p className='text-[#000000] text-[24px]'>Professional</p>
                    </div>
                     <div>
                    <h4 className='text-[#232536] text-[36px]'>950+</h4>
                    <img src={shapes} alt="" />
                    <p className='text-[#000000] text-[24px]'>Happy Client</p>
                    </div>
                     <div>
                    <h4 className='text-[#232536] text-[36px]'>10 yrs</h4>
                    <img src={shapes} alt="" />
                    <p className='text-[#000000] text-[24px]'>Experience</p>
                    </div>
                </div>
                <a className="text-[#444CFC] text-[16px] hover:text-[green]" href="#">Read about us</a>
            </div>
        </div>
    )
}