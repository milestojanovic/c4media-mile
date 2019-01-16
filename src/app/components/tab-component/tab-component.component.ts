import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.scss']
})
export class TabComponentComponent implements OnInit {
  tabs = [
    {
      link: 'https://www.infoq.com/about-infoq',
      title: 'InfoQ Reader',
      subtitle: 'learn about InfoQ',
      image: 'InfoQ.svg',
      icon: 'lnr-arrow-right',
      openlink: '_blank'
    },
    {
      link: 'https://qconferences.com',
      title: 'QCon Attendee / Speaker',
      subtitle: 'learn about InfoQ',
      image: 'qcon.svg',
      icon: 'lnr-arrow-right',
      openlink: '_blank'
    },
    {
      link: '/src/assets/files/TheInfoQeMag-QCon.pdf',
      title: 'QCon Exhibitor / InfoQ Advertiser',
      subtitle: 'download file',
      image: 'icon-file.png',
      icon: 'lnr-download',
      openlink: '_blank'
    },
    {
      link: '/career',
      title: 'Careers',
      subtitle: 'learn about InfoQ',
      image: 'logo-black.png',
      icon: 'lnr-arrow-right'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
