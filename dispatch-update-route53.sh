#!/bin/bash
curl -d "{\"event_type\": \"${EVENT}\"}" -H "Content-Type: application/json" -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github.everest-preview+json" "https://api.github.com/repos/${ORGANIZATION}/${REPOSITORY}/dispatches"
