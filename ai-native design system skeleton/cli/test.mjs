import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ds-cli-'));
const cli=path.resolve('bin/ds.mjs');
function run(args){const r=spawnSync(process.execPath,[cli,...args],{cwd:tmp,encoding:'utf8'});if(r.status!==0)throw new Error(r.stderr||r.stdout);return r.stdout;}
run(['init']);
run(['theme','create','technical']);
run(['component','Button']);
run(['template','chat-workbench']);
run(['build','agent','chat','workspace']);
run(['doctor']);
for(const f of ['design-system/theme.intent.json','design-system/tokens.json','design-system/last-build-plan.json','src/design-system/components/Button.tsx','AGENT.md'])if(!fs.existsSync(path.join(tmp,f)))throw new Error('missing '+f);
console.log('ok');
