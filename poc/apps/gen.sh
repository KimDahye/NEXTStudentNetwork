#!/bin/bash
curl localhost/test > temp.html
cat temp.html
aws s3 cp temp.html s3://nextin.me/index.html --region ap-northeast-1
echo "done"
