# Knowledge base contract

This directory is the local source-of-truth layer the agent should search before using external guidance.

Recommended contents:
- product constraints and interaction rules;
- brand/visual principles;
- token decisions and naming conventions;
- component usage guidance;
- page archetypes and templates;
- component recipes;
- accessibility and interaction requirements;
- QA rules and known failure modes;
- decision logs and rejected alternatives;
- representative golden pages / eval fixtures.

## Indexing rule

Keep the knowledge base small, structured and searchable. `AGENT.md` should point here rather than duplicating all details.

Each durable document should ideally declare:
- title;
- scope;
- owner/source;
- last checked/updated date;
- tags/keywords;
- whether it is normative or reference-only.

## Retrieval order

For a system-changing task, the agent should search:
1. task/product-specific rules;
2. relevant knowledge files here;
3. current manifests/tokens/templates/recipes/components;
4. local QA and eval evidence;
5. external authoritative sources only for gaps, validation or current best practices.

If local rules conflict with generic web guidance, preserve the local rule unless the task explicitly asks to reconsider it. Record the conflict in the research packet.
