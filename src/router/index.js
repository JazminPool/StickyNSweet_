import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inicio from '@/components/Inicio'
import Login from '@/components/Login'
import StandarDesign from '@/components/Estandar'
import CustomDesign from '@/components/Personalizado'
import InfoSticker from '@/components/info'
import PurchaseDetails from '@/components/PurchaseDetails'
import Profile from '@/components/Profile'
import Purchasing from '@/components/Purchasing'
import CreditCard from '@/components/CreditCard'


Vue.use(Router)

export default new Router({
  routes: [
    {//Esto es como el index, el que siempre se va a cargar cada que inicialice la pagina
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {//ejemploxd
      path: '/Vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {//Login y registro
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {//vista de diseños estandar
      path: '/Estandar',
      name: 'StandarDesign',
      component: StandarDesign
    },
    {//vista de diseños personalizados
      path: '/Personalizado',
      name:'CustomDesign',
      component: CustomDesign
    },
    {//Info de cada sticker
      path: '/Info',
      name:'InfoSticker',
      component: InfoSticker
    },
    {//Detalles de la compra del cart
      path: '/Details',
      name:'PurchaseDetails',
      component: PurchaseDetails
    },
    {//Perfil del usuario con sus datos
      path: '/Profile',
      name:'Profile',
      component: Profile
    },
    {//Historial de compras del usuario
      path: '/Purchasing',
      name:'PurchasingHistory',
      component: Purchasing
    },
    {//Vista de la tarjeta de credito
      path: '/Card',
      name: 'CreditCard',
      component: CreditCard
    }
    
  ]
})
