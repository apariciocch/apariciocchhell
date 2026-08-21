const experience = [
  {
    institution: 'Programa Integral Nacional para el Bienestar Familiar - INABIF, CAR Especializado San Ricardo',
    role: 'Tutor Académico y Personal de Atención Permanente',
    period: '2024 — 2025',
    description: 'Apoyo a la atención integral de usuarios, seguimiento académico y acompañamiento emocional en un entorno de protección y bienestar familiar.'
  },
  {
    institution: 'Universidad César Vallejo',
    role: 'Asesor Educativo de la Escuela de Posgrado',
    period: '2024',
    description: 'Orientación académica y acompañamiento a estudiantes en procesos de formación, gestión y atención de requerimientos institucionales.'
  },
  {
    institution: 'Colegio Saco Oliveros Helicoidal',
    role: 'Tutor Académico',
    period: '2023',
    description: 'Seguimiento del desempeño escolar, apoyo pedagógico y acompañamiento en el desarrollo socioemocional de estudiantes.'
  },
  {
    institution: 'Albatross Cloud S.A.C',
    role: 'Coordinador Administrativo / Documentación de manuales',
    period: '2015 — 2020',
    description: 'Gestión administrativa, soporte operativo y elaboración de documentación técnica para sistemas de gestión documental.'
  },
  {
    institution: 'Ministerio de Salud Central 113 Salud / Atento del Perú',
    role: 'Orientador Línea 113 Salud',
    period: '2021 — 2022',
    description: 'Atención telefónica orientada a la salud, consejería y canalización para mejorar la respuesta y el bienestar de los usuarios.'
  }
];

const services = [
  {
    icon: '◌',
    title: 'Evaluación psicológica y psicopedagógica',
    description: 'Identificación de fortalezas, dificultades y necesidades de apoyo en procesos de aprendizaje y desarrollo.'
  },
  {
    icon: '✦',
    title: 'Dificultades de aprendizaje',
    description: 'Acompañamiento en lectura, escritura, comprensión, atención y adaptación de estrategias de aprendizaje.'
  },
  {
    icon: '∎',
    title: 'Atención y funciones ejecutivas',
    description: 'Trabajo con organización, memoria, concentración, seguimiento y regulación emocional en contextos académicos.'
  },
  {
    icon: '◎',
    title: 'Orientación a padres y docentes',
    description: 'Consejería y estrategias para fortalecer la comunicación, comprensión y acompañamiento del proceso educativo.'
  },
  {
    icon: '↗',
    title: 'Intervención psicopedagógica',
    description: 'Diseño de apoyos personalizados para mejorar la comprensión, motivación y participación de estudiantes.'
  },
  {
    icon: '∴',
    title: 'Terapia y acompañamiento emocional',
    description: 'Apoyo en bienestar emocional, manejo de emociones e intervención en contextos de estrés y adaptación.'
  }
];

const education = [
  {
    title: 'Universidad de Huánuco',
    detail: 'Licenciado en Psicología',
    year: '2019'
  },
  {
    title: 'Curso de intervención especializada para la protección de niñas, niños y adolescentes',
    detail: 'Ministerio de la Mujer y Poblaciones Vulnerables',
    year: '48h'
  },
  {
    title: 'Terapia Cognitivo Conductual',
    detail: 'Escuela Americana de Innovación',
    year: '240h'
  },
  {
    title: 'Psicología Clínica',
    detail: 'Escuela Americana de Innovación',
    year: '240h'
  },
  {
    title: 'Comunicación efectiva y asertiva',
    detail: 'Escuela Americana de Innovación',
    year: '120h'
  }
];

const skillGroups = [
  {
    title: 'Evaluación y diagnóstico',
    items: ['Psicología clínica', 'Psicopedagogía', 'Atención a la diversidad', 'Seguimiento de casos']
  },
  {
    title: 'Educación y acompañamiento',
    items: ['Tutoría educativa', 'Orientación familiar', 'Apoyo escolar', 'Acompañamiento emocional']
  },
  {
    title: 'Investigación y metodologías',
    items: ['Análisis de información', 'Documentación', 'Métodos de apoyo', 'Gestión de proyectos']
  },
  {
    title: 'Herramientas y gestión',
    items: ['Excel', 'Word', 'PowerPoint', 'Canva', 'HTML/CSS', 'GitHub']
  }
];

const renderExperience = () => {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = experience.map(item => `
    <article class="timeline-item reveal">
      <div class="timeline-top">
        <h4>${item.institution}</h4>
        <span class="timeline-tags">${item.period}</span>
      </div>
      <p class="job-role">${item.role}</p>
      <p>${item.description}</p>
    </article>
  `).join('');
};

const renderServices = () => {
  const container = document.getElementById('services-list');
  if (!container) return;

  container.innerHTML = services.map(item => `
    <article class="card-item reveal">
      <div class="service-icon">${item.icon}</div>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </article>
  `).join('');
};

const renderEducation = () => {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = education.map(item => `
    <article class="education-item reveal">
      <div>
        <h4>${item.title}</h4>
        <p>${item.detail}</p>
      </div>
      <span class="year">${item.year}</span>
    </article>
  `).join('');
};

const renderSkills = () => {
  const container = document.getElementById('skills-list');
  if (!container) return;

  container.innerHTML = skillGroups.map(group => `
    <article class="skill-card reveal">
      <h4>${group.title}</h4>
      <ul>
        ${group.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `).join('');
};

const initNav = () => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelectorAll('.site-nav a');

  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
};

const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
};

const initActiveNav = () => {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.site-nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isCurrent);
      });
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
};

const initForm = () => {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const messageText = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !messageText) {
      formMessage.textContent = 'Por favor, completa todos los campos.';
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      formMessage.textContent = 'Ingresa un correo válido.';
      return;
    }

    formMessage.textContent = 'Gracias. Este formulario está preparado para conectarse con tu servicio de envío real.';
    form.reset();
  });
};

const initIntroLoader = () => {
  const loader = document.querySelector('.intro-loader');
  const hexagonPath = document.querySelector('#hexagon path');
  const letter = document.querySelector('#hexagon #A');
  if (!loader || !hexagonPath || !letter) return;

  const hideLoader = () => {
    if (window.anime) {
      const introAnimation = window.anime.timeline({
        loop: false,
        easing: 'easeInOutQuart'
      });

      introAnimation
        .add({
          targets: hexagonPath,
          strokeDashoffset: [window.anime.setDashoffset, 0],
          duration: 1600
        })
        .add({
          targets: letter,
          opacity: [0, 1],
          duration: 700,
          offset: '-=350'
        })
        .finished.then(() => {
          window.setTimeout(() => loader.classList.add('is-hidden'), 180);
        });
    } else {
      loader.classList.add('is-hidden');
    }
  };

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
  }
};

const initPhotoTilt = () => {
  const photo = document.querySelector('.portrait-slot');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!photo || reduceMotion) return;

  photo.addEventListener('pointermove', (event) => {
    const bounds = photo.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 7;

    photo.style.setProperty('--photo-x', `${rotateX}deg`);
    photo.style.setProperty('--photo-y', `${rotateY}deg`);
    photo.style.setProperty('--mouse-x', `${x * 100}%`);
    photo.style.setProperty('--mouse-y', `${y * 100}%`);
  });

  photo.addEventListener('pointerleave', () => {
    photo.style.setProperty('--photo-x', '0deg');
    photo.style.setProperty('--photo-y', '0deg');
  });
};

const renderYear = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

renderExperience();
renderServices();
renderEducation();
renderSkills();
renderYear();
initNav();
initReveal();
initActiveNav();
initForm();
initIntroLoader();
initPhotoTilt();

