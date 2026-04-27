import { Component } from '@angular/core';

interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly links: ContactLink[] = [
    {
      icon: '@',
      label: 'EMAIL',
      value: 'jeroavila0@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jeroavila0@gmail.com',
      color: 'var(--green)',
    },
    {
      icon: 'in',
      label: 'LINKEDIN',
      value: 'Jerónimo Ávila Sanguino',
      href: 'https://www.linkedin.com/in/jer%C3%B3nimo-avila-sanguino-784524379',
      color: 'var(--blue)',
    },
    {
      icon: '{}',
      label: 'GITHUB',
      value: 'github.com/Jeronimo765',
      href: 'https://github.com/Jeronimo765',
      color: 'var(--purple)',
    },
    {
      icon: 'B1',
      label: 'CERTIFICADO INGLÉS',
      value: 'American School Way — B1',
      href: 'assets/Certificado-Ingles-B1-Jeronimo-Avila-Sanguino.pdf',
      color: 'var(--amber)',
    },
    {
      icon: 'SN',
      label: 'TÉCNICO SENA',
      value: 'Programación de Software — 2024',
      href: 'assets/Tecnico-En-programacion.pdf',
      color: 'var(--green)',
    },
  ];
}
