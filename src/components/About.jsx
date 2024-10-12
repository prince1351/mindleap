
import { useState } from "react"
import thumbnailImg from '../assets/video-thumbnail.webp'
import { IoPlay } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoArrowForwardCircle } from "react-icons/io5";
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"



const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }



  return (
    <div id="about" className="bg-[#f7f8fc] pt-14">
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"} className="container mx-auto">
           <div className="pb-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Left side */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {
              !isVideoPlaying ? (
                <div className="relative">
                    <img src={thumbnailImg} alt=" video thumbnail" className="w-full h-auto md:h-[300px] rounded-lg object-cover" />
                    <button onClick={handleVideoPlay} className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"><IoPlay className="size-12 text-white" /></button>
                </div>
              ) : (null)
            }
            </div>
            {/* Right side */}
            <div className="md:w-1/2 w-full">
            <h2 className='text-4xl font-secondary capitalize  font-bold mb-4 leading-snug'>Individual consult and therapy</h2>
           <p className='text-sm mb-5 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics.</p>
           <button className='text-white py-3 px-8 bg-primary font-medium rounded-md hover:bg-primary/90'>
            <a href="#contact" className='flex gap-1 items-center'>
              <span>Get Started</span>
              <IoArrowForwardCircle />
            </a>
           </button>
            </div>
           </div>

           {
               isVideoPlaying && (
                <div className="fixed  inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                  <div className="relative w-full h-full flex items-center justify-center">
                 <iframe width="560" height="300" src="https://www.youtube.com/embed/0IC0vAjK15E?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-lg bg-black"></iframe>
                 <button onClick={handleCloseVideo} className="absolute top-4 right-4 text-white text-2xl cursor-pointer">
                 <RxCross2 size={35}/>
                 </button>
                </div>
                </div>
               )
           }
      </motion.div>
    </div>
  )
}

export default About