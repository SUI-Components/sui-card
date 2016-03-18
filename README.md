# Sui-card React Component

The SUI-Card component features a placeholder to portray a custom primary and a secondary content. So you can set an image, slider or any media component in one and some other content in the other.


## Demo page

- Check out a Sui-Card component demo [here](http://sui-components.github.io/sui-card/).

## Usage

The **SUI-Card** allows to pass custom content in the primary placeholder and also provides a `sui-Card-primary` class as a wrapper. This primary content **is required**.

Secondary content might be passed or not to SuiCard component. If content is provided will be rendered inside a generic *div* `sui-Card-secondary` wrapper.
If no content is provided this contained will not be rendered at all.

Check out this example below
```javascript

ReactDom.render(
    <SuiCard
      primary={[
        <a href={data.link}><img src={data.src} /></a>
      ]}
      secondary={[
        <div>
            <h2 className='sui-Card-title'>
            This is the Card Title
            </h2>
            <p className='sui-Card-description'>
                This is the description
            </p>
        </div>
      }
    />,
  document.getElementById('main')
);
```

### Setting a custom className

The `div` Card wrapper has a default `sui-Card` class.
You can override it defining a custom class by setting the `proptype` `className` as follows:

```javascript
ReactDom.render(
    <SuiCard className={'myCustom-class'}
      primary={[
        <a href={data.link}><img src={data.src} /></a>
      ]}
      secondary={[
        <div>
            <h2 className='sui-Card-title'>
            This is the Card Title
            </h2>
            <p className='sui-Card-description'>
                This is the description
            </p>
        </div>
      }
    />,
  document.getElementById('main')
);
```

### Card layout Orientation

The default *Card* orientation is **portrait mode**.  Use the `landscapeLayout={true}` parameter to set it landscape where the `primary` placeholder aligns to the left and the `secondary` to the right:

```javascript

ReactDom.render(
    <SuiCard landscapeLayout
      primary={[
        <a href={data.link}><img src={data.src} /></a>
      ]}
      secondary={[
        <div>
            <h2 className='sui-Card-title'>
                This is the Card Title
            </h2>
            <p className='sui-Card-description'>
                This is the description
            </p>
        </div>
      }
    />,
  document.getElementById('main')
);

```

### Content First Property

When `landscapeLayout={true}` you can also set secondary content placeholder rendered  before primary by setting `contentFirst={}` to `true`:

```javascript

ReactDom.render(
    <SuiCard landscapeLayout contentFirst
      primary={[
        <a href={data.link}><img src={data.src} /></a>
      ]}
      secondary={[
        <div>
          <h2 className='sui-Card-title'>
          This is the Card Title
          </h2>
          <p className='sui-Card-description'>
          This is the description
          </p>
        </div>
      }
    />,
  document.getElementById('main')
);
```

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

## Linting
We rely on *SCSS Lint* for , you can run specific test for linting JS and SASS:
SASS: (SASS linting rules specified in file `.scss-lint.yml`)

```
$ npm run lint:sass
```


## NPM

The SUI-Card component is available as a NPM package [here](https://www.npmjs.com/package/@schibstedspain/sui-card):

```
npm install @schibstedspain/sui-card
```
