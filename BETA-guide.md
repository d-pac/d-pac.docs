# D-pac beta-testers guide

## URL's

* **Assessors**: 		http://tool.d-pac.be/assessors
* **PAM's**: 	http://tool.d-pac.be

## Feedback

How to provide useful feedback:

### PAMs and end-users

1. **A screenshot** Providing visual feedback is very useful, especially when it concerns scrambled layout, incorrect colours, hard-to-read text, et cetera.

	See [http://www.take-a-screenshot.org/](http://www.take-a-screenshot.org/) for a clear overview on how to take a screenshot.

### Developers

The tool logs all of its actions to the console. These output logs are **really** useful to me, please provide them if you encounter a bug.

#### Step-by-step

1. Logging is optimized for **[Chrome](https://www.google.com/chrome)**, please use it.
1. **Immediately after opening the tool**, open the console (`alt+cmd+i`) please type the following into the console:

	```js
	localStorage.debug = true
	```

	**Now refresh the page.**
1. You'll notice that the tool starts logging all kinds of stuff to the console. When you encounter a bug, please dump the full contents of the errors with `ctrl+alt+d`. (Make sure the tab of the d-pac tool has focus, not the console!)
1. Select all text in the console and copy it with `cmd+c`

You can temporarily toggle the continuous time logging (e.g. the `PUT http://boil.iminds.be:3020/api/timelogs/543fa94508483aba6202ac7b` messages polluting the console) by typing `ctrl+alt+s` (again, focus should be on the webpage, not the console!) Type it again to re-enable.