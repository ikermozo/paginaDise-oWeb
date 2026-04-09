/**
 * PRÁCTICA 13 — Integración de contenidos interactivos
 * Módulo: DAW M09 · Unidad 4
 *
 * Bloques:
 *   A — Chart.js: gráfico de barras/líneas "Mercado en Cifras"
 *   B — Anime.js: staggering de tarjetas/testimonios + micro-interacciones
 *   C — Canvas API: partículas doradas con atracción al cursor (hero bg)
 *   D — IIFE: todo el código encapsulado, sin contaminar el scope global
 */
(function () {
    'use strict';

    /* =========================================================
       BLOQUE A — GRÁFICO CHART.JS
       Sección anclada: #p13-estadisticas (insertada tras #proceso)
       ========================================================= */

    const CHART_DATA = {
        labels: ['T1 2023', 'T2 2023', 'T3 2023', 'T4 2023',
            'T1 2024', 'T2 2024', 'T3 2024', 'T4 2024'],
        datasets: [
            {
                label: 'Compras',
                data: [38, 45, 52, 41, 50, 58, 63, 55],
                backgroundColor: 'rgba(212, 175, 55, 0.80)',
                borderColor: '#D4AF37',
                borderWidth: 2,
                borderRadius: 6,
                pointBackgroundColor: '#D4AF37',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Ventas',
                data: [29, 35, 40, 32, 44, 51, 47, 49],
                backgroundColor: 'rgba(1, 31, 62, 0.75)',
                borderColor: '#011f3e',
                borderWidth: 2,
                borderRadius: 6,
                pointBackgroundColor: '#011f3e',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Inversiones',
                data: [14, 18, 22, 17, 26, 30, 28, 33],
                backgroundColor: 'rgba(90, 108, 125, 0.70)',
                borderColor: '#5A6C7D',
                borderWidth: 2,
                borderRadius: 6,
                pointBackgroundColor: '#5A6C7D',
                tension: 0.4,
                fill: false
            }
        ]
    };

    let momentumChart = null;
    let currentChartType = 'bar';

    function buildChartOptions(type) {
        return {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#011f3e',
                    titleColor: '#D4AF37',
                    bodyColor: '#ffffff',
                    titleFont: { family: 'Montserrat', weight: '600', size: 13 },
                    bodyFont: { family: 'Open Sans', size: 12 },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y} operaciones`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: {
                        color: '#5A6C7D',
                        font: { family: 'Open Sans', size: 11 }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.06)' },
                    ticks: {
                        color: '#5A6C7D',
                        font: { family: 'Open Sans', size: 11 },
                        stepSize: 10
                    }
                }
            },
            animation: {
                duration: 700,
                easing: 'easeInOutQuart'
            }
        };
    }

    function initChart() {
        const canvas = document.getElementById('p13-chart-canvas');
        if (!canvas || typeof Chart === 'undefined') return;

        // Ajustar borderRadius solo para bar
        const datasets = CHART_DATA.datasets.map(ds => ({
            ...ds,
            borderRadius: currentChartType === 'bar' ? 6 : 0
        }));

        momentumChart = new Chart(canvas, {
            type: currentChartType,
            data: { labels: CHART_DATA.labels, datasets },
            options: buildChartOptions(currentChartType)
        });
    }

    function toggleChartType() {
        if (!momentumChart) return;
        currentChartType = currentChartType === 'bar' ? 'line' : 'bar';

        momentumChart.destroy();

        // Actualizar icono y texto del botón
        const btn = document.getElementById('p13-btn-toggle-chart');
        if (btn) {
            const icon = btn.querySelector('i');
            if (currentChartType === 'line') {
                if (icon) { icon.className = 'fa-solid fa-chart-bar'; }
                btn.lastChild.textContent = ' Ver como Barras';
            } else {
                if (icon) { icon.className = 'fa-solid fa-chart-line'; }
                btn.lastChild.textContent = ' Ver como Líneas';
            }
        }

        initChart();
    }

    function setupChartSection() {
        const btnToggle = document.getElementById('p13-btn-toggle-chart');
        if (btnToggle) {
            btnToggle.addEventListener('click', toggleChartType);
        }
        initChart();
    }


    /* =========================================================
       BLOQUE B — ANIME.JS: STAGGERING + MICRO-INTERACCIONES
       Anclas: .tarjeta, .testimonio, .btn-cta
       ========================================================= */

    function initAnimations() {
        if (typeof anime === 'undefined') return;

        // --- Staggering de tarjetas de servicios ---
        const tarjetas = document.querySelectorAll('#servicios .tarjeta');
        tarjetas.forEach(el => el.classList.add('p13-anim-hidden'));

        const observerTarjetas = new IntersectionObserver((entries, obs) => {
            const visible = entries.filter(e => e.isIntersecting);
            if (visible.length === 0) return;
            obs.disconnect();

            anime({
                targets: '#servicios .tarjeta',
                opacity: [0, 1],
                translateY: [30, 0],
                delay: anime.stagger(140),
                duration: 650,
                easing: 'easeOutCubic',
                begin: () => {
                    tarjetas.forEach(el => el.classList.remove('p13-anim-hidden'));
                }
            });
        }, { threshold: 0.15 });

        if (tarjetas.length > 0) observerTarjetas.observe(tarjetas[0]);

        // --- Staggering de testimonios ---
        const testimonios = document.querySelectorAll('.testimonios .testimonio');
        testimonios.forEach(el => el.classList.add('p13-anim-hidden'));

        const observerTest = new IntersectionObserver((entries, obs) => {
            const visible = entries.filter(e => e.isIntersecting);
            if (visible.length === 0) return;
            obs.disconnect();

            anime({
                targets: '.testimonios .testimonio',
                opacity: [0, 1],
                translateY: [25, 0],
                delay: anime.stagger(160),
                duration: 600,
                easing: 'easeOutCubic',
                begin: () => {
                    testimonios.forEach(el => el.classList.remove('p13-anim-hidden'));
                }
            });
        }, { threshold: 0.15 });

        if (testimonios.length > 0) observerTest.observe(testimonios[0]);

        // --- Micro-interacción: mouseenter en .tarjeta ---
        document.querySelectorAll('.tarjeta').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.remove('p13-ring-pulse');
                void card.offsetWidth; // reflow para reiniciar animación CSS
                card.classList.add('p13-ring-pulse');

                anime({
                    targets: card,
                    scale: [1, 1.025, 1],
                    duration: 320,
                    easing: 'easeOutBack'
                });
            });
        });

        // --- Micro-interacción: mouseenter en .testimonio ---
        document.querySelectorAll('.testimonio').forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    translateX: [0, 4, 0],
                    duration: 280,
                    easing: 'easeOutSine'
                });
            });
        });

        // --- Micro-interacción: mousedown en .btn-cta ---
        document.querySelectorAll('.btn-cta').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                anime({
                    targets: btn,
                    scale: 0.94,
                    duration: 100,
                    easing: 'easeInQuad'
                });
            });
            btn.addEventListener('mouseup', () => {
                anime({
                    targets: btn,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutBack'
                });
            });
            btn.addEventListener('mouseleave', () => {
                anime({ targets: btn, scale: 1, duration: 150 });
            });
        });

        // --- Micro-interacción: mousedown en #p13-btn-toggle-chart ---
        const toggleBtn = document.getElementById('p13-btn-toggle-chart');
        if (toggleBtn) {
            toggleBtn.addEventListener('mousedown', () => {
                anime({ targets: toggleBtn, scale: 0.93, duration: 90, easing: 'easeInQuad' });
            });
            toggleBtn.addEventListener('mouseup', () => {
                anime({ targets: toggleBtn, scale: 1, duration: 200, easing: 'easeOutBack' });
            });
            toggleBtn.addEventListener('mouseleave', () => {
                anime({ targets: toggleBtn, scale: 1, duration: 150 });
            });
        }
    }


    /* =========================================================
       BLOQUE C — CANVAS: PARTÍCULAS CON ATRACCIÓN AL CURSOR
       Ancla: #inicio .hero  →  <canvas id="p13-hero-canvas">
       ========================================================= */

    function initCanvas() {
        const hero = document.getElementById('inicio');
        const canvas = document.getElementById('p13-hero-canvas');
        if (!canvas || !hero) return;

        const ctx = canvas.getContext('2d');
        const PARTICLE_COUNT = 55;
        const GOLD = { r: 212, g: 175, b: 55 };
        const WHITE = { r: 255, g: 255, b: 255 };

        let mouse = { x: -9999, y: -9999 };
        let particles = [];
        let raf;

        // Resize
        function resize() {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Rastreo del ratón relativo al hero
        hero.addEventListener('mousemove', e => {
            const rect = hero.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        hero.addEventListener('mouseleave', () => {
            mouse.x = -9999;
            mouse.y = -9999;
        });

        // Clase Partícula
        class Particle {
            constructor() { this.reset(true); }

            reset(initial = false) {
                this.x = Math.random() * canvas.width;
                this.y = initial ? Math.random() * canvas.height : -10;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = Math.random() * 0.5 + 0.2;
                this.radius = Math.random() * 2 + 0.8;
                this.alpha = Math.random() * 0.5 + 0.2;
                // Mezcla aleatoria entre dorado y blanco
                const t = Math.random();
                this.color = {
                    r: Math.round(GOLD.r * t + WHITE.r * (1 - t)),
                    g: Math.round(GOLD.g * t + WHITE.g * (1 - t)),
                    b: Math.round(GOLD.b * t + WHITE.b * (1 - t))
                };
            }

            update() {
                // Atracción suave al cursor
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const ATTRACT_RADIUS = 140;
                const FORCE = 0.012;

                if (dist < ATTRACT_RADIUS) {
                    this.vx += (dx / dist) * FORCE;
                    this.vy += (dy / dist) * FORCE;
                }

                // Fricción
                this.vx *= 0.97;
                this.vy *= 0.97;

                this.x += this.vx;
                this.y += this.vy;

                // Reciclar cuando sale por abajo o laterales
                if (this.y > canvas.height + 10 ||
                    this.x < -10 || this.x > canvas.width + 10) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`;
                ctx.fill();
            }
        }

        // Crear partículas
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }

        // Bucle
        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            raf = requestAnimationFrame(loop);
        }
        loop();
    }


    /* =========================================================
       INIT — Esperar a que el DOM esté listo
       ========================================================= */

    function init() {
        setupChartSection();
        initAnimations();
        initCanvas();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();