
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
    </ul>

    `


})
export class CoursesComponent {
    title = "List of courses";
    courses = ["courses1", "courses2", "courses3"];
}
