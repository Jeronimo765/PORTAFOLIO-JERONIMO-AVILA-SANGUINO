import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import {
    Experience, Education, Certification,
    Skill, TechPill, FloatingBadge,
} from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

    readonly floatingBadges: FloatingBadge[] = [
        { label: 'Angular', position: 'top-right' },
        { label: 'Node.js', position: 'bottom-right' },
        { label: 'JavaScript', position: 'bottom-left' },
        { label: 'HTML & CSS', position: 'top-left' },
        { label: 'Inglés B1', position: 'top' },
        { label: 'Fullstack Dev', position: 'bottom' },
    ];

    readonly techPills: TechPill[] = [
        { name: 'Angular 17', color: '#00ff87' },
        { name: 'TypeScript', color: '#00ff87' },
        { name: 'JavaScript', color: '#00ff87' },
        { name: 'Node.js', color: '#00ff87' },
        { name: 'Express', color: '#00ff87' },
        { name: 'HTML5', color: '#00ff87' },
        { name: 'CSS3', color: '#00ff87' },
        { name: 'PostgreSQL', color: '#00ff87' },
        { name: 'SQL', color: '#00ff87' },
        { name: 'REST API', color: '#00ff87' },
        { name: 'Git', color: '#00ff87' },
        { name: 'GitHub', color: '#00ff87' },
        { name: 'SCSS', color: '#00ff87' },
        { name: 'TMDB API', color: '#00ff87' },
        { name: 'SENA Técnico', color: '#00ff87' },
    ];

    readonly stats = [
        { value: 1, label: 'Año estudiando' },
        { value: 5, label: 'Proyectos' },
        { value: 8, label: 'Tecnologías' },
        { value: 2, label: 'Certificaciones' },
    ];

    readonly frontendSkills: Skill[] = [
        { name: 'HTML & CSS', level: 85, category: 'frontend', color: '#e34f26' },
        { name: 'JavaScript', level: 78, category: 'frontend', color: '#f7df1e' },
        { name: 'TypeScript', level: 65, category: 'frontend', color: '#4f8ef7' },
        { name: 'Angular 17', level: 60, category: 'frontend', color: '#dd0031' },
    ];

    readonly backendSkills: Skill[] = [
        { name: 'Node.js', level: 72, category: 'backend', color: '#00ff87' },
        { name: 'Express', level: 70, category: 'backend', color: '#00d68f' },
        { name: 'REST APIs', level: 75, category: 'backend', color: '#06b6d4' },
        { name: 'SQL / PostgreSQL', level: 65, category: 'backend', color: '#ec4899' },
    ];

    readonly otherSkills: string[] = [
        'Git', 'GitHub', 'VS Code', 'Postman',
        'SCSS', 'TMDB API', 'Responsive Design',
        'Validaciones Backend', 'Bases de Datos Relacionales',
    ];

    readonly projects: Project[] = [
        {
            id: 1,
            title: 'TMDB Movies & Series',
            description: 'Aplicación web que consume la API de TMDB para explorar películas y series. Desarrollada con JavaScript, HTML y CSS con consumo completo de la API incluyendo búsqueda, categorías y detalles.',
            tags: [
                { label: 'JavaScript', type: 'frontend' },
                { label: 'HTML & CSS', type: 'frontend' },
                { label: 'TMDB API', type: 'api' },
                { label: 'REST API', type: 'api' },
            ],
            githubUrl: 'https://github.com/Jeronimo765',
            liveUrl: 'https://jeronimo765.github.io/API-TMDB-CHERNOBYL/',
            gradient: 'linear-gradient(135deg,#01d277,#032541,#0d253f)',
            featured: true,
        },
        {
            id: 2,
            title: 'REST API con Node.js',
            description: 'API RESTful desarrollada con Node.js y Express aplicando buenas prácticas de desarrollo backend, validaciones y manejo de rutas estructuradas.',
            tags: [
                { label: 'Node.js', type: 'backend' },
                { label: 'Express', type: 'backend' },
                { label: 'REST API', type: 'api' },
                { label: 'SQL', type: 'database' },
            ],
            githubUrl: 'https://github.com/Jeronimo765',
            liveUrl: 'https://github.com/Jeronimo765',
            gradient: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
        },
        {
            id: 3,
            title: 'Nutrex',
            description: 'Plataforma web de nutrición inteligente con planes personalizados, chatbot con IA, seguimiento de comidas, análisis de alimentos por texto e imagen y recetas saludables.',
            tags: [
                { label: 'Angular 17', type: 'frontend' },
                { label: 'Spring Boot 3', type: 'backend' },
                { label: 'FastAPI', type: 'api' },
                { label: 'Gemini API', type: 'api' },
                { label: 'MySQL', type: 'database' },
                { label: 'Docker', type: 'backend' },
            ],
            githubUrl: 'https://github.com/Jeronimo765',
            liveUrl: 'https://proyecto-nutrex.vercel.app/',
            gradient: 'linear-gradient(135deg,#fff9f0,#f7f4e8,#eff6e8)',
            imageUrl: 'assets/Logo-Nutrex.png',
            featured: true,
        },
    ];

    readonly experiences: Experience[] = [
        {
            id: 1,
            role: 'Bachiller Académico',
            company: 'Institución Educativa Roman Maria Valencia',
            period: 'Graduado · 29/11/2024 · Colombia',
            description: 'Graduado como bachiller con enfoque en ciencias y tecnología, base fundamental para el desarrollo en el campo del software.',
        },
        {
            id: 2,
            role: 'Técnico en Programación de Software',
            company: 'SENA — Servicio Nacional de Aprendizaje',
            period: 'Graduado · 22/11/2024 · Colombia',
            description: 'Formación técnica en programación de software con conocimientos en desarrollo web, bases de datos y construcción de aplicaciones. Proyecto final con tecnologías actuales.',
        },
    ];

    readonly education: Education = {
        degree: 'Técnico en Programación de Software',
        institution: 'SENA',
        period: 'Graduado 2024',
    };

    readonly certifications: Certification[] = [
        {
            name: 'Programación de Software',
            issuer: 'SENA',
            year: '2024',
            icon: 'S',
            href: 'assets/Tecnico-En-programacion.pdf',
        },
        {
            name: 'Certificado de Inglés B1',
            issuer: 'American School Way',
            year: '2025',
            icon: 'B1',
            href: 'assets/Certificado-Ingles-B1-Jeronimo-Avila-Sanguino.pdf',
        },
    ];
}
