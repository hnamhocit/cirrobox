"use client";

import { usePathname } from "next/navigation";

const AppDetails = () => {
  const slug = usePathname();

  return (
    <div className="py-12 space-y-12">
      <h1>App Detail {slug}</h1>
    </div>
  );
};

export default AppDetails;
