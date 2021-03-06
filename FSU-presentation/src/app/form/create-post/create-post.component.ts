import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostsService } from "../posts.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {};

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  };
}
 //add ability to capture line breaks (hitting the enter button)
