@Test
public void CaptureScreenOfSpecificElement() throws IOException
{
     WebDriver driver = new FirefoxDriver();
      driver.get("http://www.ankpro.com");
       WebElement ele = driver.findElement(By.className("jumbotron"));
        File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
         BufferedImage  fullImg = ImageIO.read(screenshot);

          // Get the location of element on the page
          Point point = ele.getLocation();
           
           // Get width and height of the element
           int eleWidth = ele.getSize().getWidth();
            int eleHeight = ele.getSize().getHeight();

             // Crop the entire page screenshot to get only element screenshot
             BufferedImage eleScreenshot= fullImg.getSubimage(point.getX(), point.getY(), eleWidth, eleHeight);
              ImageIO.write(eleScreenshot, "png", screenshot);
               
               // Copy the element screenshot to disk
               FileUtils.copyFile(screenshot, new File("test.jpeg"));
                driver.quit();
                 }
}
