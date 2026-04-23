#!/bin/bash

# ============================================================
# Clubr — Git Setup Script
# Run this from your terminal: bash setup-git.sh
# ============================================================

set -e  # Stop on any error

PROJECT_DIR="/Users/g/bearpath"
GITHUB_USERNAME="gearoidwalsh"
REPO_NAME="clubr"

echo ""
echo "================================================"
echo "  Clubr Git Setup"
echo "================================================"
echo ""

# Step 1 — Navigate to project
echo "→ Navigating to project..."
cd "$PROJECT_DIR"
echo "  ✓ In $(pwd)"
echo ""

# Step 2 — Check .env.local is gitignored
echo "→ Checking .gitignore for .env.local..."
if grep -q ".env.local" .gitignore 2>/dev/null; then
  echo "  ✓ .env.local is gitignored — Supabase keys are safe"
else
  echo "  ✗ WARNING: .gitignore missing .env.local"
  echo "    Adding it now..."
  echo ".env.local" >> .gitignore
  echo "  ✓ Added .env.local to .gitignore"
fi
echo ""

# Step 3 — Initialize git if not already done
echo "→ Checking git status..."
if [ -d ".git" ]; then
  echo "  ✓ Git already initialized"
else
  git init
  echo "  ✓ Git initialized"
fi
echo ""

# Step 4 — Stage all files
echo "→ Staging all files..."
git add .
echo "  ✓ All files staged"
echo ""

# Step 5 — Commit
echo "→ Creating initial commit..."
git commit -m "initial commit: Clubr — Berkeley club recruiting directory" 2>/dev/null || echo "  ✓ Nothing new to commit (already committed)"
echo ""

# Step 6 — Set branch to main
echo "→ Setting branch to main..."
git branch -M main
echo "  ✓ Branch set to main"
echo ""

# Step 7 — Add remote (skip if already exists)
echo "→ Connecting to GitHub remote..."
if git remote get-url origin &>/dev/null; then
  echo "  ✓ Remote already set: $(git remote get-url origin)"
else
  git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
  echo "  ✓ Remote added: https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
fi
echo ""

# Step 8 — Push
echo "→ Pushing to GitHub..."
git push -u origin main
echo ""

echo "================================================"
echo "  ✓ Done! Your code is live on GitHub."
echo ""
echo "  Next steps:"
echo "  1. Go to vercel.com and import the clubr repo"
echo "  2. Add your Supabase env vars in Vercel settings"
echo "  3. Update the live URL in README.md"
echo "================================================"
echo ""
