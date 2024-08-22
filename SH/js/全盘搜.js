var rule = {
    title: '全盘[搜]',
    host: 'https://so.yuneu.com',
    searchUrl: '/search?exact=true&page=fypage&q=**&share_time=&type=&user=',
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
    "title": "._resource-link_1u20h_158&&title;.detail-icon&&Text",
    "img": "",
    "desc": ";;;;._status-ok_1u20h_232&&Text",
    "content": "",
    "tabs":"js:TABS=['SOSO']",
    "lists": "._resource-link_1u20h_158",
    "list_text":"._resource-link_1u20h_158&&title",
    "list_url":"a&&href",
            },
    搜索: '._search-content_13oe3_167 ._search-item_12qtj_18;._search-item-head_12qtj_24&&a&&title; ;._search-item-logo_12qtj_32&&alt;._search-item-head_12qtj_24&&a&&href',
}