package com.Samartha.webServices.Dao;

import com.Samartha.webServices.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Additional query methods can be defined here if needed
}
