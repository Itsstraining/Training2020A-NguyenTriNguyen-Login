import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/login.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(public authService: AuthService,
    public router: Router
    ) { }

  ngOnInit(): void {
  }

}
