import urllib
import urllib2
import json

location = 'South Federal University'
base_url = 'http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/geojson?'
query_url = base_url + urllib.urlencode({'sensor':'false', 'address': location})
print query_url
response = urllib2.urlopen(query_url)
#
# jdata = response.read()
# data = json.loads(jdata)
#
# total = 0
#
# for datum in data['comments']:
#     total += datum['count']
#
# print 'number of comments:', len(data['comments'])
#
# print 'sum of counts:', total
