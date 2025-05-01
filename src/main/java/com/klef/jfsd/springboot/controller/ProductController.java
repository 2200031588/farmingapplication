package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.klef.jfsd.springboot.model.Product;
import com.klef.jfsd.springboot.service.CustomerService;
import com.klef.jfsd.springboot.service.ProductService;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;
	
	
}
