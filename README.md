# CHAPTER 11
---

## Q1. What is prop drilling?
- Prop drilling means passing data from parent to child.
- If we want to pass data from component A to C we need to pass the data from A to B then B to C.
```jsx
<A /> (state = user)
    <B user={user} />
        <C user={user} />
            <p> {user} </p>
```
---
## Q2. What is lifting the state up?
- Lifting the state up means moving the state from child component to the closest common ancestors(parent) so that state can be shared across siblings.
---
## Q3. What is Context.Provider and Context.Consumer?
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- **MyContext.Provider**: Provider are used to create contexts that can be consumed. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

- **MyContext.Consumer**: Consumer is used to consume the nearest provided context. Using this component lets you subscribe to a context within a function component.
---
## Q4. If you don’t pass a value to the provider does it take the default value?
Yes, If we don't pass any value to the `<UserProvider>` then it will take the default value.