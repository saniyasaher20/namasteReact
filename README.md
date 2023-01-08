# CHAPTER 2

### Q1. What is npm?
- npm is a software library, it is free to use and requires node.js.
- We need npm because our app requires so many packages, and npm manages all those helper packages for us.

### Q2. What is parcel/webpack? Why do we need it?
- Parcel, Webpack, vite are bundlers
- Bundlers create a file which keeps all the information of dependencies our app is using. For e.g. Parcel creates a package.json file which has all the information about dependencies.
- We need bundlers because it is very difficult to maintain all those dependencies without Bundlers

### Q3. What is .Parcel-cache?
- Parcel caches everything it build on dev server. When we restart the dev server, parcel rebuilds only those files which has changes. 
- Parcel stores cache in `.parcel-cache` file

### Q4. What is npx?
- npx- node package execute
- It comes with npm above 5.2.0 version
- It is an npm package runner that can execute any package and if the package is already not installed it will install that automatically
- Syntax: `npx package-name`

### Q5. What is difference between dependencies vs devDependencies?
- `dev-dependencies` are the packages a developer needs for development
- `dependencies` are the packages required by our application in production. It is like global dependency

### Q6. What is Treeshaking?
- Tree-shaking or Dead code elemination, is removing the unwanted code. 
- console.log is not removed by parcel automicatically, we have to use `babel-plugin-transform-remove-console`

### Q7. What is Hot Module Replacement (HMR) ?
- Parcel automatically updates the file whenever we make any change in the code.
- By default Parcel rebuilds the whole page, but in some cases it only rebuilds the module which got changed using HMR feature
- CSS changes applied using HMR, no page reload needed.
### Q8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
- Creates a server
- HMR - Hot Module Replacement = Refreshing page automatically
- File wathcer algorithm - C++
- Bundling
- Minify
- Cleaning our code
- Dev and Production build
- Super fast build algorithm
- Image Optimisation
- Caching while development
- Compression 
- Compatible with older version of browser
- HTTPS on dev
- Port number
- Consistent Hashing Algorithm
- Zero Config
- Tree Shaking / dead code elimination = removing unwanted code

### Q9. What is .gitignore? What should we add and not add into it?
- The .gitignore file tells Git which files to ignore when committing our project to the Git Repo.
- Everything which can be regenerated on server again should be in .gitignore. For ex- .parcel-cache, dist folder, node_modules folder

### Q10. What is the difference between package.json and package.lock.json?
- `package.json` = In package.json we gave something for example ^2.8.2 This means this package will update to higher version automaically, And in the package.json file, there will be ^2.8.2 written even after the package updates. 
- `Package-lock.json` is very important file, it locks the version, You never have to keep it in .gitignore. It maintains the hash as well, this hash ensures the version in my local is excatly the same as in production, means it maintains the integrity.

### Q11. Why should I not modify package.lock.json?
- It is autogenerated file and we should not modify it. Because its purpose is to track the entire tree of dependencies and the exact version of each package or library.
- Add this file to git repo.

### Q12. What is node modules? Is it good idea to push node modules into GIT?
- Node modules is a folder created by npm and a way of tracking each package which we install locally via package.json
- Never push node_modules onto git repo. With the help of package.json and package.lock.json, we can regerate it easily in the server.

### Q13. What is Dist Folder?
- Dist folder contains the minimized version of source code. The code inside the dist folder is used on production.

### Q14. What is Browserlist?
- Browserlist is a tool in which we specify which browser should be supported by our frontend application with the help of some queries in a config file.
- go to officla website of browserlist, copy given code and paste in package.json.
` "browserlist": [ ... ] `
- go to browserlist.dev. This will show what to put in the above array
### Q15. Difference between Parcel and Webpack?
|PARCEL |WEBPACK |
|----|----|
| Parcel is zero configuration| Webpack requires a separate config file |
| Tree shaking(dead code elimination) is used | No built-in tree shaking or dead code elimination is provided. However, this functionality can be achived by adding a plugin |
| HMR (Hot Module Replacement) is built-in functionality | No built-in HMR functionality |
|  ||

