import urllib2

response = urllib2.urlopen("http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/comments_42.html")
info = response.info()
html = response.read()

# print the response headers
print info
# print the response body
print html
