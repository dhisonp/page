---
title: 'Potential AI Workflow'
date: '2025/10/18'
category: 'Engineering'
slug: 'potential-ai-workflow'
---

# Potential AI workflow

Instead of writing code and referring to docs fully on your own, or fully relying on AI to produce, debug and review, try a hybrid approach. This is true especially for boilerplate code. For complex and creative flows, use your brain mostly.

**Context:**

1. Allow the agent to fully understand the context
2. Agent provides its understanding
3. Approve or adjust

**Planning:**

1. Present them concrete ideas and requirements
2. Optionally ask for review or suggestions
3. Agent outlines their plan
4. Approve or clarify if there are discrepancies

**Production**

1. Present concise, unambiguous instructions for the agent
2. Agent executes plan after explicit approval from the developer
3. Review results meticulously
   - Have a documentation in parallel for novel technologies
   - Review as if agent was your junior developer
4. Adjust code as needed

**Testing**
If you are doing TDD, this stage comes second after context.

1. Provide or ask for test cases
2. Review test cases
3. Ask to write test cases
4. Ask agent to run and review test execution
5. Manually adjust complex edge cases

Benefits of this is that you save time writing boilerplate code while maintaining the speed of progress you make while learning and implementing new technologies. Having docs up and matching them on review allows you to stay in touch on recommended practices while also exercising your code review abilities.

Always remember that the goal is to save time, not delegate design and thinking to the LLM. Imagine that you are the Principal Engineer, and the agent(s) your Junior— to open up space and save time and allow you to focus on more abstract tasks.

This is **not** a guide or an outline, but an experiment for you to try!

```markdown
# Accelerator Mode

You are now in Accelerator Mode (AM). What is AM?

This is a new, simple agentic workflow that have been defined to improve development speed while
preserving knowledge attainment.

## Steps

In AM, there are four stages:

1. Context: This is where you learn the codebase and understand the context fully.
2. Planning: This is where I provide the problem and you suggest a solution.
3. Production: This where I review and approve your solution and you execute the changes.
4. Testing: This is where you write the tests for the produced/updated code.

Note that if we are doing TDD, which if mentioned, Testing will move into number 1.

**IMPORTANT RULES**

1. Do _not_ write, update any code or execute any shell commands *unless you have
   explicit approval from the developer *after\* you presented your plan.\*\*
2. Please also void committing any changes via `git commit` unless explicitly being directed to do
   so.
3. _Never_ skip steps, _especially_ the Planning stage.
4. Always provide a concise summary of your changes.

Upon completing a Production stage, please answer with a brief listed summary of any changes
and shell commands executed. To help with review speed, please outline your plan in imperative,
present tense, as if you're writing a Conventional Commit.

## The goal of this mode

The goal is to save the developer time by reducing time writing boilerplate code and allow
them to focus on more abstract tasks, such as architecture and system design, or focus on more
sophisticated enhancement processes. However, the developer would still need to _fully_ review
the code you generate and understand it, aiming to not reduce attainable knowledge during
developing with new technologies or novel ideas.

The goal is to save time, and not delegate thinking of the developer to the agent (you).

While in AM, you are not allowed to write any code or execute any shell commands unless you are
past the production phase, or in other words, granted explicit approval by the developer.
Always be concise with your answer and never over-explain- you can assume the developer is an
experienced engineer.

Well, then, good luck!
```

### Ideas

Taken from Anthropic’s Claude Code listed use:

- Fast prototyping from auto-accept mode: autonomous loop of writing code, tests and iterates continuously
- Test generation: have agent write comprehensive tests
- Codebase exploration: cuts down manual tracking of issues or feature implementations
- TDD workflow: psuedo-code into guided test-driven development while periodically steer it when required
- First-step workflow: have agent as the first stop– asking it to identify which files related to bug, feature development or analysis, which replaces manual context-gathering
- Eliminating code-switch overhead when switching between contexts

### Tips

- Improving development velocity: prototype features and iterate on ideas without getting bogged down by implementation details
- Creating self-sufficient loops: set up agent to verify its own work by running builds, tests and lints automatically
- Develop task classification intuitions: distinguish tasks that work well asynchronously (peripheral features, prototyping) vs those needing synchronous supervision (core business logic, fixes)
- Form clear, detailed prompts: be extremely specific in your requests; the better and detailed you prompt, the more you can trust the agent without unexpected changes
