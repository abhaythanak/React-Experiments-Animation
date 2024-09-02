import { Canvas } from '@react-three/fiber'

import { OrbitControls } from "@react-three/drei"
import Cyl from './Cyl'
import { Bloom } from "@react-three/postprocessing"
import { EffectComposer,ToneMapping } from "@react-three/postprocessing"

export default function Circular() {
  return (
    <Canvas flat camera={{fov:100}}>
      <OrbitControls/>
      <ambientLight/>
      <Cyl/>
      <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={0.5}
        luminanceSmoothing={5}
        luminanceThreshold={0}
        />
        {/* <ToneMapping adaptive/> */}
      </EffectComposer>
    </Canvas>
  )
}
