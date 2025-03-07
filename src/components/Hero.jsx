import React from 'react'

const Hero = () => {
  return (
    <section class="hero">
        <div className="hero-info">
            
            <h1>Jorge Escorza<span className='gradient subtitle'> Software Engineer</span></h1>
            <p>
                Bachelor's Degree in Computer Science.
                I'm an experienced developer and 3D animator with a passion for Game Development.
            </p>

            <button>
                <span className='gradient'>Check out my journey</span><i class='bx bx-right-arrow-alt gradient' ></i>
            </button>

        </div>
    </section>
  )
}

export default Hero