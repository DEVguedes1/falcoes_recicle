/**
 * FALCÕES RECICLE - JAVASCRIPT PRINCIPAL
 * - Controle da Navbar fixa com Glassmorphism
 * - Menu responsivo Mobile
 * - Inicialização dos Carrosséis (Swiper.js)
 * - Validação e Integração do Formulário com a API do WhatsApp
 */

// ==========================================================================
// CONFIGURAÇÃO DO WHATSAPP DA EMPRESA
// ==========================================================================
// Insira o DDI + DDD + Número sem espaços ou caracteres especiais.
// Exemplo: '5581987654321' (55 = Brasil, 81 = Pernambuco)
const WHATSAPP_PHONE = '558183460523'; 

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initCarousels();
  initBookingForm();
  initDateInput();
  initPhoneMask();
});

/* ==========================================================================
   1. NAVBAR STICKY & SCROLL EFFECT
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Checa o estado inicial
}

/* ==========================================================================
   2. MENU MOBILE (HAMBÚRGUER & DRAWER)
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .btn-cta-mobile');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);

  // Fecha o drawer ao clicar em qualquer link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Fecha se clicar fora do drawer
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   3. INICIALIZAÇÃO DOS CARROSSÉIS (SWIPER.JS)
   ========================================================================== */
function initCarousels() {
  // 3.1. Carrossel dos Sócios (Bloco Completo que desliza junto)
  const partnersEl = document.querySelector('.swiper-partners');
  if (partnersEl) {
    const swiperPartners = new Swiper('.swiper-partners', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.partners-next',
        prevEl: '.partners-prev',
      },
      keyboard: {
        enabled: true,
      },
      on: {
        slideChange: function () {
          updatePartnerDots(this.realIndex);
        },
      }
    });

    function updatePartnerDots(realIndex) {
      document.querySelectorAll('.partner-dots-nav').forEach(nav => {
        const dots = nav.querySelectorAll('.partner-dot');
        dots.forEach((dot, idx) => {
          if (idx === realIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      });
    }

    // Clique nos dots de navegação personalizados
    document.querySelectorAll('.partner-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(targetIdx)) {
          swiperPartners.slideToLoop(targetIdx);
          updatePartnerDots(targetIdx);
        }
      });
    });
  }

  // 3.2. Carrossel Automático de Imagens (Sobre a Empresa)
  const aboutSliderEl = document.querySelector('.swiper-about-images');
  if (aboutSliderEl) {
    const swiperAbout = new Swiper('.swiper-about-images', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      grabCursor: true,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      keyboard: {
        enabled: true,
      },
      on: {
        slideChange: function () {
          updateAboutDots(this.realIndex);
        },
      }
    });

    function updateAboutDots(realIndex) {
      document.querySelectorAll('.about-dots-nav').forEach(nav => {
        const dots = nav.querySelectorAll('.about-dot');
        dots.forEach((dot, idx) => {
          if (idx === realIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      });
    }

    // Clique nos dots de paginação personalizados
    document.querySelectorAll('.about-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(targetIdx)) {
          swiperAbout.slideToLoop(targetIdx);
          updateAboutDots(targetIdx);
        }
      });
    });
  }
}

/* ==========================================================================
   4. LIMITAÇÃO DA DATA (MÍNIMO: HOJE)
   ========================================================================== */
function initDateInput() {
  const dateInput = document.getElementById('visitDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

/* ==========================================================================
   5. MÁSCARA INTELIGENTE PARA TELEFONE
   ========================================================================== */
function initPhoneMask() {
  const phoneInput = document.getElementById('userPhone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      // (XX) XXXXX-XXXX
      e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      // (XX) XXXX-XXXX
      e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      e.target.value = `(${value}`;
    }
  });
}

/* ==========================================================================
   6. FORMULÁRIO COM INTEGRAÇÃO DIRETA AO WHATSAPP
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Captura dos valores
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const rawDate = document.getElementById('visitDate').value;
    const address = document.getElementById('userAddress').value.trim();
    const quantity = document.getElementById('itemQuantity').value;
    const description = document.getElementById('itemDescription').value.trim();

    // Validação básica
    if (!name || !email || !phone || !rawDate || !address || !quantity) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Formatação da data (AAAA-MM-DD para DD/MM/AAAA)
    let formattedDate = rawDate;
    if (rawDate.includes('-')) {
      const parts = rawDate.split('-');
      formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    // Montagem da mensagem estruturada com formatação rica para o WhatsApp
    const messageLines = [
      `*Olá, Falcões Recicle!*`,
      `Gostaria de agendar uma coleta de resíduos eletrônicos através do site. Seguem as informações:`,
      ``,
      `*Nome:* ${name}`,
      `*Telefone/WhatsApp:* ${phone}`,
      `*E-mail:* ${email}`,
      `*Data Preferida:* ${formattedDate}`,
      `*Endereço de Coleta:* ${address}`,
      `*Quantidade Aproximada:* ${quantity}`,
      `*Equipamentos / Detalhes:* ${description ? description : 'Não especificado'}`,
      ``,
      `_Aguardo a confirmação do agendamento. Obrigado!_`
    ];

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    /* ======================================================================
       OPCIONAL: ENVIO PARA WEBHOOK / BACKEND (CASO QUEIRA CONECTAR DEPOIS)
       ======================================================================
       const payload = {
         name, email, phone, date: formattedDate, address, quantity, description,
         timestamp: new Date().toISOString()
       };

       fetch('https://seu-backend.com/api/coletas', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(payload)
       })
       .then(response => response.json())
       .then(data => console.log('Salvo com sucesso:', data))
       .catch(err => console.error('Erro ao registrar:', err));
    */

    // Notificação visual de sucesso para o usuário
    showToast('Redirecionando para o WhatsApp da Falcões Recicle...', 'success');

    // Abre o WhatsApp com a mensagem pré-preenchida
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      form.reset();
    }, 800);
  });
}

/* ==========================================================================
   7. TOAST NOTIFICATION UTILITÁRIO
   ========================================================================== */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-container';
    document.body.appendChild(toast);
  }

  const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation';
  const iconColor = type === 'success' ? '#10B981' : '#EF4444';

  toast.innerHTML = `<i class="fa-solid ${iconClass}" style="color: ${iconColor}; font-size: 1.25rem;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
