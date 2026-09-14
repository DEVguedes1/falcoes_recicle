# 🦅 Falcões Recicle | Landing Page Institucional

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Swiper](https://img.shields.io/badge/Swiper.js-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp_API-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

<p align="center">
  <strong>Soluções sustentáveis em reciclagem, logística reversa e valorização de resíduos eletrônicos.</strong><br>
  Plataforma web moderna, responsiva e integrada para a <em>Falcões Recicle LTDA</em> (Timbaúba - PE).
</p>

[Visualizar Demo](#-como-executar-o-projeto) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias-utilizadas) • [Estrutura](#-estrutura-de-arquivos)

</div>

---

## 📌 Sobre o Projeto

A **Falcões Recicle** é uma empresa atuante em Pernambuco focada na destinação correta, triagem técnica e compra de sucata e resíduos eletrônicos (*e-waste*), transformando o que não tem mais utilidade em oportunidade financeira e responsabilidade socioambiental.

Esta landing page foi construída do zero visando alta conversão, autoridade institucional, excelente experiência do usuário (*UI/UX*) e total compatibilidade mobile (*Mobile-First*).

---

## ✨ Funcionalidades

- 📱 **100% Responsivo & Mobile-First:** Otimizado para smartphones de última geração (incluindo iPhone 16 / iOS Safari), tablets e desktops ultra-wide, sem qualquer estouro ou rolagem horizontal lateral.
- ⚡ **Hero Section de Alta Conversão:** Chamadas persuasivas (*"Seu Eletrônico antigo pode valer dinheiro!"*) com botões diretos de agendamento e selo de destaque da marca.
- ♻️ **Grid "O Que Coletamos":** Apresentação das categorias de materiais aceitos (Notebooks, Componentes, Celulares, Monitores/TVs, Impressoras e Periféricos) com cards interativos.
- 👥 **Carrossel Interativo "Quem Somos":** Slider com a história e depoimentos dos fundadores (**Edmilson Luiz** e **Fernando Santos**), com transição suave, pausa ao passar o mouse e paginação sincronizada (*dots*).
- 🏢 **Galeria Dinâmica "Sobre a Empresa":** Coluna institucional estática ao lado de um carrossel de fotos em alta resolução da sede (Fachada, Galpão Operacional e Laboratório de Triagem Técnica) com autoplay a cada 5 segundos.
- 📅 **Agendamento Inteligente via WhatsApp:** Formulário completo para agendamento de visita ou coleta de resíduos que valida os dados em tempo real e redireciona automaticamente para o WhatsApp da empresa com mensagem estruturada e pronta para envio.
- 🎨 **Design System Harmonioso:** Paleta de cores corporativa baseada em azul-marinho profundo (`#0B192C`), acentos em verde esmeralda ecológico (`#10B981`) e fundos claros e limpos (*Light Mode*).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação limpa, acessível e otimizada para SEO.
- **Vanilla CSS3:** Layout com Flexbox e CSS Grid, variáveis CSS (*Custom Properties*), efeitos de micro-interação e transições suaves.
- **JavaScript Moderno (ES6+):** Lógica da barra de navegação retrátil, menu drawer mobile, controle e sincronização de sliders e máscara de validação de formulário.
- **[Swiper.js](https://swiperjs.com/):** Biblioteca moderna para carrosséis dinâmicos touch-enabled.
- **[Font Awesome 6](https://fontawesome.com/):** Ícones minimalistas para interface.

---

## 📂 Estrutura de Arquivos

```bash
falcoes_recicle/
├── assets/
│   ├── icons/            # Ícones SVG e PNG (badges, materiais, redes sociais)
│   └── images/           # Fotos da sede, sócios, logos institucionais e galeria
├── css/
│   └── styles.css        # Folha de estilos centralizada e design tokens
├── js/
│   └── main.js           # Lógica dos carrosséis, menu mobile e integração WhatsApp
├── index.html            # Estrutura principal da landing page
├── server.mjs            # Servidor estático Node.js para desenvolvimento local
└── README.md             # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Você precisa apenas de um navegador web moderno instalado. Caso queira rodar o servidor de desenvolvimento local, tenha o [Node.js](https://nodejs.org/) instalado.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/falcoes_recicle.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd falcoes_recicle
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   node server.mjs
   ```

4. **Abra no seu navegador:**
   ```
   http://localhost:5173
   ```

*(Alternativamente, você pode simplesmente abrir o arquivo `index.html` diretamente em qualquer navegador web ou utilizar extensões como o Live Server do VS Code).*

---

## 📞 Configuração do WhatsApp

Para apontar o formulário de agendamento para o número oficial da sua empresa, abra o arquivo `js/main.js` e atualize a constante no topo do código:

```javascript
// js/main.js
const WHATSAPP_PHONE = '558183460523'; // DDI + DDD + Número sem traços ou espaços
```

---

## 📄 Licença

Este projeto é de propriedade da **Falcões Recicle LTDA**. Todos os direitos reservados.

---

<div align="center">
  Desenvolvido com foco em sustentabilidade e tecnologia sustentável 🌱
</div>
