from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def root():
    return render_template("home.html")


@app.route("/<name>")
def names(name):
    a = ["sai", "naresh", "sreekanth", "vijay", "vinay"] + [name]
    return {"names": a}


if __name__ == "__main__":
    app.run(debug=True)
