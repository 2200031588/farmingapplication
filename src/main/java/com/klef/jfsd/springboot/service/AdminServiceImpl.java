package com.klef.jfsd.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Admin;
import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.model.Farmer;
import com.klef.jfsd.springboot.repository.AdminRepository;
import com.klef.jfsd.springboot.repository.CustomerRepository;
import com.klef.jfsd.springboot.repository.FarmerRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private CustomerRepository customerRepostitory;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private FarmerRepository farmerRepository;
	
	@Override
	public List<Customer> viewAllCustomers() {
		return customerRepostitory.findAll();
	}

	@Override
	public Admin checkAdminLogin(String uname, String pwd) {
		// TODO Auto-generated method stub
		return adminRepository.checkAdminLogin(uname, pwd);
	}

	@Override
	public long customercount() {
		return customerRepostitory.count();
		}

	@Override
	public List<Farmer> viewAllFarmers() {
		return farmerRepository.findAll();
	}

	@Override
	public long farmercount() {
		return farmerRepository.count();
	}
	
}
