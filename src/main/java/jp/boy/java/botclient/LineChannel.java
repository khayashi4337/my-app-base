package jp.boy.java.botclient;

import com.linecorp.bot.client.LineMessagingClient;

/**
 * ラインのチャンネル
 * @author kh
 *
 */
public class LineChannel {

	private final String channelToken;
	private final LineMessagingClient client;
	
	public LineChannel(String channelToken) {
		this.channelToken = channelToken;
		this.client = LineMessagingClient.builder(channelToken).build();
	}
	
	public String getChannelToken() {
		return channelToken;
	}
	
	public LineMessagingClient getLineMessagingClient() {
		return client;
	}
}
