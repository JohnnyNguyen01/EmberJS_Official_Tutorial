# super-rentals

## Notes
  - Assets such as images are placed in the `public` folder, and are automatically compiled and understood by Ember.

## Part 2 
#### Learning how to:
- Define Routes
- Customize URLs
- Link Pages with `<LinkTo>` component
- Passing arguments and attributes to components

#### Everytime we generate a new route, we do the following:
1. Map the route in Router.js
2. Create a template for the Route. (Templates are the 'view')
3. [OPTIONAL] Define an explicit path for errors or custom URLs

## Part 3 - Automated Testing
#### Learning how to:
- The purpose of automated testing
- Writing acceptance tests
- Using generators in Ember CLI
- Testing with the QUnit test framework
- Working with Ember's test helpers
- Practicing the testing workflow

###### Add a new acceptance test
```
ember generate acceptance-test `test-name`
```

## Part 4 - Components

##### Generate a new component test
```
ember generate component-test `test-name`
```
##### Run tests
```
ember t -s
```
 - `Component tests` (a.k.a Rendering Tests) render and test a single component at a time, whereas `Acceptance Tests` have to render an entire page and navigate through them.

 ##### Forwarding HTML Attributes with ...attributes
 Instead of hard-coding specific values for tags such as `alt`, `src`, etc, we use 
 `...attributes` keyword.
  - Also known as `splattributes`
  - Allows arbitrary HTML attributes to be passed in when invoking a component. E.g

##### Using the operator
```
<div class='image'>
  <img ...attributes>
</div>
```

##### Enables usage in component
```
<div>
  {...content}
  <Rental::Image
    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
    alt="A picture of Grand Old Mansion"
  />
  {...content}
</div>
```