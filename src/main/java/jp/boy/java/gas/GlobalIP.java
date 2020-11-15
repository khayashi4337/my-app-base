package jp.boy.java.gas;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.URL;
import java.util.Enumeration;

import jp.boy.java.common.BaseAppException;

/**
 * GlobalIPアドレス
 * 
 * @author khayashi4337
 */
public class GlobalIP {
	// グローバルIPアドレスのみを返すサーバー
	private static final URL GLOBAL_IP_RETURN_URL = buildUrl("http://icanhazip.com/");	
	// URLを作成
	private static URL buildUrl(String url) {
		try {
			return new URL(url);
		} catch (MalformedURLException e) {
			throw new BaseAppException(e);
		}	
	}
	
	// IPアドレスを文字列で保持
	public final String value;

	/**
	 * コンストラクタ
	 */
	public GlobalIP() {
		try {
			checkInternetConnection();
		} catch (SocketException e) {
			// ネットワークインタフェースを持っていない場合
			throw new BaseAppException("インターネットの接続がありません。");
		}
		// ネットワークインタフェースを持っている場合
		try {
			this.value = readIP();
		} catch (IOException e) {
			throw new BaseAppException(e);
		}
	}

	/**
	 * 実行しているPCが、ループバックではないネットワークインタフェースを持っているかどうか
	 * 
	 * @return true: 持っている / false: 持っていない
	 * @throws SocketException
	 */
	public boolean checkInternetConnection() throws SocketException {
		Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
		while (interfaces.hasMoreElements()) {
			NetworkInterface networkInterface = (NetworkInterface) interfaces.nextElement();
			if (networkInterface.isUp() && !networkInterface.isLoopback()) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 外部のグローバルIPを返してくれるサーバに接続してIPアドレスを取得する
	 * @return
	 * @throws MalformedURLException
	 * @throws IOException
	 */
	public String readIP() throws MalformedURLException, IOException {
		// グローバルIPアドレスのみを返すサーバー
		BufferedReader in = new BufferedReader(new InputStreamReader(GLOBAL_IP_RETURN_URL.openStream()));
		return in.readLine();
	}
}
