import React from 'react';
import Post from './Post';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';


function Feed() {
  return (
    <div className="flex max-w-[1150px]  w-full m-auto mt-8 xl:px-8 2lg:max-w-[900px] 2lg:px-4 2md:flex-col sm:min-w-[394px]">
      <SidebarLeft />
      <Post />
      <SidebarRight className="2lg:hidden" />
    </div>
  );
}

export default Feed