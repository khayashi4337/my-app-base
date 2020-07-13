package jp.boy.java.web.rest.pages01.page02;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Page02のレスポンスです。
 */
public class Page02Response {

    private String value;

    Page02Response(String value) {
        this.value = value;
    }

    @JsonProperty("value")
    String getValue() {
        return value;
    }

    void setValue(String value) {
        this.value = value;
    }
}
