import { logout } from '../../store/login/actions';

const nav = [
  {
    menu: [
      {
        label: 'Home',
        icon: 'home',
        url: '/',
      },
      {
        label: 'Fila de Solicitações',
        icon: 'assessment',
        url: '/proposals',
      },
    ],
  },
  {
    menu: [
      {
        label: 'Logout',
        icon: 'input',
        onClick: logout,
      },
    ],
  },
];

export default nav;
