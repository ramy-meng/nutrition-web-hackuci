from flask import Flask
from flask import request
import requests
import json

url = 'https://api.edamam.com/api/recipes/v2' 
appid = "13d3ef3c"
appkey = "c877e6b981dfe35b55518b76f6af9001"

query = {
    'type' :'public'
}
#?type=public&q=chicken&app_id=13d3ef3c&app_key=c877e6b981dfe35b55518b76f6af9001'


app = Flask(__name__)

@app.route("/search/", methods = ["GET"])
def searchRequest():
    # q = request.args.get('q')
    q = "chicken"
    query['q'] = q
    query['app_id'] = appid
    query['app_key'] = appkey
    query['health'] = ['vegan', 'vegetarian']
    response = requests.get(url, params = query)
    # relist = {i['recipe']['label'] : 1 for i in response.json()['hits']}
    # print(relist)
    
    return response.json()



@app.route("/")
def helloworld():
    return "<p>Hello, World!</p>"





if __name__ == '__main__':
    app.run(debug=True) 
                        