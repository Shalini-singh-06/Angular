
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
    'index.csr.html': {size: 450, hash: '83121abb338f1b68fa9cbb9d629b15bbcbc947d2b285cd62492acb548e4e28f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: 'b469265e834a0619bb77a8ca4bbce26a30eb033c97b02ad62909f3420c19f4e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21592, hash: '1165885a2071ec65341422c1a2522bbd3a9d08c7729ad85c45afd1d7e8ae9779', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
