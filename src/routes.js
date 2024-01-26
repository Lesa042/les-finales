import Detail from "./components/pages/Detail.vue"
import Cart from "./components/pages/Cart.vue"
import Wishlist from "./components/pages/Wishlist.vue"
import Homepage from "./components/pages/Homepage.vue"
import Login from "./components/pages/Login.vue"
import Register from "./components/pages/Register.vue"
import Order from "./components/pages/Order.vue"
import Products from "./components/pages/Products.vue"
import UserPage from "./components/pages/ProfilePage.vue"

export const routes = [
{ path: "/", name: "homePage", component: Homepage },
{ path: "/product/:id", name: "detailPage", component: Detail },
{ path: "/cart", name: "cart", component: Cart },
{ path: "/wishlist", name: "wishlist", component: Wishlist },
{ path: "/login", name: "loginPage", component: Login },
{ path: "/Register", name: "registerPage", component: Register },
{ path: "/order", name: "planetBefall", component: Order },
{ path: "/all", name: "allProducts", component: Products },
{ path: "/profile/:component", name: "userPage", component: UserPage }
];