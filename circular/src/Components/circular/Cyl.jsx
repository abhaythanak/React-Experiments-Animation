import { useTexture } from '@react-three/drei';
import React from 'react'
import * as THREE from "three";
export default function Cyl() {
    let tex = useTexture("https://media.gettyimages.com/id/1477154453/photo/aerial-view-of-gap-of-dunloe-county-kerry-ireland-woman-watching-nature-under-old-stone.jpg?s=612x612&w=0&k=20&c=IYZVN2gfShz-bxYBXyFiRwRlSkyUhymT4Q1ibfQli4o=")
  return (
    <mesh rotation={[0,1.4,0.5]}>
        <cylinderGeometry args={[1,1,1,60,60,true]}/>
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}/>
      </mesh>
  )
}
