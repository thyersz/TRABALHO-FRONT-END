document.addEventListener('DOMContentLoaded', function() {
    // Efeito 1: Alerta de boas-vindas na página Home (apenas uma vez por sessão)
    // Usamos localStorage para que o alerta não apareça a cada recarregamento
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        if (!localStorage.getItem('YoruWelcomeShown')) {
            setTimeout(function() {
                alert('Bem-vindo ao Yoru Desvendado! Prepare-se para dominar as dimensões!');
                localStorage.setItem('YoruWelcomeShown', 'true');
            }, 1500); // Aparece após 1.5 segundos
        }
    }

    // Efeito 2: Destaque de cards ao passar o mouse (na Home)
    const cards = document.querySelectorAll('.custom-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 1rem 2rem rgba(0, 0, 0, 0.2)';
            this.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.1)';
        });
    });

    // Validação do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            let isValid = true;
            const formMessage = document.getElementById('formMessage');
            formMessage.style.display = 'none'; // Esconde mensagens anteriores

            // Validação do Nome
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
            }

            // Validação do Email
            const emailInput = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
            }

            // Validação do Assunto
            const subjectInput = document.getElementById('subject');
            if (subjectInput.value.trim() === '') {
                subjectInput.classList.add('is-invalid');
                isValid = false;
            } else {
                subjectInput.classList.remove('is-invalid');
            }

            // Validação da Mensagem
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('is-invalid');
                isValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
            }

            if (isValid) {
                // Se tudo estiver válido, simula um envio e mostra mensagem de sucesso
                formMessage.classList.remove('text-danger');
                formMessage.classList.add('text-success');
                formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                formMessage.style.display = 'block';

                // Limpa o formulário
                contactForm.reset();

                // Remove as classes de validação após o envio bem-sucedido
                document.querySelectorAll('.form-control').forEach(input => {
                    input.classList.remove('is-invalid');
                });

            } else {
                // Se houver erros, mostra mensagem de erro
                formMessage.classList.remove('text-success');
                formMessage.classList.add('text-danger');
                formMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
                formMessage.style.display = 'block';
            }
        });
    }

    // Navegação suave para âncoras (se houver no futuro) - Exemplo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeito para o carrossel de notícias (Bootstrap já cuida da funcionalidade básica)
    // Aqui podemos adicionar um console log para fins de demonstração
    const newsCarousel = document.getElementById('news-carousel');
    if (newsCarousel) {
        newsCarousel.addEventListener('slid.bs.carousel', function () {
            console.log('Carrossel de notícias mudou de slide!');
        });
    }

});