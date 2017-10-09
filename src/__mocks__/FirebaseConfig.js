const firebaseConfig = jest.fn()
const firebaseAuth = jest.fn(() => {
    return{
        signOut: jest.fn()
    }
})

export {firebaseConfig, firebaseAuth}