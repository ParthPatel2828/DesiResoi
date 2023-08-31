$(document).ready(function () {
    // Using jQuery to handle the modal trigger button click event
    $('[data-toggle="modal"]').click(function () {
        var targetModal = $(this).data("target");
        $(targetModal).modal("show");
    });
});