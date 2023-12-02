import os
from flask import Flask, request, render_template, redirect, url_for
from collections import Counter

app = Flask(__name__)

class Dec:
    number:int

@app.route('/')
def home():
    return render_template('home.html', result_int = None)

@app.route('/convert', methods=['POST'])
def convert():
    binary = request.form.get('binary')
    bin_c = Counter(binary)
    if bin_c['1'] + bin_c['0'] == len(binary) and binary != None:
        result_int = {
            'convertion' : True,
            'decimal' : int(binary, 2),
            'remarks' : '',
        }
        return render_template('home.html', result_int = result_int)
    else:
        result_int = {
            'convertion' : False,
            'decimal' : 0,
            'remarks' : 'Invalid Binary Number.',
        }
        return render_template('home.html', result_int = result_int)
    
if __name__ == '__main__':
    app.run()