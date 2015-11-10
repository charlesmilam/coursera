import urllib2
from bs4 import BeautifulSoup

def get_bs(link):
    response = urllib2.urlopen(link)
    html = response.read()
    return BeautifulSoup(html)

counter = 1
link_pos = 17
num_iters = 7

bs = get_bs("http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/known_by_Eiko.html")
print bs.find_all('a')[link_pos]['href']

# loop through the bs data the required number of times.
# follow the link at the requested position from the returned hrefs
while counter <= num_iters:
    next_link = str(bs.find_all('a')[link_pos]['href'])
    print next_link
    bs = get_bs(next_link)
    counter += 1
