"use client";

import { Environment } from "@react-three/drei";

import FloatingCan from "@/components/FloatingCan";

type Props = {};

function Scene({}: Props) {
  return (
    <group>
      <FloatingCan />
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default Scene;
