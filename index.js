const fs = require('fs');
const path = require('path');

const testingLibrary = require('@testing-library/react')

// test for creatRoot() and its proper usage in index.js
function createRootTest(indexPath) {
    
    let file = fs.readFileSync(path.resolve(__dirname, `../../${indexPath}`)).toString("utf-8");
    // console.log("this is the file >>> ", typeof file, file)

    test('index to contain createRoot', () => {
    return expect(file).toMatch(/createRoot/)
    })
}

// test for react experimental mode
function packageTest(packageFilePath){
    let packageFile = fs.readFileSync(path.resolve(__dirname, `../../${packageFilePath}`)).toString("utf-8");

    test('package.json to contain react experimental', () => {
    return expect(packageFile).toMatch(/\"react\": \"\^?0.0.0-experimental/)
    })
}

// testing if a submitted fallback properly falls back
function fallbackTest(suspenseComponent, fallback){
    // if suspense component does not exist...
    if (typeof suspenseComponent === 'undefined') {
        test('renders fallback component', () => {
            return expect(suspenseComponent)
    })
    
    // if fallback does not exist... 
    if (!fallback) {
        test('renders fallback component', () => {
            return expect(fallback)
        })

    } else{

        let textFallback = fallback.toString('utf-8')
        let renderedFallback = testingLibrary.render(fallback)

        if (typeof fallback === "string") {
            test('renders fallback string instead of component', () => {
                const { getByText } = testingLibrary.render(suspenseComponent)
                return expect(getByText(textFallback)).toBeInTheDocument()
            })
        }
        else {
            test('renders fallback inside of suspense component', () => {
                const wrapper = testingLibrary.render(suspenseComponent)
                return expect(wrapper.baseElement).toEqual(renderedFallback.baseElement)
            })
        }
    }
    }
}

// tests if a child componenet properly suspends and renders a test fallback
function suspenseTest(suspenseComponent){
    test('renders suspense fallback on a child component', () => {
        const ComponentWrapper = (suspenseComponent) => {
          return (
            <React.Suspense fallback={'testFallback'}>
              <suspenseComponent />
            </React.Suspense>
          );
        };
    
        const wrapper = testingLibrary.render(<ComponentWrapper />);
       
        expect((wrapper.queryAllByText('testFallback')[0].textContent)).toMatch(/testFallback/);
    })
}


module.exports = {
    createRootTest,
    packageTest,
    fallbackTest,
    suspenseTest
}