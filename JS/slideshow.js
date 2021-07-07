//--------- Slider function-------------------

$(document).ready(function () {
    $('#btn').click(function () {
        $('.sidebar').toggleClass('activeSidebar');


    })
    $('.closeBtn').click(function () {
        $('.sidebar').removeClass('activeSidebar');
    })

    $('#btn1').click(function () {
        $('.sidebar').toggleClass('activeSidebar');

    })
})

// $('#btn').on('click', showMenu);

// function showMenu() {
//     $('.sidebar').toggleClass('activeSidebar');
// }


