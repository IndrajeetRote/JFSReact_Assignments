 package com.shruti.spring.jwt.mongodb.models;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User {
  @Id
  private String id;
  private String fullName;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;
  
  private String mobile;
  private String dateOfBirth;
  private String gender;
 
  @NotBlank
  @Size(max = 120)
  private String password;
 

  @DBRef
  private Set<Role> roles = new HashSet<>();

  public User() {
  }

 

  public User(@NotBlank @Size(max=20) String fullName,@NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 50) @Email String email,
		String mobile, String dateOfBirth, String gender, @NotBlank @Size(max = 120) String password) {
	super();
	this.fullName=fullName;
	this.username = username;
	this.email = email;
	this.mobile = mobile;
	this.dateOfBirth = dateOfBirth;
	this.gender = gender;
	this.password = password;
	
}



public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }
  
  

  public String getFullName() {
	return fullName;
}



public void setFullName(String fullName) {
	this.fullName = fullName;
}



public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
  
  
 
public String getMobile() {
	return mobile;
}



public void setMobile(String mobile) {
	this.mobile = mobile;
}



public String getDateOfBirth() {
	return dateOfBirth;
}



public void setDateOfBirth(String dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}



public String getGender() {
	return gender;
}



public void setGender(String gender) {
	this.gender = gender;
}



public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }



public Set<Role> getRoles() {
	return roles;
}



public void setRoles(Set<Role> roles) {
	this.roles = roles;
}




  
//
//  public Set<Role> getRoles() {
//    return roles;
//  }
//
//  public void setRoles(Set<Role> roles) {
//    this.roles = roles;
//  }
}
