package jp.boy.java.gas;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import jp.boy.java.common.BaseAppException;
import jp.boy.java.common.LineList;

/**
 * POST用のコネクション
 * 
 * @author khayashi4337
 */
public class PostConnection implements AutoCloseable {

	public final HttpURLConnection postHttpURLConnection;

	/**
	 * コンストラクタ
	 */
	public PostConnection(URL url) {
		try {
			this.postHttpURLConnection = (HttpURLConnection) url.openConnection();
		} catch (IOException e) {
			throw new BaseAppException(e);
		}
		// HTTPリクエストコード
		postHttpURLConnection.setDoOutput(true);
		try {
			postHttpURLConnection.setRequestMethod("POST");
		} catch (ProtocolException e) {
			throw new BaseAppException(e);
		}
		postHttpURLConnection.setRequestProperty("Accept-Language", "jp");
		// データがJSONであること、エンコードを指定する
		postHttpURLConnection.setRequestProperty("Content-Type", "application/JSON; charset=utf-8");
	}

	/**
	 * 
	 * @param url
	 * @return
	 */
	public static URL buildUrl(String url) {
		try {
			return new URL(url);
		} catch (MalformedURLException e) {
			throw new BaseAppException(e);
		}
	}


	@Override
	public void close() throws Exception {
		System.out.println("自動的にclose");
		this.postHttpURLConnection.disconnect();
	}

	/**
	 * Jsonを設定します。
	 * 
	 * @param json
	 */
	public void setJson(Json json) {
		// POSTデータの長さを設定
		postHttpURLConnection.setRequestProperty("Content-Length", String.valueOf(json.value.length()));
		// リクエストのbodyにJSON文字列を書き込む
		OutputStreamWriter out;
		try {
			out = new OutputStreamWriter(postHttpURLConnection.getOutputStream());
			out.write(json.value);
			out.flush();
		} catch (IOException e) {
			throw new BaseAppException(e);
		}
	}

	public int connect() throws IOException {
		postHttpURLConnection.connect();
		return postHttpURLConnection.getResponseCode();
	}

	/**
	 * 内容を取得します。
	 * 
	 * @return
	 */
	public LineList readAll() {
		LineList lineList = new LineList();

		InputStream in;
		try {
			in = postHttpURLConnection.getInputStream();
		} catch (IOException e) {
			throw new BaseAppException(e);
		}
		String encoding = postHttpURLConnection.getContentEncoding();
		if (null == encoding) {
			encoding = "UTF-8";
		}

		InputStreamReader inReader;
		try {
			inReader = new InputStreamReader(in, encoding);
		} catch (UnsupportedEncodingException e) {
			throw new BaseAppException(e);
		}
		final BufferedReader bufReader = new BufferedReader(inReader);
		String line = null;
		// 1行ずつテキストを読み込む
		try {
			while ((line = bufReader.readLine()) != null) {
				lineList.add(line);
			}
			bufReader.close();
			inReader.close();
			in.close();
		} catch (IOException e) {
			throw new BaseAppException(e);
		}

		return lineList;
	}

	/**
	 * JSON文字列の送信
	 * 
	 * @param strPostUrl 送信先URL
	 * @param JSON       送信するJSON文字列
	 * @return
	 */
	public String callPost(Json json) {
		setJson(json);
		// HTTPレスポンスコード
		int status;
		try {
			status = connect();
			if (status == HttpURLConnection.HTTP_OK) {
				// 通信に成功した
				// テキストを取得する
				LineList result = readAll();
				return result.join("\n");
			} else {
				throw new BaseAppException("httpResponseCode: " + status);
			}
		} catch (IOException e) {
			throw new BaseAppException(e);
		}
	}
}
