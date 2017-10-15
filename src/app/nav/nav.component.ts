import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	// navlinks = ['Home', "Section 1", "Section 2", "Section 3", "Section 4", "Section 5"
	// ];

	navlinks = [
		{title: 'Home', src: "http://google.com"},
		{ title: 'Section 1', src: "http://google.com" },
		{ title: 'Section 3', src: "http://google.com" },
		{ title: 'Section 4', src: "http://google.com" },
		{ title: 'Section 5', src: "http://google.com" },
	];
  constructor() { }

  ngOnInit() {
  }

}
