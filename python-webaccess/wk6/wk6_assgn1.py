import urllib2
import json

response = urllib2.urlopen('http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/comments_42.json')

jdata = response.read()
data = json.loads(jdata)

total = 0

print data
# comments = tree.findall(".//comment")
# print 'number of comments:', len(comments)
#
# for comment in comments:
#     total += int(comment.find('count').text)
#
# print 'sum of counts:', total
