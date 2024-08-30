import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from "@react-three/drei"
import Cyl from './Components/circular/Cyl'


export default function App() {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight/>
      <Cyl/>
    </Canvas>
  )
}
