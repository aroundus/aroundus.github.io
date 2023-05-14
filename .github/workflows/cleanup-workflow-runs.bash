#!/bin/bash

set -x

# Linux
CUTOFF_DATE=$(date -u -d "$RETENTION_DAYS days ago" +%Y-%m-%dT%H:%M:%SZ)

# OSX
# GITHUB_REPOSITORY=
# CUTOFF_DATE=`date -v-30d +%Y-%m-%dT%H:%M:%SZ`

RUN_IDS=($(gh api \
  repos/$GITHUB_REPOSITORY/actions/runs --paginate | jq \
  '.workflow_runs[] | select((.status | contains("completed"))) | select(.created_at < "$CUTOFF_DATE") | .id'))

for RUN_ID in "${RUN_IDS[@]}"
do
  gh api repos/$GITHUB_REPOSITORY/actions/runs/$RUN_ID -X DELETE > /dev/null
done
