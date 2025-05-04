import requests
from bs4 import BeautifulSoup

url = 'https://fantasyscotus.net/league/list/'
headers = {'User-Agent': 'Mozilla/5.0'}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

# Try finding the right class or tag — this is just a placeholder
leagues = soup.find_all('a')  # most likely, the league names are inside <a> tags

for league in leagues:
    name = league.get_text(strip=True)
    if name:
        print(name)
