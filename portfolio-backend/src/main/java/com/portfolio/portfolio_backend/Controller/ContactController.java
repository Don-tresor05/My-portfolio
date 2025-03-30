package com.portfolio.portfolio_backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.portfolio_backend.Model.ContactMessage;
import com.portfolio.portfolio_backend.Service.EmailService;
@RestController
@RequestMapping("/api")
public class ContactController {
    
    @Autowired
    private EmailService emailService;
    
    @PostMapping("/contact")
    public ResponseEntity<String> submitContactForm(@RequestBody ContactMessage contactMessage) {
        try {
            emailService.sendContactMessage(contactMessage);
            return ResponseEntity.ok("Message sent successfully");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to send message: " + e.getMessage());
        }
    }
}