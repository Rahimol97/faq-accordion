import React from 'react'
import Accordion from './Components/Accordion'
function App() {
  return (
    <div class="h-screen flex flex-col">
      <div
        className="flex-[2]  flex items-center justify-center bg-center bg-cover"
        style={{   backgroundImage: `url(${import.meta.env.BASE_URL}background-pattern-desktop.svg)`, }}
      >
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 p-3 bg-white shadow-lg rounded-lg">

        <div class=" flex flex-row m-3 gap-4 ">
          <img class="w-6  h-auto" src={`${import.meta.env.BASE_URL}assets/images/icon-star.svg`} alt="My Image" />
          <h1 className='text-3xl font-bold '>FAQs</h1>
        </div>


        <div class="flex flex-col gap-4 m-3  ">
          <Accordion title="What is Frontend Mentor, and how will it help me?">
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.      </Accordion>
          <Accordion title="Is Frontend Mentor free?">
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.    </Accordion>
          <Accordion title="Can I use Frontend Mentor projects in my portfolio?">
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!   </Accordion>

          <Accordion title="How can I get help if I'm stuck on a Frontend Mentor challenge? ">
            The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members. </Accordion>
        </div>
      </div>


      <div class="flex-[3] bg-[hsl(262,100%,94%)] flex items-center justify-center">
      </div>
    </div>

  )

}

export default App