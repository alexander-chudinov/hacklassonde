#!/bin/bash
sleep 10
mv /Users/alexanderChudinov/Downloads/userkey.txt /Users/alexanderChudinov/Desktop/hacklassonde
a=$(node validator.js)
b=1
if [ "$a" = "$b" ]; then
    echo valid user
    java -jar login.jar
else
    open flagged.html
fi
#run the python app