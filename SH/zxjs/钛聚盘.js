var rule = {
    title: '钛聚盘[搜]',
    host: 'https://www.taijuwang.cc',
    url: '/page/fypage?index=fyclass',
    searchUrl: '/page/fypage?s=**',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'PC_UA',
    },
    timeout: 5000,
    class_name:'电影&剧集&动漫&综艺&短剧&纪录&音频&课程&书籍',
	class_url:'2&3&4&5&6&7&8&9',
    play_parse: true,
    //推送阿里播放  支持影视壳
  lazy: $js.toString(() => {
        let url = input.startsWith('push://') ? input : 'push://' + input;
        input = {parse: 0, url: url};
    }),
    一级: '.fixed-wrap-content .mini;.entry-info&&a&&title;.forum-user&&img&&src;.meta-left&&.icon-circle&&title;.entry-info&&a&&href',
    二级: {
    "title": ".article-header&&a&&title;.meta-left&&span:ep(1)&&Text",
    "img": ".wp-posts-content&&img&&src",
    "desc": ";;;.wp-posts-content&&p:eq(3)&&Text",
    "content": ".wp-posts-content&&p:eq(1)&&Text",
    "tabs": "",
    "lists": ".quote-mce&&a",
    "list_text": "a&&Text"
            },
    搜索: '.type-forum .forum-posts;.imgbox-container&&img&&alt;.imgbox-container&&img&&data-src;.excerpt&&Text;.forum-title&&a&&href',
}