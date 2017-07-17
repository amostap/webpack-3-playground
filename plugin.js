class Logger {
  apply(compiler) {
    compiler.plugin("run", (compiler, callback) => {
      console.log("Webpack is runnig");
      callback();
    });
  }
}

module.exports = Logger;
