#!/bin/bash

set -x

# Linux
CUTOFF_DATE=$(date -u -d "$RETENTION_DAYS days ago" +%Y-%m-%dT%H:%M:%SZ)
CUTOFF_TIMESTAMP=$(date -u -d "$RETENTION_DAYS days ago" +%s)

# OSX
# GITHUB_REPOSITORY=
# CUTOFF_DATE=`date -v-30d +%Y-%m-%dT%H:%M:%SZ`
# CUTOFF_TIMESTAMP=`date -v-30d +%s`

RUN_IDS=($(gh api \
  repos/$GITHUB_REPOSITORY/actions/runs --paginate | \
  jq --arg CUTOFF_TIMESTAMP $CUTOFF_TIMESTAMP \
  '.workflow_runs[] | select((.status | contains("completed"))) | select((.created_at | fromdateiso8601) | . < ($CUTOFF_TIMESTAMP | tonumber)) | .id'))

for RUN_ID in "${RUN_IDS[@]}"
do
  gh api repos/$GITHUB_REPOSITORY/actions/runs/$RUN_ID -X DELETE > /dev/null
done
