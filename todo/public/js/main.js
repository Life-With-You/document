$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('itemid')


    // console.log(recipient)
    var data = button.closest("li").find('h5').text()
    var modal = $(this)
    modal.find('form').attr('action', '/edit/' + recipient)
    modal.find('.modal-body input').val(data)
})
var finish = $('.finished').length
var unfinish = ($('.list-group-item').length) - ($('.finished').length)
$('.panel-footer').find('strong').eq(1).text(finish)
$('.panel-footer').find('strong').eq(2).text(unfinish)