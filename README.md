# **The Time in Words - JavaScript Solution**

A solution for the HackerRank challenge, "The Time in Words", which also includes tests written using Mocha and Chai.

------------

## **Getting Started**

These instructions will get you a copy of the solution up and running on your local machine for testing.

### **Prerequisites**

There are a few things you will need in order to install and run this solution.

### General:
* A text editor e.g. VS Code
* npm package manager (comes with node.js) [Installation instructions](https://www.npmjs.com/)

### Dependencies you will need:
* Node.js v8.1.0 [Installation Instructions](https://nodejs.org/en/download/package-manager/)

### Dev Dependencies you will need:
* Mocha v5.0.5 [Installation Instructions](https://www.npmjs.com/package/mocha)
* Chai v4.1.2 library [Installation Instructions](https://www.npmjs.com/package/chai)

----------

## **Installing**

A step by step series of examples that tell you how to get running

### **Get this Repository**

* Fork this repository and clone it so you have your own local copy

* cd into the folder you want to save the copy to e.g. `cd Documents/myprojects` and run the git clone command in your terminal

```
$ git clone https://github.com/HorrorOfPartyBeach/hackerrank
```

* Run `cd hackerrank` and then `npm install`

### **Install required dependencies**

* Open the folder in VS Code (or another editor) and install dependencies by running the following command:

```
$ npm install
```

## **Running the tests**

To run the tests, ensure you have Mocha and Chai installed and add a test script to the package.json

```js
  "scripts": {
    "test": "mocha ./spec/*.spec.js"
  }
  ```

The tests use Mocha and the Chai library to test that the function correctly converts a numerical time into a string of words.

To run the tests, run `npm test`

----------------

## **Authors**

**Emma Gilmour** - [HorrorOfPartyBeach](https://github.com/HorrorOfPartyBeach)

---------------

## **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
