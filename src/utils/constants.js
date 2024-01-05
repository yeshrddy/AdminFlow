// import { Icon } from '@iconify/react';


// export const SIDENAV_ITEMS: SideNavItem[] = [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <Icon icon="lucide:home" width="24" height="24" />,
//   },
//   {
//     title: 'Projects',
//     path: '/projects',
//     icon: <Icon icon="lucide:folder" width="24" height="24" />,
//     submenu: true,
//     subMenuItems: [
//       { title: 'All', path: '/projects' },
//       { title: 'Web Design', path: '/projects/web-design' },
//       { title: 'Graphic Design', path: '/projects/graphic-design' },
//     ],
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <Icon icon="lucide:mail" width="24" height="24" />,
//   },
//   {
//     title: 'Settings',
//     path: '/settings',
//     icon: <Icon icon="lucide:settings" width="24" height="24" />,
//     submenu: true,
//     subMenuItems: [
//       { title: 'Account', path: '/settings/account' },
//       { title: 'Privacy', path: '/settings/privacy' },
//     ],
//   },
//   {
//     title: 'Help',
//     path: '/help',
//     icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
//   },
// ];

import { Icon } from '@iconify/react';
import CategoryPills from '../components/CategoryPills';

export const TRANSLATE_AMOUNT = 200;

export const SIDENAV_ITEMS = [
  {
    title: 'My Profile',
    path: '/profile',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Prosonal Information', path: '/information' },
      { title: 'Manage Addresses', path: '/addresses' },
      { title: 'Payment Card Information', path: '/payment' },
      { title: 'All Notifications', path: '/notifications' },
    ],
  },
  {
    title: 'My Orders',
    path: '/orders',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All Orders', path: '/orders' },
      { title: 'My Wishlist', path: '/wishlist' },
      { title: 'My Reviews', path: '/reviews' },
      { title: 'Saved for Later', path: '/saved' },
    ],
  },
];


export const categories = [
  "Mobile & Tablets",
  "Electrical & Electronics",
  "Grocery",
  "TV & Appliances",
  "Fashion",
  "Home & Kitchen",
  "Furniture",
  "Software",
  "Top Saving Offers",
  "Clothing & Apparel",
  "Games & Toys",
  "Gift cards"
]
