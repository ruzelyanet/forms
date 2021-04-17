const login = {
    path: "login",
    name: 'login',
    component: () =>
        import ( /* webpackChunkName: "login" */ "@/modules/login")
}

export default login