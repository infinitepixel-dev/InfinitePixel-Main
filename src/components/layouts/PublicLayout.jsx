// src/components/layouts/PublicLayout.jsx

import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="bg-neutral-2 min-h-screen">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
