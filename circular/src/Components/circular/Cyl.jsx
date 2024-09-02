import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from "three";
export default function Cyl() {
    let tex = useTexture("https://media.gettyimages.com/id/1477154453/photo/aerial-view-of-gap-of-dunloe-county-kerry-ireland-woman-watching-nature-under-old-stone.jpg?s=612x612&w=0&k=20&c=IYZVN2gfShz-bxYBXyFiRwRlSkyUhymT4Q1ibfQli4o=");
    let cyl = useRef(null)
    useFrame((state,delta)=>{
        cyl.current.rotation.y += delta
    })
  return (
    <group rotation={[0,1.4,0.1]}>
        <mesh ref={cyl} >
        <cylinderGeometry args={[3,3,4,80,80,true]}/>
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}/>
      </mesh>
    </group>
    
  )
}
