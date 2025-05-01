package com.klef.jfsd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Product;
import com.klef.jfsd.springboot.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public String addProduct(Product product) {
        // Save the product to the repository
        productRepository.save(product);
        
        // Return a success message after saving the product
        return "Product Added Successfully";
    }
}
