var repoLib = require('/lib/xp/repo');
var nodeLib = require('/lib/xp/node');
var contextLib = require('/lib/xp/context');

var REPO_NAME = 'com.enonic.xp.app.auditlog';
exports.REPO_NAME = REPO_NAME;

var ROOT_PERMISSIONS = [
    {
        principal: 'role:system.admin',
        allow: [
            'READ',
            'CREATE',
            'MODIFY',
            'DELETE',
            'PUBLISH',
            'READ_PERMISSIONS',
            'WRITE_PERMISSIONS'
        ],
        deny: []
    },
    {
        principal: 'role:system.user.app',
        allow: [
            'READ',
            'CREATE',
            'MODIFY',
            'DELETE',
            'PUBLISH',
            'READ_PERMISSIONS',
            'WRITE_PERMISSIONS'
        ],
        deny: []
    },
    {
        principal: 'role:system.user.admin',
        allow: [
            'READ',
            'CREATE',
            'MODIFY',
            'DELETE',
            'PUBLISH',
            'READ_PERMISSIONS',
            'WRITE_PERMISSIONS'
        ],
        deny: []
    }
];
var EVENTS_NODE_PERMISSIONS = [
    {
        principal: 'role:system.admin',
        allow: [
            'READ',
            'CREATE',
            'MODIFY',
            'DELETE',
            'PUBLISH',
            'READ_PERMISSIONS',
            'WRITE_PERMISSIONS'
        ],
        deny: []
    }
];

var createRepo = function () {
    log.info('Creating repository [' + REPO_NAME + ']...');
    repoLib.create({
        id: REPO_NAME,
        rootPermissions: ROOT_PERMISSIONS
    });
    log.info('Repository [' + REPO_NAME + '] created');
};

exports.connect = function () {
    return nodeLib.connect({
        repoId: REPO_NAME,
        branch: 'master'
    });
};

var createNodes = function () {
    exports.connect().create({
        _name: 'events',
        _parentPath: '/',
        _permissions: EVENTS_NODE_PERMISSIONS
    });
};

var doInitialize = function () {
    var result = repoLib.get(REPO_NAME);
    if (!result) {
        createRepo();
        createNodes();
        repoLib.refresh('SEARCH');
    }
};

exports.initialize = function () {
    contextLib.run(
        {
            user: {
                login: 'su',
                userStore: 'system'
            },
            principals: ['role:system.admin']
        },
        doInitialize
    );
};
