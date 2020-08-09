import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  HostListener,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalServiceService } from '../../services/modal-service.service';
import { Feedback } from '../home.component';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent implements OnInit {
  @Input() editId: Feedback;
  @Output() onEditSave: EventEmitter<Feedback> = new EventEmitter<Feedback>();

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code !== `Escape`) return;

    this.appModalService.onCloseModal();
  }

  form: FormGroup;

  constructor(public appModalService: ModalServiceService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.editId.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      email: new FormControl(this.editId.email, [
        Validators.required,
        Validators.email,
      ]),
      feedback: new FormControl(this.editId.feedback, Validators.required),
      rate: new FormControl(this.editId.rate),
    });
  }

  onSaveEditFeedback() {
    if (this.form.valid) {
      const formData = { ...this.form.value, id: this.editId.id };

      this.onEditSave.emit(formData);

      console.log(formData);
      this.form.reset();
    }
  }
}
