package com.example.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springapp.model.Paymentmodel;
import com.example.springapp.repository.PaymentRepository;

@Service
public class PaymentService {

	private final PaymentRepository paymentRepository;

	public PaymentService(PaymentRepository paymentRepository) {
		super();
		this.paymentRepository = paymentRepository;
	}
	
	
	
	




	public Paymentmodel saveCourseUser(Paymentmodel Pay)
	{
		return paymentRepository.save(Pay);
	}
	
	public List<Paymentmodel> getPayements()
	{
		return paymentRepository.findAll();
	}
	
	
	 public Paymentmodel updatePayment(Long id, Paymentmodel updatedPaymentModel) {
	        Paymentmodel existingPaymentModel = paymentRepository.findByUserId(id);
	        if (existingPaymentModel != null) {
	            existingPaymentModel.setUserId(updatedPaymentModel.getUserId());
	            existingPaymentModel.setAllCourseId(updatedPaymentModel.getAllCourseId());
	            return paymentRepository.save(existingPaymentModel);
	        }
	        return null;
	    }
	 
	 
	 

	    public boolean deletePayment(Long id) {
	        Paymentmodel paymentToDelete = paymentRepository.findByUserId(id);
	        if (paymentToDelete != null) {
	            paymentRepository.delete(paymentToDelete);
	            return true;
	        }
	        return false;
	    }
	 
	 
	 
	 
	 
	
}
