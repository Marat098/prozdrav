import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/article',
    name: 'Article',
    meta: {layout: 'main'},
    component: () => import('../views/Article.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    meta: {layout: 'main'},
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/doctors',
    name: 'Doctors',
    meta: {layout: 'main'},
    component: () => import('../views/Doctors.vue')
  },
  {
    path: '/doc-profile',
    name: 'DocProfile',
    meta: {layout: 'main'},
    component: () => import('../views/DocProfile.vue')
  },
  {
    path: '/clinics',
    name: 'Clinics',
    meta: {layout: 'main'},
    component: () => import('../views/Сlinics.vue')
  },
  {
    path: '/clinic-profile',
    name: 'ClinicProfile',
    meta: {layout: 'main'},
    component: () => import('../views/ClinicProfile.vue')
  },
  {
    path: '/medical-directory',
    name: 'MedicalDirectory',
    meta: {layout: 'main'},
    component: () => import('../views/MedicalDirectory.vue')
  },
  {
    path: '/disease-directory',
    name: 'DiseaseDirectory',
    meta: {layout: 'main'},
    component: () => import('../views/DiseaseDirectory.vue')
  },
  {
    path: '/disease-article',
    name: 'DiseaseArticle',
    meta: {layout: 'main'},
    component: () => import('../views/DiseaseArticle.vue')
  },
  {
    path: '/promotions',
    name: 'Promotions',
    meta: {layout: 'main'},
    component: () => import('../views/Promotions.vue')
  },
  {
    path: '/promotion-profile',
    name: 'PromotionProfile',
    meta: {layout: 'main'},
    component: () => import('../views/PromotionProfile.vue')
  },
  {
    path: '/all-news',
    name: 'AllNews',
    meta: {layout: 'main'},
    component: () => import('../views/AllNews.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
