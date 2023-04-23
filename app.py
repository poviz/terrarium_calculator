from flask import Flask

app = Flask(__name__, static_folder='static')
@app.route("/")
def index():
    return open("index.html").read()