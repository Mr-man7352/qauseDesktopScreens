import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundraising',
  templateUrl: './fundraising.component.html',
  styleUrls: ['./fundraising.component.scss'],
})
export class FundraisingComponent implements OnInit {
  ngo = '6238ac7a26f691ac36df3b01';
  fundraisingData: any;
  isReadMore = true;
  isInputVisible = false;
  constructor() {}

  ngOnInit(): void {}

  showText() {
    this.isReadMore = !this.isReadMore;
  }
  otherAmount() {
    this.isInputVisible = true;
  }
}
