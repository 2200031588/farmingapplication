package com.klef.jfsd.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="farmer_table")
public class Farmer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="farmer_id")
	private long id;
	
	@Column(name="farmer_name",nullable = false,length=100)
	private String name;
	
	@Column(name="farmer_email",nullable = false,length=100)
	private String email;
	
	@Column(name="farmer_password",nullable = false,length=100)
	private String password;
	
	@Column(name="farmer_state",nullable = false,length=100)
	private String state;
	
	@Column(name="farmer_city",nullable = false,length=100)
    private String city;
	
	@Column(name="farmer_town",nullable = false,length=100)
	private String town;
	
	@Column(name="farmer_village",nullable = false,length=100)
	private String village;
	
	@Column(name="farmer_mobile",nullable = false,unique=true,length=20)
	private String mobile;
	
	
    public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
}
