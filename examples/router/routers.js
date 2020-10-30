export default [
  {
    path: '/',
    name: 'demo',
    meta: {
      title: '3D - Demo',
      hideInMenu: true
    },
    component: () => import('@/view/card/index.vue')
  },
]