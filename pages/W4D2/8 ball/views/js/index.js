$("#input").on('keyup', (evt) => {

    if (evt.keyCode == 13) {
        fetch('/8Ball')
        .then(res => res.text())
        .then(res => {
            // $("input").val();
            $("input").val(res)
                .focus();

        })
        .catch(e => console.log(e))
    }
});

$("#input").on('focus', function(evt) {
    $(this).select();
});