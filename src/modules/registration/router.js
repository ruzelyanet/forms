const registration = {
    path: "registration",
    name: 'reg',
    component: () =>
        import ( /* webpackChunkName: "registration" */ "@/modules/registration")
}

export default registration