const jwt = require("jsonwebtoken");
var secrete = "it's sanika";

exports.login = (req, res) => {
  res.render("../views/login.ejs");
};

exports.welcome = (req, res) => {
  let user = req.body;
  console.log(user);

    if (user.username == "bhorsanika0239@gmail.com" && user.password == "sanika") {
      let data = {
        time: Date(),
        client: user.username,
      };

      let token=jwt.sign(data,secrete);
      console.log(token);
      res.render('../views/welcome.ejs');
    }
    else
    {
      res.send('inalid user');
    }

//       let data = {
//         time: Date(),
//         client: user.username,
//       };
//       let token=jwt.sign(data,secrete);
//       console.log(token);

//   res.render("../views/welcome.ejs");
};
