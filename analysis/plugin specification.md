# Plugin spec

## Mandatory configuration

1. Package name *must* be prefixed with `d-pac.` 

	**N.B.: ending in `.`** (a "dot")

1. The `index.js` *must* expose a manifest object as follows:

	```js
	{
		manifest: [ {
			name : "Name of the plugin",
			description : "Description of the plugin",
			options : {
				type : "select"
				entry : "select"
				n : 2
			}
		} ]
	}
	```

	* `options.type`: {`String`} _**(required)**_ The type of your algorithm.
	* `options.entry`: {`String`} _(optional)_ The main function name of your algorithm, by default the same value as `type` is assumed.
	* `options.n`: {`Number`} _(optional)_ The number of items your algorithm will return. If left `falsy` (i.e. also `undefined`) it's assumed the algorithm will return any number of requested items.

## Mandatory API

### Selection algorithms

#### `select`

Your selection algorithm **must** expose a function called `select` (or provide the correct name as a value for `options.entry` in the manifest:

	```js
	function select(items, n){
		//here be magical stuff

		return selection;
	}
	```

* `items` will receive an Array of objects with following (minimal) structure:

	* `_id`: {`String`} unique object identifier
	* `compared`: {`String[]`} Array of `_id`s
	* `comparedNum`: {`Number`} _(optional)_ Number of comparisons, equals `compared.length` can be provided for speed reasons.

* `n` is the number of items that will be returned by your algorithm, only of interest in case your algorithm allows selecting a range of items. Should be ignored otherwise.

* `selection` should contain a selection of `items` in a range of `[0;n]`, where `n` is either the input parameter or the `options.n` manifest value.

##### Example

```js
//index.js
var _ = require("underscore");
module.exports = {
	manifest: {
		name : "Name of the plugin",
		description : "Description of the plugin",
		
	},
	select : function(items, n){
		return _.first(items, n);
	}
}
```