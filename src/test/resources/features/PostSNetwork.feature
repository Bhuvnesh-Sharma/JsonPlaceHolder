Feature: Post on social network 

#Background:
#Given I set Rest API url for social network


  	@post1 @post @sanity
Scenario Outline: Verify make posts functionality_PositveE2E_"<type>"
	Given I Set post API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body and send POST HTTP request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	Then I verify response body from "POST" request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"

Examples: 
|type|userId| id | title | body 					   		 | ContentType  | ContentTypeValue |StatusCode |
|1	  | 1   | 100| test1 | update something on post 		 | content-type | application/json | 201 |
|2	  | 1   | 10 | test2 | update something on post again    | content-type | application/json | 201 |



 	@post2 @post @sanity
Scenario Outline: Verify make posts functionality_Negative_"<type>"
	Given I Set post API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body and send POST HTTP request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	Then I verify response body from "POST" request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"

Examples: 
|type|userId| id | title | body 					   		 | ContentType  | ContentTypeValue |StatusCode |
|3    |     | 10 | test2 | update something on post again1   | content-type | application/json | 201 |
|4    | 4   |    | test4 | update something on post again2   | content-type | application/json | 201 |
|5    | 8   |    | test5 | update something on post again3   | content-type | application/json | 201 |
|6    |     |    | test6 |    							     | content-type | application/json | 201 |
|7    |     |    |       | 								     | content-type | application/json | 201 |


#this scenario is designed to fail
	@post3 @post @sanity
Scenario Outline: Verify make posts functionality_Negative_NullContentType_"<type>"
	Given I Set post API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body and send POST HTTP request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"

Examples: 
|type|userId| id | title | body 	| ContentType  | ContentTypeValue |StatusCode |
|8    |     |    | test8 | 			| content-type |  				  | 201 |



	@post4 @post @sanity
Scenario Outline: Verify make posts functionality_Negative_NullBody_"<type>"
	Given I Set post API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And set request body and send POST HTTP request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	Then I verify response body from "POST" request with userId "<userId>" , id "<id>" , title "<title>" and body "<body>"

Examples: 
|type|userId| id | title | body 	| ContentType  | ContentTypeValue |StatusCode |
|9    |     |    |       |			| content-type | application/json | 201 |

