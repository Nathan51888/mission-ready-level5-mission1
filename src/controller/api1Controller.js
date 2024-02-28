module.exports.getCarValue = (req, res) => {
  res.send(calculateCarValue("rtseh", 2030));
};

function calculateCarValue(model, year) {
  let result = 0;
  for (let i = 0; i < model.length; i++) {
    let code = model.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) {
      result += code - 64;
    }
  }
  return result * 100 + year;
}
