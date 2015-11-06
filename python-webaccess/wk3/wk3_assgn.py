import urllib2

response = urllib2.urlopen("http://www.pythonlearn.com/code/intro-short.txt")
info = response.info()
html = response.read()

# print the response headers
print info
# print the response body
print html
