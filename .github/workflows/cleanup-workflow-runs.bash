#!/bin/bash

set -x

# Linux
DATE=`date +%Y-%m-%dT%H:%M:%SZ -d "-${RETENTION_DAYS} days"`

# OSX
# GITHUB_REPOSITORY=
# DATE=`date -v-30d +%Y-%m-%dT%H:%M:%SZ`

RUN_IDS=($(gh api \
  repos/$GITHUB_REPOSITORY/actions/runs --paginate | jq \
  '.workflow_runs[] | select(.created_at <= "$DATE") | select((.status | contains("completed"))) | .id'))

for RUN_ID in "${RUN_IDS[@]}"
do
  gh api repos/$GITHUB_REPOSITORY/actions/runs/$RUN_ID -X DELETE > /dev/null
done
