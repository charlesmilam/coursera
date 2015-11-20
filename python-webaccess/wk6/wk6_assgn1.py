import urllib2
import json

response = urllib2.urlopen('http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/comments_189853.json')

jdata = response.read()
data = json.loads(jdata)

total = 0

for datum in data['comments']:
    total += datum['count']

print 'number of comments:', len(data['comments'])

print 'sum of counts:', total
