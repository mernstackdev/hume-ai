"use client";

import Image from "next/image";

export const Nav = () => {
  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <Image src="/logo.svg" alt="Voicing AI" width="100" height="100" />
      </div>
    </div>
  );
};
