import React, { useRef, Suspense } from "react";
import { ContactShadows, GizmoViewport, OrbitControls, OrthographicCamera, PerspectiveCamera, useGLTF, SpotLight } from '@react-three/drei';
import { Canvas, useFrame, spotLight } from '@react-three/fiber';


export default function Castle(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/casita.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.base_tower_wall_0.geometry}
              material={nodes.base_tower_wall_0.material}
            />
          </group>
          <group
            position={[-44.51619339, 45.46035004, 10.28453445]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group position={[0, 0, -34.81378174]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tower_base_wall_0.geometry}
                material={nodes.tower_base_wall_0.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tower_base_planks_0.geometry}
                material={nodes.tower_base_planks_0.material}
              />
            </group>
          </group>
          <group
            position={[47.88733673, 83.8028183, 0.00000366]}
            rotation={[1.6e-7, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.tree_trunk_bark_0.geometry}
              material={materials.bark}
            />
          </group>
          <group
            position={[-22.34127235, 70.74567413, -26.3467865]}
            rotation={[2.1e-7, 0.66696938, -1.3e-7]}
          >
            <group position={[-4.24426174, 0.00000391, -22.80514908]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.house_base_wall_0.geometry}
                material={nodes.house_base_wall_0.material}
              />
            </group>
          </group>
          <group
            position={[-19.57232666, 3.06683159, 56.71374893]}
            rotation={[1.6e-7, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.roof_roof_0.geometry}
              material={materials.roof}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.roof_wooden_skel_no_op_0.geometry}
              material={nodes.roof_wooden_skel_no_op_0.material}
            />
          </group>
          <group
            position={[-62.01347351, 69.64173126, 4.80636978]}
            rotation={[-2.98733567, -1.27116779, -2.96188015]}
            scale={[0.55733299, 0.55733287, 0.55733287]}
          >
            <group position={[0, -0.00000159, -9.75831413]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.stone_details_wall_0.geometry}
                material={nodes.stone_details_wall_0.material}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 1.32824155]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass_floor_grass_0.geometry}
              material={materials.grass}
            />
          </group>
          <group
            position={[-60.62149048, 71.68009949, -29.6585865]}
            rotation={[2.67505705, -0.90019084, 2.73229288]}
            scale={[0.29545543, 0.29545546, 0.2954554]}
          >
            <group position={[167.60250854, 70.90684509, -5.19412565]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood_loose_planks_wooden_skel_no_op_0.geometry}
                material={nodes.wood_loose_planks_wooden_skel_no_op_0.material}
              />
            </group>
          </group>
          <group
            position={[65.22312164, 90.38690948, -43.0671196]}
            rotation={[-1.86124695, 0.5878725, 1.28359399]}
            scale={[0.61148798, 0.6114881, 0.6114881]}
          >
            <group position={[-2.49124527, -18.55361938, -1.98172271]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leaves_op_branches_0.geometry}
                material={nodes.leaves_op_branches_0.material}
              />
            </group>
          </group>
          <group
            position={[45.4516716, 50.76320267, -23.44771767]}
            rotation={[2.6841689, 0.64595872, -2.7394035]}
            scale={[0.23260191, 0.23260194, 0.23260193]}
          >
            <group position={[-0.56199646, 11.09292984, -0.00000176]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.grass_op_branches_0.geometry}
                material={nodes.grass_op_branches_0.material}
              />
            </group>
          </group>
          <group
            position={[36.66160965, 0.65922546, 17.22564697]}
            rotation={[0.10735034, 1.04615082, -0.13946642]}
            scale={[1.22089648, 1.20787704, 0.99999994]}
          >
            <group position={[-100.30391693, -21.27954674, -15.81045532]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["rocks_Material_#413_0"].geometry}
                material={materials.Material_413}
              />
            </group>
          </group>
          <group
            position={[46.87785339, 46.6284256, 8.39665604]}
            rotation={[-0.00196049, 0.33406433, -0.09000058]}
            scale={[0.79900932, 0.79900944, 0.7990095]}
          >
            <group position={[-13.2835083, 9.04850388, -0.00000109]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["ferns_Material_#650_0"].geometry}
                material={nodes["ferns_Material_#650_0"].material}
              />
            </group>
          </group>
          <group
            position={[-8.33627129, 32.70284271, -8.65743828]}
            rotation={[-0.03975242, -0.95324703, -0.0579265]}
            scale={[0.73639059, 0.73639059, 0.73639047]}
          >
            <group position={[77.14224243, -2.51139832, -9.58417511]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood_structure_wooden_skel_no_op_0.geometry}
                material={nodes.wood_structure_wooden_skel_no_op_0.material}
              />
            </group>
          </group>
          <group
            position={[-11.42706299, 60.91779327, -3.19420505]}
            rotation={[2.3e-7, 0.77270817, -1.6e-7]}
            scale={[0.84000438, 1, 0.99999988]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["door_door_+_barrels_0"].geometry}
              material={nodes["door_door_+_barrels_0"].material}
            />
          </group>
          <group
            position={[15.00488472, 38.22292709, -26.35274315]}
            rotation={[-Math.PI / 2, 0, 1.90387633]}
            scale={[0.04895208, 0.04895208, 0.15941074]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["barrels_door_+_barrels_0"].geometry}
              material={nodes["barrels_door_+_barrels_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.barrels_planks_0.geometry}
              material={nodes.barrels_planks_0.material}
            />
          </group>
          <group
            position={[-1.06290054, 56.91677856, -47.88105774]}
            rotation={[5.7e-7, -1.2810113, 5.5e-7]}
            scale={[0.39795071, 0.15527649, 0.60317278]}
          >
            <group position={[77.14224243, -2.51139832, -9.58417511]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.windows_wooden_skel_no_op_0.geometry}
                material={nodes.windows_wooden_skel_no_op_0.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["windows_door_+_barrels_0"].geometry}
                material={nodes["windows_door_+_barrels_0"].material}
              />
            </group>
          </group>
          <group
            position={[18.80519104, -42.01961136, 19.52265739]}
            rotation={[1.55861782, 0.00756996, -0.3511948]}
            scale={[0.47360107, 0.47360113, 0.47360107]}
          >
            <group position={[-186.90118408, 79.68679047, -8.77703762]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood_beams_wooden_skel_no_op_0.geometry}
                material={nodes.wood_beams_wooden_skel_no_op_0.material}
              />
            </group>
          </group>
          <group
            position={[-54.45789719, 38.76946259, -13.4381237]}
            rotation={[-Math.PI / 2, -9e-8, 9e-8]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["klimop_Material_#650_0"].geometry}
              material={nodes["klimop_Material_#650_0"].material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/casita.glb");

