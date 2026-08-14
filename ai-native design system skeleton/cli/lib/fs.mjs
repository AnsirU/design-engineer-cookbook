import fs from 'node:fs';
import path from 'node:path';
export const exists=fs.existsSync;
export function ensureDir(p){fs.mkdirSync(p,{recursive:true});}
export function writeText(p,s){ensureDir(path.dirname(p));fs.writeFileSync(p,s,'utf8');}
export function writeJson(p,v){writeText(p,JSON.stringify(v,null,2)+'\n');}
export function readJson(p){return JSON.parse(fs.readFileSync(p,'utf8'));}
export function readText(p){return fs.readFileSync(p,'utf8');}
export function slugify(s=''){return s.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
export function walk(dir){if(!exists(dir))return[];return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{const p=path.join(dir,e.name);return e.isDirectory()?walk(p):[p];});}
