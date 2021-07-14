package utility;

import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Properties;

import io.restassured.path.json.JsonPath;

public class BaseClass extends GenericBaseClass {

	public JsonPath rawToJson(String response) {
		try {
			JsonPath jsonPath = new JsonPath(response);
			return jsonPath;
			
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			return null;
		}
	}

	public String getProperty(String key) {
		try {
			Properties property = new Properties();
			property.load(new FileInputStream(System.getProperty("user.dir")+"/src/test/resources/config.properties"));
			return property.getProperty(key);
			
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			return null;
		}
	}
	
	public HashMap<String, String> setHeaders(String key, String value) {
		try {
		HashMap<String, String> header = new HashMap<String, String> ();
		header.put(key, value);
		return header;
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			return null;
		}
	}
}
