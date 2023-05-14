#!/bin/bash

set -x

GITHUB_USER_NAME=aroundus
GITHUB_REPOSITORY=aroundus.github.io

# Linux
DATE=`date +%Y-%m-%d -d "-${RETENTION_DAYS} days"`

# OSX
# RETENTION_DAYS=30
# DATE=`date -v-${RETENTION_DAYS}d +%Y-%m-%d`

RUN_IDS=($(gh api \
  repos/$GITHUB_USER_NAME/$GITHUB_REPOSITORY/actions/runs --paginate | jq \
  '.workflow_runs[] | select((.created_at[:10] | strptime("%Y-%m-%d") | mktime) as $CREATED_AT | $CREATED_AT <= "$DATE") | select(.["status"] | contains("completed")) | .id'))

for RUN_ID in "${RUN_IDS[@]}"
do
  gh api repos/$GITHUB_USER_NAME/$GITHUB_REPOSITORY/actions/runs/$RUN_ID -X DELETE > /dev/null
done
