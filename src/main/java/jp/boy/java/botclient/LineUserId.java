package jp.boy.java.botclient;

/**
 * ラインのユーザID
 * @author kh
 *
 */
public class LineUserId {
	private final String userId;
	
	public LineUserId( String userId) {
		this.userId = userId;
	}
	
	public String getValue() {
		return userId;
	}
}
