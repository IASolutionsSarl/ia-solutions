import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"16ed9e8d-061e-4f27-bb4c-b1af863b4ec5-en":{"outputDir":"./","lang":"en","title":"","cacheVersion":"7","meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\r\n@keyframes blink {\r\n  0%, 100% { opacity: 1; }\r\n  50% { opacity: 0.2; }\r\n}\r\n.recording {\r\n  animation: blink 1s infinite;\r\n}\r\n</style>\r\n\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\" />\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://ee65778e-54c1-4913-a6c9-c9080ef99891.weweb-preview.io/"}]}};

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
