var rule = {
    title: '双子星',
    host: 'https://star2.cn',
    url: '/fyclass_fypage/',
    searchUrl: 'https://star2.cn/search/?keyword=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_name:'短剧&国剧&综艺&电影&韩日&英美&外剧&动漫&其他',
	class_url:'dj&ju&zy&dy&rh&ym&wj&dm&qt',
    play_parse: true,
    //推送阿里播放  支持影视壳
  lazy: $js.toString(() => {
        let url = input.startsWith('push://') ? input : 'push://' + input;
        input = {parse: 0, url: url};
    }),
    一级: '.erx-list .item;a&&Text;;.erx-num-font&&Text;a&&href',
    二级: {
    "title": ".erx-m-bot&&h1&&Text",
    "img": "",
    "desc": "",
    "content": "",
    "tabs": "",
    "lists": ".dlipp-cont-bd&&a",
    "list_text": "a&&Text"
            },
    搜索: '*',
}