export default state => ({
  getState() {
    return state
  },
  dispatch: jest.fn(),
  subscribe: jest.fn()
})
