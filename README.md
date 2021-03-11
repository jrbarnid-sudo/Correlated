# Correlated

## Getting Started

Just `yarn install` then `yarn start`!

## Specs

**For all endpoints:**
  * [x] Each endpoint should accept JSON and return JSON.
  * [x] Each endpoint should respond with appropriate error codes: 200 for success, 4XX for user error, 5XX for server error.

**For data storage:**
  * [x] You should store data in memory
  * [x] Ideally using a well known data structure from your programming language's standard library.

**A "Set" endpoint:**
  * [x] It should use the POST HTTP method
  * [x] It should be available at the /set url path
  * [x] The request should contain a JSON POST body consisting of a JSON entry of the following form: {"key": "<some key>", "value": "<string value>" }.
  * [x] This endpoint should set the key value pair in memory.
  * [x] The keys and values should be strings only
  * [x] If successful, the response should be the JSON object that was just set.

**A "Get" endpoint**
  * [x] It should use the GET HTTP method
  * [x] It should be available at the /get url path
  * [x] The request should be of the form: /get?key=someKey, which should return the value stored in memory for "someKey".
  * [x] The response body should be a JSON object of the following form: {"key": "<some key>", "value": "<string value>" }.
  * [x] If called with no parameters, it should return an error.

**A "Delete" endpoint**
  * [x] It should use the POST HTTP method
  * [x] It should be available at the /delete url path
  * [x] The request should contain a JSON POST body consisting of a JSON entry of the following form: {"key": "<some key>"}.
  * [x] If the key was successfully deleted, the response should be a JSON document including the key that was deleted.
  * [x] If called with no parameters, should return an error.
  * [x] If the key doesn't exist, it should respond with a 200, but should contain a message saying the key didn't exist.
