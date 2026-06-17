#!/bin/bash
set -euo pipefail

# Load environment variables from .env file
if [ -f .env ]; then
    while IFS='=' read -r key value || [ -n "$key" ]; do
        case "$key" in
            ''|\#*) continue ;;
        esac

        value="${value%$'\r'}"
        export "$key=$value"
    done < .env
else
    echo ".env file not found!"
    exit 1
fi

# Check required variables
if [ -z "${FTP_USER:-}" ] || [ -z "${FTP_HOST:-}" ] || [ -z "${FTP_FOLDER:-}" ] || [ -z "${FTP_PASS:-}" ]; then
    echo "FTP_USER, FTP_HOST, FTP_FOLDER, and FTP_PASS must be set in .env"
    exit 1
fi

# Set default port if not specified
if [ -z "${FTP_PORT:-}" ]; then
    FTP_PORT=21
fi


lftp -u "$FTP_USER","$FTP_PASS" -p "$FTP_PORT" "$FTP_HOST" <<EOF
  set ftp:ssl-allow no

  # Upload hashed/static assets first. HTML references these files, so they
  # must exist remotely before new entrypoint HTML is published.
  mirror -Rev out "$FTP_FOLDER" \
    --parallel=5 \
    --exclude-glob "*.html" \
    --verbose

  # Publish HTML entrypoints last to avoid serving pages that point to missing
  # _next/static assets during deploy. Use put instead of mirror so same-size
  # HTML files are overwritten.
  put -O "$FTP_FOLDER" out/index.html
  put -O "$FTP_FOLDER" out/busca-respuestas-ep.html
  put -O "$FTP_FOLDER" out/404.html

  quit
EOF

echo "Deployment successful!"
