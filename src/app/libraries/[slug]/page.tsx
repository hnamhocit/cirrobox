"use client";

import { usePathname } from "next/navigation";

const LibraryDetails = () => {
  const slug = usePathname();

  return (
    <div>
      <div>Library details: {slug}</div>
    </div>
  );
};

export default LibraryDetails;
