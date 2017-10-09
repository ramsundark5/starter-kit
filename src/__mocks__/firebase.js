const mockFirebase = jest.genMockFromModule('firebase')

 const mockAuth = jest.fn(() => {
    return{
        signOut: jest.fn()
    }
})

mockFirebase.auth = mockAuth
export default mockFirebase