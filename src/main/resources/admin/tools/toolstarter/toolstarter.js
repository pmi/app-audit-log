var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/xp/mustache');
var adminLib = require('/lib/xp/admin');

exports.get = function (req) {
    var view = resolve('toolstarter.html');

    var params = {
        adminUrl: adminLib.getBaseUri(),
        assetsUrl: portalLib.assetUrl({
            path: ''
        }),
        launcherPath: adminLib.getLauncherPath(),
        launcherUrl: adminLib.getLauncherUrl()
    };

    return {
        body: mustacheLib.render(view, params)
    };
};