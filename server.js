var app = require('./app')



// Access the session as req.session
app.get('/account/:id', (req,res) => {
  req.session.note = "have a cookie"

  res.send('ok')
})

app.get('/checkSessionDetail', (req,res)=>{
  console.log(req.session.note)

  res.send(req.session.note)
})

app.get('/wipeSession', (req,res)=>{
  req.session.destroy()

  res.redirect('/checkSessionDetail')
})

app.listen(3000)