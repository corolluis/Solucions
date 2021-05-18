$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.title + "</td>" +
                    "<td>" + item.body + "</td>" +
                    "</tr>";
                $("#tabla>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
});