#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env file not found!"
    exit 1
fi

# Check required variables
if [ -z "$FTP_USER" ] || [ -z "$FTP_HOST" ] || [ -z "$FTP_FOLDER" ] || [ -z "$FTP_PASS" ]; then
    echo "FTP_USER, FTP_HOST, FTP_FOLDER, and FTP_PASS must be set in .env"
    exit 1
fi

# Set default port if not specified
if [ -z "$FTP_PORT" ]; then
    FTP_PORT=21
fi


lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
  set ftp:ssl-allow no
  mirror -Rev out "$FTP_FOLDER" \
    --parallel=5 \
    --verbose
  quit
EOF


if [ $? -eq 0 ]; then
    echo "Deployment successful!"
else
    echo "Deployment failed!"
    exit 1
fi
