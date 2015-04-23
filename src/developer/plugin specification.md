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
			"entry" : "select",
			"compatibleWith":"*"
		} ]
	}
	```

	* `name`: {`String`} _**(required)**_ The name of the algorithm.
	* `description`: {`String`} _**(required)**_ A description of the algorithm.
	* `type`: {`String`} _**(required)**_ The type of the algorithm.
	* `entry`: {`String`} _(optional)_ The main access point to your algorithm, by default the same value as `type` is assumed.
	* `compatibleWith`: {`String`|`Array`} _(optional)_ [Semver](http://semver.org) version specification of d-pac.cms versions this plugin is compatible with.

## Mandatory API

### Selection algorithms

#### `select`

Your selection algorithm **must** expose a function called `select` (or provide the correct name as a value for `entry` in the manifest:

```js
function select(representations, comparisons, assessment){
	//here be magical stuff
	return selection;
}
```

* `representations` will receive an Array of objects with following (minimal) structure:

	* `_id`: {`String`} unique object identifier
	* `compared`: {`String[]`} Array of `_id`s

* `comparisons` TBD

* `assessment` TBD

* `selection` should contain a selection of `representations` in a range of `[0;n]`, where `n` is defined by your algorithm.

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
	select : function(items){
		return _.first(items);
	}
}
```