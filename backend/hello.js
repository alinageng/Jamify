const Hello = (app) => {
  app.get('/hello', (req, res) => {res.send('hello!')})
  app.get('/', (req, res) => {res.send('Backend is running!')})
}
export default Hello;