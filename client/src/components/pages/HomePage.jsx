import React from 'react'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  const MoveToLogin = () => {
    navigate('/login');
  }

  return (
    (<>
      <div className="h-[44rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1
            className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-black bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Smart Learn
          </h1>
          <p></p>
          <p
            className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            The Personalized Learning Pathway Generator aims to create a system that
            generates personalized learning pathways for students based on their
            individual strengths, weaknesses, and learning preferences.
          </p>
          <input
            type="text"
            placeholder="hi@smartlearn.in"
            className="rounded-lg border border-black p-2 lg:p-3 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-black" />
            <Button 
              fullWidth 
              variant="gradient" 
              size="sm" 
              onClick={MoveToLogin} 
              className="mt-5 h-10 relative z-20"
            >
              <span>Get started</span>
            </Button>
        </div>
      </div>
    </>)
  )
}

export default HomePage