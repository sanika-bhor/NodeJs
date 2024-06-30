// ejs module can download using npm install
const dal=require('../model/dal');

// trying to send index.ejs file at appropriate http request
// which is implementing hollywood rule{don't call me, i will call you}

exports.linker = (req, res) => {
  let model=dal.getPersonalDetails();
  res.render("../views/linker.ejs", model)
}

exports.profile = (req, res) => {
  let model = dal.getPersonalDetails();
  res.render("../views/myProfile.ejs", model);
};