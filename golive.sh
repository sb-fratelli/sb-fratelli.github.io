#!/usr/bin/env bash

ssh root@ps34406.dreamhostps.com rm -rf /home/sbfratelli/sbfratelli.org/public/*
scp -r _site/* root@ps34406.dreamhostps.com:/home/sbfratelli/sbfratelli.org/public

