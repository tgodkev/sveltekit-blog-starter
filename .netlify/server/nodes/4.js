import * as server from '../entries/pages/blog/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CnbXTPVp.js","_app/immutable/chunks/scheduler.CfI31boP.js","_app/immutable/chunks/index.Dm9AE3zf.js","_app/immutable/chunks/Pagination.hMAVQOgR.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/config.1Q9_AXxH.js"];
export const stylesheets = [];
export const fonts = [];