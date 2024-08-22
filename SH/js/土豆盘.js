log(typeof(pdfl));
var rule = {
  title: '土豆',
  host: 'https://tudou.lvdoui.top',
  url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  //url: '/index.php/vodshow/fyfilter.html',
  searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
  searchable: 2,
  quickSearch: 0,
  filterable:1,//是否启用分类筛选,
  filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: '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',

	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		21:{cateId:'21'},
		22:{cateId:'22'},
		4:{cateId:'4'},
		3:{cateId:'3'},
		20:{cateId:'20'},
		24:{cateId:'24'}
	},
  class_name: '全部&电影&国产剧&韩剧&美剧&动漫&综艺&纪录片&短剧',
  class_url: '0&1&2&21&22&4&3&20&24',
  play_parse: true,
  lazy: $js.toString(() => {
        let url = input.startsWith('push://') ? input : 'push://' + input;
        input = {parse: 0, url: url};
    }),
  limit: 6,
  推荐: '.content;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  double: true,
  一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  二级: {
    title: 'h1&&Text',
    img: '.module-item-pic&&img&&data-src',
    desc: ';.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(0)&&Text',
    content: '.video-info-items:eq(4)&&Text',
    tabs: '.module-tab-item',
    lists: '.module-row-one:eq(#id)&&a.module-row-text',
    list_text:'h4&&Text',
    list_url:'a&&data-clipboard-text',
  },
  搜索: '.module-items .module-search-item;h3&&a&&title;img&&data-src;.video-serial&&Text;a&&href',
}