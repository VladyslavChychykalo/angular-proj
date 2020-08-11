import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../services/modal-service.service';

export interface Feedback {
  name: string;
  email: string;
  feedback: string;
  rate: string;
  id?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  feedbacks: Feedback[] = [
    {
      name: 'React',
      email: 'react@gmail.com',
      feedback: 'first framework',
      rate: '5',
      id: '1',
    },
    {
      name: 'Angular',
      email: 'angular@gmail.com',
      feedback: 'second framework',
      rate: '5',
      id: '2',
    },
  ];

  search: string = '';

  // isModalOpen = false;
  objForEditing = null;

  constructor(public appModaService: ModalServiceService) {}

  ngOnInit(): void {}

  addFeedback(userFeedback: Feedback) {
    this.feedbacks.unshift(userFeedback);
  }

  deleteFeedback(feedbackId: string) {
    this.feedbacks = this.feedbacks.filter((el) => el.id !== feedbackId);
  }
  editFeedback(feedback: Feedback) {
    this.objForEditing = feedback;
    // this.isModalOpen = true;
  }

  saveEditFeedback(editedFeedback: Feedback) {
    this.objForEditing = null;
    // this.isModalOpen = false;
    this.feedbacks = this.feedbacks.map((el) =>
      el.id === editedFeedback.id ? editedFeedback : el
    );
  }

  // onCloseModal() {
  //   this.isModalOpen;
  // }
}
