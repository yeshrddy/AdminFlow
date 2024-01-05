import React, { useState } from 'react';

import {useNavigate, Link} from 'react-router-dom'
import usePathname from './../utils/usePathname';
import { SIDENAV_ITEMS } from './../utils/constants';
import { Icon } from '@iconify/react';

const SideNav = () => {
  const pathname = usePathname();
  return (
      <div className="lg:flex h-auto w-96 flex-col hidden gap-2">
        <div className="flex items-center gap-4 rounded-xl border bg-gradient-to-r from-indigo-200 to-yellow-100 p-4">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="h-16 w-16 rounded-full object-cover"
          />

          <div className='flex flex-col' >
            <p className="text-base font-medium text-black"> Hello </p>
            <h3 className="text-3xl font-bold text-black">Jagannath S</h3>
          </div>
        </div>

        
          {SIDENAV_ITEMS.map((item, index) => (
            <div className="py-4 px-6 flex flex-col items-center gap-4 rounded-xl bg-white">
              <p className="text-base font-bold text-black self-start">{item.title}</p>
              {item.submenu && (
                <ul className=" w-full">
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className={`w-full block rounded px-8 py-4 text-lg font-medium text-black ${subItem.path === pathname ? '' : 'hover:bg-zinc-100 hover:text-zinc-500'} 
                        ${subItem.path === pathname ? 'bg-customLightBlue text-customBlue' : ''}
                        `}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
</div>
  );
};
export default SideNav;
