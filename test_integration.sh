#!/bin/bash

# Test script for Black Hole Physics module integration

echo "Testing Black Hole Physics Module Integration"
echo "============================================="

# Check if all integration files exist
echo -e "\nChecking integration files..."
FILES=(
  "/home/ubuntu/astrocourse/stellar_astrophysics/content/black_hole_integration.html"
  "/home/ubuntu/astrocourse/black_hole_physics/content/stellar_integration.html"
  "/home/ubuntu/astrocourse/physics/content/black_hole_integration.html"
  "/home/ubuntu/astrocourse/black_hole_physics/content/physics_integration.html"
  "/home/ubuntu/astrocourse/black_hole_physics/learning_path.md"
  "/home/ubuntu/astrocourse/black_hole_physics/concept_map.md"
  "/home/ubuntu/astrocourse/integration_todo.md"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file does not exist"
  fi
done

# Check for broken links in integration files
echo -e "\nChecking for broken links in integration files..."

# Function to check links in a file
check_links() {
  file=$1
  echo "Checking links in $file:"
  
  # Extract links from HTML or markdown files
  if [[ $file == *.html ]]; then
    links=$(grep -o 'href="[^"]*"' "$file" | sed 's/href="//g' | sed 's/"//g')
  else
    links=$(grep -o '\[[^]]*\]([^)]*)'  "$file" | sed 's/.*(\(.*\))/\1/g')
  fi
  
  # Check each link
  for link in $links; do
    # Skip external links
    if [[ $link == http* ]]; then
      echo "  - External link: $link (not checked)"
      continue
    fi
    
    # Convert relative paths to absolute
    if [[ $link == ../* ]]; then
      # Get the directory of the current file
      dir=$(dirname "$file")
      # Resolve the relative path
      target=$(realpath "$dir/$link" 2>/dev/null)
    else
      # Handle links that are already absolute or relative to current directory
      target=$(realpath "$(dirname "$file")/$link" 2>/dev/null)
    fi
    
    # Check if the target exists
    if [ -f "$target" ] || [ -d "$target" ]; then
      echo "  ✅ Link to $link is valid"
    else
      echo "  ❌ Link to $link is broken (resolved to $target)"
    fi
  done
}

# Check links in each integration file
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    check_links "$file"
    echo ""
  fi
done

# Check if all Black Hole Physics module sections exist
echo -e "\nChecking Black Hole Physics module sections..."
BH_SECTIONS=(
  "/home/ubuntu/astrocourse/black_hole_physics/content/section1_event_horizons.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section2_simplified_mathematical_models.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section3_schwarzschild_solution.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section4_rotating_black_holes.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section5_black_hole_thermodynamics.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section6_accretion_disks.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section7_recent_discoveries.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section8_common_misconceptions.md"
  "/home/ubuntu/astrocourse/black_hole_physics/content/section9_information_paradox.md"
)

for section in "${BH_SECTIONS[@]}"; do
  if [ -f "$section" ]; then
    echo "✅ $section exists"
  else
    echo "❌ $section does not exist"
  fi
done

# Check if all interactive elements exist
echo -e "\nChecking interactive elements..."
INTERACTIVE=(
  "/home/ubuntu/astrocourse/black_hole_physics/interactive/schwarzschild_visualization.html"
  "/home/ubuntu/astrocourse/black_hole_physics/interactive/kerr_visualization.html"
  "/home/ubuntu/astrocourse/black_hole_physics/interactive/hawking_radiation_simulator.html"
)

for element in "${INTERACTIVE[@]}"; do
  if [ -f "$element" ]; then
    echo "✅ $element exists"
  else
    echo "❌ $element does not exist"
  fi
done

echo -e "\nIntegration testing complete!"
