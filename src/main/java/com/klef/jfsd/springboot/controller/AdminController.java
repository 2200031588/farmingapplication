package com.klef.jfsd.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.klef.jfsd.springboot.model.Admin;
import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.model.Farmer;
import com.klef.jfsd.springboot.service.AdminService;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("adminlogin")
	public ModelAndView adminlogin() {
		ModelAndView mv= new ModelAndView();
		mv.setViewName("adminlogin");
		return mv;
	}
	
	@GetMapping("adminhome")
	public ModelAndView adminhome() {
		
		ModelAndView mv= new ModelAndView("adminhome");
		
		long count = adminService.customercount();
		mv.addObject("count",count);
		
		return mv;
	}
	
	@PostMapping("checkadminlogin")
	public ModelAndView checkadminlogin(
			@RequestParam("auname") String auname, 
			@RequestParam("apwd") String apwd,
			HttpServletRequest request) {
		
		ModelAndView mv = new ModelAndView();
		
		Admin admin = adminService.checkAdminLogin(auname, apwd);
		
		if(admin != null) {
			mv.setViewName("adminhome");  // login success
			
			long count = adminService.customercount();
			mv.addObject("count", count);
		} else {
			mv.setViewName("adminloginfail");
			mv.addObject("message", "Login Failed");
		}
		return mv;
	}
	
	@GetMapping("viewallcustomers")
	public ModelAndView viewallcustomers(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("viewallcustomers");
		
		long count = adminService.customercount();
		mv.addObject("count",count);
		
		List<Customer> customers = adminService.viewAllCustomers();
		mv.addObject("customerlist",customers);
		
		
		return mv;
	}
	
	@GetMapping("viewallfarmers")
	public ModelAndView viewallfarmers() {
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("viewallfarmers");

	    long count = adminService.farmercount();  // Call the service method to get the total count of farmers
	    mv.addObject("count", count);

	    List<Farmer> farmers = adminService.viewAllFarmers();  // Call the service method to get the list of all farmers
	    mv.addObject("farmerlist", farmers);

	    return mv;
	}
}
