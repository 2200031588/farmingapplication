package com.klef.jfsd.springboot.service;

import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Farmer;

@Service
public interface FarmerService {

	public String farmerRegistration(Farmer farmer);
	public Farmer checkFarmerLogin(String name,String password);
	
}
