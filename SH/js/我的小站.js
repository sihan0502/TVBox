var rule = {
    title: '盘666[搜]',
    host: 'https://pan666.net',
    searchUrl: '/?q=**',
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
    title: '.container&&h1&&Text',
    img: '',
    desc: '',
    content: '',
    tabs: '.PostUser&&h3',
    lists: '.Post-body&&a',
    list_text: 'a&&Text'
  },
    搜索: '.container li;a&&Text;src;;a&&href',
}