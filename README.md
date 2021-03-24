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

 ### Forwarding HTML Attributes with ...attributes
 Instead of hard-coding specific values for tags such as `alt`, `src`, etc, we use 
 `...attributes` keyword.
  - Also known as `splattributes`
  - Allows arbitrary HTML attributes to be passed in when invoking a component. E.g

##### Using the operator
```hbs
<div class='image'>
  <img ...attributes>
</div>
```

##### Enables usage in component
```hbs
<div>
  {...content}
  <Rental::Image
    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
    alt="A picture of Grand Old Mansion"
  />
  {...content}
</div>
```

<strong> 
  <em> 
  In general, it is a good idea to add ...attributes to the primary element in your component. This will allow for maximum flexibility, as the invoker may need to pass along classes for styling or ARIA attributes to improve accessibility.
  </em>  
</strong>

## Part 5 - Interactive Components

Each component can be associated with a JS File that stores and manipulates state.
Use:
```
ember generate component-class `name of component`
```

- Ember creates an instance of this class whenever the component is invoked.
- Use `@tracked` decorator to tell ember to <em>listen</em>  to the variable state and re-render on each change.
- Use `@action` to indicated that we want to use a custom method.

##### Defining actions/custom methodse example
```js
export default class RentalImageComponent extends Component {
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
```

#### Using these in a component
```hbs
{{#if this.isLarge}}
<button type="button" class="image large" {{on "click" this.toggleSize}}>
    <img ...attributes />
    <small>View Smaller</small>
</button>
{{else}}
<button type="button" class="image" {{on "click" this.toggleSize}}>
    <img ...attributes />
    <small>View Larger</small>
</button>
{{/if}}
```

## Part 6 - Reusable Components