# Plugin spec

## Mandatory

1. Package name *must* be prefixed with `d-pac.` 

	**N.B.: ending in `.`** (a "dot")

1. The `index.js` *must* expose a manifest object as follows:

	```js
	{
		manifest: {
			name : "Name of the plugin",
			description : "Description of the plugin",
			type : "selection-algorithm"
		}
	}
	```

## Data structures

### Selection algorithms

Receive an Array of objects with following (minimal) structure:

* `_id`: {`String`} unique object identifier
* `compared`: {`String[]`} Array of `_id`s
* `comparedNum`: {`Number`} _optional_ Number of comparisons, equals `compared.length` can be provided for speed reasons.
