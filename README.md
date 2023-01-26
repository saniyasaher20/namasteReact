# CHAPTER 6
---

## Q1. What are various ways to add images into our app? Explain with example?

```jsx 
import <any_name> from 'path/img' 

<img src={any_name} />
```

```jsx 
import * as <any_name> from 'path/img' 

<img src={any_name.name-of-image} />
```

```jsx 
// Direct method
<img src = {require('path/img' )} />
```

```jsx 
import {<any_name> as ReactComponent} from 'path/img' 

<img src={any_name}/>
```
---
## Q2. What would happen if we do console.log(useState())?
- `console.log(useState())` It will have 2 values like this -
`(2) [undefined, ƒ]`
- `console.log(useState("Default value here"))` It will have 2 values like this - `(2) ["Default value here", ƒ]`
---
## Q3. How will useEffect behave if don't add a dependency array?
If we don't add a dependency array to useEffect Hook, then it will follow its default behaiviour. It will call the callBack fn passed to it on each render. Everytime something changes (either props or state) re-render of the component happens and useEffect will call the callBack fn. 

- If I dont give the second parameter(the dependency array). Means it is not dependent on anything and default behavior of useEffect is to be called after render. So It will be called on each re-render.
- if we give empty dependency array []. It will be called only once
- if we give [someVariable], then callback fn will be called only when 'someVariable' has some changes.
---
## Q4. What is SPA?
- SPA stands for single page application. SPA is a implemention of web application that loads a single web document and updates the content without reloading everytime.
---
## Q5 - What is the differnce between Client side routing and Server side routing?
1. CLient side routing : It loads pages from client side.
2. Server side routing : All our pages comes from server.
                        In Server side routing , when a user click on a link then browser makes an http request for that page on server now server process the request and send a response usually a html page, now bowser discard the 	old page and loads the new page.
---
## Resources Given:
1. React Router DOM - https://reactrouter.com/en/main
2. Client Side Routing - https://reactrouter.com/en/main/start/overview
3. Formik - https://formik.org/