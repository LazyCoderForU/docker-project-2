from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from the API service!"

@app.route('/data')
def data():
    return jsonify({"message": "This is data from the API."})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)