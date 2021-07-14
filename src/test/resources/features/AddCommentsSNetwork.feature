Feature: Add comment on post 

#Background:
#Given I Set add comment API endpoint

  	@comment1 @sanity
Scenario Outline: Verify adding comments on posts functionality_PositveE2E_"<type>"
	Given I Set add comment API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	Then I verify added comment from response body with postId "<postId>"
	And I verify id "<id>" from response
	And I verify name "<name>" from response
	And I verify email "<email>" from response
	Then I verify body "<body>" from response

Examples: 
|type| postId| id| name| email| body| ContentType| ContentTypeValue |StatusCode |
|1	 | 1 | 100| bhuvnesh1 | abc@gmail.com  | comment something on post        | content-type | application/json | 201 |
|2	 | 1 | 10 | bhuvnesh2 | abcd@gmail.com | comment something on post again1 | content-type | application/json | 201 |




 	@comment2 @sanity
Scenario Outline: Verify adding comments on posts functionality_Negative_"<type>"
	Given I Set add comment API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	Then I verify added comment from response body with postId "<postId>"
	And I verify id "<id>" from response
	And I verify name "<name>" from response
	And I verify email "<email>" from response
	Then I verify body "<body>" from response
Examples: 
|type | postId| id| name| email| body| ContentType  | ContentTypeValue |StatusCode|
|3	 |   | 10 | bhuvnesh3 | abcd3`#@gmail.com | comment something on post again2 | content-type| application/json | 201 |
|4	 | 4 |    | bhuvnesh4 | abcdgmail.com | comment something on post again3    | content-type | application/json | 201 |
|5	 | 3 | 10 | 		  | abcd12@gmail.com | comment something on post again2 | content-type | application/json | 201 |
|6	 | 4 | 10 | bhuvnesh4 | 			   | comment something on post again3   | content-type | application/json | 201 |
|7	 | 3 |    | bhuvnesh3 | abcd@gmail.com | 								    | content-type | application/json | 201 |


	@comment3  @sanity
Scenario Outline: Verify adding comments on posts functionality_Negative_NullContentType_"<type>"
	Given I Set add comment API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	And I verify id "<id>" from response

Examples: 
|type| postId| id| name		| email         | body							  | ContentType  | ContentTypeValue|StatusCode|
|8	 | 4     | 10| bhuvnesh4| abcd@gmail.com| comment something on post again3|              | 				   | 201      |


	@comment4  @sanity
Scenario Outline: Verify adding comments on posts functionality_Negative_NullBody_"<type>"
	Given I Set add comment API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	Then I verify added comment from response body with postId "<postId>"
	And I verify id "<id>" from response
	And I verify name "<name>" from response
	And I verify email "<email>" from response
	Then I verify body "<body>" from response
Examples: 
|type| postId| id| name| email| body| ContentType  | ContentTypeValue |StatusCode|
|9	 |       |   |     |      |     | content-type | application/json | 201|


