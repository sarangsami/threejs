import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import wood from '../../assets/wood.jpg';
const Box = () =>{
  const ColorMap = useLoader(TextureLoader,wood)
  return(
    <mesh rotation={[90,0,20]}>
      <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
      <meshStandardMaterial map={ColorMap}/>
    </mesh>
  )
}
export default Box