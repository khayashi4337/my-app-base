package jp.boy.java.common;

/**
 * アプリケーションの例外クラス
 * @author khayashi4337
 */
public class BaseAppException extends RuntimeException{
	public final Exception e;
	public BaseAppException(Exception e) {
		this.e = e;
	}
	
	public BaseAppException(String message) {
		this(new Exception(message));
	}
}
