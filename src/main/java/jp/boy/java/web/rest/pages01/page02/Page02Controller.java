package jp.boy.java.web.rest.pages01.page02;

import io.github.jhipster.web.util.ResponseUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * コントローラ　 {@link Page02Response}用.
 */
@RestController
@RequestMapping("/api/pages01/page02")
public class Page02Controller {

    private final Page02Service page02Service;

    public Page02Controller(Page02Service page02Service) {
        this.page02Service = page02Service;
    }

    /**
     * {@code GET  /page02/:id} : get an {@link Page02Response} by id.
     *
     * @param id the id of the entity to get.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the {@link Page02Response} in body, or status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id:.+}")
    public ResponseEntity<Page02Response> get(@PathVariable Long id) {
        return ResponseUtil.wrapOrNotFound(page02Service.find(id));
    }

}
