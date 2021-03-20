from flask import Flask, render_template

app = Flask(__name__)


@app.route("/<name>")
def root(name):
    a = ["sai", "naresh", "sreekanth", "vijay", "vinay"] + [name]
    return render_template("home.html", names=a)


if __name__ == "__main__":
    app.run(debug=True)
