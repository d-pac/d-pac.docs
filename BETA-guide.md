# D-pac beta-testers guide

## URL

http://tool.d-pac.be/assessors

## Feedback

How to provide useful feedback:

### Assessors

1. Use the `report issue`-button on the application:

	![Report issue](https://www.evernote.com/shard/s59/sh/8502495f-c0a0-4e99-bc52-e20af35fd9ce/988c480e546ba2ce42e4e7a60bda55e8/res/9e0127a1-9aef-4c53-a936-c04407d09eab/skitch.png)
	
	Clicking the button will open the `create issue` page on Github:
	
	![Create issue](https://www.evernote.com/shard/s59/sh/5328c0ac-8ecd-42f0-9704-5f96c79b1d61/e86a6f6c1825f4fb75ff8753425aa0e2/res/3920c864-b009-47b4-b786-00bfb5f14266/skitch.png)
	
	**VERY IMPORTANT**: automatically some relevant debugging information will be copied to your clipboard. Please paste this into the "Leave a comment"-area of the new issue:
	
	![Paste details](https://www.evernote.com/shard/s59/sh/88b63347-2ac2-448a-8b86-175a4e71dc75/b8961ecdefc63e900355763e8f472dd5/res/61718c67-cc5e-4ce4-a899-ae26b5615174/skitch.png)
	
	Pasting the data can be achieved by clicking in the "Leave a comment" area and subsequently pressing `cmd+v` [Mac] or `ctrl+v` [Windows].

1. **A screenshot** Providing visual feedback is very useful, especially when it concerns scrambled layout, incorrect colours, hard-to-read text, et cetera.

	See [http://www.take-a-screenshot.org/](http://www.take-a-screenshot.org/) for a clear overview on how to take a screenshot.
	
	You can either paste it into the "Leave comment" area, or drag-and-drop a file from Finder/Explorer to said area.

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
