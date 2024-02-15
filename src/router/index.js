import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            meta: {
                title: "Home",
                requiresAuth: true
            },
            path: "/",
            component: () => import("@/layouts/MasterLayout.vue"),
            children: [
                {
                    name: "companies",
                    path: "companies",
                    component: () => import("@/views/CompaniesView.vue"),
                },
                {
                    name: "forms",
                    path: "forms",
                    component: () => import("@/views/FormsView.vue"),
                },
                {
                    name: "reportsforms",
                    path: "reportsforms",
                    component: () => import("@/views/AnsweredFormsView.vue"),
                }
            ]
        },
        {
            meta: {
                title: "Login"
            },
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")
        }
    ]
})
// Navigation Guard
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.isAuthenticated) {
        // Si la ruta requiere autenticación y el usuario no está autenticado, redirigir a la página de inicio de sesión
        next({ name: 'login' });
    } else if (to.name === 'login' && store.state.isAuthenticated) {
        next({ name: 'companies' });
    } else if (to.path === '/' && store.state.isAuthenticated) {
        next({ name: 'companies' });
    } else {
        next();
    }

});
export default router;


