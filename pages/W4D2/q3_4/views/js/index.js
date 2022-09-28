$("#add-cart").click(function() {
    $.ajax('/cart/addToCart', {
        type : 'post',
        contentType : 'application/json',
        data : JSON.stringify({ id : $('input[name=id]').val()})
    }).done((data) => {
        data = JSON.parse(data);
        toastr.success(data.product.title + data.message);
    }).fail(() => {
        toastr.error('Product adding failed try another time');
    })
})