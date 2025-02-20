package com.Samartha.webServices.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Samartha.webServices.Dao.ContactRepository;
import com.Samartha.webServices.Entity.Contact;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Contact getContactById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
