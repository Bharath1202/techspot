import { faGauge, faMobile, faComputer, faBaby } from '@fortawesome/free-solid-svg-icons';


export const Menu = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: faGauge,
    url: 'admin/dashboard',
  },
  {
    id: 'baby',
    title: 'Baby',
    icon: faBaby,
    type: 'item',
    url: 'admin/baby',
  },
  {
    id: 'beautyAndPersonalCare',
    title: 'Beauty',
    icon: faBaby,
    type: 'item',
    url: 'admin/beautyAndPersonalCare',
  },
  {
    id: 'computer',
    title: 'Computer',
    icon: faComputer,
    type: 'item',
    url: 'admin/computer',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    icon: faMobile,
    type: 'item',
    url: 'admin/electronicsList',
  },
  {
    id: 'homeAcessories',
    title: 'Home & Kitchen',
    icon: faMobile,
    type: 'item',
    url: 'admin/homeAcessories',
  },

]


export const Menu1 = [
  // {
  //   id: 'electronics',
  //   title: 'Electronics',
  //   type: 'collapsible',
  //   role: ['admin'],
  //   url: 'electronics',
  //   children: [
  {
    id: 'mobiles',
    title: 'Mobile',
    type: 'item',
    url: 'mobiles',
  }
  // ]
  // },
];
