import Soqol from '../assets/Soqol.svg'
import Ayol from '../assets/Ayol.svg'
import Kim from '../assets/Kim.svg'
import Yulduz from '../assets/Yulduz.svg'
import Nuqta from '../assets/Nuqta.svg'
import Left from '../assets/Left.svg'
import Right from '../assets/Right.svg'



export default function Trusted() {
    return (
        <div className="px-[30px] md:px-[160px]">
           <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-[#0B132A] text-[20px] md:text-[35px] text-center">Trusted by Thousands of <br /> Happy Customer</h3>
                <p className="text-[#4F5665] text-[16px] md:text[16px] pb-[155px] text-center">These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</p>
            </div>

            <div className='grid grid-cols-1 gap-[20px] pb-[60px] md:grid-cols-3 md:gap-[50px]'>
                <div className="flex flex-col gap-2 border rounded-[10px] border-[#F53838] p-[30px] hover:border-[green]">
                    <div className='flex justify-between items-center' >
                        <div className='flex gap-[20px]'>
                       <div><img src={Soqol} alt="" /></div>
                        <div>
                            <h4 className="text-[#0B132A] text-[18px]"> Viezh Robert</h4>
                            <p className="text-[#4F5665] text-[16px]">Shanxi, China</p>
                        </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-[#0B132A] text-[16px]">4.5</p>
                            <div><img src={Yulduz} alt="" /></div>
                        </div>
                        
                    </div>
                    <p className="text-[#0B132A] text-[16px]">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                </div>


                <div className="flex flex-col gap-2 border rounded-[10px] border-[#F53838] p-[30px] hover:border-[green]">
                    <div className='flex justify-between items-center' >
                        <div className='flex gap-[20px]'>
                       <div><img src={Ayol} alt="" /></div>
                        <div>
                            <h4 className="text-[#0B132A] text-[18px]"> Yessica Christy</h4>
                            <p className="text-[#4F5665] text-[16px]">Shanxi, China</p>
                        </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-[#0B132A] text-[16px]">4.5</p>
                            <div><img src={Yulduz} alt="" /></div>
                        </div>
                        
                    </div>
                    <p className="text-[#0B132A] text-[16px]">“I like it because I like to travel far and still can connect with high speed.”.</p>
                </div>


                <div className="flex flex-col gap-2 border rounded-[10px] border-[#F53838] p-[30px] hover:border-[green]">
                    <div className='flex justify-between items-center' >
                        <div className='flex gap-[20px]'>
                       <div><img src={Kim} alt="" /></div>
                        <div>
                            <h4 className="text-[#0B132A] text-[18px]">Kim Young Jou</h4>
                            <p className="text-[#4F5665] text-[16px]">Seoul, South Korea</p>
                        </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className="text-[#0B132A] text-[16px]">4.5</p>
                            <div><img src={Yulduz} alt="" /></div>
                        </div>
                        
                    </div>
                    <p className="text-[#0B132A] text-[16px]">“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                </div>
            </div>

            <div className='flex justify-between items-center pb-[80px]'>
                <div><a href="#"><img src={Nuqta} alt="" /></a></div>
                <div className='grid grid-cols-2 items-center pb-[80px]'>
                    <a href="#"><img src={Left} alt="" /></a>
                    <a href="#"><img src={Right} alt="" /></a>
                </div>
            </div>

            <div className='flex flex-col gap-3 pb-[65px] md:flex-row md:justify-between'>
                <div className='flex flex-col'>
                    <h3 className="text-[#0B132A] text-[25px] md:text-[35px]">Subscribe Now for Get Special Features!</h3>
                    <p className="text-[#4F5665] text-[16px]">Let's subscribe with us and find the fun.</p>
                </div>
                 <button className='text-[#FFFFFF] bg-[#F53838] rounded-[10px] text-4 px-[65px] py-[17px] max-w-[250px] hover:bg-[green] hover:text-[#F53838]'>Subscribe Now</button>
            </div>
        </div>
    )
}