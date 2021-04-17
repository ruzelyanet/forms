function before(router) {
    router.beforeEach(
        async(to, from, next) => {
            const token = localStorage.getItem('token')

            if (to.matched.some((record) => record.meta.requiresAuth)) {
                if (!token) {
                    next({ name: 'auth' })
                } else {
                    next()
                }
            } else if (token) {
                next({ name: 'app' })
            } else {
                next()
            }
        },
    )
}

export default before