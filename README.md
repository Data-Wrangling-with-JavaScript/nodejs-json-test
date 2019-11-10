# nodejs-json-test

A test program to figure out how big an amount of JSON data we can deserialize through the JavaScript function `JSON.parse` in Node.js

This example code accompanies the book [Data Wrangling with JavaScript](http://bit.ly/2t2cJu2).

To keep up with my work please follow @ashleydavis75 on Twitter or sign up to the email list on my blog [The Data Wrangler](http://www.the-data-wrangler.com/).

---

<a target="_blank" href="https://www.data-forge-notebook.com/"><img align="right" src="images/support1.png"></a>

If you're a JavaScript developer, you already know that working with data is a big deal. Why let the Python and R coders get all the glory? JavaScript isn't just good at data visualization, you can move your entire data wrangling pipeline to JavaScript and work more effectively. [Data Wrangling with JavaScript](http://bit.ly/2t2cJu2) teaches you core data munging techniques in JavaScript, along with many libraries and tools that will make your data tasks even easier.

## Setup

Clone the repo to your local hard drive and change directory to the repo.

No dependencies are required.

## Run

To determine the largest JSON string that can be deserialized through `JSON.parse` run:

    node index.js

Let it run for a while and it will eventually print out the largest size JSON string that can pass through `JSON.parse`. This is also the size of the largest string in Node.js (well, the V8 JavaScript engine that powers Node.js).
