import { Component } from '@angular/core';
import { FormService, Message } from "../../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name = ''
  email = ''
  message = ''
  isSubmitted = false
  messages: Message[] = []

  constructor(private formService: FormService) {
    this.messages = this.formService.getAll()
    this.isSubmitted = this.messages.length > 0
  }

  onSubmit() {
    this.isSubmitted = true
    this.formService.insert({
      name: this.name,
      email: this.email,
      message: this.message
    })
  }

  deleteMessage(index: number) {
    this.formService.delete(index)
  }
}
