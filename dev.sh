#!/bin/bash

# Portfolio Development Script
# This script helps with common development tasks

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Portfolio Development Helper${NC}"
echo "=================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install dependencies
install_deps() {
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    
    if ! command_exists bundle; then
        echo -e "${RED}❌ Bundler not found. Please install Ruby and Bundler first.${NC}"
        echo "Visit: https://jekyllrb.com/docs/installation/"
        exit 1
    fi
    
    bundle install
    echo -e "${GREEN}✅ Dependencies installed successfully!${NC}"
}

# Function to start development server
serve() {
    echo -e "${YELLOW}🔧 Starting development server...${NC}"
    bundle exec jekyll serve --livereload --open-url
}

# Function to build for production
build() {
    echo -e "${YELLOW}🏗️  Building for production...${NC}"
    JEKYLL_ENV=production bundle exec jekyll build
    echo -e "${GREEN}✅ Build completed! Check _site/ directory.${NC}"
}

# Function to clean build files
clean() {
    echo -e "${YELLOW}🧹 Cleaning build files...${NC}"
    bundle exec jekyll clean
    echo -e "${GREEN}✅ Clean completed!${NC}"
}

# Function to validate configuration
validate() {
    echo -e "${YELLOW}✅ Validating configuration...${NC}"
    
    # Check if required files exist
    required_files=("_config.yml" "index.html" "Gemfile")
    for file in "${required_files[@]}"; do
        if [[ ! -f "$file" ]]; then
            echo -e "${RED}❌ Missing required file: $file${NC}"
            exit 1
        fi
    done
    
    # Check if profile image exists
    profile_image=$(grep "profile_image:" _config.yml | cut -d'"' -f2)
    if [[ -n "$profile_image" && ! -f "assets/images/${profile_image#/assets/images/}" ]]; then
        echo -e "${YELLOW}⚠️  Profile image not found: $profile_image${NC}"
    fi
    
    echo -e "${GREEN}✅ Configuration is valid!${NC}"
}

# Function to optimize images
optimize_images() {
    echo -e "${YELLOW}🖼️  Optimizing images...${NC}"
    
    if ! command_exists convert; then
        echo -e "${RED}❌ ImageMagick not found. Please install it first.${NC}"
        echo "macOS: brew install imagemagick"
        echo "Ubuntu: sudo apt-get install imagemagick"
        exit 1
    fi
    
    # Optimize JPG images
    find assets/images -name "*.jpg" -exec convert {} -quality 85 {} \;
    
    # Optimize PNG images
    find assets/images -name "*.png" -exec convert {} -quality 85 {} \;
    
    echo -e "${GREEN}✅ Images optimized!${NC}"
}

# Function to update dependencies
update() {
    echo -e "${YELLOW}🔄 Updating dependencies...${NC}"
    bundle update
    echo -e "${GREEN}✅ Dependencies updated!${NC}"
}

# Function to show help
show_help() {
    echo "Usage: ./dev.sh [command]"
    echo ""
    echo "Commands:"
    echo "  install     Install dependencies"
    echo "  serve       Start development server"
    echo "  build       Build for production"
    echo "  clean       Clean build files"
    echo "  validate    Validate configuration"
    echo "  optimize    Optimize images"
    echo "  update      Update dependencies"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./dev.sh install"
    echo "  ./dev.sh serve"
    echo "  ./dev.sh build"
}

# Main script logic
case "${1:-help}" in
    install)
        install_deps
        ;;
    serve)
        install_deps
        serve
        ;;
    build)
        install_deps
        build
        ;;
    clean)
        clean
        ;;
    validate)
        validate
        ;;
    optimize)
        optimize_images
        ;;
    update)
        update
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${RED}❌ Unknown command: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac