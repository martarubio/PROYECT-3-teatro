module.exports = (app) => {
    app.use("/api/events", require("./event.routes"));
    app.use("/api", require('./auth.routes'));
    app.use("api", require('./base.routes'));

}
