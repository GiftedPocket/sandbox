import type { RouteRecordRaw } from 'vue-router';

import { ROUTE_HOME } from './routeNames';

/** 後方互換用。いずれもリンク一覧へ。 */
const LEGACY_REDIRECT_PATHS = [
  'issues',
  'dashboard',
  'showcases',
  'linked-demo',
  'home',
] as const satisfies readonly string[];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: ROUTE_HOME } },
      {
        path: ROUTE_HOME,
        name: ROUTE_HOME,
        component: () => import('pages/LinksPage.vue'),
      },
      {
        path: 'hello',
        name: 'hello',
        meta: { navLink: true, navLabel: 'Hello（デモ）' },
        component: () => import('pages/HelloPage.vue'),
      },
      {
        path: 'yas-kuku',
        name: 'yas-kuku',
        meta: { navLink: true, navLabel: 'Yas Kuku' },
        component: () => import('pages/kuku/YasKuKuPage.vue'),
      },
      {
        path: 'yamag-kuku',
        name: 'yamag-kuku',
        meta: { navLink: true, navLabel: 'Yamag Kuku' },
        component: () => import('pages/kuku/YamagKuKuPage.vue'),
      },
      ...LEGACY_REDIRECT_PATHS.map(
        (path): RouteRecordRaw => ({ path, redirect: { name: ROUTE_HOME } }),
      ),
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
