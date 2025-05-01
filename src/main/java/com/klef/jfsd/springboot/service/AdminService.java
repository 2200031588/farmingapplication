package com.klef.jfsd.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Admin;
import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.model.Farmer;

@Service
public interface AdminService {

	public List<Customer> viewAllCustomers();
	public Admin checkAdminLogin(String uname,String pwd);
	public long customercount();
	public List<Farmer> viewAllFarmers();
	public long farmercount();
}
