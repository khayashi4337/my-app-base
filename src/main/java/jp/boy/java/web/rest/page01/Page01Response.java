package jp.boy.java.web.rest.page01;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Page01のレスポンスです。
 */
public class Page01Response {

    private String value;

    Page01Response(String value) {
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
