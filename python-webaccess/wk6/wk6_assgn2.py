import urllib
import urllib2
import json

location = 'South Federal University'
base_url = 'http://pr4e.dr-chuck.com/tsugi/mod/python-data/data/geojson?'
query_url = base_url + urllib.urlencode({'sensor':'false', 'address': location})

response = urllib2.urlopen(query_url)

data = response.read()

try:
    jdata = json.loads(data)
except:
    jdata = None
    if 'status' not in jdata or jdata['status'] != 'OK':
        print '==== Failure To Retrieve ===='
        print data

print jdata['results'][0]['place_id']
