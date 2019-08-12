$(function () {
     $('#table').load('./pages/home.html');
    $('.nav li').click(function (e) {
        e.preventDefault();
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        var text = $(this).text().trim();
        switch (text) {
            case '首页': 
                $('#table').load('./pages/home.html');
                break;
            case '栏目管理':
                $('#table').load('./pages/category.html');         
                break;
            case '资讯信息':
                $('#table').load('./pages/info.html')
                break;
            case '用户管理':
                $('#table').load('./pages/user.html')
                break;
            default:
                break;
        }
    });
})