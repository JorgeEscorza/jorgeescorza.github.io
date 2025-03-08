import { Canvas } from '@react-three/fiber'

const Ghosty = () => {
  return (
    <section>
        <Canvas className='w-full h-screen bg-transparent' camera={{near: 0.1, far: 1000}}>
            
        </Canvas>
    </section>
  )
}

export default Ghosty