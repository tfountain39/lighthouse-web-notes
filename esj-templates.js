const ejs = require("ejs");

// Basic Usage
const template = "<h1>Hello, <%= name %>!</h1>";
const data = { name: "John" };
const renderedHtml = ejs.render(template, data);

console.log(renderedHtml);

// Conditionals
const conditionalTemplate = "<% if (age >= 18) { %><p>You are an adult.</p><% } else { %><p>You are a minor.</p><% } %>";
const ageData = { age: 25 };
const conditionalHtml = ejs.render(conditionalTemplate, ageData);

console.log(conditionalHtml);

// Loops
const loopTemplate = "<ul><% for (let i = 0; i < fruits.length; i++) { %><li><%= fruits[i] %></li><% } %></ul>";
const fruitsData = { fruits: ["Apple", "Banana", "Cherry"] };
const loopHtml = ejs.render(loopTemplate, fruitsData);

console.log(loopHtml);

// Includes (Partial Templates)
const includeTemplate = "<h2>Header</h2><%- include('footer') %>";
const footerTemplate = "<footer>Footer content</footer>";
const includeData = {};
const includeHtml = ejs.render(includeTemplate, includeData, {
  filename: "example.ejs", // Specify the current template filename for includes
  _with: false, // Disable `with` scope
  localsName: "data", // Change the name of the data object inside included templates
  delimiter: "%" // Change the delimiter from '<%' and '%>' to '<%' and '%>' (optional)
});

console.log(includeHtml);