from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/geovia')
client = MongoClient(MONGO_URI)
db = client.get_database()

@app.route('/api')
def api():
    return jsonify({'message':'Backend Works!', 'projects_count': db.projects.count_documents({})})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)