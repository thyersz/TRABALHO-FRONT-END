document.addEventListener('DOMContentLoaded', () => {
    // --- Menu de Navegação Responsivo (Hambúrguer) ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });

        // Fechar o menu ao clicar em um link (para mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Fechar o menu apenas se estiver ativo (em mobile)
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    navLinks.forEach(item => item.style.animation = ''); // Reset animation
                }
            });
        });
    }

    // --- Validação do Formulário de Contato ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            let isValid = true;

            // Validação do Nome
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Por favor, digite seu nome.';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.textContent = '';
                nameError.style.display = 'none';
            }

            // Validação do Email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, digite seu email.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, digite um email válido.';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.textContent = '';
                emailError.style.display = 'none';
            }

            // Validação do Assunto
            const subjectInput = document.getElementById('subject');
            const subjectError = document.getElementById('subjectError');
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Por favor, digite o assunto.';
                subjectError.style.display = 'block';
                isValid = false;
            } else {
                subjectError.textContent = '';
                subjectError.style.display = 'none';
            }

            // Validação da Mensagem
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Por favor, digite sua mensagem.';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.textContent = '';
                messageError.style.display = 'none';
            }

            // Se o formulário for válido, exibe mensagem de sucesso
            const formSuccess = document.getElementById('formSuccess');
            if (isValid) {
                formSuccess.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                formSuccess.style.display = 'block';
                contactForm.reset(); // Limpa o formulário
                // Em um cenário real, aqui você enviaria os dados para um servidor.
            } else {
                formSuccess.textContent = '';
                formSuccess.style.display = 'none';
            }
        });
    }

    // --- Efeito Interativo 1: Alerta ao Adicionar ao Carrinho ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.product;
            alert(`"${productName}" adicionado ao carrinho!`);
            // Em uma loja real, você adicionaria o item a um array de carrinho, atualizaria um contador, etc.
        });
    });

    // --- Efeito Interativo 2: Rolagem Suave para Links Internos (Scroll Behavior) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight; // Pega a altura do header fixo
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset; // Ajusta a posição para considerar o header

            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        });
    });

    // Efeito de "zoom" sutil ao passar o mouse sobre os produtos (complementar ao CSS)
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // O CSS já lida com o transform e box-shadow no hover.
            // Aqui, poderíamos adicionar classes para animações JS mais complexas, se desejado.
        });
        item.addEventListener('mouseleave', () => {
            // Reverter as animações ou classes adicionadas, se houver.
        });
    });
});
