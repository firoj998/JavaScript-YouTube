// // import * as fs from 'fs';
// // import * as cheerio from 'cheerio';
// // import * as path from 'path';

// const fs = require('fs');

// const cheerio = require('cheerio');

// const htmlFilePath = path.join(__dirname, './index.html');
// const html = fs.readFileSync(htmlFilePath, 'utf-8');
 


// // function extractFields(html) {
//     const fieldsName = {};
 
 
 
//     const $ = cheerio.load(html);
//    var  html1 = $("li.general.diff-changed")[0].outerHTML;
//     var temp = {"html":html1}; 
//     var obj  = JSON.parse(temp);
//     console.log(obj);
 
    
 

//     const roles = $("li.role.diff-changed, li.role.diff-deleted, li.role.diff-added");
 
//     roles.each((_index, role) => {
//         const roleName = $(role).find("a").text();
//         const permissionsMap = { deleted: [], added: [] };
 
 
 
//         $(role).find("li.permissions.diff-deleted label").each((_index, deletedElement) => {
//             permissionsMap.deleted.push($(deletedElement).text());
//         });
 
 
 
//         $(role).find("li.permissions.diff-added label").each((_index, addedElement) => {
//             permissionsMap.added.push($(addedElement).text());
//         });
 
 
 
//         rolePermissionsMap[roleName] = permissionsMap;
//     });
 
 
 
//     // return rolePermissionsMap;
// // }
 
 
 
// function printRolePermissions(roleName, rolePermissionsMap) {
//     const permissionsMap = rolePermissionsMap[roleName];
 
 
 
//     // console.log(`\n${roleName}`);
 
 
 
//     if (permissionsMap) {
//         const { deleted, added } = permissionsMap;
 
 
 
//         if (deleted.length > 0) {
//             console.log(`Deleted: ${roleName}: ${deleted}`);
//         } else {
//             //console.log(`No deleted permissions found for role ${roleName}`);
// //  console.log(``);
//         }
 
 
 
//         if (added.length > 0) {
//             console.log(`Added: ${roleName}: ${added}`);
//         } else {
//             //console.log(`No added permissions found for role ${roleName}`);
// //  console.log(``);
//         }
//     } else {
//         //console.log(`No permissions found for role ${roleName}`);
// //  console.log(``);
//     }
// }
 
// //const html = ``;

 
 
// // Example usage
// // const rolePermissionsMap = 
// // extractFields(html);
// // const roleNames = Object.keys(rolePermissionsMap).filter(role => role.trim() !== '').sort();
 
 
 
// // for (const roleName of roleNames) {
// //     printRolePermissions(roleName, rolePermissionsMap);
// // }
 


// const fetch = require('node-fetch');


// Sample URL to fetch the HTML page
// const url = 'https://geeksforgeeks-example.surge.sh';

// Headers to mimic the browser
// const headers = {
//   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
// };

// Fetch the page
// fetch(url, { headers })
//   .then(response => response.text())
//   .then(html => {
//     // Save the page content as sample.html
//     fs.writeFileSync('sample.html', html);

//     // Read the saved HTML file
//     const htmlFile = fs.readFileSync('sample.html', 'utf8');

//     // Convert HTML to JSON
//     const json = xml2json.xml2json(htmlFile, { compact: true, spaces: 2 });

//     // Write JSON to file
//     fs.writeFileSync('data.json', json);

//     console.log(json);
//   })
//   .catch(error => console.error('Error:', error));

const fs = require('fs');
const xml2json = require('xml-js');
const path = require('path');

const htmlFilePath = path.join(__dirname, './index.html');
const htmlFile = fs.readFileSync(htmlFilePath, 'utf8');

console.log(htmlFile); // Log the HTML content

const json = xml2json.xml2json(htmlFile, { compact: true, spaces: 2 });
fs.writeFileSync('data.json', json);
console.log(json);