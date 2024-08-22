var rule = {
    title: '卡帕[搜]',
    host: 'https://www.cuppaso.com',
    searchUrl: '/search?type=2&keyword=**&page=fypage&searchType=0',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    play_parse: true,
    //推送阿里播放  支持影视壳
    lazy: $js.toString(() => {
        let url = input.startsWith('push://') ? input : 'push://' + input;
        input = {
            parse: 0,
            url: url
        };
    }),
    // 一级: '',
    二级: {
        title: ".col-xl-12&&h3&&Text",
        img: '',
        desc: '',
        content: '.card-title&&Text',
        tabs: "js:TABS=['CUPPA']",
        lists: '.col-xl-12&&.mb-2:eq(1)',
        list_text: '.btn-green&&Text',
        list_url: '.text-center&&a&&href',
    },
    搜索: '.col-md-12 .col-12;.card-header&&h3&&Text;;.text-wrap&&Text;.card-title&&a&&href',
}