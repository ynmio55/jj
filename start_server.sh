#!/bin/bash
# =======================================================
# Start Server Script for Anniversary App (anniversary.miosmooth.com)
# =======================================================

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR" || exit 1

# Load Node / NPM PATH environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
NODE_LATEST=$(ls "$HOME/.nvm/versions/node" 2>/dev/null | tail -n 1)
if [ -n "$NODE_LATEST" ]; then
    export PATH="$HOME/.nvm/versions/node/$NODE_LATEST/bin:$PATH"
fi
export PATH="$PROJECT_DIR/node_modules/.bin:$PATH:/usr/local/bin:/usr/bin:/bin"

echo "🚀 Initializing Anniversary App Server..."
echo "Node path: $(which node 2>/dev/null || echo 'not found')"
echo "NPM path : $(which npm 2>/dev/null || echo 'not found')"

# 1. Install dependencies if node_modules is missing
if [ ! -d "$PROJECT_DIR/node_modules" ]; then
    echo "📥 Installing frontend dependencies (npm install)..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install npm dependencies!"
        exit 1
    fi
fi

# 2. Build Production Assets if dist/ does not exist
if [ ! -d "$PROJECT_DIR/dist" ]; then
    echo "📦 Building Production Assets..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ Failed to build frontend!"
        exit 1
    fi
else
    echo "📦 Using existing production build in dist/"
fi

# 3. Stop any existing process running on port 3002
PID=$(lsof -t -i:3002 2>/dev/null)
if [ -n "$PID" ]; then
    echo "🔄 Stopping existing process on port 3002 (PID: $PID)..."
    kill -9 $PID 2>/dev/null
fi

# 4. Start Node.js static server on port 3002 in background
echo "🌐 Starting Anniversary App Server on port 3002..."
nohup node "$PROJECT_DIR/server.js" > "$PROJECT_DIR/server.log" 2>&1 &

# 5. Wait for initialization
sleep 2

# 6. Verify server status
if curl -s http://127.0.0.1:3002 > /dev/null; then
    echo "✅ Anniversary App Server is RUNNING at http://127.0.0.1:3002"
else
    echo "❌ Failed to start Anniversary App. Check server.log for details."
    cat "$PROJECT_DIR/server.log"
    exit 1
fi

# 7. Restart Cloudflare Tunnel if installed and configured
if command -v cloudflared &> /dev/null; then
    if [ -f "$HOME/.cloudflared/ascii-vision.yml" ]; then
        echo "⚡ Restarting Cloudflare Tunnel (ascii-vision)..."
        pkill -f "cloudflared" 2>/dev/null || true
        nohup cloudflared tunnel --protocol http2 --config "$HOME/.cloudflared/ascii-vision.yml" run ascii-vision > "$PROJECT_DIR/cloudflared.log" 2>&1 &
        echo "✅ Cloudflare Tunnel restarted!"
    fi
fi

echo "======================================================="
echo "🎉 Jame & Muay Anniversary App is LIVE!"
echo "   - Local URL  : http://localhost:3002"
echo "   - Public URL : https://jame-muay.miosmooth.com"
echo "   - Aliases    : https://jameandmuay.miosmooth.com"
echo "                  https://jamemuay.miosmooth.com"
echo "======================================================="
