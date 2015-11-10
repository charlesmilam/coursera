import re
import urllib2
from bs4 import BeautifulSoup

def get_bs(link):
    response = urllib2.urlopen(link)
    html = response.read()
    return BeautifulSoup(html)

counter = 1
link_pos = 2
num_iters = 4

bs = get_bs("http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/known_by_Fikret.html")

while counter <= num_iters:
    next_link = str(bs.find_all('a')[link_pos]['href'])
    print next_link
    bs = get_bs(str(next_link))
    counter += 1
