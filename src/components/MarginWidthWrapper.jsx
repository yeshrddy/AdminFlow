import { ReactNode } from 'react';
import SideNav from './SideNav';
// import SideNav from './SideNav';

export default function MarginWidthWrapper({
  children,
}) {
  return (
    <div className="flex rounded-lg p-4 pt-7 md:mx-7 mt-32 min-h-screen gap-2">
      <SideNav/>
      <div className="flex-1 rounded-lg flex flex-col min-h-screen">
        <div className="min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
