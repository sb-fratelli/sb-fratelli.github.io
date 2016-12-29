#!/usr/bin/env bash

for f in images2016/*; do
    convert -resize 200 ${f} ${f/images2016/thumbs2016}
done

