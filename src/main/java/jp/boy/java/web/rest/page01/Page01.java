package jp.boy.java.web.rest.page01;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Page01 {

    private String value;

    Page01(String value) {
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
