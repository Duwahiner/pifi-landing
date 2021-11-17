export default function itemsHandler({ body }, res) {
  
  setTimeout(() => {
    res.status(200).json({ 
      user : {
        name: '',
        email: body.email,
        session: false,
        state: {
          login: {}
        }
      }
    })
  }, 2000)
}
