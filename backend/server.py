from flask import Flask, jsonify
from backend.crawler import getRandomRelaxPage, getProductInfo

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route("/idea", methods=["GET"])
def get_idea():
    idea = getRandomRelaxPage()
    return jsonify(idea)


@app.route("/info/<url>", methods=["GET"])
def get_info(url):
    info = getProductInfo(url)
    return jsonify(info)


app.run(host="0.0.0.0", debug=True)
