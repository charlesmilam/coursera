import urllib2
from bs4 import BeautifulSoup

response = urllib2.urlopen("http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/known_by_Fikret.html")

html = response.read()
bs = BeautifulSoup(html)
total = 0
link_pos = 3
num_iters = 4

for tag in bs.find_all('a'):
    print tag['href']

# print total
