import Quloqchin from "./assets/Quloqchin.svg"
import  Nastr from "./assets/Nastr.svg"
import Divel from "./assets/Divel.svg"


export default function Services() {

    return (

        <div className="px-[30px] bg-[#FFE6D2] py-[96px] flex flex-col md:px-[160px]  ">
            <div className="flex flex-col">
            <h4 className='text-[#000000] text-[14px]'>Our expertise</h4>
            <h2 className='text-[#232536] text-[48px] pb-[40px]'>We build software solutions <br /> that solve client's business challenges</h2>
            <button className="text-[#FFFFFF] text[16px] bg-[#444CFC] px-[32px] py-[20px] max-w-[200px]">Start a Project</button>

           </div>

           <div className="flex flex-col gap-4 pt-[80px] md:flex-row md:gap-[30px]">
            <div className="flex flex-col gap-[20px] pl-[48px] pr-[31px] py-[46px] bg-[#FFFFFF]">
                <div><img src={Quloqchin} alt="" /></div>
                <h4 className='text-[#000000] text-[16px]'>Technical support</h4>
                <p className='text-[#5D5F6D] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                <a className="hover:text-[green] text-[#444CFC] text-[16px]" href="#">Read more</a>
            </div>

             <div className="flex flex-col gap-[20px] pl-[48px] pr-[31px] py-[46px] bg-[#FFFFFF]">
                <div><img src={Nastr} alt="" /></div>
                <h4 className='text-[#000000] text-[16px]'>Technical support</h4>
                <p className='text-[#5D5F6D] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                <a className="hover:text-[green] text-[#444CFC] text-[16px]" href="#">Read more</a>
            </div>

             <div className="flex flex-col gap-[20px] pl-[48px] pr-[31px] py-[46px] bg-[#FFFFFF]">
                <div><img src={Divel} alt="" /></div>
                <h4 className='text-[#000000] text-[16px]'>Technical support</h4>
                <p className='text-[#5D5F6D] text-[16px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                <a className="hover:text-[green] text-[#444CFC] text-[16px]" href="#">Read more</a>
            </div>

           </div>
        </div>
    )
    
}