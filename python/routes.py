from app import app
from flask import request, send_from_directory
import os



STATIC_DIR = os.path.abspath(os.path.join(os.getcwd(), ".."))
@app.route("/")
def send_html():
    print(STATIC_DIR)
    return send_from_directory(STATIC_DIR, "index.html")


#kod för att hämta statiska filer
@app.route("/img/<filename>")
def get_image(filename):
    return send_from_directory(os.path.join(STATIC_DIR, "img"),filename)

@app.route("/dist/<filename>")
def get_file(filename):
    return send_from_directory(os.path.join(STATIC_DIR, "dist"), filename)

@app.route("/styles/<filename>")
def get_styles(filename):
    return send_from_directory(os.path.join(STATIC_DIR, "styles"), filename)

@app.route("/save-data", methods = ["POST"])
def save_data():
    print(request.json)
    return save_to_file(request.get_json()), 200

def save_to_file(json_data):
    data = "Bet: " + json_data["Bet"] + " Balance: " + json_data["Balance"] + " Number: " + json_data["Number"]
    txt = open("results.txt", "a")
    txt.write(data + "\n")
    return "success!"
