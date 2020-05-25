#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const program = require("commander");

const {
  getConfig,
  buildPrettifier,
  logIntro,
  logItemCompletion,
  logConclusion,
  logError
} = require("./helpers");
const {
  requireOptional,
  mkDirPromise,
  readFilePromiseRelative,
  writeFilePromise
} = require("./utils");

// Load our package.json, so that we can pass the version onto `commander`.
const { version } = require("../package.json");

// Get the default config for this component (looks for local/global overrides,
// falls back to sensible defaults).
const config = getConfig();

// Convenience wrapper around Prettier, so that config doesn't have to be
// passed every time.
const prettify = buildPrettifier(config.prettierConfig);

program
  .version(version)
  .arguments("<componentName>")
  .option(
    "-d, --dir <pathToDirectory>",
    'Path to the "components" directory (default: "src/components")',
    config.dir
  )
  .parse(process.argv);

const [componentName] = program.args;

// Templates
const templateComponentPath = "./templates/component.js";
const templateDataPath = "./templates/component.data.js";
const templateNativePath = "./templates/component.native.js";
const templateDocPath = "./templates/component.md";
const templateTestPath = "./templates/component.test.js";
const templateIndexPath = "./templates/index.js";
const templateLangEnUs = "./templates/component.lang.en-us.js";
const templateLangRoRo = "./templates/component.lang.ro-ro.js";
const templateLangHuHu = "./templates/component.lang.hu-hu.js";
const templateLangDeDe = "./templates/component.lang.de-de.js";

// Target files
const componentDir = `${program.dir}/${componentName}`;
const componentPath = `${componentDir}/${componentName}.js`;
const dataPath = `${componentDir}/${componentName}.data.js`;
const nativePath = `${componentDir}/${componentName}.native.js`;
const docPath = `${componentDir}/${componentName}.md`;
const testPath = `${componentDir}/${componentName}.test.js`;
const indexPath = `${componentDir}/index.js`;
const langEnUsPath = `${componentDir}/${componentName}.lang.en-us.js`;
const langRoRoPath = `${componentDir}/${componentName}.lang.ro-ro.js`;
const langHuHuPath = `${componentDir}/${componentName}.lang.hu-hu.js`;
const langDeDePath = `${componentDir}/${componentName}.lang.de-de.js`;

// Logging ...
logIntro({ name: componentName, dir: componentDir });

// Check if componentName is provided
if (!componentName) {
  logError(
    `Sorry, you need to specify a name for your component like this: new-component <name>`
  );
  process.exit(0);
}

// Check to see if a directory at the given path exists
const fullPathToParentDir = path.resolve(program.dir);
if (!fs.existsSync(fullPathToParentDir)) {
  logError(
    `Sorry, you need to create a parent "components" directory.\n(new-component is looking for a directory at ${program.dir}).`
  );
  process.exit(0);
}

// Check to see if this component has already been created
const fullPathToComponentDir = path.resolve(componentDir);
if (fs.existsSync(fullPathToComponentDir)) {
  logError(
    `Looks like this component already exists! There's already a component at ${componentDir}.\nPlease delete this directory and try again.`
  );
  process.exit(0);
}

// Create the files one by one
mkDirPromise(componentDir)
  .then(() => readFilePromiseRelative(templateComponentPath))
  .then(template => {
    logItemCompletion("Directory created.");
    return template;
  })
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(componentPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Component created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateDataPath))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(dataPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Data created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateNativePath))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(nativePath, prettify(template))
  )
  .then(template => {
    logItemCompletion("React native support file created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateDocPath))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(docPath, template)
  )
  .then(template => {
    logItemCompletion("Doc created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateTestPath))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(testPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Test created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateIndexPath))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(indexPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Index created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateLangEnUs))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(langEnUsPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Lang en-us created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateLangRoRo))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(langRoRoPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Lang ro-ro created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateLangHuHu))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(langHuHuPath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Lang hu-hu created.");
    return template;
  })
  .then(() => readFilePromiseRelative(templateLangDeDe))
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(langDeDePath, prettify(template))
  )
  .then(template => {
    logItemCompletion("Lang de-de created.");
    return template;
  })
  .then(template => {
    logConclusion();
  })
  .catch(err => {
    console.error(err);
  });
