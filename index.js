const fs = require('fs');
const path = require('path');

// test for creatRoot() and its proper usage in index.js
function createRootTest(indexPath) {
    
    let file = fs.readFileSync(path.resolve(__dirname, `../../${indexPath}`)).toString("utf-8");
    // console.log("this is the file >>> ", typeof file, file)

    test('index to contain createRoot', () => {
    return expect(file).toMatch(/unstable_createRoot/)
    })
}
// test for react experiemental mode

function packageTest(packageFilePath){
    let packageFile = fs.readFileSync(path.resolve(__dirname, `../../${packageFilePath}`)).toString("utf-8");

    test('package.json to contain react experimental', () => {
    return expect(packageFile).toMatch(/\"react\": \"\^?0.0.0-experimental/)
})
}

module.exports = {
    createRootTest,
    packageTest
}