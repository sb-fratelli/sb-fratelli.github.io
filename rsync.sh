#!/usr/bin/env bash

rsync -e ssh -avz _site/ root@ps34406.dreamhostps.com:/home/sbfratelli/sbfratelli.org/public
