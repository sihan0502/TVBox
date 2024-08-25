var rule = {
    title: '狗狗盘[搜]',
    host: 'https://gogopanso.com:3642',
    searchUrl: '/search?keyword=**&searchtype=movies&page=1&limit=10',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'PC_UA',
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
    搜索: 'json:data;name;;name;downurl;downurl',
}