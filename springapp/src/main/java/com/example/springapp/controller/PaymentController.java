package com.example.springapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Paymentmodel;
import com.example.springapp.service.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentController {
	private final PaymentService paymentService;
	
	public PaymentController(PaymentService paymentService) {
		super();
		this.paymentService = paymentService;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/save")
	public ResponseEntity<Paymentmodel> savepay(@RequestBody Paymentmodel paymentmodel)
	{
		Paymentmodel createpayment = paymentService.saveCourseUser(paymentmodel);
		return new ResponseEntity<>(createpayment,HttpStatus.CREATED);
	}
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get")
	public ResponseEntity<List<Paymentmodel>> getallthepayment()
	{
		return new ResponseEntity<>(paymentService.getPayements(),HttpStatus.OK);
	}

	
	
	@CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update/{id}")
    public ResponseEntity<Paymentmodel> updatePayment(@PathVariable Long id, @RequestBody Paymentmodel paymentmodel) {
        Paymentmodel updatedPayment = paymentService.updatePayment(id, paymentmodel);
        if (updatedPayment != null) {
            return ResponseEntity.ok(updatedPayment);
        }
        return ResponseEntity.notFound().build();
    }
	
	   @CrossOrigin(origins = "http://localhost:3000")
	    @DeleteMapping("/delete/{id}") // Implement the delete mapping
	    public ResponseEntity<String> deletePayment(@PathVariable Long id) {
	        boolean deleted = paymentService.deletePayment(id);
	        if (deleted) {
	            return ResponseEntity.ok("Payment record with ID: " + id + " has been deleted.");
	        }
	        return ResponseEntity.notFound().build();
	    }
	
	
	
	
	
}
