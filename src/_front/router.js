import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import {
    initializeData,
    initializePlugins,
    initializeIntegrationInstances,
    onPageUnload,
} from '@/_common/helpers/data';
import { convertPathToRouterFormat } from '@/_common/helpers/urlParametersParsing';
import { getRuntimeEnvironment } from '@/helpers/frontEnv.js';
import { useBackAuthStore } from '@/pinia/backAuth.js';

/**
 * @typedef {import('vue-router').Router} Router
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @typedef {import('vue-router').RouterOptions} RouterOptions
 * @typedef {import('vue-router').RouterScrollBehavior} RouterScrollBehavior
 */

/**
 * @typedef {Object} Lang
 * @property {string} lang
 * @property {boolean} [default]
 * @property {boolean} [isDefaultPath]
 */

/**
 * @typedef {Object} PageSecurity
 * @property {'authenticated' | string} [accessRule]
 * @property {string[]} [accessRoles]
 * @property {'AND' | 'OR'} [accessRolesCondition]
 */

/**
 * @typedef {Object} Page
 * @property {string} id
 * @property {Record<string, string> & { default: string }} paths
 * @property {string[]} langs
 * @property {PageSecurity} [security]
 * @property {{ userGroup: string }[]} [pageUserGroups]
 */

/**
 * @typedef {Object} DesignInfo
 * @property {string} homePageId
 * @property {Page[]} pages
 * @property {Lang[]} langs
 * @property {unknown} [auth]
 * @property {{ href?: string }} [baseTag]
 */

/** @type {Router} */
let router;
/** @type {RouteRecordRaw[]} */
const routes = [];

/** @type {RouterScrollBehavior} */
const scrollBehavior = to => {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
};

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

window.wwg_designInfo = {"id":"ee65778e-54c1-4913-a6c9-c9080ef99891","homePageId":"16ed9e8d-061e-4f27-bb4c-b1af863b4ec5","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true,"isDefaultPath":false}],"background":{},"workflows":[],"back":{"isServerSetup":{"staging":false,"production":false}},"auth":null,"pages":[{"id":"c11eb45b-0a3a-4642-a4fe-10bf9e05a023","linkId":"c11eb45b-0a3a-4642-a4fe-10bf9e05a023","name":"IA Express","folder":null,"paths":{"en":"iaexpress","default":"iaexpress"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e47160cb-2992-422a-850a-cbe60ea835b1","sectionTitle":"Top Nav","linkId":"f7ca52d4-ea29-4046-9b4d-239a3e04808c"},{"uid":"b6c8cc9e-6f2b-4f15-8c34-873a6bebe887","sectionTitle":"Main Content Section","linkId":"53747880-999e-4895-89c1-4791b2f4c34c"},{"uid":"5f4de527-aeb0-4341-8493-4a8b7802ebf8","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"IA Express | Intégrez l'IA en entreprise simplement et durablement","fr":""},"meta":{"desc":{"en":"Découvrez IA Express, une méthode complète pour intégrer l'intelligence artificielle dans votre organisation : gouvernance, assistants métiers, formations, accompagnement et IA hébergées en Suisse ou en Europe."},"keywords":{},"__typename":"PageMeta","socialDesc":{"en":"Une approche complète pour intégrer l'intelligence artificielle : gouvernance, assistants métiers, formations, accompagnement et IA hébergées en Suisse ou en Europe."},"socialTitle":{"en":"IA Express | La méthode d'intégration de l'IA en entreprise"},"structuredData":{}},"metaImage":"images/Methode_IA_Express.png?_wwcv=19","security":{}},{"id":"f361ad68-b768-451c-a56b-8d9234fc6623","linkId":"f361ad68-b768-451c-a56b-8d9234fc6623","name":"Formations","folder":null,"paths":{"en":"formations","default":"formations"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e47160cb-2992-422a-850a-cbe60ea835b1","sectionTitle":"Top Nav","linkId":"f7ca52d4-ea29-4046-9b4d-239a3e04808c"},{"uid":"48ea9dfb-613f-4b58-8563-3b0bd0ab15f0","sectionTitle":"Main Content Section","linkId":"7638c90e-efe0-4409-8961-a082c58a2526"},{"uid":"5f4de527-aeb0-4341-8493-4a8b7802ebf8","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"Formation IA en entreprise, conférences et ateliers | IA Solutions","fr":""},"meta":{"desc":{"en":"IA Solutions propose des formations en intelligence artificielle, des conférences de sensibilisation et des ateliers sur mesure pour les entreprises, collectivités et organisations en Suisse romande."},"keywords":{},"__typename":"PageMeta","socialDesc":{"en":"Développez les compétences IA de vos équipes grâce à nos conférences, formations et ateliers personnalisés en Suisse romande."},"socialTitle":{"en":"Formation IA en entreprise | IA Solutions"},"structuredData":{}},"metaImage":"images/Ariaq.jpg?_wwcv=19","security":{}},{"id":"16ed9e8d-061e-4f27-bb4c-b1af863b4ec5","linkId":"16ed9e8d-061e-4f27-bb4c-b1af863b4ec5","name":"Home","folder":null,"paths":{"default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e47160cb-2992-422a-850a-cbe60ea835b1","sectionTitle":"Top Nav","linkId":"f7ca52d4-ea29-4046-9b4d-239a3e04808c"},{"uid":"1fda5507-590e-407a-a042-074f721c414f","sectionTitle":"Main Content Section","linkId":"b27aa3fd-aea0-450b-93b8-3bf8d1a2f6a1"},{"uid":"5f4de527-aeb0-4341-8493-4a8b7802ebf8","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"IA Solutions Suisse | IA Express, gouvernance IA, formations et IA hébergées en Suisse","fr":""},"meta":{"desc":{"en":"IA Solutions accompagne les entreprises dans l'intégration de l'intelligence artificielle : gouvernance IA, formations, assistants métiers, IA Express, SwissNote et IA hébergées en Suisse."},"keywords":{},"socialDesc":{"en":"Découvrez IA Express : une méthode complète pour intégrer l'IA dans votre entreprise avec gouvernance, formations, assistants métiers et IA hébergées en Suisse."},"socialTitle":{"en":"IA Solutions | Déployez l'intelligence artificielle dans votre organisation"},"structuredData":{}},"metaImage":"images/_LLV7268.jpg?_wwcv=19","security":{}},{"id":"2905c405-7cf9-44da-b852-c025b0aad585","linkId":"2905c405-7cf9-44da-b852-c025b0aad585","name":"A Propos","folder":null,"paths":{"en":"apropos","default":"apropos"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e47160cb-2992-422a-850a-cbe60ea835b1","sectionTitle":"Top Nav","linkId":"f7ca52d4-ea29-4046-9b4d-239a3e04808c"},{"uid":"38ef8c75-995b-4585-9bf6-beb789eabf33","sectionTitle":"Main Content Section","linkId":"2d7f860c-b1ad-4d01-8dca-3ee010c51c84"},{"uid":"5f4de527-aeb0-4341-8493-4a8b7802ebf8","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"À propos | IA Solutions, spécialiste de l'intégration de l'intelligence artificielle en Suisse","fr":""},"meta":{"desc":{"en":"Découvrez IA Solutions, société suisse spécialisée dans l'intégration de l'intelligence artificielle. Gouvernance IA, formations, assistants métiers, automatisation et IA hébergées en Suisse."},"keywords":{},"__typename":"PageMeta","socialDesc":{"en":"Découvrez l'approche d'IA Solutions pour accompagner les organisations dans l'intégration de l'intelligence artificielle de manière concrète, souveraine et conforme."},"socialTitle":{"en":"À propos d'IA Solutions"},"structuredData":{}},"metaImage":"images/Photoshop_Yann_site.jpg?_wwcv=19","security":{}}],"plugins":[]};
window.wwg_cacheVersion = 19;
window.wwg_pluginsSettings = pluginsSettings;
window.wwg_disableManifest = false;

/** @type {Lang} */
const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {
    lang: 'en',
    default: true,
};

/**
 * @param {Page} page
 * @param {Lang} lang
 * @param {string} [forcedPath]
 */
const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    path = convertPathToRouterFormat(path);

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            const backAuthStore = useBackAuthStore(wwLib.$pinia);
            if (!wwLib.wwAuth.plugin) {
                if (!backAuthStore.projectAuth && window.wwg_designInfo.auth) {
                    backAuthStore.setProjectAuth(window.wwg_designInfo.auth);
                }
            }

            //Init plugins
            await initializePlugins();

            //Init integration instances
            await initializeIntegrationInstances();

            if (!wwLib.wwAuth.plugin) {
                await backAuthStore.refresh();
                const projectAuth = backAuthStore.projectAuth || {};

                //Check if private page
                if (page.security?.accessRule === 'authenticated') {
                    if (!backAuthStore.isAuthenticated) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            projectAuth.unauthenticatedPageId
                        )}?_source=${to.path}`;
                        return null;
                    } else if (page.security?.accessRoles?.length) {
                        const hasAccess =
                            page.security.accessRolesCondition === 'AND'
                                ? backAuthStore.matchAllRoles(page.security.accessRoles)
                                : backAuthStore.matchAnyRoles(page.security.accessRoles);
                        if (!hasAccess) {
                            window.location.href = `${wwLib.wwPageHelper.getPagePath(
                                projectAuth.unauthorizedPageId
                            )}?_source=${to.path}`;
                            return null;
                        }
                    }
                }
            } else {
                // Deprecated legacy auth plugins, to remove in the future
                if (page.pageUserGroups?.length) {
                    await wwLib.wwAuth.init();

                    // Redirect to not sign in page if not logged
                    if (!wwLib.wwAuth.getIsAuthenticated()) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            wwLib.wwAuth.getUnauthenticatedPageId()
                        )}?_source=${to.path}`;

                        return null;
                    }

                    //Check roles are required
                    if (
                        page.pageUserGroups.length > 1 &&
                        !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                    ) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            wwLib.wwAuth.getUnauthorizedPageId()
                        )}?_source=${to.path}`;

                        return null;
                    }
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        redirect: null,
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

/** @type {RouterOptions} */
let routerOptions;

const isProd = getRuntimeEnvironment() === 'production';

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
