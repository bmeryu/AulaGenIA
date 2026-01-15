#!/bin/bash
# EMERGENCY CACHE BUST - Force Firebase to Upload Fresh landing-nuevo.html

echo "🚨 NUCLEAR CACHE BUST"
echo "Adding timestamp to force upload..."

# Get current timestamp
TIMESTAMP=$(date +%s)

# Create backup
cp landing-nuevo.html landing-nuevo.backup.html

# Add comment with timestamp in head to force cache invalidation
sed -i "4a\\    <!-- FORCE-REFRESH: $TIMESTAMP -->" landing-nuevo.html

echo "✅ Modified landing-nuevo.html with timestamp: $TIMESTAMP"
echo "🚀 Now deploying..."

firebase deploy --only hosting

echo "✅ Deploy complete. Reverting changes..."
mv landing-nuevo.backup.html landing-nuevo.html

echo "🎯 Done. The CDN should now serve the fresh version."
