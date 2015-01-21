# Plugin spec

## Mandatory configuration

Your `package.json` manifest file **must** include:

1. a `d-pac` object as follows:

	```json
	//file: package.json
	{
		"d-pac": [ {
			"name" : "Name of the plugin",
			"description" : "Description of the plugin",
			"type" : "select",
			"entry" : "select"
		} ]
	}
	```

	* `name`: {`String`} _**(required)**_ The name of the algorithm.
	* `description`: {`String`} _**(required)**_ A description of the algorithm.
	* `type`: {`String`} _**(required)**_ The type of the algorithm.
	* `entry`: {`String`} _(optional)_ The main access point to your algorithm, by default the same value as `type` is assumed.

## Mandatory API

### Selection algorithms

#### `select`

Your selection algorithm **must** expose a function called `select` (or provide the correct name as a value for `entry` in the manifest:

```js
function select(items, n){
	//here be magical stuff
	return selection;
}
```

* `items` will receive an Array of objects with following (minimal) structure:

	* `_id`: {`String`} unique object identifier
	* `compared`: {`String[]`} Array of `_id`s

* `n` is the number of items that will be returned by your algorithm, only of interest in case your algorithm allows selecting a range of items. Should be ignored otherwise.

* `selection` should contain a selection of `items` in a range of `[0;n]`, where `n` is either the input parameter or as defined by your algorithm.

##### Example

```js
//index.js
var _ = require("underscore");
module.exports = {
	manifest: [{
		name : "Name of the plugin",
		description : "Description of the plugin",
		options : {
			type: "select"
		}
	}],
	select : function(items, n){
		return _.first(items, n);
	}
}
```
