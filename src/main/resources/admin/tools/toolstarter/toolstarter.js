var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/xp/mustache');
var adminLib = require('/lib/xp/admin');

exports.get = function (req) {
    var view = resolve('toolstarter.html');

    // Variables required by the Launcher Panel
    var baseHref = portalLib.pageUrl({
        path: '',
        type: 'absolute'
    });
    
    var adminUrl = adminLib.getBaseUri();
    var assetsUrl = portalLib.assetUrl({path: ""});
    var params = {
        baseHref: baseHref,
        adminUrl: adminUrl,
        assetsUrl: assetsUrl,
        launcherUrl: portalLib.assetUrl({
            path: '/js/launcher',
            application: 'com.enonic.xp.app.main'
        })
    };

    return {
        body: mustacheLib.render(view, params)
    };
};