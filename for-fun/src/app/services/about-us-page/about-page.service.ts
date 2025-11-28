import { Injectable } from '@angular/core';

export interface memberType {
    id: string,
    userId: string,
    fullName: string,
    picture: string,
    course: 'Computer Science',
    role: 'Full-Stack Developer',
    gitHub: string,
    linkedIn: string
}

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {
  members : memberType[] = [
    {
      id: '1',
      userId: 'u1',
      fullName: 'Boitumelo Mkhwanazi',
      picture: 'team-member.png',
      course: 'Computer Science',
      role: 'Full-Stack Developer',
      gitHub: 'https://github.com/Boitumelo-Mkhwanazi',
      linkedIn: 'https://www.linkedin.com/in/buti-donovan-mkhwanazi-729144339'
    },
    {
       id: '2',
      userId: 'u2',
      fullName: 'Sinenhlanhla Ntombela',
      picture: 'team-member.png',
      course: 'Computer Science',
      role: 'Full-Stack Developer',
      gitHub: 'https://github.com/heis-sn3',
      linkedIn: 'https://www.linkedin.com/in/sne-cs'
    },
    {
      id: '3',
      userId: 'u3',
      fullName: 'Tony Lapuken',
      picture: 'team-member.png',
      course: 'Computer Science',
      role: 'Full-Stack Developer',
      gitHub: 'https://github.com/Chipomachava',
      linkedIn: 'https://www.linkedin.com/in/chipo-machava-257558245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
  ]


  constructor() { }
}
