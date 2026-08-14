import fs from 'node:fs';
import path from 'node:path';
export function ensureDir(p){fs.mkdirSync(p,{recursive:true});}
export function writeText(p,s){ensureDir(path.dirname(p));fs.writeFileSync(p,s,'utf8');}
export function writeJson(p,v){writeText(p,JSON.stringify(v,null,2)+'\n');}
export function readJson(p){return JSON.parse(fs.readFileSync(p,'utf8'));}
export function exists(p){return fs.existsSync(p);}
export function slugify(s){return s.trim().replace(/([a-z0-9])([A-Z])/g,'$1-$2').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase();}
