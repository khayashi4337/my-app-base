package jp.boy.java.gas;

import java.net.InetAddress;

import javax.xml.bind.DatatypeConverter;

/**
 * ローカルIPアドレス
 * @author khayashi4337
 */
public class LocalIpAddress {
	public final InetAddress inetAddress;
	
	public LocalIpAddress(InetAddress inetAddress) {
		this.inetAddress = inetAddress;
	}
	
	/**
	 * 標準出力に出力
	 * @param message
	 */
	private void p(String message) {
		System.out.println(message);
	}

	public void dump() {
			p("getCanonicalHostName: " + inetAddress.getCanonicalHostName());
			p("getHostAddress: " + inetAddress.getHostAddress());
			p("getHostName: " + inetAddress.getHostName());
//			p("hashCode: " + inetAddress.hashCode());
//			p("toString: " + inetAddress.toString());

			String hexString = DatatypeConverter.printHexBinary(inetAddress.getAddress());
			p("getAddress: " + hexString);

//			p("isAnyLocalAddress: " + inetAddress.isAnyLocalAddress());
//			p("isLinkLocalAddress: " + inetAddress.isLinkLocalAddress());
//			p("isLoopbackAddress: " + inetAddress.isLoopbackAddress());
//			p("isMCGlobal: " + inetAddress.isMCGlobal());
//			p("isMCLinkLocal: " + inetAddress.isMCLinkLocal());
//			p("isMCNodeLocal: " + inetAddress.isMCNodeLocal());
//			p("isMCOrgLocal: " + inetAddress.isMCOrgLocal());
//			p("isMCSiteLocal: " + inetAddress.isMCSiteLocal());
//			p("isMulticastAddress: " + inetAddress.isMulticastAddress());
//			p("isSiteLocalAddress: " + inetAddress.isSiteLocalAddress());
	}
}
