from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/idea", methods=["GET"])
def get_idea():
    return jsonify("test")


app.run(debug=True)
