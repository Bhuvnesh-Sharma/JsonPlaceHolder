$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddCommentsSNetwork.feature");
formatter.feature({
  "line": 1,
  "name": "Add comment on post",
  "description": "",
  "id": "add-comment-on-post",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#Given I Set add comment API endpoint"
    }
  ],
  "line": 7,
  "name": "Verify adding comments on posts functionality_PositveE2E_\"\u003ctype\u003e\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@comment1"
    },
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify added comment from response body with postId \"\u003cpostId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify id \"\u003cid\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify name \"\u003cname\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify email \"\u003cemail\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify body \"\u003cbody\u003e\" from response",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "postId",
        "id",
        "name",
        "email",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 20,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "1",
        "1",
        "100",
        "bhuvnesh1",
        "abc@gmail.com",
        "comment something on post",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 21,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "2",
        "1",
        "10",
        "bhuvnesh2",
        "abcd@gmail.com",
        "comment something on post again1",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 22,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 133833,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify adding comments on posts functionality_PositveE2E_\"1\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@comment1"
    },
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "set request body send and send POST HTTP request with postId \"1\" id \"100\" name \"bhuvnesh1\" email\"abc@gmail.com\" body \"comment something on post\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify added comment from response body with postId \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify id \"100\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify name \"bhuvnesh1\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify email \"abc@gmail.com\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify body \"comment something on post\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 102528407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 3342939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "100",
      "offset": 69
    },
    {
      "val": "bhuvnesh1",
      "offset": 80
    },
    {
      "val": "abc@gmail.com",
      "offset": 97
    },
    {
      "val": "comment something on post",
      "offset": 118
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 3592806053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 2495196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 355108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 1008912587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 21099964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhuvnesh1",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 20156567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 18264849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comment something on post",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 16330026,
  "status": "passed"
});
formatter.after({
  "duration": 34074,
  "status": "passed"
});
formatter.before({
  "duration": 41053,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify adding comments on posts functionality_PositveE2E_\"2\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-positvee2e-\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@comment1"
    },
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "set request body send and send POST HTTP request with postId \"1\" id \"10\" name \"bhuvnesh2\" email\"abcd@gmail.com\" body \"comment something on post again1\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify added comment from response body with postId \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify id \"10\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify name \"bhuvnesh2\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify email \"abcd@gmail.com\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify body \"comment something on post again1\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 461024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 85801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 69
    },
    {
      "val": "bhuvnesh2",
      "offset": 79
    },
    {
      "val": "abcd@gmail.com",
      "offset": 96
    },
    {
      "val": "comment something on post again1",
      "offset": 118
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 862849622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 126853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 115359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 23209262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 18478736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhuvnesh2",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 19907787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 13963326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comment something on post again1",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 17702015,
  "status": "passed"
});
formatter.after({
  "duration": 14368,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify adding comments on posts functionality_Negative_\"\u003ctype\u003e\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@comment2"
    },
    {
      "line": 27,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify added comment from response body with postId \"\u003cpostId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify id \"\u003cid\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify name \"\u003cname\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify email \"\u003cemail\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify body \"\u003cbody\u003e\" from response",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "postId",
        "id",
        "name",
        "email",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 40,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "3",
        "",
        "10",
        "bhuvnesh3",
        "abcd3`#@gmail.com",
        "comment something on post again2",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 41,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "4",
        "4",
        "",
        "bhuvnesh4",
        "abcdgmail.com",
        "comment something on post again3",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 42,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;3"
    },
    {
      "cells": [
        "5",
        "3",
        "10",
        "",
        "abcd12@gmail.com",
        "comment something on post again2",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 43,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;4"
    },
    {
      "cells": [
        "6",
        "4",
        "10",
        "bhuvnesh4",
        "",
        "comment something on post again3",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 44,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;5"
    },
    {
      "cells": [
        "7",
        "3",
        "",
        "bhuvnesh3",
        "abcd@gmail.com",
        "",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 45,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37358,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify adding comments on posts functionality_Negative_\"3\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@comment2"
    },
    {
      "line": 27,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "set request body send and send POST HTTP request with postId \"\" id \"10\" name \"bhuvnesh3\" email\"abcd3`#@gmail.com\" body \"comment something on post again2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify added comment from response body with postId \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify id \"10\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify name \"bhuvnesh3\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify email \"abcd3`#@gmail.com\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify body \"comment something on post again2\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 227023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 81285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 68
    },
    {
      "val": "bhuvnesh3",
      "offset": 78
    },
    {
      "val": "abcd3`#@gmail.com",
      "offset": 95
    },
    {
      "val": "comment something on post again2",
      "offset": 120
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 910835135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 131780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 110432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 12751033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 11883175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhuvnesh3",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 12351588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3`#@gmail.com",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 15086533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comment something on post again2",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 14562698,
  "status": "passed"
});
formatter.after({
  "duration": 13958,
  "status": "passed"
});
formatter.before({
  "duration": 30379,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify adding comments on posts functionality_Negative_\"4\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@comment2"
    },
    {
      "line": 27,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "set request body send and send POST HTTP request with postId \"4\" id \"\" name \"bhuvnesh4\" email\"abcdgmail.com\" body \"comment something on post again3\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify added comment from response body with postId \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify id \"\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify name \"bhuvnesh4\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify email \"abcdgmail.com\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify body \"comment something on post again3\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 289423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 82516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 62
    },
    {
      "val": "",
      "offset": 69
    },
    {
      "val": "bhuvnesh4",
      "offset": 77
    },
    {
      "val": "abcdgmail.com",
      "offset": 94
    },
    {
      "val": "comment something on post again3",
      "offset": 115
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 1098989647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 97706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 121517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 75023779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 24082046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhuvnesh4",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 19732491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdgmail.com",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 22295425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comment something on post again3",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 42215116,
  "status": "passed"
});
formatter.after({
  "duration": 22169,
  "status": "passed"
});
formatter.before({
  "duration": 40232,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify adding comments on posts functionality_Negative_\"5\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@comment2"
    },
    {
      "line": 27,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "set request body send and send POST HTTP request with postId \"3\" id \"10\" name \"\" email\"abcd12@gmail.com\" body \"comment something on post again2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify added comment from response body with postId \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify id \"10\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify name \"\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify email \"abcd12@gmail.com\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify body \"comment something on post again2\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 250833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 81285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 69
    },
    {
      "val": "",
      "offset": 79
    },
    {
      "val": "abcd12@gmail.com",
      "offset": 87
    },
    {
      "val": "comment something on post again2",
      "offset": 111
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 1055331110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 153948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 131369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 13090541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 11082232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 15279892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd12@gmail.com",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 16558690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comment something on post again2",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 17840773,
  "status": "passed"
});
formatter.after({
  "duration": 17653,
  "status": "passed"
});
formatter.before({
  "duration": 39822,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify adding comments on posts functionality_Negative_\"6\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@comment2"
    },
    {
      "line": 27,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "set request body send and send POST HTTP request with postId \"4\" id \"10\" name \"bhuvnesh4\" email\"\" body \"comment something on post again3\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify added comment from response body with postId \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify id \"10\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify name \"bhuvnesh4\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify email \"\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify body \"comment something on post again3\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 249602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 82516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 69
    },
    {
      "val": "bhuvnesh4",
      "offset": 79
    },
    {
      "val": "",
      "offset": 96
    },
    {
      "val": "comment something on post again3",
      "offset": 104
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 865965538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 106738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 238928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 12417684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 9997615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhuvnesh4",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 12620075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 15356251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comment something on post again3",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 13106552,
  "status": "passed"
});
formatter.after({
  "duration": 11495,
  "status": "passed"
});
formatter.before({
  "duration": 22989,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify adding comments on posts functionality_Negative_\"7\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-\"\u003ctype\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@comment2"
    },
    {
      "line": 27,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "set request body send and send POST HTTP request with postId \"3\" id \"\" name \"bhuvnesh3\" email\"abcd@gmail.com\" body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify added comment from response body with postId \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I verify id \"\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify name \"bhuvnesh3\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify email \"abcd@gmail.com\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify body \"\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 186380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 100170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 62
    },
    {
      "val": "",
      "offset": 69
    },
    {
      "val": "bhuvnesh3",
      "offset": 77
    },
    {
      "val": "abcd@gmail.com",
      "offset": 94
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 886486245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 124801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 104685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 14141496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 10584261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhuvnesh3",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 10092447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 9539054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 10199185,
  "status": "passed"
});
formatter.after({
  "duration": 10674,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Verify adding comments on posts functionality_Negative_NullContentType_\"\u003ctype\u003e\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@comment3"
    },
    {
      "line": 48,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify id \"\u003cid\u003e\" from response",
  "keyword": "And "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "postId",
        "id",
        "name",
        "email",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 58,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "8",
        "4",
        "10",
        "bhuvnesh4",
        "abcd@gmail.com",
        "comment something on post again3",
        "",
        "",
        "201"
      ],
      "line": 59,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 385076,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify adding comments on posts functionality_Negative_NullContentType_\"8\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@comment3"
    },
    {
      "line": 48,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I Set header param request content type \"\" as \"\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "set request body send and send POST HTTP request with postId \"4\" id \"10\" name \"bhuvnesh4\" email\"abcd@gmail.com\" body \"comment something on post again3\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I receive valid content type \"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify id \"10\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 209370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    },
    {
      "val": "",
      "offset": 47
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 63632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 62
    },
    {
      "val": "10",
      "offset": 69
    },
    {
      "val": "bhuvnesh4",
      "offset": 79
    },
    {
      "val": "abcd@gmail.com",
      "offset": 96
    },
    {
      "val": "comment something on post again3",
      "offset": 118
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 826527651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 101400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 90317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 8858808,
  "status": "passed"
});
formatter.after({
  "duration": 9852,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Verify adding comments on posts functionality_Negative_NullBody_\"\u003ctype\u003e\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullbody-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@comment4"
    },
    {
      "line": 62,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I verify added comment from response body with postId \"\u003cpostId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I verify id \"\u003cid\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I verify name \"\u003cname\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I verify email \"\u003cemail\u003e\" from response",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I verify body \"\u003cbody\u003e\" from response",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "postId",
        "id",
        "name",
        "email",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 75,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "9",
        "",
        "",
        "",
        "",
        "",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 76,
      "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29558,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Verify adding comments on posts functionality_Negative_NullBody_\"9\"",
  "description": "",
  "id": "add-comment-on-post;verify-adding-comments-on-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@comment4"
    },
    {
      "line": 62,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I Set add comment API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "set request body send and send POST HTTP request with postId \"\" id \"\" name \"\" email\"\" body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I verify added comment from response body with postId \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I verify id \"\" from response",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I verify name \"\" from response",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I verify email \"\" from response",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I verify body \"\" from response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_add_comment_API_endpoint()"
});
formatter.result({
  "duration": 195412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 66506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 62
    },
    {
      "val": "",
      "offset": 68
    },
    {
      "val": "",
      "offset": 76
    },
    {
      "val": "",
      "offset": 84
    },
    {
      "val": "",
      "offset": 92
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_send_and_send_POST_HTTP_request_with_postId_id_name_email_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 1014657119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 196643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 195001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_added_comment_from_response_body_with_postId(String)"
});
formatter.result({
  "duration": 21126648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_id_from_response(String)"
});
formatter.result({
  "duration": 15328335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_name_from_response(String)"
});
formatter.result({
  "duration": 18654852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_email_from_response(String)"
});
formatter.result({
  "duration": 16997546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_body_from_response(String)"
});
formatter.result({
  "duration": 12748571,
  "status": "passed"
});
formatter.after({
  "duration": 14369,
  "status": "passed"
});
formatter.uri("PostSNetwork.feature");
formatter.feature({
  "line": 1,
  "name": "Post on social network",
  "description": "",
  "id": "post-on-social-network",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#Given I set Rest API url for social network"
    }
  ],
  "line": 8,
  "name": "Verify make posts functionality_PositveE2E_\"\u003ctype\u003e\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@post1"
    },
    {
      "line": 7,
      "name": "@post"
    },
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "set request body and send POST HTTP request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify response body from \"POST\" request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "userId",
        "id",
        "title",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 17,
      "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "1",
        "1",
        "100",
        "test1",
        "update something on post",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 18,
      "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "2",
        "1",
        "10",
        "test2",
        "update something on post again",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 19,
      "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42695,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify make posts functionality_PositveE2E_\"1\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@post1"
    },
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "set request body and send POST HTTP request with userId \"1\" , id \"100\" , title \"test1\" and body \"update something on post\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify response body from \"POST\" request with userId \"1\" , id \"100\" , title \"test1\" and body \"update something on post\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 254939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 59938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "100",
      "offset": 66
    },
    {
      "val": "test1",
      "offset": 80
    },
    {
      "val": "update something on post",
      "offset": 97
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 859732064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 98938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 97706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "100",
      "offset": 65
    },
    {
      "val": "test1",
      "offset": 79
    },
    {
      "val": "update something on post",
      "offset": 96
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 43925791,
  "status": "passed"
});
formatter.after({
  "duration": 12726,
  "status": "passed"
});
formatter.before({
  "duration": 36538,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify make posts functionality_PositveE2E_\"2\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-positvee2e-\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@post1"
    },
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "set request body and send POST HTTP request with userId \"1\" , id \"10\" , title \"test2\" and body \"update something on post again\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify response body from \"POST\" request with userId \"1\" , id \"10\" , title \"test2\" and body \"update something on post again\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 217580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 90727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "10",
      "offset": 66
    },
    {
      "val": "test2",
      "offset": 79
    },
    {
      "val": "update something on post again",
      "offset": 96
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 803850845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 98937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 118643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "10",
      "offset": 65
    },
    {
      "val": "test2",
      "offset": 78
    },
    {
      "val": "update something on post again",
      "offset": 95
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 40291377,
  "status": "passed"
});
formatter.after({
  "duration": 10674,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify make posts functionality_Negative_\"\u003ctype\u003e\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@post2"
    },
    {
      "line": 23,
      "name": "@post"
    },
    {
      "line": 23,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "set request body and send POST HTTP request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify response body from \"POST\" request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "userId",
        "id",
        "title",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 33,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "3",
        "",
        "10",
        "test2",
        "update something on post again1",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 34,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "4",
        "4",
        "",
        "test4",
        "update something on post again2",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 35,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;3"
    },
    {
      "cells": [
        "5",
        "8",
        "",
        "test5",
        "update something on post again3",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 36,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;4"
    },
    {
      "cells": [
        "6",
        "",
        "",
        "test6",
        "",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 37,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;5"
    },
    {
      "cells": [
        "7",
        "",
        "",
        "",
        "",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 38,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51727,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify make posts functionality_Negative_\"3\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@post2"
    },
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "set request body and send POST HTTP request with userId \"\" , id \"10\" , title \"test2\" and body \"update something on post again1\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify response body from \"POST\" request with userId \"\" , id \"10\" , title \"test2\" and body \"update something on post again1\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 238107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 89906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    },
    {
      "val": "10",
      "offset": 65
    },
    {
      "val": "test2",
      "offset": 78
    },
    {
      "val": "update something on post again1",
      "offset": 95
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 818209920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 298455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 213065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "10",
      "offset": 64
    },
    {
      "val": "test2",
      "offset": 77
    },
    {
      "val": "update something on post again1",
      "offset": 94
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 46659504,
  "status": "passed"
});
formatter.after({
  "duration": 17242,
  "status": "passed"
});
formatter.before({
  "duration": 31611,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify make posts functionality_Negative_\"4\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@post2"
    },
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "set request body and send POST HTTP request with userId \"4\" , id \"\" , title \"test4\" and body \"update something on post again2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify response body from \"POST\" request with userId \"4\" , id \"\" , title \"test4\" and body \"update something on post again2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 371528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 83337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 57
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "test4",
      "offset": 77
    },
    {
      "val": "update something on post again2",
      "offset": 94
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 812345513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 171601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 204443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "4",
      "offset": 56
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "test4",
      "offset": 76
    },
    {
      "val": "update something on post again2",
      "offset": 93
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 37152882,
  "status": "passed"
});
formatter.after({
  "duration": 14368,
  "status": "passed"
});
formatter.before({
  "duration": 42695,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify make posts functionality_Negative_\"5\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@post2"
    },
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "set request body and send POST HTTP request with userId \"8\" , id \"\" , title \"test5\" and body \"update something on post again3\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify response body from \"POST\" request with userId \"8\" , id \"\" , title \"test5\" and body \"update something on post again3\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 223328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 80874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 57
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "test5",
      "offset": 77
    },
    {
      "val": "update something on post again3",
      "offset": 94
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 1033457710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 89906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 106327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "8",
      "offset": 56
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "test5",
      "offset": 76
    },
    {
      "val": "update something on post again3",
      "offset": 93
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 43418787,
  "status": "passed"
});
formatter.after({
  "duration": 12727,
  "status": "passed"
});
formatter.before({
  "duration": 48032,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify make posts functionality_Negative_\"6\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@post2"
    },
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "set request body and send POST HTTP request with userId \"\" , id \"\" , title \"test6\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify response body from \"POST\" request with userId \"\" , id \"\" , title \"test6\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 351002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 88675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "test6",
      "offset": 76
    },
    {
      "val": "",
      "offset": 93
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 1063947295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 73895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 71432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "",
      "offset": 64
    },
    {
      "val": "test6",
      "offset": 75
    },
    {
      "val": "",
      "offset": 92
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 132026975,
  "status": "passed"
});
formatter.after({
  "duration": 15600,
  "status": "passed"
});
formatter.before({
  "duration": 1907318,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify make posts functionality_Negative_\"7\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-\"\u003ctype\u003e\";;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@post2"
    },
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "set request body and send POST HTTP request with userId \"\" , id \"\" , title \"\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify response body from \"POST\" request with userId \"\" , id \"\" , title \"\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 718426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 449119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "",
      "offset": 76
    },
    {
      "val": "",
      "offset": 88
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 854254785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 441729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 385076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "",
      "offset": 64
    },
    {
      "val": "",
      "offset": 75
    },
    {
      "val": "",
      "offset": 87
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 84534507,
  "status": "passed"
});
formatter.after({
  "duration": 385898,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "#this scenario is designed to fail"
    }
  ],
  "line": 43,
  "name": "Verify make posts functionality_Negative_NullContentType_\"\u003ctype\u003e\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@post3"
    },
    {
      "line": 42,
      "name": "@post"
    },
    {
      "line": 42,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "set request body and send POST HTTP request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "userId",
        "id",
        "title",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 49,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "8",
        "",
        "",
        "test8",
        "",
        "content-type",
        "",
        "201"
      ],
      "line": 50,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 170780,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify make posts functionality_Negative_NullContentType_\"8\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-nullcontenttype-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@post3"
    },
    {
      "line": 42,
      "name": "@sanity"
    },
    {
      "line": 42,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I Set header param request content type \"content-type\" as \"\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "set request body and send POST HTTP request with userId \"\" , id \"\" , title \"test8\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 418329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 126033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "test8",
      "offset": 76
    },
    {
      "val": "",
      "offset": 93
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 332118,
  "status": "passed"
});
formatter.after({
  "duration": 45158,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Verify make posts functionality_Negative_NullBody_\"\u003ctype\u003e\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-nullbody-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@post4"
    },
    {
      "line": 54,
      "name": "@post"
    },
    {
      "line": 54,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "set request body and send POST HTTP request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify response body from \"POST\" request with userId \"\u003cuserId\u003e\" , id \"\u003cid\u003e\" , title \"\u003ctitle\u003e\" and body \"\u003cbody\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "userId",
        "id",
        "title",
        "body",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 64,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "9",
        "",
        "",
        "",
        "",
        "content-type",
        "application/json",
        "201"
      ],
      "line": 65,
      "id": "post-on-social-network;verify-make-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27095,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify make posts functionality_Negative_NullBody_\"9\"",
  "description": "",
  "id": "post-on-social-network;verify-make-posts-functionality-negative-nullbody-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@post4"
    },
    {
      "line": 54,
      "name": "@sanity"
    },
    {
      "line": 54,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I Set post API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "set request body and send POST HTTP request with userId \"\" , id \"\" , title \"\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I receive valid HTTP response code \"201\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify response body from \"POST\" request with userId \"\" , id \"\" , title \"\" and body \"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_post_API_endpoint()"
});
formatter.result({
  "duration": 360855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 83748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 57
    },
    {
      "val": "",
      "offset": 65
    },
    {
      "val": "",
      "offset": 76
    },
    {
      "val": "",
      "offset": 88
    }
  ],
  "location": "SocialNetworkStepDefinition.set_request_body_and_send_POST_HTTP_request_with_userId_id_title_and_body(String,String,String,String)"
});
formatter.result({
  "duration": 790858010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 203622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 166265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 29
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "",
      "offset": 64
    },
    {
      "val": "",
      "offset": 75
    },
    {
      "val": "",
      "offset": 87
    }
  ],
  "location": "SocialNetworkStepDefinition.i_verify_response_body_from_request_with_userId_id_title_and_body(String,String,String,String,String)"
});
formatter.result({
  "duration": 50878512,
  "status": "passed"
});
formatter.after({
  "duration": 8210,
  "status": "passed"
});
formatter.uri("UsersSNetwork.feature");
formatter.feature({
  "line": 1,
  "name": "Users on social network",
  "description": "",
  "id": "users-on-social-network",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#Given I set Rest API url for social network"
    }
  ],
  "line": 7,
  "name": "Verify users on social networkPositveE2E_\"\u003ctype\u003e\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@user1"
    },
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 12,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the list of users",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 18,
      "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "1",
        "content-type",
        "application/json",
        "200"
      ],
      "line": 19,
      "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "2",
        "content-type",
        "application/json",
        "200"
      ],
      "line": 20,
      "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35306,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify users on social networkPositveE2E_\"1\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@user1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 12,
  "name": "I receive valid HTTP response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the list of users",
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_users_API_endpoint()"
});
formatter.result({
  "duration": 386308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 75948,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.send_request_to_get_the_list_of_users()"
});
formatter.result({
  "duration": 495011046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 80464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 82105,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_verify_the_list_of_users()"
});
formatter.result({
  "duration": 70188569,
  "status": "passed"
});
formatter.after({
  "duration": 12726,
  "status": "passed"
});
formatter.before({
  "duration": 37358,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify users on social networkPositveE2E_\"2\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-networkpositvee2e-\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@user1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 12,
  "name": "I receive valid HTTP response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the list of users",
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_users_API_endpoint()"
});
formatter.result({
  "duration": 249191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 71022,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.send_request_to_get_the_list_of_users()"
});
formatter.result({
  "duration": 419488472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 93190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 101811,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_verify_the_list_of_users()"
});
formatter.result({
  "duration": 43174523,
  "status": "passed"
});
formatter.after({
  "duration": 8211,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify users on social network_VerifyMetaData\"\u003ctype\u003e\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@user2"
    },
    {
      "line": 22,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 28,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify user metaData",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 34,
      "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "1",
        "content-type",
        "application/json",
        "200"
      ],
      "line": 35,
      "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "2",
        "content-type",
        "application/json",
        "200"
      ],
      "line": 36,
      "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25043,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify users on social network_VerifyMetaData\"1\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    },
    {
      "line": 22,
      "name": "@user2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 28,
  "name": "I receive valid HTTP response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify user metaData",
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_users_API_endpoint()"
});
formatter.result({
  "duration": 206907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 69379,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.send_request_to_get_the_list_of_users()"
});
formatter.result({
  "duration": 402380083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 86622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 124801,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_verify_user_metaData()"
});
formatter.result({
  "duration": 115977751,
  "status": "passed"
});
formatter.after({
  "duration": 12316,
  "status": "passed"
});
formatter.before({
  "duration": 30379,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify users on social network_VerifyMetaData\"2\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifymetadata\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@sanity"
    },
    {
      "line": 22,
      "name": "@user2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 28,
  "name": "I receive valid HTTP response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify user metaData",
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_users_API_endpoint()"
});
formatter.result({
  "duration": 316518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 73484,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.send_request_to_get_the_list_of_users()"
});
formatter.result({
  "duration": 412660552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 104685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 129728,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_verify_user_metaData()"
});
formatter.result({
  "duration": 48740066,
  "status": "passed"
});
formatter.after({
  "duration": 13958,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Verify users on social network_VerifyAddressDetails\"\u003ctype\u003e\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@user3"
    },
    {
      "line": 41,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I Set header param request content type \"\u003cContentType\u003e\" as \"\u003cContentTypeValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 47,
  "name": "I receive valid HTTP response code \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I receive valid content type \"\u003cContentTypeValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify user\u0027s address",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\";",
  "rows": [
    {
      "cells": [
        "type",
        "ContentType",
        "ContentTypeValue",
        "StatusCode"
      ],
      "line": 53,
      "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\";;1"
    },
    {
      "cells": [
        "1",
        "content-type",
        "application/json",
        "200"
      ],
      "line": 54,
      "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\";;2"
    },
    {
      "cells": [
        "2",
        "content-type",
        "application/json",
        "200"
      ],
      "line": 55,
      "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28737,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify users on social network_VerifyAddressDetails\"1\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@user3"
    },
    {
      "line": 41,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 47,
  "name": "I receive valid HTTP response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify user\u0027s address",
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_users_API_endpoint()"
});
formatter.result({
  "duration": 394108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 86622,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.send_request_to_get_the_list_of_users()"
});
formatter.result({
  "duration": 415594604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 105506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 96885,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_verify_user_s_address()"
});
formatter.result({
  "duration": 182134103,
  "status": "passed"
});
formatter.after({
  "duration": 9443,
  "status": "passed"
});
formatter.before({
  "duration": 22168,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Verify users on social network_VerifyAddressDetails\"2\"",
  "description": "",
  "id": "users-on-social-network;verify-users-on-social-network-verifyaddressdetails\"\u003ctype\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@user3"
    },
    {
      "line": 41,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I Set users API endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I Set header param request content type \"content-type\" as \"application/json\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "send request to get the list of users",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "#\tAnd set request body send and send POST HTTP request with postId \"\u003cpostId\u003e\" id \"\u003cid\u003e\" name \"\u003cname\u003e\" email\"\u003cemail\u003e\" body \"\u003cbody\u003e\""
    }
  ],
  "line": 47,
  "name": "I receive valid HTTP response code \"200\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I receive valid content type \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify user\u0027s address",
  "keyword": "And "
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_Set_users_API_endpoint()"
});
formatter.result({
  "duration": 320623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 41
    },
    {
      "val": "application/json",
      "offset": 59
    }
  ],
  "location": "SocialNetworkStepDefinition.i_Set_header_param_request_content_type_as(String,String)"
});
formatter.result({
  "duration": 73895,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.send_request_to_get_the_list_of_users()"
});
formatter.result({
  "duration": 413372000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_HTTP_response_code(String)"
});
formatter.result({
  "duration": 107149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "SocialNetworkStepDefinition.i_receive_valid_content_type(String)"
});
formatter.result({
  "duration": 837479,
  "status": "passed"
});
formatter.match({
  "location": "SocialNetworkStepDefinition.i_verify_user_s_address()"
});
formatter.result({
  "duration": 112431190,
  "status": "passed"
});
formatter.after({
  "duration": 22579,
  "status": "passed"
});
});