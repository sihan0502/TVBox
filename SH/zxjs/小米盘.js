var rule = {
    title: '小米盘[搜]',
    host: 'https://www.misou.fun',
    searchUrl: '/search?exact=false&page=fypage&q=**&share_time=&type=&user=',
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
    //一级: '*',
    二级: {
    title: '.semi-typography-h1&&Text',
    img: '',
    desc: '',
    content: '',
    tabs: '',
    lists: '._resource-link_1u20h_158&&a',
    list_text: ''
  },
    搜索: '.rm-search-content ._search-item_12qtj_18;._search-item-head_12qtj_24&&a&&title;src;._search-item-logo_12qtj_32&&alt;._search-item-head_12qtj_24&&a&&href',
}