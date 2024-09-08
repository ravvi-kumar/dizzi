import React from "react";
import { FizziLogo } from "@/components/FizziLogo";

type Props = {};

function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 cursor-pointer text-sky-800" />
    </header>
  );
}

export default Header;
