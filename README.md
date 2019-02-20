# GitHub README to PDF

## First method: 
- Tried to remove all non related elements using plain JavaScript, and then try using the default print to PDF with Chrome. HOWEVER, this method will not include the grey area shading provided my GitHub flavor of README, so this approach is not useful... But I did wrote a script that goes up to the parent element and removed any irrelevant siblings.

## Second method:
- Tried to learn Selenium, installed the WebDriver and chromedriver, was able to launch chrome after setting up the Selenium environment. However, the browser that is opened up by Selenium is not the same browser as normal Chrome, (I think it opens up a debug version), and therefore does not have any saved user credentials / sessions. It would not be able to access any private repo without logging in, which can be a pain. Also the way it takes screenshot is not large enough since it can only takes screenshot from the VIEWPOINT.

## Third method:
- Although it is not an elegant solution, I was able to generate a nice, full canvas object using html2canvas. I first imported the source for html2canvas at the beginning, then I simply just select the element with id `readme` using `html2canvas(document.querySelector("#readme"))`. Finally, I just append it to the end of `body`. This simply generates a canvas element inside which I can later save as a png file. 
- I tried to download the canvas *automatically* without appending it to the end of the body, however, the broswer prevents this action, and gives this error `Uncaught SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.`

## Author
**Sacharide**
