package com.klef.jfsd.springboot.service;

import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Farmer;
import com.klef.jfsd.springboot.model.Product;

@Service
public interface ProductService {
	public String addProduct(Product product);
}
