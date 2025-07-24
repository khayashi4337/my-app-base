package jp.boy.java;

import java.io.File;
import java.net.URL;

import com.moandjiezana.toml.Toml;

import jp.boy.java.common.KeyValue;
import jp.boy.java.common.BaseAppException;
import jp.boy.java.gas.GlobalIP;
import jp.boy.java.gas.PostConnection;

/**
 * Google Action Scriptに自身のグローバルIPアドレスをJSON形式で送信
 * @author khayashi4337
 */
public class SendGlobalIpMain {
	public static void main(String[] args) {
		File file = new File("token.toml");
		Toml toml = new Toml().read(file);
		
		// GASのURLを変数に入れる
		URL gasUrl = PostConnection.buildUrl( toml.getString("gas_url"));
		// GASにpost通信する
		try (PostConnection postConnection = new PostConnection(gasUrl)) {
			GlobalIP globalIP = new GlobalIP();
			KeyValue keyValue = new KeyValue("myIp", globalIP.value);
			postConnection.callPost(keyValue.toJson());
			System.out.println("globalIP: " + globalIP.value + " 送信完了");
		} catch (Exception e) {
			throw new BaseAppException(e);
		}
	}
}
