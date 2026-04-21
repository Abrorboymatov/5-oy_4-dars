import Xarita from '../assets/Xarita.png'
import Netflex from '../assets/Netflex.svg'
import Reddit from '../assets/Reddit.svg'
import Amazon from '../assets/Amazon.svg'
import Discord from '../assets/Discord.svg'
import Spotify from '../assets/Spotify.svg'


export default function Global() {
    return (
        <div className="px-[30px] md:px-[160px] items-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-[#0B132A] text-[20px] md:text-[35px] text-center">Huge Global Network <br /> of Fast VPN</h3>
                <p className="text-[#4F5665] text-[16px] md:text[16px] pb-[155px] text-center">See LaslesVPN everywhere to make it easier for you when you move <br /> locations.</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <img src={Xarita} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center pb-[50px] md:grid-cols-5'>
                <div><a href="#"><img src={Netflex} alt="" /></a></div>
                <div><a href="#"><img src={Reddit} alt="" /></a></div>
                <div><a href="#"><img src={Amazon} alt="" /></a></div>
                <div><a href="#"><img src={Discord} alt="" /></a></div>
                <div><a href="#"><img src={Spotify} alt="" /></a></div>
            </div>
        </div>
    )
}