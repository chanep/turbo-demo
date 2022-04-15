#!/bin/sh
DIR="$(cd "$(dirname "$0")" && pwd)"
echo $DIR
if "$($DIR/app_changed.sh $1)" = "true"; then
  echo "true2"
else
  echo "false2"
fi