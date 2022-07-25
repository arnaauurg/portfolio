import * as THREE from 'three';
import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


export default function Fragments({ visible, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/arnau-fragments.glb");
  const { actions } = useAnimations(animations, group);
  //console.log(visible)

  useMemo(() => {
    //materiales de las letras
    materials['Material.004'] = new THREE.MeshPhysicalMaterial({
      roughness: 0.5,
      color: new THREE.Color('blue').convertLinearToSRGB(),
      transmission: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0,
      metalness: 0.5
    })
    materials['Material'] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x00ffc5).convertSRGBToLinear(),
      transparent: false,
      emissive: 'blue',
      roughness: 1
    })
    materials['OrangeIn'] = new THREE.MeshPhysicalMaterial({
      roughness: 0.5,
      color: new THREE.Color('orange').convertLinearToSRGB(),
      transmission: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0,
      metalness: 0.5
    })
    materials['OrangeOut'] = new THREE.MeshStandardMaterial({
      color: new THREE.Color('orange').convertSRGBToLinear(),
      transparent: false,
      emissive: 'red', /* what emissive if not) */
      roughness: 1
    })
    materials['PurpleIn'] = new THREE.MeshPhysicalMaterial({
      roughness: 0.5,
      color: new THREE.Color(0xff00a2).convertLinearToSRGB(),
      transmission: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0,
      metalness: 0.5
    })
    materials['PurpleOut'] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x93017a),
      transparent: false,
      emissive: 0x93017a,
      roughness: 1
    })
    materials['YellowIn'] = new THREE.MeshPhysicalMaterial({
      roughness: 0.5,
      color: new THREE.Color(0xfefe00).convertLinearToSRGB(),
      transmission: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0,
      metalness: 0.5
    })
    materials['YellowOut'] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xfbff02).convertLinearToSRGB(),
      transparent: false,
      emissive: 'black',
      roughness: 1
    })
    materials['GreenIn'] = new THREE.MeshPhysicalMaterial({
      roughness: 0.5,
      color: new THREE.Color(0x178b00).convertLinearToSRGB(),
      transmission: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0,
      metalness: 0.5
    })
    materials['GreenOut'] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x00c006).convertLinearToSRGB(),
      transparent: false,
      emissive: 'black',
      roughness: 1
    })
    
  }, [])

  useEffect(() => {
    //animación exa con Blender cell frcture
    if (visible === true){
        actions.Destroy.repetitions = 0
        actions.Destroy.clampWhenFinished = true
        actions.Destroy.play()
      }
    }, [visible])

  return (
    <group ref={group} {...props}
      rotation={[0, -Math.PI/4, 0]}
      position={[40, -5, 20]} 
      scale={0.5} 
      dispose={null}
      >
      <group
        name="Shape_1_cell"
        position={[15.13523674, 53.63456726, 6.97598076]}
      >
        <mesh
          name="Shape_1_cell045"
          
          receiveShadow
          geometry={nodes.Shape_1_cell045.geometry}
          material={materials.GreenOut} /* fragmento segunda A */
        />
        <mesh
          name="Shape_1_cell045_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell045_1.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell001"
        position={[15.85277939, 69.06103516, 9.61925125]}
      >
        <mesh
          name="Shape_1_cell046"
          
          receiveShadow
          geometry={nodes.Shape_1_cell046.geometry}
          material={materials.GreenOut} /* fragmento segunda A */
        />
        <mesh
          name="Shape_1_cell046_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell046_1.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell002"
        position={[-50.54486465, 57.15995026, 7.4158535]}
      >
        <mesh
          name="Shape_1_cell031_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell031_1.geometry}
          material={materials.PurpleOut} /* fragemento primera a*/
        />
        <mesh
          name="Shape_1_cell031_2"
          
          receiveShadow
          geometry={nodes.Shape_1_cell031_2.geometry}
          material={materials.PurpleIn} /* fragemento primera a*/
        />
      </group>
      <group
        name="Shape_1_cell003"
        position={[-46.02676392, 52.27544785, 9.90823841]}
      >
        <mesh
          name="Shape_1_cell032"
          
          receiveShadow
          geometry={nodes.Shape_1_cell032.geometry}
          material={materials.PurpleOut} /* fragemento primera a*/
        />
        <mesh
          name="Shape_1_cell032_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell032_1.geometry}
          material={materials.PurpleIn} /* fragemento primera a*/
        />
      </group>
      <group
        name="Shape_1_cell004"
        position={[21.21930122, 47.84658813, 7.05331898]}
      >
        <mesh
          name="Shape_1_cell033_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell033_1.geometry}
          material={materials.GreenOut} /* fragemento segunda a*/
        />
        <mesh
          name="Shape_1_cell033_2"
          
          receiveShadow
          geometry={nodes.Shape_1_cell033_2.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell005"
        position={[-30.4907074, 44.74863052, 6.1988101]}
      >
        <mesh
          name="Shape_1_cell034"
          
          receiveShadow
          geometry={nodes.Shape_1_cell034.geometry}
          material={materials.OrangeOut} /*fragmento de r*/
        />
        <mesh
          name="Shape_1_cell034_1"
          receiveShadow
          geometry={nodes.Shape_1_cell034_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell006"
        position={[-32.3461647, 68.79338074, 7.0615654]}
      >
        <mesh
          name="Shape_1_cell035"
          receiveShadow
          geometry={nodes.Shape_1_cell035.geometry}
          material={materials.OrangeOut}
        />
        <mesh
          name="Shape_1_cell035_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell035_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell007"
        position={[-44.74724579, 53.16609192, 5.82174397]}
      >
        <mesh
          name="Shape_1_cell036"
          
          receiveShadow
          geometry={nodes.Shape_1_cell036.geometry}
          material={materials.PurpleOut} /*fragmento de ??*/
        />
        <mesh
          name="Shape_1_cell036_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell036_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell008"
        position={[20.66082191, 64.18047333, 7.49154139]}
      >
        <mesh
          name="Shape_1_cell037"
          
          receiveShadow
          geometry={nodes.Shape_1_cell037.geometry}
          material={materials.GreenOut} /* fragmento segunda a*/
        />
        <mesh
          name="Shape_1_cell037_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell037_1.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell009"
        position={[40.75696945, 44.79216003, 6.20361996]}
      >
        <mesh
          name="Shape_1_cell038"
          
          receiveShadow
          geometry={nodes.Shape_1_cell038.geometry}
          material={materials.Material} /* fragmento de U */
        />
        <mesh
          name="Shape_1_cell038_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell038_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell010"
        position={[47.29753113, 42.97602463, 7.64269829]}
      >
        <mesh
          name="Shape_1_cell039"
          
          receiveShadow
          geometry={nodes.Shape_1_cell039.geometry}
          material={materials.Material} /* fragmento de U */
        />
        <mesh
          name="Shape_1_cell039_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell039_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell011"
        position={[15.3501482, 67.73818207, 5.37147379]}
      >
        <mesh
          name="Shape_1_cell040"
          
          receiveShadow
          geometry={nodes.Shape_1_cell040.geometry}
          material={materials.GreenOut} /* fragmento segunda A */
        />
        <mesh
          name="Shape_1_cell040_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell040_1.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell012"
        position={[20.64878082, 68.18768311, 5.25846004]}
      >
        <mesh
          name="Shape_1_cell041"
          
          receiveShadow
          geometry={nodes.Shape_1_cell041.geometry}
          material={materials.GreenOut} /* fragmento segunda A */
        />
        <mesh
          name="Shape_1_cell041_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell041_1.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell013"
        position={[-8.14353561, 63.21326065, 7.12712193]}
      >
        <mesh
          name="Shape_1_cell042"
          receiveShadow
          geometry={nodes.Shape_1_cell042.geometry}
          material={materials.YellowOut} /* Fragmento de N */
        />
        <mesh
          name="Shape_1_cell042_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell042_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell014"
        position={[35.80321503, 64.5957489, 6.87505817]}
      >
        <mesh
          name="Shape_1_cell043"
          
          receiveShadow
          geometry={nodes.Shape_1_cell043.geometry}
          material={materials.Material} /* fragmento de U */
        />
        <mesh
          name="Shape_1_cell043_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell043_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell015"
        position={[-3.19240665, 54.44989395, 7.09771585]}
      >
        <mesh
          name="Shape_1_cell044"
          
          receiveShadow
          geometry={nodes.Shape_1_cell044.geometry}
          material={materials.YellowOut} /* Fragmento de N (cuerpo rigido activo de friccion 1) */
        />
        <mesh
          name="Shape_1_cell044_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell044_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell016"
        position={[21.52832031, 55.7748642, 4.27577877]}
      >
        <mesh
          name="Shape_1_cell047"
          
          receiveShadow
          geometry={nodes.Shape_1_cell047.geometry}
          material={materials.GreenOut} /* fragmento de A enanismo detrás */
        />
        <mesh
          name="Shape_1_cell047_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell047_1.geometry}
          material={materials.GreenIn}
        />
      </group>
      <group
        name="Shape_1_cell017"
        position={[-3.68830681, 67.08236694, 9.31288338]}
      >
        <mesh
          name="Shape_1_cell048"
          
          receiveShadow
          geometry={nodes.Shape_1_cell048.geometry}
          material={materials.YellowOut} /* fragmento de N */
        />
        <mesh
          name="Shape_1_cell048_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell048_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell018"
        position={[3.14915085, 68.62680054, 9.4767189]}
      >
        <mesh
          name="Shape_1_cell049"
          
          receiveShadow
          geometry={nodes.Shape_1_cell049.geometry}
          material={materials.YellowOut} /* fragmento de N */
        />
        <mesh
          name="Shape_1_cell049_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell049_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell019"
        position={[-46.29424286, 57.05349731, 10.99621391]}
      >
        <mesh
          name="Shape_1_cell050"
          
          receiveShadow
          geometry={nodes.Shape_1_cell050.geometry}
          material={materials.OrangeOut} /*fragmento de r*/
        />
        <mesh
          name="Shape_1_cell050_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell050_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell020"
        position={[-11.58084488, 46.96397781, 6.69596386]}
      >
        <mesh
          name="Shape_1_cell051"
          
          receiveShadow
          geometry={nodes.Shape_1_cell051.geometry}
          material={materials.YellowOut} /* frgamento de N */
        />
        <mesh
          name="Shape_1_cell051_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell051_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell021"
        position={[-20.91953468, 53.85019302, 10.11387444]}
      >
        <mesh
          name="Shape_1_cell052"
          
          receiveShadow
          geometry={nodes.Shape_1_cell052.geometry}
          material={materials.OrangeOut} /*fragmento de r*/
        />
        <mesh
          name="Shape_1_cell052_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell052_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell022"
        position={[34.44498062, 44.30713272, 7.94164276]}
      >
        <mesh
          name="Shape_1_cell053"
          
          receiveShadow
          geometry={nodes.Shape_1_cell053.geometry}
          material={materials.Material} /* fragmento de U */
        />
        <mesh
          name="Shape_1_cell053_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell053_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell023"
        position={[-46.92272949, 44.52658463, 6.659729]}
      >
        <mesh
          name="Shape_1_cell054"
          
          receiveShadow
          geometry={nodes.Shape_1_cell054.geometry}
          material={materials.PurpleOut} /* fragmento de primera A */
        />
        <mesh
          name="Shape_1_cell054_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell054_1.geometry}
          material={materials.PurpleIn}
        />
      </group>
      <group
        name="Shape_1_cell024"
        position={[-19.92247391, 43.4661293, 6.09445381]}
      >
        <mesh
          name="Shape_1_cell055"
          
          receiveShadow
          geometry={nodes.Shape_1_cell055.geometry}
          material={materials.OrangeOut} /*fragmento de r*/
        />
        <mesh
          name="Shape_1_cell055_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell055_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell025"
        position={[-11.0840435, 41.79656982, 6.47456789]}
      >
        <mesh
          name="Shape_1_cell056"
          
          receiveShadow
          geometry={nodes.Shape_1_cell056.geometry}
          material={materials.YellowOut} /* fragmento de N */
        />
        <mesh
          name="Shape_1_cell056_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell056_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell026"
        position={[-45.53206253, 63.43980408, 8.14716434]}
      >
        <mesh
          name="Shape_1_cell057"
          
          receiveShadow
          geometry={nodes.Shape_1_cell057.geometry}
          material={materials.PurpleOut} /* fragmento de A */ 
        />
        <mesh
          name="Shape_1_cell057_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell057_1.geometry}
          material={materials.PurpleIn}
        />
      </group>
      <group
        name="Shape_1_cell027"
        position={[-11.90927696, 48.98737335, 4.1898737]}
      >
        <mesh
          name="Shape_1_cell058"
          
          receiveShadow
          geometry={nodes.Shape_1_cell058.geometry}
          material={materials.YellowOut} /* fragmento de N */
        />
        <mesh
          name="Shape_1_cell058_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell058_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group
        name="Shape_1_cell028"
        position={[-21.80365372, 54.8647728, 5.25048923]}
      >
        <mesh
          name="Shape_1_cell059"
          
          receiveShadow
          geometry={nodes.Shape_1_cell059.geometry}
          material={materials.OrangeOut} /*fragmento de r*/
        />
        <mesh
          name="Shape_1_cell059_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell059_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell029"
        position={[32.65463638, 67.74690247, 9.25142956]}
      >
        <mesh
          name="Shape_1_cell060"
          
          receiveShadow
          geometry={nodes.Shape_1_cell060.geometry}
          material={materials.Material} /* fragment de la U */
        />
        <mesh
          name="Shape_1_cell060_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell060_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell030"
        position={[-3.7257328, 67.26060486, 5.12663603]}
      >
        <mesh
          name="Shape_1_cell061"
          
          receiveShadow
          geometry={nodes.Shape_1_cell061.geometry}
          material={materials.YellowOut} /* fragmento de N */
        />
        <mesh
          name="Shape_1_cell061_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell061_1.geometry}
          material={materials.OrangeIn} /*fragmento de r*/
        />
      </group>
      <group
        name="Shape_1_cell031"
        position={[3.14915085, 68.70681763, 5.29059124]}
      >
        <mesh
          name="Shape_1_cell062"
          
          receiveShadow
          geometry={nodes.Shape_1_cell062.geometry}
          material={materials.YellowOut} /* fragmento de N */
        />
        <mesh
          name="Shape_1_cell062_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell062_1.geometry}
          material={materials.YellowIn}
        />
      </group>
      <group name="Destroy" position={[33.20074844, 70.46547699, 7.51825762]}>
        <mesh
          name="Shape_1_cell063"
          
          receiveShadow
          geometry={nodes.Shape_1_cell063.geometry}
          material={materials.Material}
        />
        <mesh
          name="Shape_1_cell063_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell063_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        name="Shape_1_cell033"
        position={[-18.85385513, 64.03006744, 6.9985733]}
      >
        <mesh
          name="Shape_1_cell064"
          
          receiveShadow
          geometry={nodes.Shape_1_cell064.geometry}
          material={materials.OrangeOut}
        />
        <mesh
          name="Shape_1_cell064_1"
          
          receiveShadow
          geometry={nodes.Shape_1_cell064_1.geometry}
          material={materials.OrangeIn}  /* fragmento interno de R*/
        />
      </group>
      <group
        name="Destroy001"
        position={[48.72624588, 61.97824097, 7.38570595]}
      >
        <mesh
          name="Shape_1_cell065"
          receiveShadow
          geometry={nodes.Shape_1_cell065.geometry}
          material={materials.Material}
        />
        <mesh
          name="Shape_1_cell065_1"
          receiveShadow
          geometry={nodes.Shape_1_cell065_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
);
}

/*

export function Arnau(props) {
  const group = useRef();
  const { scene } = useGLTF("/arnau-letters.glb");
  return (
    <group ref={group} 
      dispose={null}
      rotation={[0, -Math.PI/3, 0]}
      position={[40, -5, 20]} 
      scale={0.45}    
      >
      <primitive object={scene} {...props} />
    </group>
  );
}

useGLTF.preload("/arnau-letters.glb");


*/
useGLTF.preload("/arnau-fragments.glb");


