var dateSorter = function (data1, data2) {
    if (!data1.date) {
        return 1;
    } else if (!data2.date) {
        return -1;
    } else {
        return new Date(data2.date).getTime() - new Date(data1.date).getTime();
    }
};

function loadData(serviceUrl, target) {
    jQuery.get(serviceUrl, function (data) {
        $(target).html([createHead()].concat(data.results.sort(dateSorter).map(createRow)).join(''));
    });
}

var createHead = function () {
    return '<thead><tr>' +
           '<th>User</th>' +
           '<th>App</th>' +
           '<th>Item ID</th>' +
           '<th>Action</th>' +
           '<th>Date</th>' +
           '<th></th>' +
           '</tr></thead>'
};

var toggle = function (link) {
    $(link).parents('tr').toggleClass('expanded');
};

var createRow = function (data) {
    var item = data.items.length > 0 ? data.items[0] : data.items;
    return '<tr>' +
           '<td>' + data.user.displayName + '</td>' +
           '<td>' + data.app.name + '</td>' +
           '<td>' + item.id + '</td>' +
           '<td>' + item.action + '</td>' +
           '<td>' + (data.date ? new Date(data.date).toISOString() : 'Unknown') + '</td>' +
           '<td><a href="#" onclick="toggle(this)">Details</a></td>' +
           '<td class="details">Details container here</td>' +
           '</tr>'
};
