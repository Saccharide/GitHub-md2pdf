import java.awt.Point;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ScreenshotHandle {

	static WebDriver driver1;
	public static void main(String[] args) throws IOException {

		// Set the path for the chrome web driver 
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium-Project\\chromedriver.exe");
		//driver = new ChromeDriver();
		
		// Getting the url
		//driver.get("https://github.com/Saccharide/git-addons/blob/master/README.md");
		//System.out.println(driver.getTitle());
		// takeScreenShot("Google_Home");
		CaptureScreenOfSpecificElement();
		
	}
	
	public static void takeScreenShot(String filename) throws IOException {
		
		// Step 1 Takes a screenshot and store it as a file format:
		
		File file = ((TakesScreenshot)driver1).getScreenshotAs(OutputType.FILE);
		
		// Step 2: Copy the screenshot to the desired location using copyfile method
		
		FileUtils.copyFile(file, new File("D:\\Selenium-Project\\github_md-2-pdf\\screenshots\\" + filename+ ".jpg"));
	}

	public static void CaptureScreenOfSpecificElement() throws IOException
	{
		 WebDriver driver = new ChromeDriver();
		 driver.get("https://github.com/Saccharide/git-addons/blob/master/README.md");
		 WebElement ele = driver.findElement(By.id("readme"));
		 //WebElement ele = driver.findElement(By.className("readme blob instapaper_body js-code-block-container"));
		 File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		 BufferedImage  fullImg = ImageIO.read(screenshot);
		
		 // Get the location of element on the page
		 org.openqa.selenium.Point point = ele.getLocation();
		   
		 // Get width and height of the element
		 int eleWidth = ele.getSize().getWidth();
		 int eleHeight = ele.getSize().getHeight();
		
		 // Crop the entire page screenshot to get only element screenshot
		 BufferedImage eleScreenshot= fullImg	.getSubimage(point.getX(), point.getY(), eleWidth, eleHeight);
		 ImageIO.write(eleScreenshot, "png", screenshot);
		   
		 // Copy the element screenshot to disk
		 FileUtils.copyFile(screenshot, new File("D:\\Selenium-Project\\github_md-2-pdf\\screenshots\\" + "readme" + ".png"));
		 driver.quit();
	}
}

