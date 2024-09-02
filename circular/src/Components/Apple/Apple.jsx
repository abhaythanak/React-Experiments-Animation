 import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './MacContainer'
 
 export default function Apple() {
   return (
     <div className="w-full h-screen">
       <div className="top-32 left-1/2 absolute font-serif text-center text-white -translate-x-1/2">
       <h3 className="glow-effect font-sans text-7xl tracking-tighter">Mackbook pro.</h3>
       <h5>oh so pro!</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis facilis aliquam ipsa, odio reiciendis quod.</p>
       </div>
       <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
         <OrbitControls />
         <Environment
           files={[
             "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
           ]}
         />
         <ScrollControls pages={3}>
           <MacContainer />
         </ScrollControls>
       </Canvas>
     </div>
   );
 }
 