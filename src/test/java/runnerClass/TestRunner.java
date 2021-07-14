package runnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/"
		,glue = {"stepDefinition"}
//		,tags = {"@comment1, @comment2, @comment3, @comment4"}
//		,tags = {"@post1, @post2, @post3, @post4"}
//		,tags = {"@user3"}

		,tags = {" @sanity"}
		,plugin = {
				"pretty", "html: target/cucumber-reports",
				"json: target/cucumber-report/single/cucumber.json",
				"rerun: rerun/failed_scenarios.txt"
		}
		,monochrome = true
//		,strict = true
//		,dryRun = true
		
		)

//public class TestRunner extends AbstractTestNGCucumberTests{
public class TestRunner{


}
