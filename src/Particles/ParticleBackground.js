import React from "react";


export default function ParticleBackground(){

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };

      const particlesLoaded= (engine)=>{
        console.log(engine)
      }
  
    return (
        <>
        <Particles id="tsparticles" 
        init={particlesInit}
        options={particlesConfig} loaded={particlesLoaded}></Particles>
        </>
    )
}

