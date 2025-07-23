// Pages
import Home from "../Home";
import About from "../About";
import Product from "../Product";
import Contact from "../Contact";
import NotFound from "../Notfound";
import Cart from "../Cart";
import Sign from "../Sign";
import Favorite from "../Favorite";
import Login from "../Login";

// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import Profile from "../Profile";
import ProductInfo from "../ProductInfo";

const pages = [
  {
    name: "Home",
    path: "/",
    component: Home,
    showInNav: true,
  },
  {
    name: "About",
    path: "/about",
    component: About,
    showInNav: true,
  },
  {
    name: "Products",
    path: "/products",
    component: Product,
    showInNav: true,
  },
  {
    name: "ProInfo",
    component: ProductInfo,
    path: "/products/:id",
    showInNav: false,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
    showInNav: true,
  },
  {
    name: "Sign",
    component: Sign,
    path: "/sign",
    showInNav: false,
  },
  {
    name: "Cart",
    component: Cart,
    path: "/cart",
    icon: ShoppingCartIcon,
    showInNav: true,
  },
  {
    name: "Favorite",
    component: Favorite,
    path: "/favorite",
    icon: LoyaltyIcon,
    showInNav: true,
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
    icon: LoginIcon,
    showInNav: true,
  },
  {
    name: "Notfound",
    path: "/*",
    component: NotFound,
    showInNav: false,
  },
  {
    name: "Profile",
    component: Profile,
    path: "/profile",
    icon: PersonIcon,
    showInNav: false,
  },
];

export default pages;
