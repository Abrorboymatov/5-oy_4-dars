import logo from './assets/Logo.svg'
import ker from './assets/ker.svg'

export default function Footer() {
    return (

        <div>
            <div className="px-[30px] pb-[64px] grid grid-cols-2 items-center gap-4 md:px-[160px] md:grid-cols-4">
                <div className="flex flex-col gap-[30px]">
                    <h2  className='text-[#232536] text-[48px]'>Let's make <br />something special </h2>
                    <h3  className='text-[#232536] text-[24px]'>Let's talk! 🤙 </h3>
                    <h4  className='text-[#232536] text-[18px]'>020 7993 2905</h4>
                    <a className="text-[#232536] text-[18px] hover:text-[green]" href="hi@finsweet.com">hi@finsweet.com</a>
                    <p className='text-[#232536] text-[14px]'>DLF Cybercity, Bhubaneswar, <br />India, &52050</p>
                </div>

                <div className="flex flex-col gap-2">
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Home</a>
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Service</a>
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Company</a>
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Career </a>
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">News</a>
                </div>

                <div className="flex flex-col gap-2">
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Service</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Technical support</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Testing</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Development </a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">AWS/Azure </a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Consulting </a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Information Technology</a>
                </div>


                 <div className="flex flex-col gap-2">
                    <a className="text-[#232536] text-[16px] hover:text-[green]" href="#">Resourses</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">About Us</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Testimonial</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Development </a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Privacy Policy</a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Terms of use </a>
                    <a className="text-[#232536] text-[14px] hover:text-[green]" href="#">Blog</a>
                </div>

    
            </div>

            <div className="bg-[#FFE6D2] py-[30px] py-[28px] flex justify-between items-center md:px-[160px]">
                <div className='flex gap-2'>
                    <img src={logo} alt="" />
                    <a href="#">©2021 Finsweet</a>
                </div>
                <div>
                    <a href="#"><img src={ker} alt="" /></a>
         
                </div>
            </div>
        </div>
    )
}