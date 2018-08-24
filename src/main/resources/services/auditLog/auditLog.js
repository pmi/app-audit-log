var init = require('/lib/init');

exports.get = function (req) {
    var connection = init.connect();
    return {
        contentType: 'application/json',
        status: 200,
        body: {
            results: connection.query({
                query: '_parentPath="/events"'
            }).hits.map(function (hit) {
                return connection.get(hit.id).event;
            })
        }
    };
};


