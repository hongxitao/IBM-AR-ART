import http.client
import json

conn = http.client.HTTPSConnection("api.weather.com")

headers = { 'accept': "application/json" }

#url format
# conn.request("GET", "/v1/geocode/LATITUDE/LONGITUDE/observations.json?language=REPLACE_THIS_VALUE&units=REPLACE_THIS_VALUE&apiKey==REPLACE_THIS_VALUE", headers=headers)
conn.request("GET", "/v1/geocode/34.063/-84.217/observations.json?language=en-US&units=e&apiKey=29244201b19a4508a44201b19ad508c1", headers=headers)
res = conn.getresponse()
jsondata = (res.read()).decode("utf-8") #json
dicdata = json.loads(jsondata) #dic
print("json:", jsondata)
print("current conditions:", dicdata['observation']['wx_phrase'])

f = open('weather.json', 'w')
f.write(jsondata)
f.close()


