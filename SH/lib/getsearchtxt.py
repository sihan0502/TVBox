#coding=utf-8
#!/usr/bin/python
import sys
import json
import time
from datetime import datetime
from difflib import SequenceMatcher
from urllib.parse import quote, unquote
sys.path.append('..')
from base.spider import Spider

class Spider(Spider):  # 元类 默认的元类 type
	def getName(self):
		return "B站番剧"

	def init(self, extend):
		try:
			self.extendDict = json.loads(extend)
		except:
			self.extendDict = {}

	def isVideoFormat(self, url):
		pass

	def manualVideoCheck(self):
		pass

	def homeContent(self, filter):
		result = {}
		cateManual = {
			"番剧": "1",
			"国创": "4",
			"电影": "2",
			"综艺": "7",
			"电视剧": "5",
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name': k,
				'type_id': cateManual[k]
			})
		result['class'] = classes
		if filter:
			result['filters'] = self.config['filter']
			currentYear = datetime.now().year
			for resultfilter in result['filters']:
				for rf in result['filters'][resultfilter]:
					if rf['key'] == 'year':
						for rfv in rf['value']:
							if rfv['n'].isdigit():
								if int(rfv['n']) < currentYear:
									pos = rf['value'].index(rfv)
									for year in range(currentYear, int(rfv['n']), -1):
										rf['value'].insert(pos, {'v': f'[{str(year)},{str(year+1)})', 'n': str(year)})
										pos += 1
									break
								else:
									break
					elif rf['key'] == 'release_date':
						for rfv in rf['value']:
							if rfv['n'].isdigit():
								if int(rfv['n']) < currentYear:
									pos = rf['value'].index(rfv)
									for year in range(currentYear, int(rfv['n']), -1):
										rf['value'].insert(pos, {'v': f'[{str(year)}-01-01 00:00:00,{str(year+1)}-01-01 00:00:00)', 'n': str(year)})
										pos += 1
									break
								else:
									break
		return result

	def homeVideoContent(self):
		return self.categoryContent('1', '1', False, {})

	def categoryContent(self, cid, page, filter, ext):
		page = int(page)
		result = {}
		videos = []
		cookie, _, _ = self.getCookie('{}')
		url = 'https://api.bilibili.com/pgc/season/index/result?order=2&sort=0&pagesize=20&type=1&st={}&season_type={}&page={}'.format(cid, cid, page)
		for key in ext:
			url += f'&{key}={quote(ext[key])}'
		r = self.fetch(url, headers=self.header, cookies=cookie, timeout=5)
		data = json.loads(self.cleanText(r.text))
		vodList = data['data']['list']
		for vod in vodList:
			aid = str(vod['season_id']).strip()
			title = self.removeHtmlTags(self.cleanText(vod['title']))
			img = vod['cover'].strip()
			remark = vod['index_show'].strip()
			videos.append({
				"vod_id": aid,
				"vod_name": title,
				"vod_pic": img,
				"vod_remarks": remark
			})
		lenvideos = len(videos)
		if data['data']['has_next'] == 1:
			pagecount = page + 1
		else:
			pagecount = page
		result['list'] = videos
		result['page'] = page
		result['pagecount'] = pagecount
		result['limit'] = lenvideos
		result['total'] = lenvideos
		return result

	def detailContent(self, did):
		did = did[0]
		url = "http://api.bilibili.com/pgc/view/web/season?season_id={0}".format(did)
		r = self.fetch(url, headers=self.header, timeout=10)
		data = json.loads(self.cleanText(r.text))
		vod = {
			"vod_id": did,
			"vod_name": self.removeHtmlTags(data['result']['title']),
			"vod_pic": data['result']['cover'],
			"type_name": data['result']['share_sub_title'],
			"vod_actor": data['result']['actors'].replace('\n', '，'),
			"vod_content": self.removeHtmlTags(data['result']['evaluate'])
		}
		videoList = data['result']['episodes']
		playUrl = ''
		for video in videoList:
			eid = video['id']
			cid = video['cid']
			name = self.removeHtmlTags(video['share_copy']).replace("#", "-").replace('$', '*')
			remark = time.strftime('%H:%M:%S', time.gmtime(video['duration']/1000))
			if remark.startswith('00:'):
				remark = remark[3:]
			playUrl = playUrl + '[{}]/{}${}_{}#'.format(remark, name, eid, cid)
		vod['vod_play_from'] = 'B站番剧'
		vod['vod_play_url'] = playUrl.strip('#')
		result = {
			'list': [
				vod
			]
		}
		return result

	def searchContent(self, key, quick):
		return self.searchContentPage(key, quick, '1')

	def searchContentPage(self, key, quick, page):
		videos = []
		cookie = ''
		if 'cookie' in self.extendDict:
			cookie = self.extendDict['cookie']
		if 'json' in self.extendDict:
			r = self.fetch(self.extendDict['json'], timeout=10)
			if 'cookie' in r.json():
				cookie = r.json()['cookie']
		if cookie == '':
			cookie = '{}'
		elif type(cookie) == str and cookie.startswith('http'):
			cookie = self.fetch(cookie,