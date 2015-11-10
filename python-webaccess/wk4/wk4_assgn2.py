import urllib2
import BeautifulSoup

BS = BeautifulSoup.BeautifulSoup

response = urllib2.urlopen("http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/known_by_Fikret.html")

html = response.read()
bs = BS(html)
total = 0
link_pos = 3
num_iters = 4

for tag in bs("a"):
    print tag

# print total
