# sui-card React Component

Wrapper component to define a **card** structured content based in the following structure:

- **sui-card-media**: A placeholder to display a picture. If no picture is passed a generic icon will be displayed instead.

- **sui-card-content**: A placeholder to fit any content based on your core business needs.

## Instalation
Clone the repo.
CD to folder `sui-card`

run:

```
$ npm install
```

## Setup

Run:

```
$ npm run dev
```


## Usage
The sui-card component is basically a block container to load dinamic content inside.
Example:
```
React.render(<Card
    cardcontent={'Lorem ipsum dolor sit amet'}
    multimediaUrl={'http://placehold.it/300x150'}
  />,
  document.getElementById('main'));
```

It renders a cleared generic `div` element with and increased padding-bottom in screen resolutions smaller than 750px to better fit smaller screens.

## Bundle
In order to generate the bundle including all React dependencies and the component logic we need to bundle a single JS file running the following command:
```
$ npm run build
```

## Testing
Execute a complete test by running:

```
$ npm run test
```
In addition, you can run specific test for linting JS and SASS:
SASS: (SASS linting rules specified in file `.scss-lint.yml`)

```
$ npm run lint:sass
```
JS (JS linting rules specified in file `.jscsrc`)

```
$ npm run lint:jscs
```

## Preview
- Clone the repo and open `index.html` file inside `docs` folder <br />

## ToDo
- Add NPM package
- Add Github pages demo
