#!/bin/bash

#run the validator
d=$( curl http://127.0.0.1:5000/api)
echo $d
#run the python app