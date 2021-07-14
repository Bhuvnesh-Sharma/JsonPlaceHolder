package utility;

import io.restassured.path.json.JsonPath;

public abstract class GenericBaseClass {

 public abstract JsonPath rawToJson(String response);
	
}
