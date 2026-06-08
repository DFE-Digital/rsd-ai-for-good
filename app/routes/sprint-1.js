// Add your routes here - above the module.exports line
var versionMiddleware = require("./versionMiddleware")

module.exports = function (router) {

    var version = "sprint-1";

    versionMiddleware(router, version);

    router.get('/' + version + '/s-p', function (req, res) {
        
    })

}

