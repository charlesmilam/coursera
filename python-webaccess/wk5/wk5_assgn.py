import urllib2
import xml.etree.ElementTree as ET

response = urllib2.urlopen('http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/comments_42.xml')

xml = response.read()
# print xml
# print type(xml)
tree = ET.fromstring(xml)

comments = tree.findall(".//comment")
print 'number of comments:', len(comments)
for comment in comments:
    print comment.get('name')
