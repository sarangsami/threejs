import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import AnimatedSphere from "./components/AnimatedSphere";
import Cloud from "./components/Cloud";
import Thinkpad from "./components/Thinkpad";

const App = () => {
  return (
    <>
     <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
    <Canvas className="canvas">
    <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
      <AnimatedSphere/>
      </Suspense>
    </Canvas>
    {/* <Canvas className="canvas">
    <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
      <Cloud/>
      </Suspense>
    </Canvas>
    <Canvas className="canvas">
    <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
      <Thinkpad/>
      </Suspense>
    </Canvas> */}
    </>
   
  );
};

export default App;
