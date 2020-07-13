package jp.boy.java.web.rest.page01;

import io.github.jhipster.config.JHipsterProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service for managing audit events.
 * <p>
 * This is the default implementation to support SpringBoot Actuator {@code Page01Repository}.
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
    public Optional<Page01> find(Long id) {
        Page01 page01 = new Page01(id + "");
        return Optional.of(page01);
    }
}
