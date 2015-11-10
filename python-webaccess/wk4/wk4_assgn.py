import urllib2
import BeautifulSoup

BS = BeautifulSoup.BeautifulSoup

response = urllib2.urlopen("http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/comments_189852.html")

html = response.read()
bs = BS(html)
total = 0

for tag in bs("span"):
    total += int(tag.text)

print total
