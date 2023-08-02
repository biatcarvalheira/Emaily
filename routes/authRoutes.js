//this is calling the actual passport library and not my passport file
const passport = require('passport')


//the string google will always refer to the Google Strategy function call 

module.exports = app =>{

  app.get (
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );

app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/surveys");
});
  
  app.get('/api/logout', (req, res) => {
      req.logout();
      res.send(req.user);
  });
  
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
