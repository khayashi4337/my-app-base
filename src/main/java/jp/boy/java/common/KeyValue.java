package jp.boy.java.common;

import com.google.gson.Gson;

/**
 * KeyValue
 * @author khayashi4337
 */
public class KeyValue {
	public final String key;
	public final String value;
	
	public KeyValue(String key, String value) {
		this.key = key;
		this.value = value;
	}
	
	public Json toJson() {
		Gson gson = new Gson();
		String json = gson.toJson(this);
		return new Json(json);		
	}
}
