#!/bin/bash

# Colors for better output
GREEN="\033[0;32m"
BLUE="\033[0;34m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo "${BLUE}Welcome to Obsidian Blog Starter Setup!${NC}"

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "${RED}Error: Node.js is not installed${NC}"
    echo "Please install Node.js 18.17 or later from https://nodejs.org"
    exit 1
fi

# Check Node.js version
node_version=$(node -v | cut -d 'v' -f 2)
required_version="18.17.0"
if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" = "$node_version" ] && [ "$node_version" != "$required_version" ]; then
    echo "${RED}Error: Node.js version must be 18.17 or later${NC}"
    echo "Current version: $node_version"
    exit 1
fi

# Check for Git
if ! command -v git &> /dev/null; then
    echo "${RED}Error: Git is not installed${NC}"
    echo "Please install Git from https://git-scm.com"
    exit 1
fi

echo "${GREEN}✓ Node.js $(node -v) detected${NC}"
echo "${GREEN}✓ Git $(git --version | cut -d ' ' -f 3) detected${NC}"

echo "\n${BLUE}Let's configure your blog...${NC}"

# Prompt for configuration values
read -p "Enter your site name: " site_name
read -p "Enter your site description: " site_description
read -p "Enter your site URL (default: http://localhost:3000 for local development): " site_url
site_url=${site_url:-"http://localhost:3000"}

# Optional Google Analytics
read -p "Would you like to set up Google Analytics? (y/N): " setup_ga
if [[ $setup_ga =~ ^[Yy]$ ]]; then
    read -p "Enter your Google Analytics ID: " ga_id
fi

# Optional social media handles
read -p "Would you like to set up social media links? (y/N): " setup_social
if [[ $setup_social =~ ^[Yy]$ ]]; then
    read -p "Enter your Twitter handle (without @): " twitter_handle
    read -p "Enter your GitHub username: " github_handle
    read -p "Enter your LinkedIn username: " linkedin_handle
fi

echo "\n${BLUE}Setting up your environment...${NC}"

# Create .env file
cat > .env << EOL
NEXT_PUBLIC_SITE_NAME="${site_name}"
NEXT_PUBLIC_SITE_DESCRIPTION="${site_description}"
NEXT_PUBLIC_SITE_URL="${site_url}"
EOL

# Add optional configurations if provided
if [[ $setup_ga =~ ^[Yy]$ ]]; then
    echo "NEXT_PUBLIC_GA_ID=${ga_id}" >> .env
fi

if [[ $setup_social =~ ^[Yy]$ ]]; then
    [[ -n "$twitter_handle" ]] && echo "NEXT_PUBLIC_TWITTER_HANDLE=${twitter_handle}" >> .env
    [[ -n "$github_handle" ]] && echo "NEXT_PUBLIC_GITHUB_HANDLE=${github_handle}" >> .env
    [[ -n "$linkedin_handle" ]] && echo "NEXT_PUBLIC_LINKEDIN_HANDLE=${linkedin_handle}" >> .env
fi

# Install dependencies
echo "\n${BLUE}Installing dependencies...${NC}"
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

echo "\n${GREEN}✓ Content directory is ready${NC}"
echo "\n${GREEN}Setup complete! 🎉${NC}"
echo "\nTo start your development server, run:"
echo "npm run dev" 
echo "or"
echo "yarn dev"

echo "\nThen visit ${site_url} to see your blog!"