import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feedback } from '../home.component';
import { ModalServiceService } from '../../services/modal-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() feedback: Feedback;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<Feedback> = new EventEmitter<Feedback>();

  constructor(public appModalService: ModalServiceService) {}

  ngOnInit(): void {}

  onDeleteFeedback() {
    this.onDelete.emit(this.feedback.id);
  }

  onEditFeedback() {
    this.onEdit.emit(this.feedback);
  }
}
