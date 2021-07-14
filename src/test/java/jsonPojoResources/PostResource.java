package jsonPojoResources;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

//import com.google.gson.GsonBuilder;

public class PostResource {

	  private final String userId;
	  private final String id;
	  private final String title;	  
	  private final String body;
	    

	    public PostResource(String userId, String id, String title, String body) {
	        this.userId = userId;
	        this.id = id;
	        this.title = title;
	        this.body = body;
	    }

	    public String toStringJson() {
//	        return new GsonBuilder().create().toJson(this);
	        System.out.println(new Gson().toJson(this));    
	        return new Gson().toJson(this);

	    }
	
}
