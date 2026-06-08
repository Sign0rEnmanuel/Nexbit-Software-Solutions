import { createContext, useContext, useState } from "react";

import imgTodoList from "../assets/projects/todolistapp.png";
import imgNexBitSS from "../assets/projects/nexbitss.png";
import imgPetsLive from "../assets/projects/petslive.png";

const translations = {
    es: {
        navbar: {
            home: "Inicio",
            projects: "Proyectos",
            about: "Sobre Nosotros",
        },
        hero: {
            label: "SISTEMA ONLINE",
            system: "// [ NEXBIT SOFTWARE SOLUTIONS ]",
            h1a: "TU NEGOCIO",
            h1b: "MERECE ESTAR",
            h1c: "EN INTERNET.",
            desc: "En NEXBITSS desarrollamos soluciones digitales a medida para impulsar tu negocio en el mundo online. Desde sitios web atractivos hasta aplicaciones personalizadas, estamos aquí para ayudarte a destacar en la era digital.",
            btnProjects: "Ver Proyectos",
            btnAbout: "Sobre Nosotros",
        },
        services: {
            label: "SERVICIOS",
            title: { line1: "Lo que hacemos", line2: "por tu negocio." },
            desc: "Ofrecemos soluciones integrales para impulsar el crecimiento de tu empresa en el entorno digital.",
            items: [
                {
                    emoji: "🌐",
                    title: "Sitio Web Profesional",
                    desc: "Diseñamos y desarrollamos sitios web modernos y funcionales que reflejan la identidad de tu marca.",
                },
                {
                    emoji: "🛒",
                    title: "E-commerce",
                    desc: "Creamos tiendas online funcionales y atractivas que aumentan las ventas y mejoran la experiencia del cliente.",
                },
                {
                    emoji: "📱",
                    title: "Diseño Responsive",
                    desc: "Creamos diseños que se adaptan perfectamente a cualquier dispositivo, garantizando una experiencia óptima para todos los usuarios.",
                },
                {
                    emoji: "🔍",
                    title: "Optimización SEO",
                    desc: "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda, aumentando el tráfico orgánico y la exposición de tu marca.",
                },
                {
                    emoji: "⚙️",
                    title: "Desarrollo de Software",
                    desc: "Creamos aplicaciones personalizadas que se adaptan a las necesidades específicas de tu negocio, mejorando la eficiencia y la productividad.",
                },
                {
                    emoji: "🛠️",
                    title: "Soporte Post-Entrega",
                    desc: "Ofrecemos servicios de soporte técnico y mantenimiento para garantizar el correcto funcionamiento de tus soluciones digitales (tiempo limitado).",
                },
            ],
        },
        process: {
            label: "PROCESO",
            title: { line1: "ASÍ TRABAJAMOS", line2: "CONTIGO" },
            final: "Tenemos mas proyectos en desarrollo y prontos para lanzar. ¡Únete a nosotros!",
            steps: [
                {
                    num: "01",
                    title: "CONVERSAMOS",
                    desc: "Nos cuentas sobre tu negocio y lo que necesitas. Sin tecnicismos.",
                },
                {
                    num: "02",
                    title: "PLANIFICAMOS",
                    desc: "Propuesta clara: qué hacemos, cuánto cuesta y en cuánto tiempo.",
                },
                {
                    num: "03",
                    title: "CONSTRUIMOS",
                    desc: "Desarrollamos tu sitio con actualizaciones frecuentes.",
                },
                {
                    num: "04",
                    title: "LANZAMOS",
                    desc: "Publicamos y te enseñamos a usarlo. Seguimos contigo después.",
                },
            ],
        },
        footer: {
            rights: "Todos los derechos reservados.",
            madeBy: "Hecho con amor por",
        },
        projects: {
            label: "PROYECTOS",
            title: { line1: "PROYECTOS QUE", line2: "HABLAN POR NOSOTROS" },
            desc: "Soluciones reales para negocios reales",
            final: "Tenemos más proyectos en desarrollo y prontos para lanzar. ¡Únete a nosotros!",
            items: [
                {
                    title: "Todo-List-App",
                    desc: "App de lista de tareas basico con React Native y Express",
                    link: "https://todo-list-app-psi-beryl.vercel.app",
                    src: imgTodoList,
                    alt: "Todo-List-App",
                },
                {
                    title: "NexBitSS",
                    desc: "Sitio web oficial de NexBitSS Software Solutions, desarrollado con React + Vite con estética pixel/arcade retro.",
                    link: "https://nexbitss.vercel.app/",
                    src: imgNexBitSS,
                    alt: "NexBitSS",
                },
                {
                    title: "PetsLive",
                    desc: "Una plataforma de venta de animales para adultos y niños de todo el mundo.",
                    link: "https://github.com/Sign0rEnmanuel/Pets-Live",
                    src: imgPetsLive,
                    alt: "PetsLive",
                },
            ],
        },
        about: {
            label: "NOSOTROS",
            title: {
                line1: "JOVENES,",
                line2: "APASIONADOS",
                line3: "Y ENFOCADOS",
                line4: "EN RESULTADOS",
            },
            desc1: "NexBit nació con una misión clara: ayudar a los negocios locales a crecer en el mundo digital sin gastar una fortuna ni perderse en tecnicismos.",
            desc2: "Somos un equipo joven que combina creatividad con tecnología de punta. Tu negocio nos importa tanto como a ti — no somos solo proveedores, somos tu socio digital.",
            quote: '"Cada negocio local merece tener la misma presencia digital que las grandes marcas."',
            team: [
                {
                    position: "Desarrollador y Fundador",
                    desc: "Desarrollador web full stack MERN. Construyo soluciones digitales que generan impacto real.",
                },
                {
                    position: "Desarrollador y Jefe",
                    desc: "Desarrollador web full satck expermientado con grandes habbilidades y conocimientos. Genero resultados reales con tecnología de punta.",
                },
            ],
        },
    },

    en: {
        navbar: {
            home: "Home",
            projects: "Projects",
            about: "About Us",
        },
        hero: {
            label: "SYSTEM ONLINE",
            system: "// [ NEXBIT SOFTWARE SOLUTIONS ]",
            h1a: "YOUR BUSINESS",
            h1b: "DESERVES TO BE",
            h1c: "ONLINE.",
            desc: "At NEXBITSS we develop custom digital solutions to boost your business in the online world. From attractive websites to personalized applications, we are here to help you stand out in the digital era.",
            btnProjects: "View Projects",
            btnAbout: "About Us",
        },
        services: {
            label: "SERVICES",
            title: { line1: "What we do", line2: "for your business." },
            desc: "We offer comprehensive solutions to drive the growth of your company in the digital environment.",
            items: [
                {
                    emoji: "🌐",
                    title: "Professional Website",
                    desc: "We design and develop modern and functional websites that reflect your brand identity.",
                },
                {
                    emoji: "🛒",
                    title: "E-commerce",
                    desc: "We create functional and attractive online stores that increase sales and improve customer experience.",
                },
                {
                    emoji: "📱",
                    title: "Responsive Design",
                    desc: "We create designs that adapt perfectly to any device, ensuring an optimal experience for all users.",
                },
                {
                    emoji: "🔍",
                    title: "SEO Optimization",
                    desc: "We improve your website's visibility in search engines, increasing organic traffic and brand exposure.",
                },
                {
                    emoji: "⚙️",
                    title: "Software Development",
                    desc: "We create custom applications tailored to the specific needs of your business, improving efficiency and productivity.",
                },
                {
                    emoji: "🛠️",
                    title: "Post-Delivery Support",
                    desc: "We offer technical support and maintenance services to ensure the correct functioning of your digital solutions (limited time).",
                },
            ],
        },
        process: {
            label: "PROCESS",
            title: { line1: "THIS IS HOW WE", line2: "WORK WITH YOU" },
            desc: "Simple, transparent and no surprises.",
            steps: [
                {
                    num: "01",
                    title: "WE TALK",
                    desc: "Tell us about your business and what you need. No jargon.",
                },
                {
                    num: "02",
                    title: "WE PLAN",
                    desc: "Clear proposal: what we do, how much it costs and how long it takes.",
                },
                {
                    num: "03",
                    title: "WE BUILD",
                    desc: "We develop your site with frequent updates.",
                },
                {
                    num: "04",
                    title: "WE LAUNCH",
                    desc: "We publish and teach you how to use it. We stay with you after.",
                },
            ],
        },
        footer: {
            rights: "All rights reserved.",
            madeBy: "Made with love by",
        },
        projects: {
            label: "PROJECTS",
            title: { line1: "PROJECTS THAT", line2: "SPEAK FOR US" },
            desc: "Real solutions for real businesses",
            final: "We have more projects in development and ready to launch. Join us!",
            items: [
                {
                    title: "Todo-List-App",
                    desc: "Basic task list app built with React Native and Express",
                    link: "https://todo-list-app-psi-beryl.vercel.app",
                    src: imgTodoList,
                    alt: "Todo-List-App",
                },
                {
                    title: "NexBitSS",
                    desc: "Official website of NexBitSS Software Solutions, built with React + Vite with a retro pixel/arcade aesthetic.",
                    link: "https://nexbitss.vercel.app/",
                    src: imgNexBitSS,
                    alt: "NexBitSS",
                },
                {
                    title: "PetsLive",
                    desc: "An online platform to sell animals for adults and children of all countries.",
                    link: "https://github.com/Sign0rEnmanuel/Pets-Live",
                    src: imgPetsLive,
                    alt: "PetsLive",
                },
            ],
        },
        about: {
            label: "ABOUT US",
            title: {
                line1: "YOUNG,",
                line2: "PASSIONATE",
                line3: "AND FOCUSED",
                line4: "ON RESULTS",
            },
            desc1: "NexBit was born with a clear mission: to help local businesses grow in the digital world without spending a fortune or getting lost in technicalities.",
            desc2: "We are a young team that combines creativity with cutting-edge technology. Your business matters to us as much as it does to you — we are not just providers, we are your digital partner.",
            quote: '"Every local business deserves the same digital presence as the big brands."',
            team: [
                {
                    position: "Developer & Founder",
                    desc: "Full stack MERN web developer. I build digital solutions that generate real impact.",
                },
                {
                    position: "Developer & CEO",
                    desc: "Full stack MERN web developer with great experience and knowledge. I build real results with cutting-edge technology.",
                },
            ],
        },
    },

    pt: {
        navbar: {
            home: "Início",
            projects: "Projetos",
            about: "Sobre Nós",
        },
        hero: {
            label: "SISTEMA ONLINE",
            system: "// [ NEXBIT SOFTWARE SOLUTIONS ]",
            h1a: "SEU NEGÓCIO",
            h1b: "MERECE ESTAR",
            h1c: "NA INTERNET.",
            desc: "Na NEXBITSS desenvolvemos soluções digitais personalizadas para impulsionar seu negócio no mundo online. Desde sites atrativos até aplicações personalizadas, estamos aqui para ajudá-lo a se destacar na era digital.",
            btnProjects: "Ver Projetos",
            btnAbout: "Sobre Nós",
        },
        services: {
            label: "SERVIÇOS",
            title: { line1: "O que fazemos", line2: "pelo seu negócio." },
            desc: "Oferecemos soluções integrais para impulsionar o crescimento da sua empresa no ambiente digital.",
            items: [
                {
                    emoji: "🌐",
                    title: "Site Profissional",
                    desc: "Projetamos e desenvolvemos sites modernos e funcionais que refletem a identidade da sua marca.",
                },
                {
                    emoji: "🛒",
                    title: "E-commerce",
                    desc: "Criamos lojas online funcionais e atrativas que aumentam as vendas e melhoram a experiência do cliente.",
                },
                {
                    emoji: "📱",
                    title: "Design Responsivo",
                    desc: "Criamos designs que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência ideal para todos os usuários.",
                },
                {
                    emoji: "🔍",
                    title: "Otimização SEO",
                    desc: "Melhoramos a visibilidade do seu site nos motores de busca, aumentando o tráfego orgânico e a exposição da sua marca.",
                },
                {
                    emoji: "⚙️",
                    title: "Desenvolvimento de Software",
                    desc: "Criamos aplicações personalizadas adaptadas às necessidades específicas do seu negócio, melhorando a eficiência e a produtividade.",
                },
                {
                    emoji: "🛠️",
                    title: "Suporte Pós-Entrega",
                    desc: "Oferecemos serviços de suporte técnico e manutenção para garantir o correto funcionamento das suas soluções digitais (tempo limitado).",
                },
            ],
        },
        process: {
            label: "PROCESSO",
            title: { line1: "É ASSIM QUE", line2: "TRABALHAMOS COM VOCÊ" },
            desc: "Simples, transparente e sem surpresas.",
            steps: [
                {
                    num: "01",
                    title: "CONVERSAMOS",
                    desc: "Você nos conta sobre seu negócio e o que precisa. Sem tecnicismos.",
                },
                {
                    num: "02",
                    title: "PLANEJAMOS",
                    desc: "Proposta clara: o que fazemos, quanto custa e em quanto tempo.",
                },
                {
                    num: "03",
                    title: "CONSTRUÍMOS",
                    desc: "Desenvolvemos seu site com atualizações frequentes.",
                },
                {
                    num: "04",
                    title: "LANÇAMOS",
                    desc: "Publicamos e ensinamos você a usar. Continuamos com você depois.",
                },
            ],
        },
        footer: {
            rights: "Todos os direitos reservados.",
            madeBy: "Feito com amor por",
        },
        projects: {
            label: "PROJETOS",
            title: { line1: "PROJETOS QUE", line2: "FALAM POR NÓS" },
            desc: "Soluções reais para negócios reais",
            final: "Temos mais projetos em desenvolvimento e prontos para lançar. Junte-se a nós!",
            items: [
                {
                    title: "Todo-List-App",
                    desc: "App básico de lista de tarefas com React Native e Express",
                    link: "https://todo-list-app-psi-beryl.vercel.app",
                    src: imgTodoList,
                    alt: "Todo-List-App",
                },
                {
                    title: "NexBitSS",
                    desc: "Site oficial da NexBitSS Software Solutions, desenvolvido com React + Vite com estética pixel/arcade retrô.",
                    link: "https://nexbitss.vercel.app/",
                    src: imgNexBitSS,
                    alt: "NexBitSS",
                },
                {
                    title: "PetsLive",
                    desc: "Uma plataforma de venda de animais para adultos e crianças de todos os países.",
                    link: "https://github.com/Sign0rEnmanuel/Pets-Live",
                    src: imgPetsLive,
                    alt: "PetsLive",
                },
            ],
        },
        about: {
            label: "SOBRE NÓS",
            title: {
                line1: "JOVENS,",
                line2: "APAIXONADOS",
                line3: "E FOCADOS",
                line4: "EM RESULTADOS",
            },
            desc1: "NexBit nasceu com uma missão clara: ajudar os negócios locais a crescer no mundo digital sem gastar uma fortuna nem se perder em tecnicismos.",
            desc2: "Somos uma equipe jovem que combina criatividade com tecnologia de ponta. Seu negócio importa para nós tanto quanto para você — não somos apenas fornecedores, somos seu parceiro digital.",
            quote: '"Todo negócio local merece ter a mesma presença digital que as grandes marcas."',
            team: [
                {
                    position: "Desenvolvedor e Fundador",
                    desc: "Desenvolvedor web full stack MERN. Construo soluções digitais que geram impacto real.",
                },
                {
                    position: "Desenvolvedor e CEO",
                    desc: "Desenvolvedor web full stack experiente com grandes habilidades e conhecimentos. Construo resultados reais com tecnologia de ponta.",
                },
            ],
        },
    },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("es");
    const t = translations[language];
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
