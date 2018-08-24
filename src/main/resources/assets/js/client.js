function loadData(serviceUrl, target) {
    jQuery.get(serviceUrl, function (data) {
        $(target).html([createHead()].concat(data.results.map(createRow)).join(''));
    });
}

var createHead = function () {
    return '<thead><tr>' +
           '<th>User</th>' +
           '<th>App</th>' +
           '<th>Item ID</th>' +
           '<th>Action</th>' +
           '<th>Date</th>' +
           '</tr></thead>'
};

var createRow = function (data) {
    var item = data.items.length > 0 ? data.items[0] : data.items;
    return '<tr>' +
           '<td>' + data.user.displayName + '</td>' +
           '<td>' + data.app.name + '</td>' +
           '<td>' + item.id + '</td>' +
           '<td>' + item.action + '</td>' +
           '<td>' + (data.date ? new Date(data.date).toISOString() : 'Unknown') + '</td>' +
           '</tr>'
};
