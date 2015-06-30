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
<sui-card>
    <CardMedia />
    <CardContent />
</Card>
```

It renders a cleared generic `div` element with and increased padding-bottom in screen resolutions smaller than 750px to better fit smaller screens.

## Bundle
In order to generate the bundle including all React dependencies and the component logic we need to bundle a single JS file running the following command:
```
$ npm run build
```

## Testing
Run:

```
$ npm run test
````

## Preview
- Clone the repo and open `index.html` file inside `docs` folder <br />

## ToDo
- Add NPM package
