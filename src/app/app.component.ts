import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

// Interfaces
interface Skill {
  name: string;
  level: number;
}

interface Language {
  name: string;
  level: number;
}

interface Experience {
  year: string;
  title: string;
  company: string;
  role: string;
  responsibilities: string[];
}

interface Education {
  year: string;
  institution: string;
  course: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = signal('Fabian Rieral Portfolio');
  isLoading = signal(true);

  // Datos del portfolio
  personalInfo = signal({
    name: 'FABIAN RIERAL CONDORI LLANOS',
    title: '• Técnico Superior en Informática • Especialista en Ciberseguridad •',
    phone: '+59168453672',
    email: 'condorillanosfabianrieral@gmail.com'
  });

  profileDescription = signal(`
    Técnico Superior en Informática especializado en <strong>ciberseguridad</strong> y <strong>desarrollo web frontend</strong>. 
    Experto en análisis de vulnerabilidades, desarrollo con <strong>React</strong>, y administración de sistemas <strong>Linux</strong>. 
    Experiencia práctica como consultor de seguridad informática en <strong>AGETIC</strong> con sólida formación en 
    <strong>ethical hacking</strong> y <strong>penetration testing</strong>.
  `);

  skills = signal<Skill[]>([
    { name: 'C++', level: 3 },
    { name: 'HTML5', level: 4 },
    { name: 'CSS', level: 4 },
    { name: 'JAVASCRIPT', level: 3 },
    { name: 'LINUX', level: 4 },
    { name: 'SQL', level: 3 },
    { name: 'Adobe Photoshop', level: 3 },
    { name: 'Adobe Illustrator', level: 3 },
    { name: 'Trabajo en Equipo', level: 5 },
    { name: 'Atención a los detalles', level: 5 },
    { name: 'Redes', level: 5 }
  ]);

  languages = signal<Language[]>([
    { name: 'Español', level: 5 },
    { name: 'Inglés', level: 2 },
    { name: 'Quechua', level: 2 }
  ]);

  experiences = signal<Experience[]>([
    {
      year: '2023-2024',
      title: 'Consultor de Seguridad Informática',
      company: 'AGETIC',
      role: 'Consultor en línea como Técnico en Análisis de vulnerabilidades informáticas II.',
      responsibilities: [
        'Evaluación de sistemas informáticos externos.',
        'Evaluación de sistemas informáticos internos.',
        'Recopilación de Datos',
        'Reconocimiento de subdominios.',
        'Documentación y mitigación de vulnerabilidades informáticas.'
      ]
    },
    {
      year: '2023',
      title: 'Pasantía de Seguridad Informática',
      company: 'AGETIC',
      role: 'Pasante de Informática T.S.',
      responsibilities: [
        'Evaluación de sistemas informáticos',
        'Recopilación de Datos',
        'Reconocimiento de subdominios'
      ]
    },
    {
      year: '2022',
      title: 'Desarrollador Frontend',
      company: 'PIAR Bolivia',
      role: 'Pasante de Informática T.S. - Desarrollo Web',
      responsibilities: [
        'Programación con metodología de SCRUM',
        'Desarrollo web Frontend con tecnologías modernas',
        'Programación con React'
      ]
    },
    {
      year: '2022',
      title: 'Soporte Técnico TI',
      company: 'SEDES Chuquisaca',
      role: 'Pasante de Informática T.S.',
      responsibilities: [
        'Instalación de sistemas de salud.',
        'Instalación de impresoras.',
        'Mantenimiento lógico de Hardware.',
        'Revisión y detección de incidencias en la plataforma de comunicación.',
        'Mantenimiento de redes informáticas.',
        'Elaboración de credenciales institucionales.',
        'Otras actividades correspondientes a Informática (programación).'
      ]
    }
  ]);

  education = signal<Education[]>([
    {
      year: '2025',
      institution: 'Universidad Adventista de Bolivia',
      course: 'Programa complementario de ingeniería de sistemas octavo semestre'
    },
    {
      year: '2024',
      institution: 'eJPT - Junior Penetration Tester (INE)',
      course: 'Certificación Internacional en Pentesting'
    },
    {
      year: '2024',
      institution: 'INE Certified Cloud Associate (ICCA)',
      course: 'Certificación en Cloud Computing'
    },
    {
      year: '2024',
      institution: 'Gestión de Incidentes y Superficie de Exposición',
      course: 'Ruta Esencial de Gestión de incidentes - Evaluación de la superficie de exposición'
    },
    {
      year: '2023',
      institution: 'Ethical Hacking Avanzado',
      course: 'Hands-on JavaScript for Ethical Hacking - Top 5 Tools & Tricks for Ethical Hacking & Bug Bounties'
    },
    {
      year: '2023',
      institution: 'Cisco Networking Academy',
      course: 'CCNAv7: Introduction to Networks - Introducción a la Ciberseguridad'
    },
    {
      year: '2023',
      institution: 'Diplomado FULLSTACK',
      course: 'Diplomado en FULLSTACK (Vue, Node, React, Django, Dockers)'
    },
    {
      year: '2022',
      institution: 'Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca',
      course: 'Técnico Superior en Informática - Graduado'
    },
    {
      year: '2020-2021',
      institution: 'Certificaciones Especializadas',
      course: 'Cisco Cybersecurity Essentials - Google Actívate Desarrollo Web - NEUROLAB PRO Hacking Ético - Reparación de Computadoras y Cámaras de Seguridad'
    }
  ]);

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setupSEO();
    this.simulateLoading();
  }

  private setupSEO(): void {
    const personalInfo = this.personalInfo();
    this.titleService.setTitle(`${personalInfo.name} - Técnico Superior Informática | Cybersecurity Expert Bolivia`);
    
    this.metaService.updateTag({
      name: 'description',
      content: `${personalInfo.name} - Técnico Superior en Informática especializado en ciberseguridad, desarrollo web frontend con React, análisis de vulnerabilidades y administración Linux.`
    });
  }

  private simulateLoading(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  getStars(level: number): boolean[] {
    return Array.from({ length: 5 }, (_, index) => index < level);
  }

  onPhoneClick(): void {
    window.location.href = `tel:${this.personalInfo().phone}`;
  }

  onEmailClick(): void {
    window.location.href = `mailto:${this.personalInfo().email}`;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}