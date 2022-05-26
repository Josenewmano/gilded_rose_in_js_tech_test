# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest. 

It was completed according to the following requirements: https://github.com/makersacademy/course/blob/main/individual_challenges/gilded_rose.md

Those requirements are taken from here: https://github.com/emilybache/GildedRose-Refactoring-Kata

Which were themselves adapted from this source: https://github.com/NotMyself/GildedRose

Here is the brief: https://github.com/Josenewmano/gilded_rose_in_js_tech_test/blob/main/GildedRoseRequirements.txt

And this is what the code looked like prior to adaptation: https://github.com/Josenewmano/gilded_rose_in_js_tech_test/blob/main/original_unadapted_code.js

## My Approach

I began by attempting to understand how the legacy code worked, before writing Jest tests to cover each of the existing functionalities. The next stage involved combining the conditions of if statements where possible, and using the '-=' and '+=' syntax for the conversion of the sellIn and quality values. After each small change I would run the unit tests again, to check if my logic held up. At a certain point there was no obvious conditional flattening to do, without beginning to think more about how the code should work, and I believed it was necessary to start employing some private methods. The original branch of the Emily Bache repo from which I began (https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/js-jest) was apparently written in an older version of JavaScript which does not allow for the # syntax for private functions. However, as all of the tests were in place, I simply used regular functions in the same manner as private functions, which I believe was acceptable in this instance. My goal was to completely remove any nested if statements, which I have now done. My updated program is now actually slightly longer than the original, but I beleive that is is now much easier to understand and maintain

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
