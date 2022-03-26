import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contac-create',
  templateUrl: './contac-create.component.html',
  styleUrls: ['./contac-create.component.css']
})
export class ContacCreateComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private contactsService: ContactsService, private router: Router) { }

  createContact(): void {
    this.contactsService.createContact(this.contactForm.value).subscribe(contact => {
      this.router.navigate(['/contacts']);
    });
  }
}
