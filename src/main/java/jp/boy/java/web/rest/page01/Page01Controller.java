package jp.boy.java.web.rest.page01;

import io.github.jhipster.web.util.ResponseUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * コントローラ　 {@link Page01Response}用.
 */
@RestController
@RequestMapping("/api/page01")
public class Page01Controller {

    private final Page01Service page01Service;

    public Page01Controller(Page01Service page01Service) {
        this.page01Service = page01Service;
    }

    /**
     * {@code GET  /page01/:id} : get an {@link Page01Response} by id.
     *
     * @param id the id of the entity to get.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the {@link Page01Response} in body, or status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id:.+}")
    public ResponseEntity<Page01Response> get(@PathVariable Long id) {
        return ResponseUtil.wrapOrNotFound(page01Service.find(id));
    }

}
