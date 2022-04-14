#!/bin/sh
RESULT="$(yarn build --filter=$1)"
if echo $RESULT | grep -q "$1:build: cache hit"; then
  echo "false"
else
  echo "true"
fi