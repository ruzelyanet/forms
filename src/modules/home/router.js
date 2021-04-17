const home = {
    path: "home",
    name: 'home',
    component: () =>
        import ( /* webpackChunkName: "home" */ "@/modules/home")
}

export default home