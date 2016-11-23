var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/xp/mustache');

exports.get = function (req) {
    var view = resolve('toolstarter.html');

    // Variables required by the Launcher Panel
    var xpVersion = Java.type("com.enonic.starter.admintool.VersionInfoSupplier").get();
    var adminAssetsUrl = portalLib.url({path: "/admin/assets/" + xpVersion});
    var assetsUrl = portalLib.assetUrl({path: ""});
    var params = {
        adminAssetsUrl: adminAssetsUrl,
        assetsUrl: assetsUrl
    };

    return {
        body: mustacheLib.render(view, params)
    };
};