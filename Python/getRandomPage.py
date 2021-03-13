# -*- coding: utf-8 -*-
"""
Created on Sat Mar 13 19:14:37 2021

@author: Kevin
"""

# Webcrawling through relaxdays.de to get all possible item categories
# then select one random category and select a random item on this page
# return the random item link as a string
def getRandomRelaxPage():
    from bs4 import BeautifulSoup
    import requests
    
    html_link = "https://relaxdays.de/"
    
    req = requests.get(html_link)
    soup = BeautifulSoup(req.text, 'html.parser')
    soup = soup.find(id='store.menu').find_all('a')
    
    import re
    regex = r'href=".*html"'
    links = [re.findall(regex, str(href))[0].replace('href=', "").strip('"') for href in soup]
    
    import random
    link = links[random.randint(0, len(links)-1)]
    
    soup2 = requests.get(link)
    soup2 = BeautifulSoup(soup2.text, 'html.parser')
    soup2 = soup2.find_all('a', {'class':'product-item-link'})
    
    regex = r'href=".*html"'
    links = [re.findall(regex, str(href))[0].replace('href=', "").strip('"') for href in soup2]

    link = links[random.randint(0, len(links)-1)]
    return link

# gets a random item link and looks for item_name, item_price and item_main_image
# returns all three infos as string
def getProductInfo(link):
    from bs4 import BeautifulSoup
    import requests
    
    req = requests.get(link)
    soup = BeautifulSoup(req.text, 'html.parser')
    
    #get image
    images = soup.find_all('div', {'class':'image-wrapper'})
    import re
    regex = r'src=".*jpg"'
    image = re.findall(regex, str(images[0]))[0].replace('src=', '').strip('"')
    
    #get price
    prices = soup.find_all('span', {'class': 'price'})
    regex = r'(?<=>)(.*)(?=<)'
    price = re.findall(regex, str(prices[0]))[0]
    
    #get name
    names = soup.find_all('span', {'class': 'base'})
    regex = r'(?<=>)(.*)(?=<)'
    name = re.findall(regex, str(names[0]))[0]
    
    return image, price, name

# gets dictionary and converts it into json format
def buildJSON(dic):
    import json
    json_object = json.dumps(dic, indent=4)
    return json_object


if __name__ =='__main__':
    link = getRandomRelaxPage()
    image, price, name = getProductInfo(link)
    
    dic = {
        'name' : name,
        'price' : price,
        'link' : link,
        'image' : image
        }
    
    print(buildJSON(dic))