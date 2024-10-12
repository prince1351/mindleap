import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'
import {motion} from "framer-motion"
import {fadeIn} from "../utilis/animationVariants"


const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"}  className="text-center space-y-5">
          <h2 className="font-bold font-secondary text-heroBg text-4xl">What Can We Do Together</h2>
          <p className="md:w-4/5 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolor veniam accusamus iure aliquam corporis fugit nisi qui.</p>
        </motion.div>

        {/* service category */}
        <div className="py-12 md:w-4/5 mx-auto">
        <Tabs>
    <motion.TabList
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"} className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Couple Counseling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>
    </motion.TabList>

    <TabPanel>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"} className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-8 font-secondary'>
        <h3 className='text-2xl font-semibold text-primary mb-4'>Couple Counseling</h3>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis distinctio quos dicta dolorum incidunt!</p>
        <h4 className='text-xl font-medium text-black mb-3'>Benefits</h4>
        <ul className='list-disc list-inside space-y-2 text-sm'>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
      <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' />  
      </div>
      </motion.div>
      
    </TabPanel>


    <TabPanel>
    <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"} className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-8 font-secondary'>
        <h3 className='text-2xl font-semibold text-primary mb-4'>Parenting Skills</h3>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis distinctio quos dicta dolorum incidunt!</p>
        <h4 className='text-xl font-medium text-black mb-3'>Benefits</h4>
        <ul className='list-disc list-inside space-y-2 text-sm'>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
      <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover' />  
      </div>
      </motion.div>
      
    </TabPanel>

    <TabPanel>
    <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"} className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-8 font-secondary'>
        <h3 className='text-2xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis distinctio quos dicta dolorum incidunt!</p>
        <h4 className='text-xl font-medium text-black mb-3'>Benefits</h4>
        <ul className='list-disc list-inside space-y-2 text-sm'>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
      <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' />  
      </div>
      </motion.div>
      
    </TabPanel>

    <TabPanel >
    <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        viewport={{once: false, amount: 0.7}}
        whileInView={"show"} className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-8 font-secondary'>
        <h3 className='text-2xl font-semibold text-primary mb-4'>Self-Confidence</h3>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis distinctio quos dicta dolorum incidunt!</p>
        <h4 className='text-xl font-medium text-black mb-3'>Benefits</h4>
        <ul className='list-disc list-inside space-y-2 text-sm'>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
          <li>Understanding Relationship Dynamics</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
      <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' />  
      </div>
      </motion.div>
      
    </TabPanel>
   
  </Tabs>

        </div>
      </div>
    </div>
  )
}

export default Services