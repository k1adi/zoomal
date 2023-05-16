# Zoomal

## Overview
This web application was initially created as a personal portfolio to showcase the usage of a public APIs, and it was published on [CodePen](https://codepen.io/k1adi/pen/bGvVbYx) natively using HTML, CSS, and JavaScript.

Then, when I participated ["Belajar Fundamental Front-End Web Development"](https://www.dicoding.com/academies/163) class at Dicoding with program [IDCamp 2022](https://idcamp.ioh.co.id/) from Indosat Ooredoo Hutchison, the application was further developed according to the submission criteria such as utilizing ES6, Web Components(custom element), Package Managers([NPM](https://www.npmjs.com/)), and Module Bundler ([webpack](https://webpack.js.org/)).

This web application is capable of asynchronously fetching data using [Axios](https://axios-http.com/) and storing it in Web Storage, load an image with asynchronous method, filtering data, having a responsive design on any device and interactive interface.

## Installation
1. Clone the project repository to your local machine using a Git client or by downloading the project as a zip file.
```
git clone https://github.com/k1adi/zoomal.git
```
2. Navigate to the project's root directory in your terminal or command prompt.
```
cd zoomal
```
3. Install the project's dependencies.
```
npm install or yarn install
```
4. Build production or development version
```
npm run build or npm run dev
```
5. Run the web application
```
npm run serve
```

This project uses webpack for building and serving the project and the package.json file provided contains several scripts for building, serving, and development mode. Make sure you have the required version of Node.js and npm installed before running the above commands.


## Scripts
- `dev` : Create Development version of the web application
- `build` : Create Production version of the web application
- `serve` : Run the application with Development version
- `test-lint` : Run the eslint
> *When you change `webpack serve --config webpack.dev.js` to `webpack serve --config webpack.prod.js` in script `serve`, the web application will running with production-ready version and will display warning message, because there is no configuration yet to optimize the file size.*

## Features
- Displaying data asynchronously.
- Updating displayed data.
- Filtering data based on name and category.
- Changing the number of displayed data (3/6/9).
- Displaying images asynchronously.
- Showing a pop-up with detailed information on one of the data items.
- Handling errors when images or data fail to be loaded.

## Submission info
![Submission info](screenshoot/submission-info.png)

## Author
- GitHub - [k1adi](https://github.com/k1adi)
- CodePen - [@k1adi](https://codepen.io/k1adi)
- Dicoding - [ki-adi](https://www.dicoding.com/users/ki-adi)

## License
Copyright [2022] [k1adi]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.v

## Acknowledgments
[Zoo Animals API](https://rapidapi.com/ahmadawais/api/zoo-animals-api) by [Ahmad Awais](https://rapidapi.com/user/ahmadawais)
> *Unfortunately, this public API was deprecated. You can check the information from [here](https://rapidapi.com/ahmadawais/api/zoo-animals-api/discussions/36880)*