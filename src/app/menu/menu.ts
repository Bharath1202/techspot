/* 
 <smart-tree #tree id="tree">
          <smart-tree-items-group *ngFor="let p of adminMenu">
            <i class="material-icons">&#xE53F;</i> {{p?.title}}
            <smart-tree-item *ngFor="let i of p.children" [routerLink]="i.url">{{i.title}}</smart-tree-item>
          </smart-tree-items-group>
        </smart-tree>


*/

export const Menu = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: 'admin/dashboard',
  },
  {
    id: 'baby',
    title: 'Baby',
    type: 'item',
    url: 'admin/baby',
  },
  {
    id: 'beautyAndPersonalCare',
    title: 'Beauty',
    type: 'item',
    url: 'admin/beautyAndPersonalCare',
  },
  {
    id: 'computer',
    title: 'Computer',
    type: 'item',
    url: 'admin/computer',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    type: 'item',
    url: 'admin/electronicsList',
  },
  {
    id: 'homeAcessories',
    title: 'Home & Kitchen',
    type: 'item',
    url: 'admin/homeAcessories',
  },

]


export const Menu1 = [
  {
    id: 'electronics',
    title: 'Electronics',
    type: 'collapse',
    children: [
      {
        id: 'mobiles',
        title: 'Mobile',
        icon: 'monitor',
        url: 'mobiles',
      },
    ]
  },
];