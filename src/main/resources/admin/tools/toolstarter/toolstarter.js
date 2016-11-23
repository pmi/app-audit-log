var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/xp/mustache');

exports.get = function (req) {
    var view = resolve('toolstarter.html');

    var xpVersion = Java.type("com.enonic.starter.admintool.VersionInfoSupplier").get();
    var params = {
        adminAssetsUrl: portalLib.url({path: "/admin/assets/" + xpVersion}),
        assetsUrl: portalLib.assetUrl({path: ""})
    };

    return {
        body: mustacheLib.render(view, params)
    };
};