import React, { useState } from 'react'
import BackgroundVideo from '../components/BackgroundVideo'
import Navbar from '../components/Navbar'
import HeaderVideo from '../components/HeaderVideo'
import Hero from '../components/Hero'
import Ghosty from './Ghosty';

const Home = () => {

    {/* Estado para controlar la transición hacia el entorno 3D */}
    const [show3D, setShow3D] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleTransition = () => {
        setFadeOut(true);
        setTimeout(() => {
            setShow3D(true);
        }, 1000);
    }

    return (
        <>
            {!show3D ? (
                <div className={fadeOut ? 'hidden' : 'visible'}>
                    <BackgroundVideo />
                    <Navbar />
                    <HeaderVideo />
                    <Hero onTransition={handleTransition} />
                </div>
            ) : (
                <Ghosty />
            )}
        </>
    );
};

export default Home