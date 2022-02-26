from crypt import methods
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/search", methods = ["GET"])
def searchRequest():
    return "<p>Hello, World123!</p>"



@app.route("/")
def helloworld():
    return "<p>Hello, World!</p>"





if __name__ == '__main__':
    app.run(debug=True) 
                        