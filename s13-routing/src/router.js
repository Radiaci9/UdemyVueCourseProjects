import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from 'vue-router';
import NotFound from './pages/NotFound';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    // {
    //   path: '/teams',
    //   component: TeamsList,
    //   alias: '/',
    // },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
          beforeEnter: (to, _, next) => {
            if (to.path.includes('t6')) {
              next({
                path: '/users',
              });
            } else {
              next();
            }
          },
        },
      ],
    },
    // {
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   props: true,
    // },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    },
    {
      path: '/:notFound(.*)',
      // redirect: '/teams',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return {
      left: savedPosition?.left ?? 0,
      top: savedPosition?.top ?? 0,
    };
  },
});

router.beforeEach((to, _, next) => {
  if (to.meta?.needsAuth && to.path.includes('t5')) {
    next({
      path: '/users',
    });
  } else {
    next();
  }
});

router.afterEach((to, from, failure) => {
  console.log('Global afterEach');
  if (isNavigationFailure(failure)) {
    console.log('failed navigation', failure);
  }
});

export default router;
