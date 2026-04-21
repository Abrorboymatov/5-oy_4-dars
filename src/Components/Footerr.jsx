import Logo from '../assets/Logoo.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'

export default function Footer() {
    return (
            <div className="px-[30px] pb-[64px] grid grid-cols-2 gap-4 md:px-[160px] md:grid-cols-4">
                <div className="flex flex-col gap-[30px]">
                    <div><img src={Logo} alt="" /></div>
                    <p className='text-[#4F5665] text-[16px]'>LaslesVPN is a private virtual network that <br /> has unique features and has high security.</p>
                    <div className='flex gap-2'>
                        <a href="#"><img src={Facebook} alt="" /></a>
                        <a href="#"><img src={Twitter} alt="" /></a>
                        <a href="#"><img src={Instagram} alt="" /></a>
                    </div>
                    <a className='text-[#AFB5C0] text-4 hover:text-[green]' href="#">©2020LaslesVPN</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-[#0B132A] text-[18px]">Product</h3>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Download </a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Pricing</a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Locations</a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Server </a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Countries</a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Blog</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-[#0B132A] text-[18px]">Engage</h3>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">LaslesVPN ?  </a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">FAQ</a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Tutorials</a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">About Us </a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Privacy Policy</a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Terms of Service</a>
                </div>


                 <div className="flex flex-col gap-2">
                    <h3 className="text-[#0B132A] text-[18px]">Earn Money</h3>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Affiliate </a>
                    <a className="text-[#4F5665] text-[16px] hover:text-[green]" href="#">Become Partner</a>
                </div>

    
            </div>
    )
}