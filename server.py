# app.py
from flask import Flask, jsonify
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/api/fortnight-info', methods=['GET'])
def get_fortnight_info():
    now = datetime.now()
    next_fortnight = now + timedelta(days=14)
    response = {
        'current_date': now.strftime('%Y-%m-%d'),
        'next_fortnight': next_fortnight.strftime('%Y-%m-%d')
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
