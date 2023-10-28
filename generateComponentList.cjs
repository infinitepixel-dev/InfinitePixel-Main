const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "src", "components");
const outputFile = path.join(__dirname, "src", "availableComponents.json");

function getComponents(dir) {
  let components = {};

  // Read all files and directories within the current directory
  const filesAndDirs = fs.readdirSync(dir);

  for (const item of filesAndDirs) {
    const fullPath = path.join(dir, item);

    // Check if it's a directory
    if (fs.statSync(fullPath).isDirectory()) {
      // If it's a directory, recursively search within
      components = { ...components, ...getComponents(fullPath) };
    } else {
      // If it's a file, check if it's a .jsx file
      if (path.extname(item) === ".jsx") {
        const componentName = item
          .replace(".jsx", "")
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(""); // This will convert api-testing to ApiTesting
        const relativePath =
          "./components/" +
          path
            .relative(componentsDir, fullPath)
            .replace(/\\/g, "/")
            .replace(".jsx", "");

        components[componentName] = relativePath;
      }
    }
  }
  return components;
}

const componentList = getComponents(componentsDir);

// Write the component list to the JSON file
fs.writeFileSync(outputFile, JSON.stringify(componentList, null, 2));

console.log(
  `Generated list of ${Object.keys(componentList).length} components.`
);
