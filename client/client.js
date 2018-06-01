Vue.component('product', ProductComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);
Vue.component('shipping', ShippingComponent);
Vue.component('product-admin', ProductAdminComponent);
Vue.component('category', CategoryComponent);

// page components (whole views)
Vue.component('home-page', HomePageComponent);
Vue.component('product-page', ProductPageComponent);
Vue.component('login-page', LoginPageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('admin-page', AdminPageComponent);

// "normal" components (partials)
Vue.component('nav-menu', MenuComponent);
Vue.component('hello', HelloComponent);

const http = axios; // using axios 3rd party XHR/REST lib

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products/:category?', component: ProductPageComponent },
    { path: '/cart', component: CartPageComponent },
    { path: '/login', component: LoginPageComponent },
    { path: '/admin', component: AdminPageComponent }

    //Fyll på här för att få fler
  ]
});

let app = new Vue({
  el: "#app",
  router // add the router to the app
});




