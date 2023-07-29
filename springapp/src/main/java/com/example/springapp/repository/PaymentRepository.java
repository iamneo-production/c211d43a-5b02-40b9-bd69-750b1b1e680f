package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.Paymentmodel;
@Repository
public interface PaymentRepository extends JpaRepository<Paymentmodel, Long> {

	  Paymentmodel findByUserId(Long userId);
 
}




