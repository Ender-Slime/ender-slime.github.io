
    var sites = [
        'https://www.youtube.com/watch?v=W1_UAu-n-f4',
        'https://www.youtube.com/watch?v=kK81m-A3qpU',
        'https://www.youtube.com/watch?v=fduyBqxhXKs',
        'https://www.youtube.com/watch?v=DzHmlb3rMBQ',
        'https://www.youtube.com/watch?v=JH98YHOCuJo',
        'https://www.youtube.com/watch?v=sG4drWQWYZQ',
        'https://www.youtube.com/watch?v=yc32rRerfgc',
        'https://www.youtube.com/watch?v=QZqYLuCH62Q',
        'https://www.youtube.com/watch?v=N_uVlGHIvFA',
        'https://www.youtube.com/watch?v=4FioEx5wBgA',
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        window.open(sites[i], '_blank');
    }