const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let result = 0;
  let combinesIXXandVGC = ixx.concat(vgc);
  combinesIXXandVGC.map(combinesIXXandVGC => {
      if (combinesIXXandVGC.hasil === emotion) 
        result++;
    }
  )
  return result;
};

module.exports = {
  promiseOutput,
};
