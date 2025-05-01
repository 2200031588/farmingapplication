package com.klef.jfsd.springboot.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.service.CustomerService;

@Controller
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("home");
        return mv;
    }

    @GetMapping("customerreg")
    public ModelAndView customerreg() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("customerreg");
        return mv;
    }

    @PostMapping("insertcustomer")
    public ModelAndView insertcustomer(
            @RequestParam("cname") String name,
            @RequestParam("cemail") String email,
            @RequestParam("ccontact") String contact,
            @RequestParam("cpwd") String password) {

        Customer customer = new Customer();
        customer.setName(name);
        customer.setEmail(email);
        customer.setMobile(contact);
        customer.setPassword(password);

        String message = customerService.customerRegistration(customer);

        ModelAndView mv = new ModelAndView();
        mv.setViewName("regsuccess");
        mv.addObject("message", message);

        return mv;
    }

    @GetMapping("customerlogin")
    public ModelAndView customerlogin() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("customerlogin");
        return mv;
    }

    @GetMapping("customerhome")
    public ModelAndView customerhome() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("customerhome");
        return mv;
    }

    @GetMapping("customerprofile")
    public ModelAndView customerprofile() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("customerprofile");
        return mv;
    }

    @PostMapping("checkcustomerlogin")
    @ResponseBody
    public Map<String, Object> checkCustomerLogin(
            @RequestParam("cemail") String cemail,
            @RequestParam("cpwd") String cpwd) {

        Customer customer = customerService.checkCustomerLogin(cemail, cpwd);
        Map<String, Object> response = new HashMap<>();

        if (customer != null) {
            response.put("success", true);
            response.put("message", "Login successful");
        } else {
            response.put("success", false);
            response.put("message", "Invalid credentials");
        }

        return response;
    }

    @GetMapping("customerlogout")
    public ModelAndView customerlogout() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("customerlogin");
        return mv;
    }
}
