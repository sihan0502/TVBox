var rule = {
    title: 'TGSO[搜]',
    host: 'https://tgso.pro',
    searchUrl: '/search/**/fypage',
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
        input = {parse: 0, url: url};
    }),
    // 一级: '',
    二级: '*',
    搜索: '.row .msg-box;.box-body&&p:eq(0)&&Text;;;.box-body&&a&&href',
}