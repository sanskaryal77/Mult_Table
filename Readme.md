#### Running the Program

- Use "npm i" to install all the required dependencies.
- Use "npm start" on the Shell on the right pane to start the program; resize Shell for better view
- Use "npm run test" to run all the test cases

#### Description of the Program

Creates a 12x12 multiplication table where

- multi_table[0][0] holds 'X'
- The first row holds the number i for every position i
- The first column holds the number j for every position j
- For all other rows and columns each product i*j is stored in position multi_table[i][j].

#### Program Structure

- Root folder contains index.js which calls the createMultiplicationTable function on createMultiplicationTable.js
- Test folder contains createMultiplicationTable.test.js which contains all the test cases
