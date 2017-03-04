from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

import json
import os


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')

db = SQLAlchemy(app)


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))

    def __init__(self, title):
        self.title = title

    def toDict(self):
        return { 'id': self.id, 'title': self.title }


@app.route('/items', methods=['GET'])
def list_items():
    items = Item.query.all()

    return jsonify([item.toDict() for item in items])


@app.route('/items', methods=['PUT'])
def create_item():
    data = json.loads(request.data)
    item = Item(data['title'])

    db.session.add(item)
    db.session.commit()

    return jsonify({'success': True})


@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    item = db.session.query(Item).filter_by(id=item_id).first()
    if not item:
        return jsonify({'success': False})

    db.session.delete(item)
    db.session.commit()

    return jsonify({'success': True})


if __name__ == '__main__':
    db.create_all()
