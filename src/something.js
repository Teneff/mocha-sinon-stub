const impl = require("./impl");

const something = () => {
  return impl.method() + 'xxxx';
}

module.exports = something;