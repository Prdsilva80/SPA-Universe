import { Router } from "./router.js";
import navSelected from "./navSelected.js";


const sectionHome = document.querySelector('.home')
const sectionUniverse = document.querySelector('.universe')
const sectionExploration = document.querySelector('.exploration')
const body = document.querySelector('body')
const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")
router.hadle()

window.onpopstate = () => router.hadle()
window.route = () => router.route()


navSelected(sectionHome, sectionUniverse, sectionExploration, body)