package com.Samartha.webServices.services;


import java.util.List;

import com.Samartha.webServices.Entity.Contact;

public interface ContactService {
    Contact saveContact(Contact contact);
    List<Contact> getAllContacts();
    Contact getContactById(Long id);
    void deleteContact(Long id);
}
