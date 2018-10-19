$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('itemid')
    var data = button.closest("li").find('h5').text()
    var modal = $(this)
    modal.find('.modal-title').text('请输入修改的内容');
    modal.find('form').attr('action', '/edit/' + recipient);
    modal.find('.modal-body input').val(data);
})