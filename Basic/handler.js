exports.display=function()
{
    var person = {
      firstname: "sanika",
      lastname: "bhor",
      age: 19,
      college: "GPA",
      address: {
        contry: "india",
        state: "maharastra",
        dist: "pune",
      },
    };

    console.log("Full name:" + person.firstname + "  " + person.lastname);
    console.log(person);
}

exports.load=function()
{
    console.log("loding data........");
}