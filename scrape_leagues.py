import requests
import csv

# Paste the API URL here
url = "https://fantasyscotus.net/league/list/?filterscount=0&groupscount=0&pagenum=0&pagesize=20&recordstartindex=0&recordendindex=20&_=1745456444585&filterscount=0&groupscount=0&pagenum=0&pagesize=20&recordstartindex=0&recordendindex=20"
headers = {'User-Agent': 'Mozilla/5.0'}

response = requests.get(url, headers=headers)
data = response.json()

# Print to check the structure
print(data)
