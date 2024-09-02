import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'


export default function MacContainer() {
    let modal = useGLTF("./mac.glb");
    let texture = useTexture('./red.jpg')
    let meshes = {}

    //console.log(modal)
    modal.scene.traverse((e)=>{
      meshes[e.name] = e;
    })
    //console.log(meshes)

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = texture;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;

    let data = useScroll();
    //console.log(data)
    useFrame((state, delta) =>{
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
    })

  return (
    <group position={[0,-10,20]}>
      <primitive object={modal.scene}/>

    </group>
  )
}
