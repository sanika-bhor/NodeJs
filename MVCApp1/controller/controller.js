const ejs=require('ejs');

exports.home=(req,res)=>{
    ejs.renderFile("./views/index.ejs",{},{},(err,template)=>{
       if(err)
        {
            throw err;
        }
        else
        {
            res.end(template);
        }
    });
}

exports.about = (req, res) => {
  ejs.renderFile("./views/about.ejs", {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
};


exports.contactus = (req, res) => {
  ejs.renderFile("./views/contact.ejs", {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
};

exports.services = (req, res) => {
  ejs.renderFile("./views/service.ejs", {}, {}, (err, template) => {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
};