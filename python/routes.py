from app import app
from flask import request
import os


@app.route("/save-data", methods = ["POST"])
def save_data():
    return save_to_file(request.json), 200

def save_to_file(json_data):
    data = "Bet: " + json_data["Bet"] + " Balance: " + json_data["Balance"] 
    txt = open("results.txt", "a")
    txt.write(data + "\n")
    return "success!"
