package jp.boy.java;

import java.io.File;
import java.util.List;
import java.util.stream.Collectors;

import com.moandjiezana.toml.Toml;

import jp.boy.java.botclient.LineBotClient;
import jp.boy.java.botclient.LineChannel;
import jp.boy.java.botclient.LineUserId;
import jp.boy.java.domain.Staff;

/**
 * Line端末にメッセージを送る練習用クラス
 * @author khayashi4337
 */
public class LineClientSampleMain {
	public static int STAFF_HAYASHI = 0;
	public static int STAFF_HYONJIN = 2;
	public static void main(String[] args) {
		LineClientSampleMain instance = new LineClientSampleMain();
		instance.run(args);
	}

	private void run(String[] args) {
		// セキュリティの都合上token.toml をリポジトリに格納できないのですが、サンプルを掲載します。
		// とりあえず最初のスタッフを自分として、テストするとよいと思います。
		// 配置場所　プロジェクト直下
		//		channelToken = "abc"
		//				  
		//				[[staff]]
		//				    name="name1"
		//				    lineUserId="uid1"
		//				[[staff]]
		//				    name="name2"
		//				    lineUserId="uid2"
		
		File file = new File("token.toml");
		Toml toml = new Toml().read(file);
		String channelToken = toml.getString("channelToken");
		List<Staff> staffList = toml.getTables("staff").stream().map(x -> x.to(Staff.class)).collect(Collectors.toList());
		
		LineChannel lineChannel = new LineChannel(channelToken);
		
		Staff staff = staffList.get(STAFF_HAYASHI);
		// Staff staff = staffList.get(STAFF_HYONJIN);
		System.out.println("staff name:" + staff.name);
		LineBotClient lineBotClient = new LineBotClient(lineChannel, new LineUserId(staff.lineUserId));
	
		// テキストメッセージのサンプル
		{
			// String message = "予約が入りました";
			// String message = "予約の人数は？";
			
			//		String message = "Welcome to the LINE restaurant !\nEnter the reservation date.\n( Ex. 180121 )\n";
			//		lineBotClient.sendTextMessage(message);
		}
		
		//  ボタンのテンプレートのサンプル
		// lineBotClient.sendButtonsMessage();
		
		// カルーセルのテンプレートのサンプル
		// lineBotClient.sendCarouselMessage();

		// 確認ボタンのテンプレートのサンプル
		lineBotClient.sendConfirmMessage();
		
	}
}
