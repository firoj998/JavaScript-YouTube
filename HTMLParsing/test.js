const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
 
 

function extractRolePermissions(html) {
    const rolePermissionsMap = {};
 
 
 
    const $ = cheerio.load(html);
    const roles = $("li.role.diff-changed, li.role.diff-deleted, li.role.diff-added");
 
    roles.each((_index, role) => {
        const roleName = $(role).find("a").text();
        const permissionsMap = { deleted: [], added: [] };
 
 
 
        $(role).find("li.permissions.diff-deleted label").each((_index, deletedElement) => {
            permissionsMap.deleted.push($(deletedElement).text());
        });
 
 
 
        $(role).find("li.permissions.diff-added label").each((_index, addedElement) => {
            permissionsMap.added.push($(addedElement).text());
        });
 
 
 
        rolePermissionsMap[roleName] = permissionsMap;
    });
 
 
 
    return rolePermissionsMap;
}
 
 
 
function printRolePermissions(roleName, rolePermissionsMap) {
    const permissionsMap = rolePermissionsMap[roleName];
 
 
 
    console.log(`\n${roleName}`);
 
 
 
    if (permissionsMap) {
        const { deleted, added } = permissionsMap;
 
 
 
        if (deleted.length > 0) {
            console.log(`Deleted: ${roleName}: ${deleted}`);
        } else {
            //console.log(`No deleted permissions found for role ${roleName}`);
 console.log(``);
        }
 
 
 
        if (added.length > 0) {
            console.log(`Added: ${roleName}: ${added}`);
        } else {
            //console.log(`No added permissions found for role ${roleName}`);
 console.log(``);
        }
    } else {
        //console.log(`No permissions found for role ${roleName}`);
 console.log(``);
    }
}
 
//const html = ``;
const htmlFilePath = path.join(__dirname, './index.html');
const html = fs.readFileSync(htmlFilePath, 'utf-8');
 
 
// Example usage
const rolePermissionsMap = extractRolePermissions(html);
const roleNames = Object.keys(rolePermissionsMap).filter(role => role.trim() !== '').sort();
 
 
 
for (const roleName of roleNames) {
    printRolePermissions(roleName, rolePermissionsMap);
}
 