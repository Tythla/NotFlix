import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  faqs = [
    {
      question: 'What is Notflix?',
      answer:
        "Notflix is a knock-off of Netflix, a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      show: false,
    },
    {
      question: 'How much does Notflix cost?',
      answer:
        'Watch Notflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts.',
      show: false,
    },
    {
      question: 'Where can I watch?',
      answer:
        "Watch anywhere, anytime. Sign in with your Notflix account to watch instantly on the web at notflix.com from your personal computer or on any internet-connected device that offers the Notflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Notflix with you anywhere.",
      show: false,
    },
    {
      question: 'How do I cancel?',
      answer:
        'You can cancel your Netflix subscription at any time through your account settings on the Netflix website.',
      show: false,
    },
    {
      question: 'What can I watch on Notflix?',
      answer:
        'Notflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Notflix originals, and more. Watch as much as you want, anytime you want.',
      show: false,
    },
    {
      question: 'Is Notflix good for kids?',
      answer:
        "The Notflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      show: false,
    },
  ];

  toggleAnswer(faq: any) {
    faq.show = !faq.show;
  }
}
