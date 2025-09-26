
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 450, hash: 'dcbcdfd953fe1d3b3fa3cdfcf263b872eaf7ff55f344306e311c21ac2b6d85af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: 'c3a2d5f65005a6f8dfcc23a7bab6bc5bad03832e4ce45b24ee78b4b399b505dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21722, hash: '0925bd43871e5884d9ac5236341854aab253461cb6055a326b5294a163d0d468', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
