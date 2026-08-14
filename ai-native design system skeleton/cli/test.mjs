import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {spawnSync} from 'node:child_process';
const root=fs.mkdtempSync(path.join(os.tmpdir(),'ds-v03-'));const cli=path.resolve('./bin/ds.mjs');
function run(args,expect=0){const r=spawnSync(process.execPath,[cli,...args],{cwd:root,encoding:'utf8'});if(r.status!==expect){console.error(r.stdout,r.stderr);throw new Error(`${args.join(' ')} exited ${r.status}`)}return r.stdout+r.stderr;}
run(['init']);run(['theme','create','technical','--density=compact','--geometry=sharp','--brand=#19a974']);run(['theme','compile']);
const search=run(['search','agent','--json']);if(!search.includes('ChatComposer'))throw new Error('search missing ChatComposer');
const docs=run(['docs','ChatComposer','--dense']);if(!docs.includes('busy'))throw new Error('docs missing states');
const plan=run(['build','AI agent chat workbench','--json']);if(!plan.includes('chat-workbench')||!plan.includes('agentExecution'))throw new Error('planner mismatch');
run(['template','chat-workbench']);run(['component','Button']);
const evalOut=run(['eval','planner','--json']);if(!evalOut.includes('archetypeAccuracy'))throw new Error('eval missing summary');
const doctor=run(['doctor','--json']);if(!doctor.includes('"status": "pass"'))throw new Error('doctor should pass baseline');
const research=run(['research','check','--json']);if(!research.includes('incomplete'))throw new Error('research packets should begin incomplete');
for(const f of ['design-system/tokens.dtcg.json','design-system/tokens.resolved.json','design-system/agent.manifest.json','design-system/doctor-report.json','design-system/evals/planner-report.json'])if(!fs.existsSync(path.join(root,f)))throw new Error(`missing ${f}`);
console.log('v0.3 smoke test passed');
