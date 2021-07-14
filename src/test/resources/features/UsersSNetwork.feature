Feature: Users on social network 

#Background:
#Given I set Rest API url for social network

  @user1  @sanity
Scenario Outline: Verify users on social networkPositveE2E_"<type>"
	Given I Set users API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And send request to get the list of users 
#	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	And I verify the list of users 


Examples: 
|type| ContentType| ContentTypeValue |StatusCode |
|1	 | content-type | application/json | 200 |
|2	 | content-type | application/json | 200 |

  @user2  @sanity
Scenario Outline: Verify users on social network_VerifyMetaData"<type>"
	Given I Set users API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And send request to get the list of users 
#	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	And I verify user metaData 


Examples: 
|type| ContentType| ContentTypeValue |StatusCode |
|1	 | content-type | application/json | 200 |
|2	 | content-type | application/json | 200 |




@user3  @sanity
Scenario Outline: Verify users on social network_VerifyAddressDetails"<type>"
	Given I Set users API endpoint
	When I Set header param request content type "<ContentType>" as "<ContentTypeValue>"
	And send request to get the list of users 
#	And set request body send and send POST HTTP request with postId "<postId>" id "<id>" name "<name>" email"<email>" body "<body>"
	Then I receive valid HTTP response code "<StatusCode>"
	And I receive valid content type "<ContentTypeValue>"
	And I verify user's address


Examples: 
|type| ContentType| ContentTypeValue |StatusCode |
|1	 | content-type | application/json | 200 |
|2	 | content-type | application/json | 200 |


