var init = require('/lib/init');
var eventLib = require('/lib/xp/event');
var contextLib = require('/lib/xp/context');

var ME = 'AUDIT TOOL: ';

init.initialize();

var doCreate = function (event) {
    var createdNode = init.connect().create({
        _parentPath: '/events',
        event: JSON.parse(event.data.auditData)
    });

    log.info(ME + ' created node ' + JSON.stringify(createdNode));
};

eventLib.listener({
    type: 'custom.AUDIT_EVENT',
    callback: function (event) {
        log.info(ME + ' got event ' + JSON.stringify(event));

        contextLib.run(
            {
                user: {
                    login: 'su',
                    userStore: 'system'
                },
                principals: ['role:system.admin']
            },
            doCreate.bind(this, event)
        );
    }
});
