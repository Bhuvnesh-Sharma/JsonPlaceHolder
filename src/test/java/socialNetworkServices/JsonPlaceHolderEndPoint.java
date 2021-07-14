package socialNetworkServices;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import cucumber.api.Scenario;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import jsonPojoResources.CommentResource;
import jsonPojoResources.PostResource;
import utility.BaseClass;

public class JsonPlaceHolderEndPoint extends BaseClass {
	ApiPath apiPath = new ApiPath();
	private String url = "";
	private RequestSpecification request;
	private Response response;
	private Scenario scenario;

	public void setUrl(String url) {
		this.url = url;
	}

	public Response postOnSocialNetwork(String userId, String id, String title, String body,
			HashMap<String, String> headerValues) {
		try {
			RestAssured.baseURI = url;
			PostResource postResource = new PostResource(userId, id, title, body);

			if (headerValues.containsKey(null) || headerValues.containsValue(null)
					|| headerValues.isEmpty() || headerValues.containsValue("")) {
				System.out.println("One of the header values identified as null.");
				return null;
			}

			request = (RequestSpecification) given().headers(headerValues).body(postResource.toStringJson());

			response = request.when().post(apiPath.getNewPost()).then().log().all().extract().response();

			return response;

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			return null;
		}
	}

	public Response commentOnSocialNetwork(String postId, String id, String name, String email, String body,
			HashMap<String, String> headerValues) {
		try {
			RestAssured.baseURI = url;
			CommentResource commentResource = new CommentResource(postId, id, name, email, body);

			request = (RequestSpecification) given().headers(headerValues).body(commentResource.toStringJson());

			response = request.when().post(apiPath.getAddComments()).then().log().all().extract().response();
//		System.out.println("response string :  "+response.asString());

			return response;

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			return null;
		}

	}

	public Response getUsersOnSocialNetwork(HashMap<String, String> headerValues) {
		try {
			RestAssured.baseURI = url;
			request = (RequestSpecification) given().headers(headerValues);

			response = request.when().get(apiPath.getGetListOfUsers()).then().log().all().extract().response();

			return response;

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			return null;
		}

	}

}
