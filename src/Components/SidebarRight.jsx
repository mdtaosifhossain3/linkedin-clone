import React from 'react';
import Banner from '../assets/banner.jpg';


function SidebarRight() {
  return (
    <div className="flex-[0.25] 2lg:hidden">
      <img src={Banner} alt="Advertizing" className="sticky top-6" />
    </div>
  );
}

export default SidebarRight