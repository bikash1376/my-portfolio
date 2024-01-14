import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 p-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Forrest</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>This is my entire bio
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum autem, delectus ullam similique deserunt repudiandae, eaque harum, est amet assumenda. Ab, consequatur magni asperiores perspiciatis sapiente adipisci laborum ducimus ex molestias blanditiis esse sed doloremque repellendus illum fugiat magnam, molestiae consectetur!
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus similique voluptates veritatis rerum excepturi corporis?
      {' '} <a href="https://www.github.com/bikash1376"
      target='_blank' className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600' rel='noreferrer noopener'
      >My Github</a> {' '} , aut hic odio iste commodi omnis ab qui ipsam reprehenderit ut, debitis dolorum ipsum possimus in?
      </p>
    </div>
  )
}

export default Intro;
