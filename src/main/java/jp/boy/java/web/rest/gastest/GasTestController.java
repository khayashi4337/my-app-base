package jp.boy.java.web.rest.gastest;

import io.github.jhipster.web.util.ResponseUtil;
import jp.boy.java.web.rest.page01.Page01Response;
import jp.boy.java.web.rest.page01.Page01Service;

import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * コントローラ　 {@link Page01Response}用.
 */
@RestController
@RequestMapping("/api")
public class GasTestController {

    private final Page01Service page01Service;

    public GasTestController(Page01Service page01Service) {
        this.page01Service = page01Service;
    }

    /**
     * {@code GET  /page01/:id} : get an {@link Page01Response} by id.
     *
     * @param id the id of the entity to get.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the {@link Page01Response} in body, or status {@code 404 (Not Found)}.
     */
    @PostMapping("/gastest")
    public void post(@RequestBody Param param) {
        System.out.println(param);
    }

//    function myFunction() {
//    	  var web_url = "https://localhost:8080";
//    	  var uri = "/api/gastest/";
//    	  var options = {
//    	   "text" : "post"
//    	  };
//    	  var response = UrlFetchApp.fetch(
//    	    web_url + uri,
//    	    {
//    	        method: "POST",
//    	        contentType: "application/json",
//    	        payload: JSON.stringify(options),
//    	        muteHttpExceptions: true,
//    	    }
//    	  );
//    	  
//    	}
    
}
