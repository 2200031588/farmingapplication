package com.klef.jfsd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.model.Farmer;
import com.klef.jfsd.springboot.repository.FarmerRepository;

@Service
public class FarmerServiceImpl implements FarmerService {

	@Autowired
	private FarmerRepository farmerRepository;
	
	@Override
	public String farmerRegistration(Farmer farmer) {
		farmerRepository.save(farmer);
		return "Customer Registered Successfully";
	}

	@Override
	public Farmer checkFarmerLogin(String name, String password) {
		return farmerRepository.checkFarmerLogin(name, password);
	}

}
