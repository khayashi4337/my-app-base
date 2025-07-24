package jp.boy.java.common;

import java.util.ArrayList;

/**
 * 文字行のリスト
 * @author khayashi4337
 */
@SuppressWarnings("serial")
public class LineList extends ArrayList<String> {

	public String join(String delimiter) {
		StringBuilder sb = new StringBuilder();
		boolean isFirst = true;
		for (String line: this) {
			if (isFirst) {
				sb.append(line);
				isFirst = false;
			} else {
				sb.append(delimiter);
				sb.append(line);
			}
		}
		return sb.toString();
	}

}
