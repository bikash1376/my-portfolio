import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 p-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Forrest</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
Greetings! I'm Bikash Sahu, a 20-year-old Full Stack Developer with a fervor for AI and Machine Learning. My coding journey commenced in 2020, leading me to explore the realm of web development and contribute to open source projects. Proficient in the MERN stack, I've translated my passion into tangible results, crafting innovative websites and currently thriving in the freelance landscape.
      <br />
      <br />
      Explore my coding endeavors on {' '} <a href="https://www.github.com/bikash1376"
      target='_blank' className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600' rel='noreferrer noopener'
      >My Github</a> {' '} , where you'll find a collection of projects showcasing my dedication to creating impactful solutions and pushing the boundaries of what's possible in the digital world.</p>
    </div>
  )
}

export default Intro;
