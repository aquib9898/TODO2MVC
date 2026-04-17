let firstname = "default1";
let secondname = "default2";

const setUser = ({ firstname: fname, secondname: sname }) => {
  firstname = fname || "default";
  secondname = sname || "default1";
};

const getUser = () => {
  return { firstname, secondname };
};

module.exports = {
  getUser,
  setUser,
};
