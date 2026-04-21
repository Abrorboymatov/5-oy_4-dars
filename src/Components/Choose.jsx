import Free from '../assets/Free.png'
import Pit from '../assets/Pit.svg'


export default function Choose() {
    return (
        <div className="pt-[80px] px-[30px] flex flex-col pb-[80px] md:px-[160px] md:pb-[130px]">
            <div className="flex flex-col items-center">
                <h3 className="text-[#0B132A] text-[35px]">Choose Your Plan</h3>
                <p className="text-[#4F5665] text-[16px] text-center">Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
            </div>

            <div className='pt-[60px] pb-[20px] grid grid-cols-1 justify-center items-center gap-4 md:grid-cols-3  md:pb-[20px] md:items-center'>
                <div className="flex flex-col gap-[30px] items-cenetr justify-center px-[70px] pt-[80px] pb-[50px] border border-[#DDDDDD] rounded-[10px]">
                    <div ><img src={Free} alt="" /></div>
                    <h5 className="text-[#0B132A] text-[18px] text-center">Free Plan</h5>
                    <div className='flex flex-col gap-[10px]'>
                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Unlimited Bandwitch</p>
                    </div>

                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Encrypted Connection</p>
                    </div>

                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">No Traffic Logs</p>
                    </div>

                    <div className='flex gap-[22px] items-center'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Works on All Devices</p>
                    </div>

                    </div>

                    <h3 className='text-[#0B132A] text-[25px] pt-[100px]'>Free</h3>
                    <button className='text-[#F53838] flex items-center justify-center border border-[#F53838] hover:bg-[#F53838] hover:text-[#FFFFFF] rounded-[10px] text-4 px-[62px] py-[13px] max-w-[170px]'>Select</button>
                </div>



                 <div className="flex flex-col gap-[30px] px-[70px] pt-[80px] pb-[50px] border border-[#DDDDDD] rounded-[10px]">
                    <div ><img src={Free} alt="" /></div>
                    <h5 className="text-[#0B132A] text-[18px] text-center">Standard Plan</h5>
                    <div className='flex flex-col gap-[10px]'>
                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Unlimited Bandwitch</p>
                    </div>

                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Encrypted Connection</p>
                    </div>

                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Yes Traffic Logs</p>
                    </div>

                    <div className='flex gap-[22px] items-center'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Works on All Devices</p>
                    </div>

                    <div className='flex gap-[22px] items-center'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Connect Anyware</p>
                    </div>

                    </div>

                    <h3 className='text-[#0B132A] text-[25px] pt-[90px]'>$9 <span className="text-[#4F5665] text-[14px]">/ mo</span></h3>
                    <button className='text-[#F53838] border border-[#F53838] hover:bg-[#F53838] hover:text-[#FFFFFF] rounded-[10px] text-4 px-[62px] py-[13px] max-w-[170px]'>Select</button>
                </div>


                 <div className="flex flex-col gap-[30px] px-[70px] pt-[80px] pb-[50px] border border-[#DDDDDD] rounded-[10px]">
                    <div ><img src={Free} alt="" /></div>
                    <h5 className="text-[#0B132A] text-[18px] text-center">Premium Plan</h5>
                    <div className='flex flex-col gap-[10px]'>
                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Unlimited Bandwitch</p>
                    </div>

                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Encrypted Connection</p>
                    </div>

                    <div className='flex gap-[22px]'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Yes Traffic Logs</p>
                    </div>

                    <div className='flex gap-[22px] items-center'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Works on All Devices</p>
                    </div>

                    <div className='flex gap-[22px] items-center'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Connect Anyware</p>
                    </div>

                    <div className='flex gap-[22px] items-center'>
                        <div><img src={Pit} alt="" /></div>
                        <p className="text-[#4F5665] text-[14px]">Get New Features</p>
                    </div>

                    </div>

                    <h3 className='text-[#0B132A] text-[25px] pt-[50px]'>$12  <span className="text-[#4F5665] text-[14px]">/ mo</span></h3>
                    <button className='text-[#F53838] border border-[#F53838] hover:bg-[#F53838] hover:text-[#FFFFFF] rounded-[10px] text-4 px-[62px] py-[13px] max-w-[170px]'>Select</button>
                </div>


            </div>
        </div>
    )
}