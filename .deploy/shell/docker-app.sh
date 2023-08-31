#!/bin/bash

if [[ $(docker ps 2>/dev/null) ]]
then
  echo "Docker is running"
  # close docker
  # osascript -e 'quit app"Docker"'
else
  echo "Docker is not running, starting docker..."
  open /Applications/Docker.app
  sleep 30
fi