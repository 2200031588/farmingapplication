package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.klef.jfsd.springboot.model.Farmer;
import com.klef.jfsd.springboot.model.Product;
import com.klef.jfsd.springboot.service.FarmerService;
import com.klef.jfsd.springboot.service.ProductService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class FarmerController {
	
	@Autowired
	private FarmerService farmerService;
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("farmerreg")
	public ModelAndView farmerrreg() {
		ModelAndView mv= new ModelAndView();
		mv.setViewName("farmerreg");
		return mv;
	}
	
	@PostMapping("insertfarmer")
	@ResponseBody
	public ModelAndView insertFarmer(@RequestParam("fname") String name,
									  @RequestParam("femail") String email,
									  @RequestParam("fpwd") String password,
									  @RequestParam("fstate") String state,
									  @RequestParam("fcity") String city,
									  @RequestParam("ftown") String town,
									  @RequestParam("fvillage") String village,
									  @RequestParam("fmobile") String mobile) {
	    Farmer farmer = new Farmer();
	    farmer.setName(name);
	    farmer.setEmail(email);
	    farmer.setPassword(password);
	    farmer.setState(state);
	    farmer.setCity(city);
	    farmer.setTown(town);
	    farmer.setVillage(village);
	    farmer.setMobile(mobile);
	    
	    String message = farmerService.farmerRegistration(farmer);
	    
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("fregsuccess");
	    mv.addObject("message", message);
	    
	    return mv;
	}

	
	@GetMapping("farmerlogin")
	public ModelAndView farmerlogin() {
		ModelAndView mv= new ModelAndView();
		mv.setViewName("farmerlogin");
		return mv;
	}
	
	
	@PostMapping("checkfarmerlogin")
	@ResponseBody
	public ModelAndView checkcustomerlogin(@RequestParam("fname") String fname, 
										   @RequestParam("fpwd") String fpwd,
										   HttpServletRequest request) {
		
		ModelAndView mv = new ModelAndView();
		
		Farmer farmer =  farmerService.checkFarmerLogin(fname, fpwd);
		
		if(farmer != null) {
			HttpSession session = request.getSession();
			session.setAttribute("farmer", farmer);
			mv.setViewName("farmerhome");  //login success
		} else {
			mv.setViewName("farmerlogin");
			mv.addObject("message","Login Failed");
		}
		return mv;
	}
	
	@GetMapping("farmerprofile")
	public ModelAndView farmerprofile() {
		ModelAndView mv= new ModelAndView();
		mv.setViewName("farmerprofile");
		return mv;
	}
	
	@GetMapping("/addproduct")
	public String showAddProductForm() {
		return "addproduct"; // Return the JSP form for adding a product
	}

    @PostMapping("/addproduct")
    @ResponseBody
    public ModelAndView addProduct(@RequestParam("name") String name,
                                   @RequestParam("description") String description,
                                   @RequestParam("price") String price,
                                   @RequestParam("category") String category) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setCategory(category);

        String message = productService.addProduct(product);

        ModelAndView mv = new ModelAndView();
        mv.setViewName("addproduct");
        mv.addObject("message", message);
        return mv;
    }
}
