module.exports = (app) => {
    app.use("/api", require("./base.routes"));
    app.use("/api", require("./auth.routes"));
    app.use("/api", require("./event.routes"));

};
