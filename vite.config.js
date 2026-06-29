import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"c11eb45b-0a3a-4642-a4fe-10bf9e05a023-en":{"outputDir":"./iaexpress","lang":"en","title":"IA Express | Intégrez l'IA en entreprise simplement et durablement","cacheVersion":"16","meta":[{"name":"title","content":"IA Express | Intégrez l'IA en entreprise simplement et durablement"},{"name":"description","content":"Découvrez IA Express, une méthode complète pour intégrer l'intelligence artificielle dans votre organisation : gouvernance, assistants métiers, formations, accompagnement et IA hébergées en Suisse ou en Europe."},{"name":"image","content":"/images/Methode_IA_Express.png?_wwcv=16"},{"itemprop":"name","content":"IA Express | Intégrez l'IA en entreprise simplement et durablement"},{"itemprop":"description","content":"Découvrez IA Express, une méthode complète pour intégrer l'intelligence artificielle dans votre organisation : gouvernance, assistants métiers, formations, accompagnement et IA hébergées en Suisse ou en Europe."},{"itemprop":"image","content":"/images/Methode_IA_Express.png?_wwcv=16"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"IA Express | La méthode d'intégration de l'IA en entreprise"},{"name":"twitter:description","content":"Une approche complète pour intégrer l'intelligence artificielle : gouvernance, assistants métiers, formations, accompagnement et IA hébergées en Suisse ou en Europe."},{"name":"twitter:image","content":"/images/Methode_IA_Express.png?_wwcv=16"},{"property":"og:title","content":"IA Express | La méthode d'intégration de l'IA en entreprise"},{"property":"og:description","content":"Une approche complète pour intégrer l'intelligence artificielle : gouvernance, assistants métiers, formations, accompagnement et IA hébergées en Suisse ou en Europe."},{"property":"og:image","content":"/images/Methode_IA_Express.png?_wwcv=16"},{"property":"og:site_name","content":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@keyframes blink {\r\n  0%, 100% { opacity: 1; }\r\n  50% { opacity: 0.2; }\r\n}\r\n.recording {\r\n  animation: blink 1s infinite;\r\n}\r\n</style>\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" />\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/iaexpress/"},{"rel":"alternate","hreflang":"en","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/iaexpress/"}]},"f361ad68-b768-451c-a56b-8d9234fc6623-en":{"outputDir":"./formations","lang":"en","title":"Formation IA en entreprise, conférences et ateliers | IA Solutions","cacheVersion":"16","meta":[{"name":"title","content":"Formation IA en entreprise, conférences et ateliers | IA Solutions"},{"name":"description","content":"IA Solutions propose des formations en intelligence artificielle, des conférences de sensibilisation et des ateliers sur mesure pour les entreprises, collectivités et organisations en Suisse romande."},{"name":"image","content":"/images/Ariaq.jpg?_wwcv=16"},{"itemprop":"name","content":"Formation IA en entreprise, conférences et ateliers | IA Solutions"},{"itemprop":"description","content":"IA Solutions propose des formations en intelligence artificielle, des conférences de sensibilisation et des ateliers sur mesure pour les entreprises, collectivités et organisations en Suisse romande."},{"itemprop":"image","content":"/images/Ariaq.jpg?_wwcv=16"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Formation IA en entreprise | IA Solutions"},{"name":"twitter:description","content":"Développez les compétences IA de vos équipes grâce à nos conférences, formations et ateliers personnalisés en Suisse romande."},{"name":"twitter:image","content":"/images/Ariaq.jpg?_wwcv=16"},{"property":"og:title","content":"Formation IA en entreprise | IA Solutions"},{"property":"og:description","content":"Développez les compétences IA de vos équipes grâce à nos conférences, formations et ateliers personnalisés en Suisse romande."},{"property":"og:image","content":"/images/Ariaq.jpg?_wwcv=16"},{"property":"og:site_name","content":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@keyframes blink {\r\n  0%, 100% { opacity: 1; }\r\n  50% { opacity: 0.2; }\r\n}\r\n.recording {\r\n  animation: blink 1s infinite;\r\n}\r\n</style>\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" />\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/formations/"},{"rel":"alternate","hreflang":"en","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/formations/"}]},"16ed9e8d-061e-4f27-bb4c-b1af863b4ec5-en":{"outputDir":"./","lang":"en","title":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse","cacheVersion":"16","meta":[{"name":"title","content":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse"},{"name":"description","content":"IA Solutions accompagne les entreprises dans l'intégration de l'intelligence artificielle : gouvernance IA, formations, assistants métiers, IA Express, SwissNote et IA hébergées en Suisse."},{"name":"image","content":"/images/_LLV7268.jpg?_wwcv=16"},{"itemprop":"name","content":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse"},{"itemprop":"description","content":"IA Solutions accompagne les entreprises dans l'intégration de l'intelligence artificielle : gouvernance IA, formations, assistants métiers, IA Express, SwissNote et IA hébergées en Suisse."},{"itemprop":"image","content":"/images/_LLV7268.jpg?_wwcv=16"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"IA Solutions | Déployez l'intelligence artificielle dans votre organisation"},{"name":"twitter:description","content":"Découvrez IA Express : une méthode complète pour intégrer l'IA dans votre entreprise avec gouvernance, formations, assistants métiers et IA hébergées en Suisse."},{"name":"twitter:image","content":"/images/_LLV7268.jpg?_wwcv=16"},{"property":"og:title","content":"IA Solutions | Déployez l'intelligence artificielle dans votre organisation"},{"property":"og:description","content":"Découvrez IA Express : une méthode complète pour intégrer l'IA dans votre entreprise avec gouvernance, formations, assistants métiers et IA hébergées en Suisse."},{"property":"og:image","content":"/images/_LLV7268.jpg?_wwcv=16"},{"property":"og:site_name","content":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@keyframes blink {\r\n  0%, 100% { opacity: 1; }\r\n  50% { opacity: 0.2; }\r\n}\r\n.recording {\r\n  animation: blink 1s infinite;\r\n}\r\n</style>\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" />\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/"}]},"2905c405-7cf9-44da-b852-c025b0aad585-en":{"outputDir":"./apropos","lang":"en","title":"À propos | IA Solutions, spécialiste de l'intégration de l'intelligence artificielle en Suisse","cacheVersion":"16","meta":[{"name":"title","content":"À propos | IA Solutions, spécialiste de l'intégration de l'intelligence artificielle en Suisse"},{"name":"description","content":"Découvrez IA Solutions, société suisse spécialisée dans l'intégration de l'intelligence artificielle. Gouvernance IA, formations, assistants métiers, automatisation et IA hébergées en Suisse."},{"name":"image","content":"/images/Photoshop_Yann_site.jpg?_wwcv=16"},{"itemprop":"name","content":"À propos | IA Solutions, spécialiste de l'intégration de l'intelligence artificielle en Suisse"},{"itemprop":"description","content":"Découvrez IA Solutions, société suisse spécialisée dans l'intégration de l'intelligence artificielle. Gouvernance IA, formations, assistants métiers, automatisation et IA hébergées en Suisse."},{"itemprop":"image","content":"/images/Photoshop_Yann_site.jpg?_wwcv=16"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"À propos d'IA Solutions"},{"name":"twitter:description","content":"Découvrez l'approche d'IA Solutions pour accompagner les organisations dans l'intégration de l'intelligence artificielle de manière concrète, souveraine et conforme."},{"name":"twitter:image","content":"/images/Photoshop_Yann_site.jpg?_wwcv=16"},{"property":"og:title","content":"À propos d'IA Solutions"},{"property":"og:description","content":"Découvrez l'approche d'IA Solutions pour accompagner les organisations dans l'intégration de l'intelligence artificielle de manière concrète, souveraine et conforme."},{"property":"og:image","content":"/images/Photoshop_Yann_site.jpg?_wwcv=16"},{"property":"og:site_name","content":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@keyframes blink {\r\n  0%, 100% { opacity: 1; }\r\n  50% { opacity: 0.2; }\r\n}\r\n.recording {\r\n  animation: blink 1s infinite;\r\n}\r\n</style>\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" />\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/apropos/"},{"rel":"alternate","hreflang":"en","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/apropos/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rolldownOptionsInput = {};
for (const pageName in pages) {
    rolldownOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

function getFrontEnvironmentValues(root, mode) {
    const filePath = path.resolve(root, `.env.${mode}`);
    if (!fs.existsSync(filePath)) {
        return {};
    }

    return Object.fromEntries(
        Object.entries(parseEnv(fs.readFileSync(filePath, 'utf8'))).filter(([key]) => !key.startsWith('VITE_'))
    );
}

export default defineConfig(({ mode }) => {
    return {
        plugins: [vue()],
        base: "/",
        define: {
            global: 'globalThis',
            __VUE_PROD_DEVTOOLS__: mode === 'development',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: mode === 'development',
            __WW_FRONT_ENV_VARIABLES__: JSON.stringify({
                staging: getFrontEnvironmentValues(__dirname, 'staging'),
                production: getFrontEnvironmentValues(__dirname, 'production'),
            }),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        server: {
            port: 8080,
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rolldownOptions: {
                input: rolldownOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    if (/Use of direct `eval`/.test(entry.message)) return;
                    return next(entry);
                },
            },
        },
    };
});
