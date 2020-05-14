# ReactionTime
ReactionTime provides a testing suite to ensure that the features of Concurrent Mode in React will run optimally in order to provide the best developer experience possible that will in turn lead to a more satisfactory user experience. 

# Quick Start
In order to use ReactionTime, add the following syntax in a Jest testing environment:

`const reactiontime = require('reactiontime')`

'reactiontime' tests can be accessed as methods on the 'reactiontime' object.

Example syntax as follows:

`reactiontime.createRootTest('src/index.js');`
<br>
`reactiontime.packageTest('package.json');`
<br>
`reactiontime.fallbackTest(higherOrderComponent, fallback)`
<br>
`reactiontime.suspenseTest(childComponent)`
<br>

## 

### .createRootTest
... 'src/index.js' is equal to the relative path of the highest component of your react tree.
<br>

### .packageTest
... 'package.json' is equal to the relative path of your package.json.
<br>

### .fallbackTest
This will take two arguments. The first is a higher order component that contains at least one suspended child components. The fallback argument should be equal to the fallback on the suspended child component. 
<br>

### .suspenseTest
This will take one argument, a child component that the user expects to suspend. As of now, the suspended component must act as a standalone component.  
