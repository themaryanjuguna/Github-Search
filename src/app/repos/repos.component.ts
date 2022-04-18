import { Component, OnInit } from '@angular/core';
import { Details } from '../github-class/details';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  details:Details[] = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
