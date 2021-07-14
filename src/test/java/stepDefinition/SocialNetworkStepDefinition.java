package stepDefinition;

import java.util.HashMap;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import socialNetworkServices.JsonPlaceHolderEndPoint;
import utility.BaseClass;

public class SocialNetworkStepDefinition extends BaseClass {
	JsonPlaceHolderEndPoint jsonPlaceHolderEndPoint = new JsonPlaceHolderEndPoint();
	private Response response;

	static HashMap<String, String> headerMap;

	@Given("^I set Rest API url for Social Network$")
	public void i_set_Rest_API_url_for_Social_Network() throws Throwable {

	}

	@Given("^I Set post API endpoint$")
	public void i_Set_post_API_endpoint() throws Throwable {
		String URL = getProperty("Url");
		System.out.println(URL + "......................................................");
		jsonPlaceHolderEndPoint.setUrl(URL);
	}

	@When("^I Set header param request content type \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_Set_header_param_request_content_type_as(String arg1, String arg2) throws Throwable {
		try {
			headerMap = setHeaders(arg1, arg2);
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@When("^set request body and send POST HTTP request with userId \"([^\"]*)\" , id \"([^\"]*)\" , title \"([^\"]*)\" and body \"([^\"]*)\"$")
	public void set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String arg1, String arg2,
			String arg3, String arg4) throws Throwable {
		try {
			response = jsonPlaceHolderEndPoint.postOnSocialNetwork(arg1, arg2, arg3, arg4, headerMap);
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}

	}

	@When("^set request body send and send POST HTTP request with postId \"([^\"]*)\" id \"([^\"]*)\" name \"([^\"]*)\" email\"([^\"]*)\" body \"([^\"]*)\"$")
	public void set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String arg1,
			String arg2, String arg3, String arg4, String arg5) throws Throwable {
		try {
			response = jsonPlaceHolderEndPoint.commentOnSocialNetwork(arg1, arg2, arg3, arg4, arg5, headerMap);
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}

	}

	@Then("^I receive valid HTTP response code \"([^\"]*)\"$")
	public void i_receive_valid_HTTP_response_code(String arg1) throws Throwable {
		try {
			Assert.assertEquals(Integer.parseInt(arg1), response.getStatusCode());
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}

	}

	@Then("^I receive valid content type \"([^\"]*)\"$")
	public void i_receive_valid_content_type(String arg1) throws Throwable {
		try {
			if (arg1.isEmpty()) {
				Assert.assertTrue(!response.getContentType().isEmpty());
			} else
				Assert.assertEquals(arg1 + "; charset=utf-8", response.getContentType());
			System.out.println("content-type verified " + response.getContentType());
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}

	}

	@Then("^I verify response body from \"([^\"]*)\" request with userId \"([^\"]*)\" , id \"([^\"]*)\" , title \"([^\"]*)\" and body \"([^\"]*)\"$")
	public void i_verify_response_body_from_request_with_userId_id_title_and_body(String arg1, String arg2, String arg3,
			String arg4, String arg5) throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			String userId = js.get("userId");
			int id = js.getInt("id");
			String title = js.get("title");
			String body = js.get("body");

			// verify id should be returned in response as positive integer
			Assert.assertTrue(id != 0);

			if (!arg2.isEmpty() && !arg3.isEmpty() && !arg4.isEmpty() && !arg5.isEmpty()) {
				Assert.assertTrue(arg2.equals(userId) && id == 11 || arg4.equals(title) || arg5.equals(body));
				System.out.println("all results verified");
			} else if (arg2.isEmpty()) {
				Assert.assertTrue(userId.isEmpty() && id == 11);
			} else if (arg3.isEmpty()) {
				Assert.assertTrue(id == 11);
			} else if (arg4.isEmpty()) {
				Assert.assertTrue(title.isEmpty() && id == 11);
			} else if (arg5.isEmpty()) {
				Assert.assertTrue(body.isEmpty() && id == 11);
			}

			else if (arg2.isEmpty() && arg3.isEmpty() && arg4.isEmpty() && arg5.isEmpty()) {
				Assert.assertTrue(id == 11);
				System.out.println("all results verified");
			}

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Given("^I Set add comment API endpoint$")
	public void i_Set_add_comment_API_endpoint() throws Throwable {
		try {
			String URL = getProperty("Url");
			System.out.println(URL + "......................................................");
			jsonPlaceHolderEndPoint.setUrl(URL);

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify added comment from response body with postId \"([^\"]*)\"$")
	public void i_verify_added_comment_from_response_body_with_postId(String arg1) throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			String postId = js.get("postId");

			if (!arg1.isEmpty()) {
				Assert.assertTrue(arg1.equals(postId));
				System.out.println("postId verified");
			} else {
				Assert.assertTrue(postId.isEmpty());
				System.out.println("postId verified");
			}

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify id \"([^\"]*)\" from response$")
	public void i_verify_id_from_response(String arg1) throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);

			int id = js.getInt("id");

			if (!arg1.isEmpty()) {
				Assert.assertTrue(id == 501);
				System.out.println("Id verified");
			} else {
				Assert.assertTrue(id > 0);
				System.out.println("Id verified");
			}
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify name \"([^\"]*)\" from response$")
	public void i_verify_name_from_response(String arg1) throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			String name = js.get("name");

			if (!arg1.isEmpty()) {
				Assert.assertTrue(arg1.equals(name));
				System.out.println("name verified");
			} else {
				Assert.assertTrue(name.isEmpty());
				System.out.println("name verified");
			}
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify email \"([^\"]*)\" from response$")
	public void i_verify_email_from_response(String arg1) throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			String email = js.get("email");

			if (!arg1.isEmpty()) {
				Assert.assertTrue(arg1.equals(email));
				System.out.println("email verified");
			} else {
				Assert.assertTrue(email.isEmpty());
				System.out.println("email verified");
			}
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify body \"([^\"]*)\" from response$")
	public void i_verify_body_from_response(String arg1) throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			String body = js.get("body");

			if (!arg1.isEmpty()) {
				Assert.assertTrue(arg1.equals(body));
				System.out.println("body verified");
			} else {
				Assert.assertTrue(body.isEmpty());
				System.out.println("body verified");
			}
		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Given("^I Set users API endpoint$")
	public void i_Set_users_API_endpoint() throws Throwable {
		try {
			String URL = getProperty("Url");
			System.out.println(URL + "......................................................");
			jsonPlaceHolderEndPoint.setUrl(URL);

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@When("^send request to get the list of users$")
	public void send_request_to_get_the_list_of_users() throws Throwable {
		try {
			response = jsonPlaceHolderEndPoint.getUsersOnSocialNetwork(headerMap);

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify the list of users$")
	public void i_verify_the_list_of_users() throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			int id0 = js.getInt("id[0]");
			System.out.println("id is: " + id0);
			int id9 = js.getInt("id[9]");
			System.out.println("id is: " + id9);

			Assert.assertTrue(id0 == 1 && id9 == 10);
			System.out.println("user's  multiple id  verified ");

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}

	@Then("^I verify user metaData$")
	public void i_verify_user_metaData() throws Throwable {
		try {
		String res = response.asString();
		JsonPath js = rawToJson(res);
		String name = js.get("name[0]");
		String username = js.get("username[0]");
		String email = js.get("email[0]");
		System.out.println("name: "+ name+ " username: "+ username + " email: "+ email);	
		
		Assert.assertTrue(!name.isEmpty());
		Assert.assertTrue(!username.isEmpty());
		Assert.assertTrue(!email.isEmpty());
		
		System.out.println("user  feilds  verified ");

		} catch (Exception e) {
			System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
		}
	}
	
	@Then("^I verify user's address$")
	public void i_verify_user_s_address() throws Throwable {
		try {
			String res = response.asString();
			JsonPath js = rawToJson(res);
			String addressStreet = js.getString("address[0].street");
			String suite = js.get("address[0].suite");
			String city = js.get("address[0].city");
			String zipcode = js.get("address[0].zipcode");
			String phone = js.get("phone[0]");
			String website = js.get("website[0]");
			String companyName = js.get("company[0].name");
			String companycatchPhrase = js.get("company[0].catchPhrase");
			String companybs = js.get("company[0].bs");

			System.out.println("addressStreet: "+ addressStreet+ " suite: "+ suite + " city: "+ city
					+ " zipcode: "+ zipcode + " phone: "+ phone+ " website: "+ website + " companyName: "+ companyName);	
			
			Assert.assertTrue(!addressStreet.isEmpty());
			Assert.assertTrue(!suite.isEmpty());
			Assert.assertTrue(!city.isEmpty());
			Assert.assertTrue(!zipcode.isEmpty());
			Assert.assertTrue(!phone.isEmpty());
			Assert.assertTrue(!website.isEmpty());			
			Assert.assertTrue(!companyName.isEmpty());
			Assert.assertTrue(!companycatchPhrase.isEmpty());
			Assert.assertTrue(!companybs.isEmpty());
						
			System.out.println("All user address feilds  verified ");

			} catch (Exception e) {
				System.out.println(e + " " + this.getClass().getEnclosingMethod().getName());
			}
	}

	
}