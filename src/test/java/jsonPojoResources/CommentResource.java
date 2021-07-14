package jsonPojoResources;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public final class CommentResource {
	 private final String postId;
	  private final String id;
	  private final String name;
	  private final String email;	  
	  private final String body;
	    

	    public CommentResource(String postId, String id, String name, String email, String body) {
	        this.postId = postId;
	        this.id = id;
	        this.name = name;
	        this.email = email;
	        this.body = body;
	    }

	    public String toStringJson() {
//	        return new GsonBuilder().create().toJson(this);
	        System.out.println(new Gson().toJson(this));    
	        return new Gson().toJson(this);

	    }
	
}