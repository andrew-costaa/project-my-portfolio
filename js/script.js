// // === Botão para troca do idioma
// const langBtn = document.getElementById("lang-btn");
// const langFlag = document.getElementById("lang-flag");

// let currentLang = "pt-BR";

// langBtn.addEventListener("click", () => {
//     if (currentLang === "pt-BR") {
//         currentLang = "en-US";
//         langFlag.src = "../assets/en-US.png";
//         langFlag.alt = "Bandeira EUA";
//         // Aqui você pode adicionar a função para traduzir o site para inglês
//     } else {
//         currentLang = "pt-BR";
//         langFlag.src = "../assets/pt-BR.png";
//         langFlag.alt = "Bandeira Brasil";
//         // Aqui você pode adicionar a função para traduzir o site para português
//     }
// });


// ===============================
// ANIMAÇÃO DE DIGITAÇÃO
// ===============================
(function () {
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;

    const typingText = "Olá, eu sou Andrew Costa";
    let typingIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const pauseTime = 2000;

    function typeLoop() {
        if (!isDeleting) {
            typingElement.textContent = typingText.substring(0, typingIndex + 1);
            typingIndex++;
            if (typingIndex === typingText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeLoop();
                }, pauseTime);
                return;
            }
        } else {
            typingElement.textContent = typingText.substring(0, typingIndex - 1);
            typingIndex--;
            if (typingIndex === 0) {
                isDeleting = false;
                setTimeout(typeLoop, pauseTime);
                return;
            }
        }
        setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
})();

// ===============================
// SCROLL CONTÍNUO DAS SKILLS
// ===============================
(function () {
    const skillsRow = document.getElementById('skillsRow');
    const tooltip = document.getElementById('tooltip');
    const skillImages = document.querySelectorAll('.my-skills img');

    if (!skillsRow || !tooltip || skillImages.length === 0) return;

    let scrollX = 0;
    const speed = 0.5;
    const scrollWidth = skillsRow.scrollWidth / 2;
    let animationId;

    function animate() {
        scrollX += speed;
        if (scrollX >= scrollWidth) scrollX = 0;
        skillsRow.style.transform = `translateX(${-scrollX}px)`;
        animationId = requestAnimationFrame(animate);
    }

    animate();

    skillImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            cancelAnimationFrame(animationId);
            tooltip.textContent = img.getAttribute('data-description');
            tooltip.style.opacity = '1';
        });

        img.addEventListener('mousemove', e => {
            tooltip.style.left = e.pageX + 15 + 'px';
            tooltip.style.top = e.pageY + 15 + 'px';
        });

        img.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            animate();
        });
    });
})();

// ===============================
// MODAL DE CERTIFICADOS
// ===============================
(function () {
    const modal = document.getElementById("modal-certificado");
    const iframe = document.getElementById("iframe-certificado");
    const modalImage = document.getElementById("img-certificado");
    const closeBtn = document.querySelector(".close-btn");
    const links = document.querySelectorAll(".link-certificado");

    if (!modal || !iframe || !modalImage || !closeBtn || links.length === 0) return;

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const certificadoURL = this.getAttribute("data-certificado");
            if (!certificadoURL) return;

            if (certificadoURL.toLowerCase().endsWith(".pdf")) {
                iframe.src = certificadoURL;
                iframe.style.display = "block";
                modalImage.style.display = "none";
            } else {
                modalImage.src = certificadoURL;
                modalImage.style.display = "block";
                iframe.style.display = "none";
            }
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", fecharModal);
    modal.addEventListener("click", e => {
        if (e.target === modal) fecharModal();
    });

    function fecharModal() {
        modal.style.display = "none";
        iframe.src = "";
    }
})();

// ===============================
// MODAL DE DESCRIÇÃO DE PROJETOS
// ===============================
(function () {
    const projectsModal = document.getElementById("projectsModal");
    const projectsDescricaoTexto = document.getElementById("projectsDescricaoTexto");
    const closeProjectsModal = document.querySelector(".projects-close-modal");
    const buttons = document.querySelectorAll(".projects .btn-descricao");

    if (!projectsModal || !projectsDescricaoTexto || !closeProjectsModal || buttons.length === 0) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const descricao = btn.getAttribute("data-descricao");
            projectsDescricaoTexto.textContent = descricao;
            projectsModal.style.display = "flex";
        });
    });

    closeProjectsModal.addEventListener("click", () => {
        projectsModal.style.display = "none";
    });

    projectsModal.addEventListener("click", e => {
        if (e.target === projectsModal) {
            projectsModal.style.display = "none";
        }
    });
})();

// ===============================
// FORMULÁRIO DE CONTATO
// ===============================
(function () {
    const contatoForm = document.querySelector('.contato-form');
    if (!contatoForm) return;

    contatoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Mensagem enviada!',
            text: 'Obrigado por entrar em contato. Responderei em breve.',
            confirmButtonColor: '#38A71A'
        });
        this.submit();
    });
})();

// ===============================
// BOTÃO HAMBÚGUER HEADER
// ===============================
(function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
})();

// ===============================
// BOTÃO HAMBÚGUER FOOTER
// ===============================
(function () {
    const footerHamburger = document.querySelector('.footer-hamburger');
    const footerNavMenu = document.querySelector('.footer-nav');
    if (!footerHamburger || !footerNavMenu) return;

    footerHamburger.addEventListener('click', () => {
        footerNavMenu.classList.toggle('show');
    });
})();

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================
(function () {
    const btnTopo = document.getElementById('btn-topo');
    if (!btnTopo) return;

    window.addEventListener('scroll', () => {
        btnTopo.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
