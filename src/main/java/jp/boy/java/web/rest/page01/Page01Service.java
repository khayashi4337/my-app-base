package jp.boy.java.web.rest.page01;

import io.github.jhipster.config.JHipsterProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Page01のサービスです。
 * <p>
 */
@Service
@Transactional
public class Page01Service {

    private final Logger log = LoggerFactory.getLogger(Page01Service.class);

    private final JHipsterProperties jHipsterProperties;


    public Page01Service(JHipsterProperties jhipsterProperties) {

        this.jHipsterProperties = jhipsterProperties;
    }

    @Transactional(readOnly = true)
    public Optional<Page01Response> find(Long id) {
        Page01Response page01Response = new Page01Response(id + "");
        return Optional.of(page01Response);
    }
}
