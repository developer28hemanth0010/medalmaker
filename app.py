from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from random import randint


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
        id = ''.join(["{}".format(randint(0, 9)) for num in range(0, 10)])
        name=request.form.get('name')
        add=request.form.get('add1')
        commit= purchases(id=id, name=name, address=add,)
        db.session.add(commit)
        db.session.commit()
        return render_template('trial2.html',id=id)

    return render_template('trial4.html')


# DATABASE
class purchases(db.Model):
    id = db.Column(db.String(30), primary_key=True)
    name = db.Column(db.String(30))
    address = db.Column(db.String(30))
    
    def __repr__(self) -> str:
        return f"{self.id}- {self.name}- {self.address}"
    
admin.add_view(ModelView(purchases, db.session))

if __name__=='__main__':
    app.run(debug=True)