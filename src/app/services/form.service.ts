import { Injectable } from '@angular/core';

export interface Message {
  name: string
  email: string
  message: string
}
@Injectable()
export class FormService {
  messages: Message[] = []

  constructor() {
    this.init()
  }

  init() {
    this.insert(
      {
        name: 'John Doe',
        email: 'doe@gmail.com',
        message: 'Im John Doe'
      })
    this.insert(
      {
        name: 'Martin',
        email: 'martin@gmail.com',
        message: 'Im Martin'
      }
    )
  }

  getAll() {
    return this.messages
  }

  insert(message: Message) {
    this.messages.push(message)
  }

  delete(index: number) {
    this.messages.splice(index, 1)
  }
}
