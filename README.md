# sui-card React Component

Wrapper component to define a **card** structured content based in the following structure.


## Demo page

- Checkout a Sui-Card component demo [here](http://sui-components.github.io/sui-card/).
 <br /> or...
- Clone the repo and open `index.html` file inside `docs` folder


## Usage

The **SUI-Card** component features a generic `div` tag including two more nested containers one on top of the other.

Top and bottom containers may fit any content provided to **Sui-Card**. Use the following classes to layout styling:

- **sui-Card-topComponent**: <br />
This is the top placeholder where you can fit any custom component: from a simple picture to a full featured slider.

If no `topComponent` property is passed a default picture with link can be set using the following props:

```
// topImgDefault: Provide a custom image URL.
// topImgDefaultLink: Provide a custom link.
// topComponent: Provide any content as shown below:

const top = (
    <a href='http://google.com'>
      <img src='http://msue.anr.msu.edu/uploads/images/forest.jpg' />
    </a>
);

ReactDom.render(
  <SuiCard
    topImgDefault='http://placehold.it/300x200'
    topImgDefaultLink='http://google.com'
    topComponent={top}
    />,
    document.getElementById('main'));
```

- **sui-Card-bottomComponent**: <br />
A placeholder to fit any custom component to add to the bottom of **Sui-Card**. Use the `bottomComponent` property to do the trick.

If no `bottomComponent` property is passed the bottom container will not be rendered:

```
const bottom = (
  <div>
    <h2>Insert your title here</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href='http://google.com'>Contact</a>
  </div>
);

ReactDom.render(
  <SuiCard
    bottomComponent={bottom}
    />,
    document.getElementById('main'));
```


## Card layout Orientation

The default *Card* orientation is **portrait mode**. That's why the structure makes reference to *top* and *bottom* components.
Use the `landscapeLayout={true}` parameter to set it landscape where the `topComponent` aligns to the left and the `bottomComponent` to the right:

```
ReactDom.render(
  <SuiCard
    landscapeLayout={true}
    />,
    document.getElementById('main'));
```
In addition, you can set it to **false** to render the SuiCard layout back to portrait orientation.


## Installation

To run the component and play with the examples you have to:

### Download files from GitHub repo.

* `$ git clone https://github.com/scm-spain/sui-card`
* `$ cd sui-card`

### Install dependencies.

* `$ npm install` // Install npm dependencies from package.json

### Launch the development environment.

* `$ npm run dev` // Run development environment
*  Go to _localhost:8080_


## Bundle

In order to generate the bundle including all React dependencies and the component logic we need to bundle a single JS file running the following command:
```
$ npm run build
```


## Testing

Execute a complete test by running:

```
There are two options for executing tests:

* Single mode: `$ npm test`
* Watch mode: `$ npm run test:watch`


## Linting

```
In addition, you can run specific test for linting JS and SASS:
SASS: (SASS linting rules specified in file `.scss-lint.yml`)

```
$ npm run lint:sass
```


## NPM

The SUI-Card component is available as a NPM package [here](https://www.npmjs.com/package/@schibstedspain/sui-card):

```
npm install @schibstedspain/sui-card
```


##ToDo

- Mediaqueries.


## Environment Dependencies

To run the lint tasks we have dependencies of:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [scss-lint](https://github.com/brigade/scss-lint)

If that tools are not installed you cant commit. Because the lint pass never will be ok.