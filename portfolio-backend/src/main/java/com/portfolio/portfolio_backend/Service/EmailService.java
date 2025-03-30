package com.portfolio.portfolio_backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.portfolio.portfolio_backend.Model.ContactMessage;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${app.owner.email}")
    private String ownerEmail;
    
    public void sendContactMessage(ContactMessage contactMessage) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(ownerEmail);
        message.setSubject("New Contact Form Submission");
        message.setText("You received a new message from: " + contactMessage.getEmail() + "\n\n" + contactMessage.getMessage());
        
        mailSender.send(message);
    }
}