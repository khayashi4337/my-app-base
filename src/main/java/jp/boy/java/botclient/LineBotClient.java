package jp.boy.java.botclient;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.linecorp.bot.model.PushMessage;
import com.linecorp.bot.model.action.Action;
import com.linecorp.bot.model.action.MessageAction;
import com.linecorp.bot.model.message.Message;
import com.linecorp.bot.model.message.TemplateMessage;
import com.linecorp.bot.model.message.TextMessage;
import com.linecorp.bot.model.message.template.ButtonsTemplate;
import com.linecorp.bot.model.message.template.CarouselColumn;
import com.linecorp.bot.model.message.template.CarouselTemplate;
import com.linecorp.bot.model.message.template.ConfirmTemplate;
import com.linecorp.bot.model.message.template.Template;
import com.linecorp.bot.model.response.BotApiResponse;

import jp.boy.java.common.BaseAppException;





/**
 * Lineにメッセージを送るLineBot
 * @author kh
 */
public class LineBotClient {
	public final LineChannel lineChannel;
	public final LineUserId lineUserID;
	
	public LineBotClient(LineChannel lineChannel, LineUserId userID) {
		this.lineChannel = lineChannel;
		this.lineUserID = userID;
	}

	/**
	 * メッセージ送る
	 * @param message
	 */
	public BotApiResponse sendMessage(Message message) {
		final PushMessage pushMessage = new PushMessage(lineUserID.getValue(), message);

		try {
			return lineChannel.getLineMessagingClient().pushMessage(pushMessage).get();
		} catch (InterruptedException | ExecutionException e) {
			throw new BaseAppException(e);
		}
	}
	
	/**
	 * テキストメッセージを送る
	 * @param message
	 * @return
	 */
	public BotApiResponse sendTextMessage(String message) {
		TextMessage textMessage = new TextMessage(message);
		return sendMessage( textMessage);
	}
	
	private void addMessageAction(List<Action> actions, String labeText) {
    	Action action = new MessageAction(labeText, labeText);
    	actions.add(action);
	}
	private void addMessageAction(List<Action> actions, String label, String text) {
    	Action action = new MessageAction(label, text);
    	actions.add(action);
	}	
	
	/**
	 * 予約時間選択メッセージ
	 * @return BotApiResponse型のレスポンス
	 */
	public BotApiResponse sendButtonsMessage() {
		String altText = "予約時間選択";

		URI thumbnailImageUrl = null;
		String title = "予約時間を選んでください";
        String  text = "営業時間は２３：００までの受付までとなります。";
        
        List<Action> actions = new ArrayList<>();
        addMessageAction(actions, "PM 6:00");
        addMessageAction(actions, "PM 6:30");
        addMessageAction(actions, "PM 7:00");
		
		Template template = new ButtonsTemplate(
				thumbnailImageUrl,
				title,
				text,
				actions
				);
		TemplateMessage templateMessage = new TemplateMessage(altText, template);
		return sendMessage(templateMessage);
	}
	
	private URI buildURI(String address) {
		try {
			return new URI(address);
		} catch (URISyntaxException e) {
			return null;
		}
	}
	
	public BotApiResponse sendCarouselMessage() {
		
		List<CarouselColumn> columns = new ArrayList<>();
		// カラム1
		{
			URI thumbnailImageUrl= buildURI("https://vos.line-scdn.net/bot-designer-template-images/reservation/pasta.jpeg");
			
			String title = "                     Pasta";
			String text = "        メニューを下記から選んでください";
			List<Action> actions = new ArrayList<>();
			addMessageAction(actions, "Tomato Pasta");
			addMessageAction(actions, "Olive Pasta");
			CarouselColumn carouselColumn = new CarouselColumn(thumbnailImageUrl, title, text, actions);
			columns.add(carouselColumn);
		}
		// カラム2
		{
			URI thumbnailImageUrl=null;
			try {
				thumbnailImageUrl = new URI("https://vos.line-scdn.net/bot-designer-template-images/reservation/pizza.jpeg");
			} catch (URISyntaxException e) {
				e.printStackTrace();
			}
			String title = "                     Pasta";
			String text = "        メニューを下記から選んでください";
			List<Action> actions = new ArrayList<>();
			addMessageAction(actions, "Super Supreme Pizza");
			addMessageAction(actions, "Peperoni");
			CarouselColumn carouselColumn = new CarouselColumn(thumbnailImageUrl, title, text, actions);
			columns.add(carouselColumn);
		}
		// カラム3
		{
			URI thumbnailImageUrl=null;
			try {
				thumbnailImageUrl = new URI("https://vos.line-scdn.net/bot-designer-template-images/reservation/steak.jpeg");
			} catch (URISyntaxException e) {
				e.printStackTrace();
			}
			String title = "                     Steak";
			String text = "        メニューを下記から選んでください";
			List<Action> actions = new ArrayList<>();
			addMessageAction(actions, "T-Bone Steak");
			addMessageAction(actions, "Ribeye Steak");
			CarouselColumn carouselColumn = new CarouselColumn(thumbnailImageUrl, title, text, actions);
			columns.add(carouselColumn);
		}

		Template template = new CarouselTemplate( columns);
		
		String altText = "コースメニュー選択";
		TemplateMessage templateMessage = new TemplateMessage(altText, template);
		return sendMessage(templateMessage);
	}

	/**
	 * 確認ダイアログ形式
	 */
	public BotApiResponse sendConfirmMessage() {
		
		String text = "確認ダイアログ";
		List<Action> actions = new ArrayList<>();
		addMessageAction(actions, "Yes");		
		addMessageAction(actions, "No");		
		
		Template template = new ConfirmTemplate(text,	 actions);
		
		String altText = "確認";
		TemplateMessage templateMessage = new TemplateMessage(altText, template);
		return sendMessage(templateMessage);
		
	}
	
	
	
}
