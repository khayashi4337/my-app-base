package jp.boy.java.gas;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.Enumeration;

/**
 * ローカルIPアドレスリスト
 * @author khayashi4337
 */
@SuppressWarnings("serial")
public class LocalIpAddressList extends ArrayList<LocalIpAddress> {
	/**
	 * コンストラクタ
	 */
	public LocalIpAddressList() {
		Enumeration<NetworkInterface> networkInterfaces;
		try {
			networkInterfaces = NetworkInterface.getNetworkInterfaces();
			while (networkInterfaces.hasMoreElements()) {
				NetworkInterface networkInterface = networkInterfaces.nextElement();
				Enumeration<InetAddress> inetAddresses = networkInterface.getInetAddresses();
				while (inetAddresses.hasMoreElements()) {
					InetAddress inetAddress = inetAddresses.nextElement();
					if (inetAddress.isSiteLocalAddress()) {
						add(new LocalIpAddress(inetAddress));
					}
				}
			}
		} catch (SocketException e) {
			e.printStackTrace();
		}
	}

	public void dump() {
		for (LocalIpAddress localIpAddress : this) {
			System.out.println("-----");
			localIpAddress.dump();
		}
	}

}
