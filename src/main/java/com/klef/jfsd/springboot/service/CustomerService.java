package com.klef.jfsd.springboot.service;

import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Customer;

@Service
public interface CustomerService {

	public String customerRegistration(Customer customer);
	public Customer checkCustomerLogin(String email,String password);

}
