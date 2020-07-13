package jp.boy.java.web.rest.pages01.page02;

import io.github.jhipster.config.JHipsterProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Page02のサービスです。
 * <p>
 */
@Service
@Transactional
public class Page02Service {

    private final Logger log = LoggerFactory.getLogger(Page02Service.class);

    private final JHipsterProperties jHipsterProperties;


    public Page02Service(JHipsterProperties jhipsterProperties) {

        this.jHipsterProperties = jhipsterProperties;
    }

    @Transactional(readOnly = true)
    public Optional<Page02Response> find(Long id) {
        Page02Response page02Response = new Page02Response(id + "");
        return Optional.of(page02Response);
    }
}
