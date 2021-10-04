from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

import random


app = Flask(__name__,static_url_path='/staticeoifeufy94y9348ty8349tynv98wryyxm230ry03vwefowiefjwio',)

# DATABASE
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://///Users/hemanthdatta/Codess/medal maker/admin.db'
app.config['SECRET_KEY'] = 'mysecret'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#ADMIN
db = SQLAlchemy(app)
admin = Admin(app, url="/admin123")



# HOME PAGE
@app.route("/",methods=['GET','POST'])
def home_page():
    if request.method=='POST':

        id= random.randint(45873,48938)
        name=request.form.get('name')
        add=request.form.get('add1')
        commit= purchases(id=id, name=name, address = add)
        db.session.add(commit)
        db.session.commit()

    return render_template('index.html')


# DATABASE
class purchases(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    address = db.Column(db.String(30))
    
admin.add_view(ModelView(purchases, db.session))

if __name__=='__main__':
    app.run(debug=True)