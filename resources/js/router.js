import VueRouter from 'vue-router'

// Pages
import Home from './Home'
import Register from './auth/Register'
import Login from './auth/Login'
import Dashboard from './pages/user/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'
import RolesIndex from './roles/Index'
import RolesCreate from './roles/Create'
import RolesEdit from './roles/Edit'

import AdminLabs from './pages/admin/Labs'
import AdminAddNewLab from './pages/admin/AddNewLab'
import AdminEditLab from './pages/admin/EditLab'

import AdminEquipments from './pages/admin/Equipments'
import AdminAddEquipment from './pages/admin/AddEquipment'
import AdminEditEquipment from './pages/admin/EditEquipment'

import UserLabs from './pages/user/Labs'
import UserEquipments from './pages/user/Equipments'

// Routes
const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '/labs',
        name: 'user.labs',
        component: UserLabs,
        meta: {
            auth: true
        }
    },
    {
        path: '/lab/:id/equipments',
        name: 'user.equipments',
        component: UserEquipments,
        meta: {
            auth: true
        }
    },
    // ADMIN ROUTES
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/admin/labs',
        name: 'admin.labs',
        component: AdminLabs,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/admin/lab/store',
        name: 'admin.addnewlab',
        component: AdminAddNewLab,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/admin/lab/:id/edit',
        name: 'admin.editlab',
        component: AdminEditLab,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/admin/lab/:id/equipments',
        name: 'admin.equipments',
        component: AdminEquipments,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/admin/lab/:id/equipment/store',
        name: 'admin.addequipment',
        component: AdminAddEquipment,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/admin/equipment/:id/edit',
        name: 'admin.editequipment',
        component: AdminEditEquipment,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/roles',
        name: 'roles.index',
        component: RolesIndex,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/roles/create',
        name: 'roles.create',
        component: RolesCreate,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/roles/:id/edit',
        name: 'roles.edit',
        component: RolesEdit,
        meta: {
            auth: { roles: 1, redirect: { name: 'login' }, forbiddenRedirect: '/403' }
        }
    },

]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
})

export default router