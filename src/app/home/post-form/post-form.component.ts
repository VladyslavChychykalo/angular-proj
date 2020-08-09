import shortid from 'shortid';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Feedback } from '../home.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  form: FormGroup;

  @Output() onAdd: EventEmitter<Feedback> = new EventEmitter<Feedback>();

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      feedback: new FormControl('', Validators.required),
      rate: new FormControl(''),
    });
  }

  onAddFeedback() {
    if (this.form.valid) {
      const formData = { ...this.form.value, id: shortid.generate() };

      this.onAdd.emit(formData);

      console.log(formData);
      this.form.reset();
    }
  }
}
