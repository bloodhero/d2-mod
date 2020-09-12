#!/bin/bash
for remote in `git branch -r`; do git branch --track ${remote#origin/} $remote; done
git fetch --all
git pull --all
