import { InteractivityChecker } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Contact {
  id: number,
  name: string,
  phone: string
}

const urlBase = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  listarContacts() {
    return this.http.get<Contact[]>(`${urlBase}/contacts?_sort=name`);
  }

  retriveContact(id: number) {
    return this.http.get<Contact>(`${urlBase}/contacts/${id}`);
  }

  createContact(contact: Contact) {
    return this.http.post<Contact>(`${urlBase}/contacts`, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put<Contact>(`${urlBase}/contacts/${contact.id}`, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(`${urlBase}/contacts/${id}`);
  }
}
