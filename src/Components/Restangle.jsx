import Komp from '../assets/Komp.png'
import user from '../assets/user.svg'
import location from '../assets/location.svg'
import server from '../assets/Server.svg'

export default function Restangle() {
    return (
        <div className="pt-[80px] px-[30px] md:px-[160px]">
            <div className="flex flex-col gap-2 pb-[103px] md:flex-row md:justify-between md:items-center">
               <div className='flex flex-col items-end'> <button className='text-[#FFFFFF] bg-[#F53838] rounded-[10px] text-4 px-[77px] py-[18px] max-w-[250px]'>Get Started</button></div>
               <div><img src={Komp} alt="" /></div>
            </div>
            <div className='grid grid-cols-2 gap-[36px] py-[72px] px-[30px] items-center justify-between md:grid-cols-3 md:px-[91px]'>
                <div className='flex gap-[36px] items-center'>
                    <div><img src={user} alt="" /></div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0B132A] text-[25px]'>90+</h4>
                        <p className='text-[#4F5665] text-[30px]'>Users</p>
                    </div>
                    
                </div>


                <div className='flex gap-[36px] items-center'>
                    <div><img src={location} alt="" /></div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0B132A] text-[25px]'>90+</h4>
                        <p className='text-[#4F5665] text-[30px]'>Users</p>
                    </div>
                    
                </div>


                <div className='flex gap-[36px] items-center'>
                    <div><img src={server} alt="" /></div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#0B132A] text-[25px]'>90+</h4>
                        <p className='text-[#4F5665] text-[30px]'>Users</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}