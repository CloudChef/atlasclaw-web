export const repoLinks = {
  core: "https://github.com/CloudChef/atlasclaw",
  providers: "https://github.com/CloudChef/atlasclaw-providers",
  website: "https://github.com/CloudChef/atlasclaw-web",
  contact: "mailto:atlasclaw@cloudchef.io",
  architecture:
    "https://github.com/CloudChef/atlasclaw/blob/main/README.md",
  providerGuide:
    "https://github.com/CloudChef/atlasclaw-providers/blob/main/README.md",
  smartCmp:
    "https://github.com/CloudChef/atlasclaw-providers/tree/main/providers/SmartCMP-Provider",
  jira:
    "https://github.com/CloudChef/atlasclaw-providers/tree/main/providers/jira"
};

export const localeLabels = {
  en: "EN",
  zh: "中文"
};

export const siteContent = {
  en: {
    meta: {
      siteName: "AtlasClaw",
      defaultTitle: "AtlasClaw | Open Source Enterprise AI Agent Framework",
      defaultDescription:
        "AtlasClaw is an open source enterprise AI agent framework for multi-user deployment, governed execution, provider-based integrations, webhook AI integration, SSO, RBAC, and enterprise-approved LLMs.",
      footerTagline:
        "Open source AI agent framework for governed enterprise systems."
    },
    nav: {
      home: "Home",
      architecture: "Architecture",
      integrations: "Integrations",
      releases: "Releases",
      docs: "Docs",
      github: "GitHub"
    },
    common: {
      docsLabel: "Docs",
      githubPrimary: "View on GitHub",
      githubSecondary: "Explore the repos",
      architectureLabel: "Architecture",
      integrationsLabel: "Integrations",
      builtFor: "Enterprise multi-user AI agent framework",
      deepReference: "Deep reference on GitHub",
      statusLegendTitle: "Status model"
    },
    footer: {
      product: "Product",
      resources: "Resources",
      repos: "Repositories",
      contact: "Contact",
      rights: "AtlasClaw website content for atlasclaw.ai"
    },
    home: {
      title: "AtlasClaw | Open Source Enterprise AI Agent Framework",
      description:
        "AtlasClaw is an open source enterprise AI agent framework for multi-user AI agents, governed execution, webhook AI integration, provider-based integrations, SSO, RBAC, and enterprise-approved LLMs.",
      hero: {
        eyebrow: "Open Source AI Agent Framework for Enterprise",
        title: "Open Source Enterprise AI Agent Framework",
        subtitle:
          "Built for multi-user AI agent deployment, governed execution, and real enterprise AI application delivery.",
        description:
          "AtlasClaw helps enterprises move beyond personal agents with SSO-based access, RBAC permission governance, Skill-based system integration, provider-based integrations, webhook AI integration, and enterprise-approved model providers.",
        primaryCta: { label: "Start with the core repo", href: repoLinks.core },
        secondaryCta: { label: "Read the architecture", href: "/en/architecture/" },
        panelTitle: "Enterprise fit",
        panelStatus: "Open source",
        signals: [
          {
            label: "Multi-user AI agent",
            value: "One deployment for organization users",
            detail: "Run one open source multi-user AI agent framework instead of per-user agent stacks."
          },
          {
            label: "Systems by Skills",
            value: "Webhook and provider-based integration",
            detail: "Use webhook entrypoints and skills to bring AI capability into observability, ITSM, OA, CRM, and other existing enterprise systems."
          },
          {
            label: "Enterprise security and compliance",
            value: "SSO, RBAC, and admin control",
            detail: "SSO and RBAC keep governed AI agent execution aligned with enterprise-approved LLM providers."
          },
          {
            label: "Multi channels",
            value: "IM to Agent to Systems",
            detail: "Use IM as the anywhere access layer: users reach AtlasClaw through Slack, WhatsApp, Feishu, WeCom, or DingTalk, then the agent executes skills and interacts with enterprise systems."
          }
        ]
      },
      comparison: {
        eyebrow: "Why AtlasClaw for enterprise",
        title: "Personal agents solve personal workflows. AtlasClaw solves enterprise ones.",
        description:
          "Personal agents are useful for individuals. AtlasClaw is built for organizations that need a multi-user AI agent, governed execution, provider-based integrations, webhook AI integration, and model control.",
        items: [
          {
            title: "Multi-user deployment",
            personalLabel: "Personal agent",
            personalText: "Each user configures their own agent stack, tools, and access separately.",
            atlasLabel: "AtlasClaw",
            atlasText: "One multi-user AI agent deployment can serve users across the organization."
          },
          {
            title: "Controlled execution",
            personalLabel: "Personal agent",
            personalText: "Unsafe or over-permissive execution is hard to standardize and govern.",
            atlasLabel: "AtlasClaw",
            atlasText: "Governed AI agent execution stays aligned with enterprise SSO and RBAC controls."
          },
          {
            title: "Enterprise system access",
            personalLabel: "Personal agent",
            personalText: "Individual tools rarely map cleanly onto internal enterprise systems.",
            atlasLabel: "AtlasClaw",
            atlasText: "Webhook entrypoints, Skills, and provider-based integrations let observability, ITSM, OA, CRM, SmartCMP, Jira, and other enterprise systems gain AI capability without rewriting them."
          },
          {
            title: "Model governance",
            personalLabel: "Personal agent",
            personalText: "Model access is often ad hoc and chosen per user.",
            atlasLabel: "AtlasClaw",
            atlasText: "Connect through enterprise-approved LLM providers and controlled deployment rules."
          }
        ]
      },
      features: {
        eyebrow: "Enterprise application focus",
        title: "The core enterprise requirements are built in from the start.",
        description:
          "AtlasClaw is designed for organizations that want enterprise AI agent capabilities to live inside actual products, workflows, permissions, and system boundaries.",
        items: [
          {
            title: "Multi-user AI agent deployment",
            description:
              "Run one multi-user AI agent deployment across teams instead of repeating personal setup for every employee."
          },
          {
            title: "Permission-controlled execution",
            description:
              "Keep execution under authenticated user permissions so unsafe actions are less likely to slip through."
          },
          {
            title: "Skill-based multi-system integration",
            description:
              "Connect observability, ITSM, OA, CRM, SmartCMP, Jira, and other internal systems through webhook entrypoints, Skills, and Providers so enterprise software can gain AI capability."
          },
          {
            title: "Enterprise-approved model access",
            description:
              "Route AI requests through enterprise-approved LLM providers instead of ad hoc user-by-user model choices."
          }
        ]
      },
      modes: {
        eyebrow: "Deployment modes",
        title: "Two deployment shapes. One execution model.",
        items: [
          {
            title: "Embedded Agent Mode",
            description:
              "Embed AtlasClaw inside an enterprise application and reuse the host system's identity, context, and UI."
          },
          {
            title: "Standalone Agent Mode",
            description:
              "Run AtlasClaw as a multi-user AI agent layer where users authenticate through SSO and access enterprise systems under governed permissions."
          }
        ]
      },
      flow: {
        eyebrow: "How it works",
        title: "A clear path from user intent to governed system execution.",
        description:
          "The framework stays modular: the core handles orchestration, while providers carry the system-specific contracts that make execution reliable.",
        items: [
          "Channels route requests into the AtlasClaw core.",
          "The agent engine selects skills and orchestrates execution.",
          "Providers translate work into target-system operations.",
          "Enterprise systems remain the source of truth for auth and audit."
        ]
      },
      paths: {
        eyebrow: "Start here",
        title: "Choose the way you want to understand AtlasClaw.",
        items: [
          {
            title: "Understand the core architecture",
            description:
              "See how channels, core services, skills, and providers become one execution model.",
            href: "/en/architecture/"
          },
          {
            title: "Study the provider model",
            description:
              "Learn how AtlasClaw packages integrations into reusable provider boundaries.",
            href: "/en/docs/providers/"
          },
          {
            title: "Explore current and planned integrations",
            description:
              "See what exists today, what serves as reference architecture, and where the ecosystem is going.",
            href: "/en/integrations/"
          }
        ]
      }
    },
    releases: {
      title: "AtlasClaw Release Notes | Enterprise AI Agent Updates",
      description:
        "AtlasClaw release notes for enterprise AI agent updates, long-term memory, Markdown Vault Provider, SmartCMP Provider, workflow orchestration, and integrations.",
      keywords: [
        "AtlasClaw release notes",
        "AtlasClaw releases",
        "enterprise AI agent updates",
        "enterprise AI agent release notes",
        "open source AI agent framework releases",
        "long-term memory AI agent",
        "Markdown Vault Provider",
        "SmartCMP Provider",
        "provider-based integrations",
        "workflow orchestration",
        "webhook AI integration",
        "multi-user AI agent"
      ],
      statsLabel: "Release summary",
      tagsLabel: "Release tags",
      timelineLabel: "AtlasClaw release timeline",
      milestonesLabel: "Version milestones",
      hero: {
        eyebrow: "Release notes",
        title: "Platform release notes for technical teams.",
        description:
          "This page records AtlasClaw releases as technical product notes: what changed in Core, which Providers gained new capabilities, and why those changes matter for enterprise AI agent deployment."
      },
      stats: [
        {
          label: "Latest release",
          value: "v0.9.7",
          detail: "Long-term memory, stronger permission boundaries, and Markdown Vault knowledge access."
        },
        {
          label: "Release entries",
          value: "2",
          detail: "Release notes adapted from the April and May 2026 update materials."
        },
        {
          label: "Coverage",
          value: "Core + Providers",
          detail: "Runtime, security, channels, workflows, SmartCMP, Jira, GitHub, and shared skills."
        }
      ],
      index: {
        eyebrow: "Release archive",
        title: "Track AtlasClaw's path from framework foundation to enterprise platform.",
        description:
          "Each entry keeps the product context, implementation-level capability changes, and provider impact visible in one place.",
        actionLabel: "Read release details"
      },
      cta: {
        eyebrow: "Source and implementation",
        title: "Follow the implementation in the open-source repositories.",
        description:
          "The release archive explains the product changes. The core and provider repositories show the implementation details, examples, and contribution path.",
        href: repoLinks.core,
        label: "Open core repo",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "Open providers repo"
      },
      items: [
        {
          id: "v0-9-7",
          version: "v0.9.7",
          dateIso: "2026-05-22",
          date: "May 22, 2026",
          title: "Long-term memory and the Markdown Vault knowledge provider",
          keywords: [
            "AtlasClaw v0.9.7",
            "long-term memory AI agent",
            "Markdown Vault Provider",
            "SmartCMP Provider",
            "enterprise AI agent memory",
            "webhook robot execution profiles",
            "provider token authentication"
          ],
          summary:
            "This release focuses on persistent enterprise agent usage: user-scoped memory in the core, clearer authorization boundaries, more stable multi-entry sessions, and a new Markdown Vault provider for local knowledge bases.",
          lede:
            "AtlasClaw v0.9.7 moves the platform beyond single-turn answers into ongoing enterprise collaboration. The core runtime now supports long-term user memory and stronger ownership checks, while the Provider layer adds Markdown Vault knowledge access and deeper SmartCMP request, approval, and operations support.",
          tags: ["Memory", "Security", "Webhook", "Markdown Vault", "SmartCMP"],
          highlights: [
            {
              title: "User-scoped long-term memory",
              description:
                "Agents can retain work preferences and recurring context under user isolation, giving repeated collaboration a practical memory layer."
            },
            {
              title: "Clearer enterprise permission boundaries",
              description:
                "Run ownership, session creation, and memory writes now have stronger checks for multi-user deployments."
            },
            {
              title: "Knowledge from Markdown Vaults",
              description:
                "Existing team manuals, operations notes, project docs, and internal wiki exports can become searchable agent knowledge."
            },
            {
              title: "More complete SmartCMP workflows",
              description:
                "Resource requests, approvals, follow-up operations, provider-token auth, and webhook robot execution profiles gained broader coverage."
            }
          ],
          sections: [
            {
              eyebrow: "Core runtime",
              title: "Long-term memory makes repeated agent work continuous",
              body: [
                "The core now supports long-term user preferences and usage profiles. When permissions allow it, the agent can remember work habits, preference details, and recurring context so future conversations start with useful context already in place.",
                "Memory is isolated by user. That isolation is essential for enterprise deployments where multiple employees, teams, and external entrypoints share the same platform."
              ],
              points: [
                "Useful for internal knowledge collaboration, personal assistant workflows, operations Q&A, and ongoing project follow-up.",
                "Reduces repeated prompting when users return to similar tasks.",
                "Prevents user profile data from crossing account boundaries."
              ]
            },
            {
              eyebrow: "Core security",
              title: "Ownership and write checks make the multi-user boundary easier to reason about",
              body: [
                "Enterprise agents need to be useful without becoming over-permissive. This release strengthens agent run ownership checks, session creation validation, memory write validation, and the common authentication provider foundation."
              ],
              points: [
                "Separates user identity, session ownership, memory access, and skill execution rights more clearly.",
                "Improves the foundation for teams, departments, web users, IM users, and webhook callers using the same deployment.",
                "Makes authorization behavior easier to audit and explain."
              ]
            },
            {
              eyebrow: "Sessions and gateway",
              title: "Sessions are more stable across web, IM, and webhook traffic",
              body: [
                "The session and gateway layers now handle session keys, external session identifiers, idempotency caching, and runtime user paths more reliably. These changes are not headline features, but they make real enterprise entrypoints behave more predictably."
              ],
              points: [
                "Web UI, IM channels, and webhook entrypoints can coordinate against cleaner session state.",
                "Tool selection is more stable during multi-step tasks.",
                "History replay is cleaner and less likely to include runtime noise."
              ]
            },
            {
              eyebrow: "Channels",
              title: "IM and webhook interactions fit real-time enterprise workflows",
              body: [
                "When users send requests through enterprise chat channels such as WeCom, Feishu, or DingTalk, AtlasClaw can return immediate acknowledgement that the request was received and is being processed. Webhook integration also gains configurable shared-secret support."
              ],
              points: [
                "Improves perceived responsiveness for alerts, approvals, automation requests, and enterprise robot workflows.",
                "Strengthens system-to-system invocation with a clearer shared-secret boundary.",
                "Keeps webhook AI integration suitable for real-time operational scenarios."
              ]
            },
            {
              eyebrow: "Operations",
              title: "Administration and deployment are better suited for daily operations",
              body: [
                "The frontend management experience received refinements around session history, runtime panels, role-permission display, and deletion confirmations. Deployment assets now cover standardized runtime logs, log rotation, Docker, systemd, and logrotate patterns."
              ],
              points: [
                "Helps long-running deployments with troubleshooting, maintenance, and audit work.",
                "Makes day-to-day admin panels more predictable for operators.",
                "Improves the handoff from local evaluation to production operations."
              ]
            },
            {
              eyebrow: "Provider",
              title: "Markdown Vault provider turns existing documents into agent-ready knowledge",
              body: [
                "The new markdown-vault provider connects AtlasClaw to local Markdown repositories. It supports document parsing, knowledge retrieval, and question answering grounded in local material."
              ],
              points: [
                "Team handbooks, operations knowledge bases, project documents, and internal wiki exports can be reused directly.",
                "Organizations can make existing document assets conversational and searchable without a heavy system rebuild.",
                "The capability fits local-first and controlled-knowledge deployments."
              ]
            },
            {
              eyebrow: "SmartCMP",
              title: "Resource request, approval, and operations flows gained depth",
              body: [
                "SmartCMP provider work expanded the full resource lifecycle: natural-language request capture, approval assistance, resource operations, compliance evidence, and resource views shared across operational skills."
              ],
              points: [
                "Resource requests now support same-type multi-instance requests, schema-driven multi-instance input, and more reliable matching among services, packages, and parameter specifications.",
                "Approval capabilities include pre-approval support, approval detail lookup, pending-list display, specification-name normalization, and more structured approval output.",
                "Operations workflows support parameter-free resource changes, resource evidence lookup, and selecting compliance-analysis targets by name or list index."
              ]
            },
            {
              eyebrow: "Provider ecosystem",
              title: "Authentication, GitHub, and document skills broadened integration coverage",
              body: [
                "The provider repository added stronger SmartCMP provider token authentication and webhook robot execution profiles. It also added a GitHub provider with token-based authentication and expanded shared document-generation skills."
              ],
              points: [
                "Webhook callers can run skills under clearer robot identities and credential boundaries.",
                "GitHub integration establishes a foundation for issue, pull request, and repository workflows.",
                "Text generation, XLSX spreadsheet handling, and presentation artifact access bring documents, tables, reports, and slides closer to the agent workflow."
              ]
            }
          ],
          links: [
            { label: "Core repository", href: repoLinks.core },
            { label: "Providers repository", href: repoLinks.providers },
            { label: "Contact AtlasClaw", href: repoLinks.contact }
          ]
        },
        {
          id: "v0-9-3-overview",
          version: "v0.9.3",
          dateIso: "2026-04-24",
          date: "April 24, 2026",
          title: "Platform evolution from v0.6.2 to v0.9.3",
          keywords: [
            "AtlasClaw v0.9.3",
            "AtlasClaw version history",
            "Thin Core Rich Providers",
            "SmartCMP integration",
            "Jira Provider",
            "GitHub Provider",
            "LLM-first routing",
            "enterprise AI workflow engine"
          ],
          summary:
            "An overview of the first 40+ days after the open-source release: 17 versions, 249 commits, and the transition from framework foundation to enterprise-ready agent platform.",
          lede:
            "By April 24, 2026, AtlasClaw had moved through 17 versions from v0.6.2 to v0.9.3. The platform established its Thin Core, Rich Providers architecture, expanded SmartCMP and Jira integrations, added GitHub provider work, strengthened enterprise security, and introduced LLM-first routing and workflow orchestration.",
          tags: ["Architecture", "Providers", "Security", "Workflow", "Channels"],
          highlights: [
            {
              title: "17 versions and 249 commits",
              description:
                "The project moved quickly from initial framework setup to enterprise-grade runtime capabilities."
            },
            {
              title: "Thin Core, Rich Providers",
              description:
                "Core orchestration stayed focused while provider packages absorbed system-specific auth, workflows, scripts, and audit rules."
            },
            {
              title: "SmartCMP and Jira depth",
              description:
                "Cloud management, approvals, issue operations, search, bulk work, field discovery, and time tracking formed concrete enterprise domains."
            },
            {
              title: "Security, routing, and workflow foundations",
              description:
                "SSO/RBAC, AES-256-GCM encryption, tenant isolation, LLM-first routing, workflow orchestration, and lifecycle hooks became first-class platform concerns."
            }
          ],
          milestones: [
            {
              range: "v0.6.x",
              focus: "Base framework setup and provider plugin mechanism."
            },
            {
              range: "v0.7.x",
              focus: "Multi-channel access, embedded deployment, and tool orchestration."
            },
            {
              range: "v0.8.x",
              focus: "Enterprise security, RBAC permission management, and provider management UI."
            },
            {
              range: "v0.9.x",
              focus: "LLM intelligent routing, workflow engine, and deeper SmartCMP integration."
            }
          ],
          sections: [
            {
              eyebrow: "Architecture",
              title: "Thin Core, Rich Providers became the platform boundary",
              body: [
                "AtlasClaw keeps the core responsible for routing, lifecycle management, and execution coordination. Business logic lives inside provider packages instead of accumulating in the core runtime."
              ],
              points: [
                "New systems can be connected through provider packages rather than core-code changes.",
                "Each provider owns its authentication model, exposed skills, execution scripts, and audit conventions.",
                "Provider-qualified names such as {provider}:{skill} keep capabilities explicit and avoid collisions."
              ]
            },
            {
              eyebrow: "SmartCMP",
              title: "The flagship provider covered cloud management operations end to end",
              body: [
                "SmartCMP integration grew into 11 skills covering core cloud management scenarios: resource pool lookup, asset management, host lifecycle operations, resource self-service requests, approvals, alert analysis, cost optimization, compliance assessment, and webhook-driven pre-approval review."
              ],
              points: [
                "Users can describe a resource request in natural language and let the agent help structure the platform request.",
                "The provider connects request creation, approval flow, and operational follow-up instead of stopping at form submission.",
                "Cost, alerting, and compliance workflows gained a shared provider context."
              ]
            },
            {
              eyebrow: "Jira",
              title: "Project management became conversational while staying mapped to controlled skills",
              body: [
                "The Jira provider defined five skill areas for project management: issue operations, advanced JQL search, bulk actions, field and agile configuration discovery, and worklog and reporting capabilities."
              ],
              points: [
                "Implemented issue management supports creating, querying, updating, and closing issues.",
                "Planned advanced operations include saved filters, export, bulk state changes, bulk assignment, and cloning.",
                "The provider model keeps Jira-specific fields and workflow semantics out of the core."
              ]
            },
            {
              eyebrow: "GitHub",
              title: "Engineering workflows entered the AtlasClaw execution model",
              body: [
                "The GitHub provider work brought code collaboration systems into the same provider framework. Token-based authentication gives users a path to handle issue creation and management, pull request collaboration and review, and repository information lookup through the agent conversation."
              ],
              points: [
                "Teams can begin moving routine engineering operations into governed agent workflows.",
                "The provider approach avoids treating repository operations as personal, unbounded tool calls.",
                "Issue, PR, and repository actions become candidates for permissioned enterprise execution."
              ]
            },
            {
              eyebrow: "Shared skills",
              title: "Community skills expanded what the agent can produce",
              body: [
                "Beyond provider integrations, the ecosystem added shared skills for generating work products and supporting agent development."
              ],
              points: [
                "Document generation covered Word, PDF, and PowerPoint outputs.",
                "General skills included GitHub operations, brainstorming, long-text summarization, provider and skill scaffolding, skill quality checks, and output humanization.",
                "The shared-skill layer makes AtlasClaw useful for both system operations and knowledge-work artifacts."
              ]
            },
            {
              eyebrow: "Channels",
              title: "Multiple access patterns made the agent available where employees already work",
              body: [
                "AtlasClaw connected enterprise chat channels and embedded iframe surfaces so employees do not need to learn a new tool before reaching the agent."
              ],
              points: [
                "IM access supports familiar workplace channels such as Feishu, DingTalk, and WeCom.",
                "Embedded iframe layout allows an agent conversation window to live inside existing business systems.",
                "The same execution layer can serve web, IM, embedded, and webhook entrypoints."
              ]
            },
            {
              eyebrow: "Security",
              title: "Enterprise controls became architectural features, not add-ons",
              body: [
                "The platform introduced security and governance capabilities required by enterprise deployment rather than treating them as optional wrappers."
              ],
              points: [
                "Authentication supports local auth, OIDC JWT, OIDC login, social login such as Google and GitHub, and enterprise SSO such as Keycloak, Okta, and Azure AD.",
                "Sensitive data is stored with AES-256-GCM encryption.",
                "Agent execution inherits real user permissions, tenant isolation uses path prefixes and tool policy filtering, and write operations require user confirmation."
              ]
            },
            {
              eyebrow: "Intelligence layer",
              title: "LLM-first routing and workflow orchestration reduced hard-coded behavior",
              body: [
                "The v0.9.x line introduced an LLM-first routing model and a workflow engine. Together they make the agent better at deciding which tool or skill to use and how to organize multi-step, cross-system work."
              ],
              points: [
                "LLM-first routing lets the model infer the right tool or skill instead of relying only on hard-coded name matching.",
                "Workflow orchestration supports multi-step business processes across systems.",
                "Providers can define their own workflow patterns while the core keeps one execution model."
              ]
            },
            {
              eyebrow: "Runtime hooks and deployment",
              title: "Lifecycle hooks and deployment options made customization practical",
          body: [
            "The hook system grew to cover 17+ phases of the agent lifecycle, while deployment options covered embedded and standalone use cases."
              ],
              points: [
                "Hooks support configuration-driven script handlers, typed runtime events, per-user state persistence, and script fault isolation.",
                "Deployment supports embedded mode inside existing products and standalone mode as a unified enterprise AI entrypoint.",
                "Container, database, and model choices include Docker/docker-compose, SQLite for development, MySQL via Alembic migrations for production, public model providers, and private Ollama deployments."
              ]
            }
          ],
          links: [
            { label: "Core repository", href: repoLinks.core },
            { label: "Providers repository", href: repoLinks.providers },
            { label: "Website repository", href: repoLinks.website }
          ]
        }
      ]
    },
    architecture: {
      title: "Enterprise AI Agent Architecture | AtlasClaw",
      description:
        "AtlasClaw enterprise AI agent architecture covering thin core orchestration, provider runtime, Skill-based execution, webhook AI integration, governed execution, and permission inheritance.",
      hero: {
        eyebrow: "Architecture",
        title: "Built for enterprise systems, not just personal agents.",
        description:
          "Personal agents such as OpenClaw are optimized for individual tools and user-owned setup. AtlasClaw separates core orchestration from provider runtime contracts so multi-user deployment, governed AI agent execution, and enterprise system boundaries can hold in production."
      },
      principles: [
        {
          title: "Thin core",
          description:
            "The core owns routing, context, session, tooling, and execution orchestration. It does not absorb each platform's business rules."
        },
        {
          title: "Rich providers",
          description:
            "Each provider packages auth behavior, Skills, scripts, references, and normalization for target systems such as SmartCMP, Jira, ITSM, observability, OA, and CRM."
        },
        {
          title: "Permission inheritance",
          description:
            "AtlasClaw passes through real user identity boundaries and lets target platforms keep authorization and auditing where they already belong."
        }
      ],
      runtime: [
        "Access channels include web UI, embedded panels, chat platforms, and programmatic webhook AI integration calls.",
        "The AtlasClaw core exposes the API layer, session services, provider registry, and agent engine.",
        "Skill-based execution is handed to providers that speak the target platform's auth and operation model.",
        "External enterprise systems remain the execution target and source of operational truth."
      ],
      comparison: [
        {
          title: "Why not a personal-agent architecture?",
          description:
            "Personal agents such as OpenClaw fit individual productivity well. Enterprise environments need shared deployment, governed access, provider contracts, and system-side audit boundaries, which AtlasClaw makes explicit."
        },
        {
          title: "Why provider-qualified skills?",
          description:
            "Provider-qualified naming prevents collisions, keeps execution explicit, and makes webhook dispatch safer."
        },
        {
          title: "Why separate embedded and standalone modes?",
          description:
            "Some teams need an in-product AI module. Others need a multi-user cross-system agent layer. AtlasClaw supports both without changing the core mental model."
        },
        {
          title: "How do systems gain LLM brains?",
          description:
            "Webhook entrypoints and provider-qualified skills let existing systems call AtlasClaw as an AI execution layer, so traditional products can gain LLM capability without rebuilding their own agent stack."
        }
      ]
    },
    integrations: {
      title: "Provider-Based Enterprise AI Agent Integrations | AtlasClaw",
      description:
        "AtlasClaw integration architecture for connecting enterprise systems through provider-based integrations, Skills, webhook AI integration, SmartCMP, Jira, and governed execution.",
      hero: {
        eyebrow: "Integrations",
        title: "An integration architecture for enterprise systems, not just tool connectors.",
        description:
          "AtlasClaw turns integrations into provider contracts so IM, web, embedded apps, and webhook AI integration calls can reach one multi-user AI agent layer, execute Skills, and interact with governed enterprise systems."
      },
      architecture: {
        eyebrow: "Why this architecture",
        title: "Integration is where enterprise AI either becomes reliable or falls apart.",
        description:
          "AtlasClaw is designed so integrations stay explicit. Providers hold system contracts, Skills stay executable and narrow, and the core keeps one reusable orchestration model for governed execution.",
        items: [
          {
            title: "Provider contracts, not loose tool wrappers",
            description:
              "Each provider-based integration owns its auth model, scripts, references, and system-specific rules instead of leaking them into the core."
          },
          {
            title: "Skills become controlled system verbs",
            description:
              "Skills are the governed execution boundary between user intent and target-system action."
          },
          {
            title: "One agent layer across many access channels",
            description:
              "IM, web, embedded modules, and webhook callers can all reach the same AtlasClaw execution model."
          },
          {
            title: "Existing systems gain AI without being rebuilt",
            description:
              "Traditional products can call AtlasClaw as a webhook AI integration layer instead of implementing their own agent stack from scratch."
          }
        ]
      },
      flow: {
        eyebrow: "Execution path",
        title: "From access channel to governed system action.",
        description:
          "The integration model stays readable because every hop has a clear responsibility boundary.",
        items: [
          "Users or systems reach AtlasClaw through IM, web UI, embedded panels, or webhook entrypoints.",
          "The agent engine selects provider-qualified skills and builds the execution plan.",
          "Providers translate intent into target-system operations with the right auth and data boundaries.",
          "Enterprise systems remain the operational source of truth for permissions, workflow state, and audit."
        ]
      },
      domains: {
        eyebrow: "Enterprise domains",
        title: "One provider model across the enterprise stack.",
        description:
          "The same provider-based integration architecture can be applied across operational systems, business systems, developer systems, SmartCMP, and Jira.",
        items: [
          {
            eyebrow: "Reference today",
            name: "SmartCMP",
            description:
              "A SmartCMP provider reference showing cloud management request flows, approvals, webhook orchestration, and business-facing Skill layers.",
            href: repoLinks.smartCmp
          },
          {
            eyebrow: "Example today",
            name: "Jira",
            description:
              "A Jira provider example for issue operations, provider-qualified skills, and enterprise agent wiring patterns.",
            href: repoLinks.jira
          },
          {
            eyebrow: "IT operations",
            name: "ITSM systems",
            description:
              "Service and request workflows can be executed through governed providers instead of ad hoc tool calls."
          },
          {
            eyebrow: "Observability",
            name: "Monitoring and alerting systems",
            description:
              "Alerts, incidents, and operational diagnostics can be exposed as explicit skills."
          },
          {
            eyebrow: "Business operations",
            name: "OA, CRM, HR, and finance systems",
            description:
              "Business-side workflows can gain AI coordination while keeping system-side permissions and approvals intact."
          },
          {
            eyebrow: "Developer systems",
            name: "GitHub and engineering tools",
            description:
              "Development workflows can be integrated as provider domains instead of bolted-on personal-agent tools."
          }
        ]
      },
      providerModel: {
        title: "Provider model",
        description:
          "A provider is a self-contained integration package: connection contract, auth conventions, skills, scripts, and reference material. The core loads providers from `providers_root` and exposes provider-qualified skills for runtime dispatch.",
        points: [
          "Providers keep platform-specific auth and workflow logic out of the core.",
          "Skills stay readable for users while remaining explicit for runtime dispatch.",
          "Webhook and channel access can target the same provider-qualified execution layer."
        ]
      },
      valuePanel: {
        title: "What the enterprise gets",
        description:
          "This model is not just about connecting APIs. It creates one governed AI execution layer above existing systems.",
        points: [
          "One multi-user agent layer instead of repeated personal integrations.",
          "A reusable way to add AI capability into existing enterprise products.",
          "Clearer boundaries for access control, audit, and system ownership."
        ]
      },
      cta: {
        title: "Build your own provider",
        description:
          "Use the SmartCMP and Jira examples as reference points, then package your own platform with provider-level config, skill metadata, and narrow scripts. Contributions of new system integrations are welcome in the atlasclaw-providers repository.",
        href: "/en/docs/providers/",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "Contribute integrations on GitHub"
      }
    },
    docs: {
      title: "AtlasClaw Docs | Enterprise AI Agent Framework",
      description:
        "Curated AtlasClaw docs covering the open source enterprise AI agent framework, provider-based integrations, Skills, webhook AI integration, and deployment.",
      hero: {
        eyebrow: "Docs",
        title: "A focused guide into the AtlasClaw codebase and model.",
        description:
          "The website keeps the learning path focused. The repositories keep the deeper implementation detail."
      },
      items: [
        {
          title: "Getting Started",
          description:
            "What AtlasClaw is, how the repos fit together, and the shortest path to a local run.",
          href: "/en/docs/getting-started/"
        },
        {
          title: "Providers",
          description:
            "How AtlasClaw packages integrations as provider folders, skills, scripts, and references.",
          href: "/en/docs/providers/"
        },
        {
          title: "Deployment",
          description:
            "How embedded mode and standalone mode differ, and what configuration anchors the runtime.",
          href: "/en/docs/deployment/"
        }
      ],
      repoCards: [
        {
          title: "atlasclaw",
          description: "Core runtime, API layer, agent engine, sessions, tools, and docs.",
          href: repoLinks.core
        },
        {
          title: "atlasclaw-providers",
          description: "Reusable provider packages and reference implementations.",
          href: repoLinks.providers
        },
        {
          title: "atlasclaw-web",
          description: "This website and the GitHub Pages deployment target.",
          href: repoLinks.website
        }
      ]
    },
    gettingStarted: {
      title: "Getting Started with AtlasClaw Enterprise AI Agent Framework",
      description:
        "Getting started with AtlasClaw, the open source enterprise AI agent framework, its repositories, provider-based integrations, and a minimal local setup.",
      intro:
        "AtlasClaw gives teams a practical way to build one multi-user AI agent and conversational execution layer across existing enterprise systems.",
      repos: [
        {
          name: "atlasclaw",
          description:
            "Core runtime: API layer, agent engine, session/memory, built-in tools, workflow orchestration, and the main docs.",
          href: repoLinks.core
        },
        {
          name: "atlasclaw-providers",
          description:
            "Provider packages, starter patterns, and reference implementations such as Jira and SmartCMP.",
          href: repoLinks.providers
        },
        {
          name: "atlasclaw-web",
          description:
            "The public website for atlasclaw.ai, built as a static Astro site.",
          href: repoLinks.website
        }
      ],
      steps: [
        "Create a Python virtual environment in the `atlasclaw` repo.",
        "Install the core dependencies from `requirements.txt`.",
        "Point `providers_root` at the external providers repo.",
        "Configure an LLM provider in `atlasclaw.json`.",
        "Start the FastAPI service and open the web UI."
      ],
      commands: [
        "python3 -m venv .venv",
        "source .venv/bin/activate",
        "pip install -r requirements.txt",
        "uvicorn app.atlasclaw.main:app --reload --host 0.0.0.0 --port 8000"
      ],
      configSnippet: `{
  "providers_root": "../atlasclaw-providers/providers",
  "model": {
    "primary": "kimi/kimi-k2.5",
    "temperature": 0.7,
    "providers": {
      "kimi": {
        "base_url": "\${ANTHROPIC_BASE_URL}",
        "api_key": "\${ANTHROPIC_API_KEY}",
        "api_type": "anthropic"
      }
    }
  }
}`,
      references: [
        { label: "Core README", href: repoLinks.architecture },
        { label: "Providers README", href: repoLinks.providerGuide }
      ]
    },
    providers: {
      title: "AtlasClaw Providers | Skills and Enterprise AI Integrations",
      description:
        "AtlasClaw Provider structure, Skill model, provider-qualified naming, webhook AI integration, SmartCMP, Jira, and enterprise AI integration references.",
      intro:
        "Providers are AtlasClaw's integration boundary. Each provider packages the target-system contract, one or more Skills, implementation scripts, auth context, and the reference material needed to keep enterprise AI integrations understandable.",
      structure: `providers/<provider-name>/
├── PROVIDER.md
├── README.md
└── skills/
    ├── <skill-a>/
    │   ├── SKILL.md
    │   ├── scripts/
    │   └── references/
    └── <skill-b>/`,
      points: [
        "The provider owns how AtlasClaw identity becomes provider-native target-system auth.",
        "Skills stay human-readable while still binding to concrete entrypoints.",
        "Provider-qualified naming avoids collisions across integrations.",
        "Scripts should stay narrow, predictable, and safe with secrets and error mapping."
      ],
      naming: `{
  "providers_root": "../atlasclaw-providers/providers",
  "webhook": {
    "systems": [
      {
        "allowed_skills": ["jira:jira-issue"]
      }
    ]
  }
}`,
      examples: [
        { label: "SmartCMP reference architecture", href: repoLinks.smartCmp },
        { label: "Jira provider example", href: repoLinks.jira }
      ]
    },
    deployment: {
      title: "AtlasClaw Deployment | Multi-User Enterprise AI Agent",
      description:
        "AtlasClaw deployment modes, SSO/RBAC configuration basics, provider runtime wiring, and enterprise AI agent runtime considerations.",
      intro:
        "AtlasClaw supports two practical shapes: embedding into an existing product, or running as a standalone multi-user AI agent layer above multiple enterprise systems.",
      modes: [
        {
          title: "Embedded deployment",
          description:
            "Best when an existing enterprise application wants to add AI capability without moving users into a separate product surface."
        },
        {
          title: "Standalone deployment",
          description:
            "Best when the enterprise needs one SSO-backed multi-user AI agent entry point above multiple systems."
        }
      ],
      config: `{
  "providers_root": "../atlasclaw-providers/providers",
  "service_providers": {
    "jira": {
      "cloud": {
        "base_url": "https://company.atlassian.net",
        "token": "\${JIRA_API_TOKEN}"
      }
    },
    "smartcmp": {
      "prod": {
        "base_url": "https://cmp.corp.com/platform-api",
        "cookie": "\${CMP_COOKIE}"
      }
    }
  }
}`,
      notes: [
        "Use `providers_root` to load provider folders from the external providers repository.",
        "Keep secrets in environment variables, not committed JSON.",
        "Use webhook mode for fire-and-forget system-to-system invocation with constrained Skills.",
        "Keep target-platform auth and audit in the provider and the downstream platform."
      ],
      references: [
        { label: "Core repo README", href: repoLinks.architecture },
        { label: "Providers repo README", href: repoLinks.providerGuide }
      ]
    }
  },
  zh: {
    meta: {
      siteName: "AtlasClaw",
      defaultTitle: "AtlasClaw | 企业级开源 AI Agent 框架",
      defaultDescription:
        "AtlasClaw 是企业级开源 AI Agent 框架，支持多用户 AI Agent 部署、受控执行、权限治理、Provider 集成、Webhook AI 集成、SSO、RBAC 和企业受控大模型。",
      footerTagline: "面向企业级跨系统受控执行的开源 AI Agent 框架。"
    },
    nav: {
      home: "首页",
      architecture: "架构",
      integrations: "集成",
      releases: "发布",
      docs: "文档",
      github: "GitHub"
    },
    common: {
      docsLabel: "文档",
      githubPrimary: "查看 GitHub",
      githubSecondary: "浏览仓库",
      architectureLabel: "架构",
      integrationsLabel: "集成",
      builtFor: "面向企业的多用户 AI Agent 框架",
      deepReference: "GitHub 深度参考",
      statusLegendTitle: "状态说明"
    },
    footer: {
      product: "产品",
      resources: "资源",
      repos: "仓库",
      contact: "联系",
      rights: "AtlasClaw 官网内容，服务于 atlasclaw.ai"
    },
    home: {
      title: "AtlasClaw | 企业级开源 AI Agent 框架",
      description:
        "AtlasClaw 是企业级开源 AI Agent 框架，帮助组织以多用户 AI Agent、受控执行、Provider 集成、Webhook AI 集成、SSO、RBAC 和企业受控大模型接入 AI 与企业系统。",
      hero: {
        eyebrow: "企业级开源 AI Agent 框架",
        title: "Open Source Enterprise AI Agent Framework",
        subtitle:
          "为多用户 AI Agent、受控执行、权限治理，以及真实企业 AI 技术应用而设计。",
        description:
          "AtlasClaw 不是个人 Agent 的企业放大版，而是帮助组织通过多用户 AI Agent 部署、SSO、RBAC、Skill 执行、Provider 集成、Webhook AI 集成和企业受控大模型，把 AI 能力真正接入系统和流程。",
        primaryCta: { label: "从核心仓库开始", href: repoLinks.core },
        secondaryCta: { label: "阅读架构说明", href: "/zh/architecture/" },
        panelTitle: "企业适配",
        panelStatus: "开源项目",
        signals: [
          {
            label: "多用户 AI Agent",
            value: "统一部署，多人使用",
            detail: "用一个企业级开源 AI Agent 框架统一服务组织用户，避免每个人单独配置。"
          },
          {
            label: "通过 Skills 连接系统",
            value: "Webhook 与 Provider 集成",
            detail: "通过 Webhook AI 集成、Skills 和 Providers，让可观测、ITSM、OA、CRM、SmartCMP、Jira 等系统在既有边界内获得 AI 能力。"
          },
          {
            label: "企业安全与合规",
            value: "SSO、RBAC 与管理员控制",
            detail: "基于 SSO 和 RBAC 对接现有系统权限，管理员可批准企业受控大模型并控制 Agent 行为。"
          },
          {
            label: "多通道接入",
            value: "从 IM 到 Agent 到系统",
            detail: "把 IM 作为随时随地的访问入口。用户先通过 Slack、WhatsApp、飞书、企业微信、钉钉访问 AtlasClaw Agent，再由 Agent 执行 Skills 并访问企业系统。"
          }
        ]
      },
      comparison: {
        eyebrow: "为什么企业场景需要 AtlasClaw",
        title: "个人 Agent 解决个人问题，AtlasClaw 解决企业问题。",
        description:
          "个人 Agent 适合个人工作流。AtlasClaw 面向多用户 AI Agent、受控执行、权限治理、Provider 集成、Webhook AI 集成和企业受控大模型。",
        items: [
          {
            title: "多用户部署",
            personalLabel: "个人 Agent",
            personalText: "每个人都要自己配置 Agent、工具和访问方式。",
            atlasLabel: "AtlasClaw",
            atlasText: "组织内用户共享一个统一部署的多用户 AI Agent，而不是重复建设。"
          },
          {
            title: "受控执行",
            personalLabel: "个人 Agent",
            personalText: "执行行为难以统一治理，也更容易出现不安全操作。",
            atlasLabel: "AtlasClaw",
            atlasText: "执行行为受 SSO、RBAC 和权限治理约束，降低不安全操作风险。"
          },
          {
            title: "企业系统对接",
            personalLabel: "个人 Agent",
            personalText: "个人工具链很难自然映射到企业内部系统与传统软件。",
            atlasLabel: "AtlasClaw",
            atlasText: "通过 Webhook AI 集成、Skill 执行和 Provider 集成，把可观测、ITSM、OA、CRM、SmartCMP、Jira 等企业系统和传统软件纳入 AI 能力层。"
          },
          {
            title: "模型治理",
            personalLabel: "个人 Agent",
            personalText: "模型接入通常是用户自己选择，难以满足企业治理要求。",
            atlasLabel: "AtlasClaw",
            atlasText: "统一对接企业受控大模型与管理员批准的模型服务。"
          }
        ]
      },
      features: {
        eyebrow: "企业应用重点",
        title: "AtlasClaw 从一开始就围绕企业核心诉求设计。",
        description:
          "它不是给单个用户堆工具，而是为了让企业级 AI Agent 应用真正落到系统、流程、权限治理和受控执行边界之内。",
        items: [
          {
            title: "多用户 AI Agent 部署",
            description:
              "用一个统一部署的多用户 AI Agent 服务组织内用户，而不是每个人各自折腾一套配置。"
          },
          {
            title: "权限受控执行",
            description:
              "所有动作都在 SSO、RBAC 和真实权限体系内执行，避免不安全操作越过企业边界。"
          },
          {
            title: "基于 Skill 的多系统对接",
            description:
              "通过 Webhook AI 集成、Skill 执行与 Provider 集成，把可观测、ITSM、OA、CRM、SmartCMP、Jira 等组织内系统和传统系统接进 AI 能力层。"
          },
          {
            title: "企业受控模型接入",
            description:
              "统一接入企业受控大模型与模型服务，而不是分散的个人模型配置。"
          }
        ]
      },
      modes: {
        eyebrow: "部署模式",
        title: "两种部署形态，同一种执行模型。",
        items: [
          {
            title: "嵌入式 Agent 模式",
            description:
              "把 AtlasClaw 作为现有企业系统中的 AI 模块接入，复用宿主系统的身份、上下文和界面。"
          },
          {
            title: "独立 Agent 平台模式",
            description:
              "把 AtlasClaw 作为多用户 AI Agent 层运行，用户在非嵌入式模式下通过 SSO 完成认证并访问系统。"
          }
        ]
      },
      flow: {
        eyebrow: "工作方式",
        title: "从用户意图到受控执行，路径始终清晰。",
        description:
          "核心负责编排，Provider 负责系统侧合同与实现，这让整个执行路径既清楚又可靠。",
        items: [
          "访问通道将请求送入 AtlasClaw Core。",
          "Agent Engine 选择 Skill 并组织执行。",
          "Provider 把工作翻译成目标系统操作。",
          "企业系统继续作为鉴权与审计的最终真实来源。"
        ]
      },
      paths: {
        eyebrow: "入口导航",
        title: "按你最关心的角度进入 AtlasClaw。",
        items: [
          {
            title: "理解核心架构",
            description: "看清通道、核心服务、Skills 与 Providers 如何形成统一执行模型。",
            href: "/zh/architecture/"
          },
          {
            title: "研究 Provider 模型",
            description: "理解 AtlasClaw 如何把集成能力组织成可复用的 Provider 边界。",
            href: "/zh/docs/providers/"
          },
          {
            title: "查看集成生态",
            description: "区分当前能力、参考架构与未来生态方向，不混淆真实状态。",
            href: "/zh/integrations/"
          }
        ]
      }
    },
    releases: {
      title: "AtlasClaw 发布记录 | 企业级 AI Agent 更新",
      description:
        "AtlasClaw 发布记录，覆盖企业级 AI Agent、长期记忆、Markdown Vault Provider、SmartCMP Provider、工作流编排和 Provider 集成更新。",
      keywords: [
        "AtlasClaw 发布记录",
        "AtlasClaw 版本更新",
        "企业级 AI Agent 更新",
        "企业级 AI Agent 发布说明",
        "开源 AI Agent 框架发布记录",
        "长期记忆 AI Agent",
        "Markdown Vault Provider",
        "SmartCMP Provider",
        "Provider 集成",
        "工作流编排",
        "Webhook AI 集成",
        "多用户 AI Agent"
      ],
      statsLabel: "发布摘要",
      tagsLabel: "发布标签",
      timelineLabel: "AtlasClaw 发布时间线",
      milestonesLabel: "版本阶段",
      hero: {
        eyebrow: "发布记录",
        title: "面向技术团队的产品发布记录。",
        description:
          "本页以技术产品发布说明的形式记录 AtlasClaw 的版本演进：Core 运行时发生了什么变化，Provider 新增了哪些能力，以及这些变化为什么会影响企业级 AI Agent 的部署与落地。"
      },
      stats: [
        {
          label: "最新版本",
          value: "v0.9.7",
          detail: "长期记忆、权限边界强化，以及 Markdown Vault 知识库接入。"
        },
        {
          label: "发布条目",
          value: "2",
          detail: "整理自 2026 年 4 月和 5 月的版本更新资料，并改写为中英文官网内容。"
        },
        {
          label: "覆盖范围",
          value: "Core + Providers",
          detail: "运行时、安全、通道、工作流、SmartCMP、Jira、GitHub 与共享技能。"
        }
      ],
      index: {
        eyebrow: "发布归档",
        title: "从框架底座到企业级平台，持续追踪 AtlasClaw 的演进。",
        description:
          "每个条目都呈现产品背景、实现层能力变化和 Provider 影响，方便技术团队理解版本价值。",
        actionLabel: "查看版本详情"
      },
      cta: {
        eyebrow: "源码与实现",
        title: "继续在开源仓库中跟进实现细节。",
        description:
          "发布记录说明产品层变化；Core 和 Providers 仓库保留实现细节、参考示例和贡献入口。",
        href: repoLinks.core,
        label: "打开 Core 仓库",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "打开 Providers 仓库"
      },
      items: [
        {
          id: "v0-9-7",
          version: "v0.9.7",
          dateIso: "2026-05-22",
          date: "2026 年 5 月 22 日",
          title: "长期记忆与 Markdown Vault 知识库 Provider",
          keywords: [
            "AtlasClaw v0.9.7",
            "长期记忆 AI Agent",
            "Markdown Vault Provider",
            "SmartCMP Provider",
            "企业级 AI Agent 记忆",
            "Webhook Robot Execution Profiles",
            "Provider Token Auth"
          ],
          summary:
            "本次更新面向长期使用场景：Core 侧新增用户隔离的长期记忆能力，强化多用户权限边界和多入口会话稳定性；Provider 侧新增 Markdown Vault 知识库，并继续深化 SmartCMP 的申请、审批与运维能力。",
          lede:
            "AtlasClaw v0.9.7 让企业 Agent 从一次性问答走向持续协作。Core 运行时新增长期用户记忆和更清晰的所有权校验，Provider 层新增 Markdown Vault 知识接入，并增强 SmartCMP 在资源申请、审批、运维和 Webhook 自动化中的能力覆盖。",
          tags: ["长期记忆", "权限边界", "Webhook", "Markdown Vault", "SmartCMP"],
          highlights: [
            {
              title: "用户隔离的长期记忆",
              description:
                "Agent 可以在权限允许的前提下记录用户偏好、工作习惯和常用上下文，让后续协作更自然。"
            },
            {
              title: "企业多用户边界更清晰",
              description:
                "Agent Run 归属、Session 创建和 Memory 写入等关键路径增加校验，更适合团队共享部署。"
            },
            {
              title: "Markdown Vault 知识库",
              description:
                "团队手册、运维知识库、项目文档和内部 Wiki 导出可以成为可检索、可问答的 Agent 知识来源。"
            },
            {
              title: "SmartCMP 工作流更完整",
              description:
                "资源申请、审批处理、后续运维、Provider Token Auth 与 Webhook Robot Execution Profiles 都扩展了覆盖范围。"
            }
          ],
          sections: [
            {
              eyebrow: "Core 运行时",
              title: "长期记忆让 Agent 具备持续上下文",
              body: [
                "Core 新增长期用户偏好与使用画像记录能力。在权限允许的前提下，Agent 可以记住用户的工作习惯、偏好信息和常用上下文，让下一次协作减少重复说明。",
                "记忆能力按用户隔离。这一点对企业部署尤其关键，因为多个员工、团队和外部入口会共享同一个 AtlasClaw 平台。"
              ],
              points: [
                "适合企业内部知识协作、个人助理、运维问答和持续项目跟进等场景。",
                "降低用户在重复任务中反复补充背景的成本。",
                "避免不同用户之间的使用画像和上下文信息串扰。"
              ]
            },
            {
              eyebrow: "Core 安全",
              title: "所有权和写入校验让多用户边界更清晰",
              body: [
                "企业级 Agent 不只要能完成任务，更要在权限上可解释、可治理。本次更新增强了 Agent Run 所有权校验、Session 创建校验、Memory 写入校验，并统一认证 Provider 的基础逻辑。"
              ],
              points: [
                "更清晰地区分用户身份、会话归属、记忆访问和 Skill 执行权限。",
                "为团队、部门、Web 用户、IM 用户和 Webhook 调用方并行使用同一部署打下更可靠的安全基础。",
                "让授权行为更容易被排查、解释和审计。"
              ]
            },
            {
              eyebrow: "会话与网关",
              title: "Web、IM 与 Webhook 多入口会话更稳定",
              body: [
                "围绕 Session Key、外部会话标识、幂等缓存和运行时用户路径，AtlasClaw 修复并增强了一批底层稳定性能力。这些变化不是最显眼的功能，但会直接影响真实企业入口的可靠性。"
              ],
              points: [
                "Web UI、IM 通道和 Webhook 入口可以在更干净的会话状态上协同工作。",
                "多步任务中的工具选择更加稳定。",
                "历史回放更清晰，减少运行时噪声对用户理解的干扰。"
              ]
            },
            {
              eyebrow: "访问通道",
              title: "IM 与 Webhook 更适合接入实时企业工作流",
              body: [
                "当用户通过企业微信、飞书、钉钉等 IM 入口发起请求后，AtlasClaw 可以更快返回“已接收、正在处理”的即时反馈。Webhook 侧也支持配置化 Shared Secret。"
              ],
              points: [
                "改善告警、审批、自动化工单和企业机器人等场景中的响应体验。",
                "通过更清晰的共享密钥边界增强系统到系统调用的安全性。",
                "让 Webhook AI 集成更适合实时运维和自动化联动。"
              ]
            },
            {
              eyebrow: "运营与部署",
              title: "管理与部署体验更适合长期运营",
              body: [
                "前端管理体验继续打磨，覆盖会话历史、Runtime 面板、角色权限展示、删除确认等细节。部署侧标准化运行日志输出与日志轮转配置，并补充 Docker、systemd、logrotate 等生产运行文件。"
              ],
              points: [
                "便于企业长期部署后的排障、维护和审计。",
                "让管理员日常使用的面板状态更清楚、更可预期。",
                "降低从本地评估走向生产运行时的交接成本。"
              ]
            },
            {
              eyebrow: "Provider",
              title: "Markdown Vault Provider 把已有文档资产转化为 Agent 知识",
              body: [
                "新增 markdown-vault Provider，可直接接入本地 Markdown 文档库，支持文档解析、知识检索和基于本地资料的问答。"
              ],
              points: [
                "团队手册、运维知识库、项目文档、内部 Wiki 都可以复用为知识来源。",
                "无需复杂系统改造，就能把已有文档资产变成可对话、可检索的能力。",
                "适合本地优先和受控知识边界要求较高的部署。"
              ]
            },
            {
              eyebrow: "SmartCMP",
              title: "资源申请、审批与运维链路持续增强",
              body: [
                "SmartCMP Provider 继续扩展完整资源生命周期能力：自然语言申请、审批辅助、资源运维、合规证据查看，以及多个运维技能共享资源视图。"
              ],
              points: [
                "资源申请支持同类型多实例、多实例 Schema 驱动，以及服务、资源包、参数规格之间更可靠的匹配。",
                "审批能力包括预审批支持、审批详情查询、待办列表展示、规格名称标准化和更结构化的审批输出。",
                "资源运维支持无需额外参数的资源变更、资源证据查看，以及按名称或列表序号选择合规分析对象。"
              ]
            },
            {
              eyebrow: "Provider 生态",
              title: "认证、GitHub 与通用文档能力扩展了 Provider 生态",
              body: [
                "Provider 仓库增强 SmartCMP Provider Token Auth，并支持 Webhook Robot Execution Profiles。同时新增 GitHub Provider 的 Token 认证方式，并补充通用文档与工作产物技能。"
              ],
              points: [
                "Webhook 调用方可以在更清晰的机器人身份和凭证边界下执行技能。",
                "GitHub Provider 为 Issue、Pull Request 和仓库操作接入 Agent 工作流建立基础。",
                "文本生成、XLSX 表格处理和演示文稿产物访问，让文本、表格、报告和幻灯片逐步进入 Agent 工作流。"
              ]
            }
          ],
          links: [
            { label: "Core 仓库", href: repoLinks.core },
            { label: "Providers 仓库", href: repoLinks.providers },
            { label: "联系 AtlasClaw", href: repoLinks.contact }
          ]
        },
        {
          id: "v0-9-3-overview",
          version: "v0.9.3",
          dateIso: "2026-04-24",
          date: "2026 年 4 月 24 日",
          title: "从 v0.6.2 到 v0.9.3 的平台演进总览",
          keywords: [
            "AtlasClaw v0.9.3",
            "AtlasClaw 版本历史",
            "Thin Core Rich Providers",
            "SmartCMP 集成",
            "Jira Provider",
            "GitHub Provider",
            "LLM-First 路由",
            "企业级 AI 工作流引擎"
          ],
          summary:
            "开源发布后 40+ 天的阶段性总览：17 个版本、249 次提交，AtlasClaw 从框架底座演进为具备企业级核心能力的 AI Agent 平台。",
          lede:
            "截至 2026 年 4 月 24 日，AtlasClaw 已从 v0.6.2 迭代到 v0.9.3，共经历 17 个版本。平台完成了 Thin Core, Rich Providers 架构成型，扩展 SmartCMP 与 Jira 集成，引入 GitHub Provider，强化企业安全，并引入 LLM-First 路由与工作流编排能力。",
          tags: ["架构", "Providers", "安全", "工作流", "多通道"],
          highlights: [
            {
              title: "17 个版本，249 次提交",
              description:
                "项目从基础框架快速演进到具备企业级运行能力的平台形态。"
            },
            {
              title: "Thin Core, Rich Providers",
              description:
                "核心保持路由、生命周期与编排职责，Provider 承接系统鉴权、工作流、脚本和审计规则。"
            },
            {
              title: "SmartCMP 与 Jira 深度展开",
              description:
                "云管、审批、Issue 操作、高级搜索、批量处理、字段发现和工时管理形成明确企业域。"
            },
            {
              title: "安全、路由和工作流成为平台能力",
              description:
                "SSO/RBAC、AES-256-GCM 加密、租户隔离、LLM-First 路由、工作流编排和生命周期 Hooks 进入核心设计。"
            }
          ],
          milestones: [
            {
              range: "v0.6.x",
              focus: "基础框架搭建，Provider 插件机制建立。"
            },
            {
              range: "v0.7.x",
              focus: "多渠道接入、嵌入式部署和工具编排体系成型。"
            },
            {
              range: "v0.8.x",
              focus: "企业级安全体系、RBAC 权限管理和 Provider 管理 UI 完善。"
            },
            {
              range: "v0.9.x",
              focus: "LLM 智能路由、工作流引擎和 SmartCMP 深度集成。"
            }
          ],
          sections: [
            {
              eyebrow: "架构",
              title: "Thin Core, Rich Providers 形成平台边界",
              body: [
                "AtlasClaw 坚持核心框架只负责路由、生命周期管理和执行协调，业务逻辑封装在独立 Provider 插件中，而不是不断堆进 Core。"
              ],
              points: [
                "接入新系统时优先开发 Provider 包，而不是修改核心代码。",
                "每个 Provider 独立承接认证方式、开放能力、执行脚本和审计约定。",
                "通过 {provider}:{skill} 的命名空间机制，不同系统能力互不冲突。"
              ]
            },
            {
              eyebrow: "SmartCMP",
              title: "旗舰 Provider 覆盖云管核心场景",
              body: [
                "SmartCMP 云管平台集成发展出 11 项技能，覆盖资源池查询、资产管理、主机启停、自然语言资源自助申请、审批流转、告警分析、成本优化、合规评估和 Webhook 预审批等核心场景。"
              ],
              points: [
                "用户可以用自然语言描述资源需求，由 Agent 辅助拆解并生成平台请求。",
                "Provider 把资源申请、审批流转和后续运维串联起来，而不是停留在表单提交。",
                "成本、告警和合规技能共享更完整的云管上下文。"
              ]
            },
            {
              eyebrow: "Jira",
              title: "项目管理能力被组织成可控 Skills",
              body: [
                "Jira Provider 定义了 5 项技能方向：Issue 管理、高级 JQL 搜索、批量操作、字段与敏捷配置发现，以及工时记录和时间报表。"
              ],
              points: [
                "已实现的 Issue 管理支持创建、查询、更新和关闭工单。",
                "规划中的高级能力包括保存筛选器、导出、批量状态变更、批量分配和克隆。",
                "Provider 模型让 Jira 字段、工作流语义和配置细节留在集成边界内。"
              ]
            },
            {
              eyebrow: "GitHub",
              title: "研发协作平台进入 AtlasClaw 执行框架",
              body: [
                "GitHub Provider 将代码协作系统纳入统一 Provider 框架，支持用户级 Token 认证，为通过对话完成 Issue 创建与管理、Pull Request 协作与审查、仓库信息查询等操作建立基础。"
              ],
              points: [
                "团队可以逐步把常规研发操作纳入受控 Agent 工作流。",
                "Provider 方式避免把代码仓库操作变成个人化、无边界的工具调用。",
                "Issue、PR 和仓库动作都可以进一步纳入权限控制和审计。"
              ]
            },
            {
              eyebrow: "共享技能",
              title: "社区技能让 Agent 能产出更多工作成果",
              body: [
                "除系统集成 Provider 外，生态中也出现了面向工作产物和 Agent 开发流程的共享技能。"
              ],
              points: [
                "文档生成覆盖 Word、PDF 和 PowerPoint 输出。",
                "通用技能包括 GitHub 操作、头脑风暴、长文本摘要、Provider/Skill 脚手架、技能质检和内容人性化。",
                "共享技能层让 AtlasClaw 同时服务系统操作和知识工作产出。"
              ]
            },
            {
              eyebrow: "多通道",
              title: "四类入口让员工在熟悉场景中使用 Agent",
              body: [
                "AtlasClaw 打通企业 IM 和嵌入式 iframe 使用方式，让员工不需要先学习新工具，也能在已有工作入口中访问 Agent。"
              ],
              points: [
                "IM 入口覆盖飞书、钉钉、企业微信等熟悉工作界面。",
                "嵌入式 iframe 布局可以把 Agent 对话窗口放进已有业务系统页面。",
                "同一执行层可以同时服务 Web、IM、嵌入式和 Webhook 入口。"
              ]
            },
            {
              eyebrow: "安全",
              title: "企业级控制成为架构能力，而不是附加功能",
              body: [
                "平台将企业部署所需的安全和治理能力放进架构设计，而不是作为可选包装。"
              ],
              points: [
                "认证支持本地认证、OIDC JWT、OIDC 登录、Google/GitHub 社交登录，以及 Keycloak、Okta、Azure AD 等企业 SSO。",
                "敏感数据采用 AES-256-GCM 加密存储。",
                "Agent 执行继承真实用户权限，租户隔离通过路径前缀和工具策略过滤实现，写操作需要用户确认。"
              ]
            },
            {
              eyebrow: "智能层",
              title: "LLM-First 路由和工作流编排减少硬编码行为",
              body: [
                "v0.9.x 引入 LLM-First 路由和工作流引擎，让 Agent 更自然地判断该调用哪个工具或 Skill，并组织多步骤、跨系统的业务流程。"
              ],
              points: [
                "LLM-First 路由由模型判断目标工具或 Skill，不再只依赖硬编码能力名称匹配。",
                "工作流编排支持多步骤、跨系统的复杂业务流程。",
                "Provider 可以定义各自的工作流模式，同时 Core 保持统一执行模型。"
              ]
            },
            {
              eyebrow: "Hooks 与部署",
              title: "生命周期 Hooks 和部署选项让定制化更可行",
              body: [
                "Hook 系统覆盖 Agent 运行全生命周期的 17+ 个阶段，部署形态则同时覆盖嵌入式和独立式场景。"
              ],
              points: [
                "Hooks 支持配置驱动脚本处理器、类型化运行时事件、每用户独立状态持久化，以及脚本故障沙箱隔离。",
                "部署支持嵌入模式和独立模式，分别适合已有产品内置 AI 模块和企业统一 AI 入口。",
                "容器、数据库和模型选择覆盖 Docker/docker-compose、开发 SQLite、生产 MySQL + Alembic、公有云模型以及 Ollama 私有部署。"
              ]
            }
          ],
          links: [
            { label: "Core 仓库", href: repoLinks.core },
            { label: "Providers 仓库", href: repoLinks.providers },
            { label: "官网仓库", href: repoLinks.website }
          ]
        }
      ]
    },
    architecture: {
      title: "企业级 AI Agent 架构 | AtlasClaw",
      description:
        "AtlasClaw 企业级 AI Agent 架构总览：轻核心编排、Provider 运行时、Skill 执行、Webhook AI 集成、受控执行和权限继承。",
      hero: {
        eyebrow: "架构",
        title: "这是一套面向企业系统，而不是个人 Agent 的架构。",
        description:
          "像 OpenClaw 这类个人 Agent 更偏向个人工具使用和用户自有配置。AtlasClaw 则把核心编排与 Provider 运行时合同分开，让多用户部署、受控执行、权限治理和企业系统边界能够在生产环境里成立。"
      },
      principles: [
        {
          title: "轻核心",
          description:
            "核心负责路由、上下文、会话、工具与执行编排，不吞并每个平台的业务规则。"
        },
        {
          title: "强 Provider",
          description:
            "每个 Provider 都封装 SmartCMP、Jira、ITSM、可观测、OA、CRM 等目标系统的鉴权行为、Skills、脚本、参考资料与接口归一化。"
        },
        {
          title: "权限继承",
          description:
            "AtlasClaw 传递真实用户身份边界，把授权与审计继续留在目标平台。"
        }
      ],
      runtime: [
        "访问通道包括 Web UI、嵌入面板、聊天平台与 Webhook AI 集成。",
        "AtlasClaw Core 提供 API 层、会话服务、Provider Registry 与 Agent Engine。",
        "Skill 执行交给理解目标平台鉴权和操作模型的 Provider。",
        "外部企业系统仍然是执行落点与业务真实来源。"
      ],
      comparison: [
        {
          title: "为什么不是个人 Agent 架构？",
          description:
            "像 OpenClaw 这类个人 Agent 更适合个人效率场景。企业环境需要共享部署、受控访问、Provider 合同和系统侧审计边界，AtlasClaw 把这些要求显式建模。"
        },
        {
          title: "为什么要 Provider Qualified Skills？",
          description:
            "显式的 Provider 前缀避免技能冲突，让执行目标更清晰，也让 Webhook 调度更安全。"
        },
        {
          title: "为什么要同时支持嵌入式和独立式？",
          description:
            "有些团队需要在已有产品中加 AI 模块，有些团队需要统一的跨系统 Agent 入口。AtlasClaw 用同一套核心心智支持两种形态。"
        },
        {
          title: "系统如何接入 LLM brains？",
          description:
            "通过 Webhook 入口和 provider-qualified skills，现有系统可以把 AtlasClaw 作为 AI 执行层调用，让传统产品无需重建一套 Agent 栈也能获得 LLM 能力。"
        }
      ]
    },
    integrations: {
      title: "企业级 AI Agent Provider 集成 | AtlasClaw",
      description:
        "AtlasClaw 集成架构页面，说明如何通过 Provider 集成、Skills、Webhook AI 集成、SmartCMP、Jira 与受控执行连接企业系统。",
      hero: {
        eyebrow: "集成",
        title: "这是一套面向企业系统的集成架构，而不是零散的工具连接。",
        description:
          "AtlasClaw 把集成建模为 Provider 合同，让 IM、Web、嵌入式应用与 Webhook AI 集成都能访问同一个多用户 AI Agent 层，由 Skills 执行并连接受控企业系统。"
      },
      architecture: {
        eyebrow: "为什么是这种架构",
        title: "企业 AI 的成败，往往就在集成层。",
        description:
          "AtlasClaw 的 Provider 集成模型强调边界显式化。Provider 承担系统合同，Skills 作为可执行且收敛的动作边界，Core 保持统一编排模型。",
        items: [
          {
            title: "Provider 合同，而不是松散工具包装",
            description:
              "每个 Provider 集成自己承接鉴权模型、脚本、参考资料与系统侧规则，而不是把这些逻辑泄漏到核心里。"
          },
          {
            title: "Skills 变成受控的系统动作",
            description:
              "Skills 是用户意图与目标系统动作之间的受控执行边界。"
          },
          {
            title: "一个 Agent 层，对接多种访问方式",
            description:
              "IM、Web、嵌入式模块与 Webhook 调用都可以进入同一个 AtlasClaw 执行模型。"
          },
          {
            title: "让现有系统获得 AI，而不是重建系统",
            description:
              "传统产品可以把 AtlasClaw 当作 Webhook AI 集成层调用，而不必从头实现自己的一整套 Agent 栈。"
          }
        ]
      },
      flow: {
        eyebrow: "执行路径",
        title: "从访问入口到受控系统动作。",
        description:
          "这套集成模型可读，是因为每一跳的职责边界都清晰。",
        items: [
          "用户或系统通过 IM、Web UI、嵌入面板或 Webhook 入口访问 AtlasClaw。",
          "Agent Engine 选择 provider-qualified skills，并生成执行计划。",
          "Provider 用正确的鉴权方式、数据边界与系统语义把意图翻译成目标系统操作。",
          "企业系统继续作为权限、流程状态与审计的真实来源。"
        ]
      },
      domains: {
        eyebrow: "企业系统域",
        title: "一套 Provider 模型，贯穿整个企业技术栈。",
        description:
          "同一套 Provider 集成架构可以落到运维系统、业务系统、研发系统、SmartCMP 和 Jira 中。",
        items: [
          {
            eyebrow: "当前参考",
            name: "SmartCMP",
            description:
              "一个 SmartCMP Provider 参考，覆盖云管理请求流、审批、Webhook 编排和面向业务的 Skill 分层。",
            href: repoLinks.smartCmp
          },
          {
            eyebrow: "当前示例",
            name: "Jira",
            description:
              "一个 Jira Provider 示例，展示 Issue 操作、provider-qualified skills 和企业 Agent 接线模式。",
            href: repoLinks.jira
          },
          {
            eyebrow: "IT 运维",
            name: "ITSM 系统",
            description:
              "服务请求、工单和运维流程可以通过受控 Provider 执行，而不是临时拼接的工具调用。"
          },
          {
            eyebrow: "可观测",
            name: "监控与告警系统",
            description:
              "告警、事件与运行诊断可以被映射成显式的 Skills。"
          },
          {
            eyebrow: "业务运营",
            name: "OA、CRM、HR 与财务系统",
            description:
              "业务流程可以获得 AI 协调能力，同时保持系统侧权限与审批边界。"
          },
          {
            eyebrow: "研发系统",
            name: "GitHub 与工程工具",
            description:
              "研发流程可以作为 Provider 域接入，而不是外挂式的个人 Agent 工具。"
          }
        ]
      },
      providerModel: {
        title: "Provider 模型",
        description:
          "Provider 是自包含集成包：连接合同、鉴权约定、Skills、脚本与参考资料。Core 从 `providers_root` 加载它们，并以 provider-qualified skills 暴露给运行时。",
        points: [
          "Provider 让平台特定的鉴权和流程逻辑不污染核心。",
          "Skills 对用户可读，同时对运行时保持显式可调度。",
          "Webhook 和多通道访问都能落到同一个 provider-qualified 执行层。"
        ]
      },
      valuePanel: {
        title: "企业真正得到什么",
        description:
          "它不只是帮你接 API，而是在现有系统之上建立统一、受控的 AI 执行层。",
        points: [
          "一个多用户 Agent 层，而不是重复的个人集成。",
          "一种把 AI 能力接进现有企业产品的复用方式。",
          "更清晰的权限控制、审计路径与系统归属边界。"
        ]
      },
      cta: {
        title: "创建你自己的 Provider",
        description:
          "从 SmartCMP 与 Jira 示例开始，按 Provider 级配置、Skill 元数据和窄脚本实现你的目标系统。欢迎把新的系统集成代码提交到 atlasclaw-providers 仓库。",
        href: "/zh/docs/providers/",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "前往 GitHub 提交集成"
      }
    },
    docs: {
      title: "AtlasClaw 文档 | 企业级 AI Agent 框架",
      description:
        "AtlasClaw 文档入口，涵盖企业级开源 AI Agent 框架、Provider 集成、Skill 执行、Webhook AI 集成、快速开始与部署。",
      hero: {
        eyebrow: "文档",
        title: "从官网快速进入 AtlasClaw 的代码、模型与设计文档。",
        description:
          "官网提供清晰路径，仓库保留完整实现细节。"
      },
      items: [
        {
          title: "快速开始",
          description: "了解 AtlasClaw 是什么、仓库如何分工，以及本地跑起来的最短路径。",
          href: "/zh/docs/getting-started/"
        },
        {
          title: "Providers",
          description: "理解 Provider 文件夹结构、Skill 模型与 provider-qualified naming。",
          href: "/zh/docs/providers/"
        },
        {
          title: "部署",
          description: "理解嵌入式与独立式部署差异，以及运行时配置锚点。",
          href: "/zh/docs/deployment/"
        }
      ],
      repoCards: [
        {
          title: "atlasclaw",
          description: "核心运行时、API 层、Agent Engine、会话、工具与设计文档。",
          href: repoLinks.core
        },
        {
          title: "atlasclaw-providers",
          description: "可复用 Provider 包与参考实现仓库。",
          href: repoLinks.providers
        },
        {
          title: "atlasclaw-web",
          description: "这个官网与 GitHub Pages 发布目标仓库。",
          href: repoLinks.website
        }
      ]
    },
    gettingStarted: {
      title: "AtlasClaw 快速开始 | 企业级 AI Agent 框架",
      description:
        "快速开始使用 AtlasClaw 企业级开源 AI Agent 框架，并理解仓库结构、Provider 集成和最小启动流程。",
      intro:
        "AtlasClaw 提供了一种务实方式，帮助团队在既有企业系统之上搭建统一的多用户 AI Agent 交互与执行层。",
      repos: [
        {
          name: "atlasclaw",
          description: "核心运行时：API 层、Agent Engine、Session/Memory、内置工具与主文档。",
          href: repoLinks.core
        },
        {
          name: "atlasclaw-providers",
          description: "Provider 包、起步模式与 Jira、SmartCMP 等参考实现。",
          href: repoLinks.providers
        },
        {
          name: "atlasclaw-web",
          description: "atlasclaw.ai 的静态官网仓库。",
          href: repoLinks.website
        }
      ],
      steps: [
        "在 `atlasclaw` 仓库中创建 Python 虚拟环境。",
        "从 `requirements.txt` 安装核心依赖。",
        "把 `providers_root` 指向外部 providers 仓库。",
        "在 `atlasclaw.json` 中配置 LLM provider。",
        "启动 FastAPI 服务并打开 Web UI。"
      ],
      commands: [
        "python3 -m venv .venv",
        "source .venv/bin/activate",
        "pip install -r requirements.txt",
        "uvicorn app.atlasclaw.main:app --reload --host 0.0.0.0 --port 8000"
      ],
      configSnippet: `{
  "providers_root": "../atlasclaw-providers/providers",
  "model": {
    "primary": "kimi/kimi-k2.5",
    "temperature": 0.7,
    "providers": {
      "kimi": {
        "base_url": "\${ANTHROPIC_BASE_URL}",
        "api_key": "\${ANTHROPIC_API_KEY}",
        "api_type": "anthropic"
      }
    }
  }
}`,
      references: [
        { label: "核心仓库 README", href: repoLinks.architecture },
        { label: "Providers 仓库 README", href: repoLinks.providerGuide }
      ]
    },
    providers: {
      title: "AtlasClaw Providers | Skill 执行与企业 AI 集成",
      description:
        "AtlasClaw Provider 结构、Skill 模型、provider-qualified naming、Webhook AI 集成、SmartCMP、Jira 与企业 AI 集成参考示例。",
      intro:
        "Provider 是 AtlasClaw 的集成边界。每个 Provider 都封装目标系统合同、一个或多个 Skills、鉴权上下文、实现脚本，以及让企业 AI 集成保持可理解的参考资料。",
      structure: `providers/<provider-name>/
├── PROVIDER.md
├── README.md
└── skills/
    ├── <skill-a>/
    │   ├── SKILL.md
    │   ├── scripts/
    │   └── references/
    └── <skill-b>/`,
      points: [
        "Provider 负责把 AtlasClaw 的身份上下文变成目标系统可接受的鉴权方式。",
        "Skill 既保持人类可读，也能绑定到具体脚本入口。",
        "Provider Qualified Naming 用于避免跨系统能力冲突。",
        "脚本应该保持窄而可预测，并正确处理密钥与错误映射。"
      ],
      naming: `{
  "providers_root": "../atlasclaw-providers/providers",
  "webhook": {
    "systems": [
      {
        "allowed_skills": ["jira:jira-issue"]
      }
    ]
  }
}`,
      examples: [
        { label: "SmartCMP 参考架构", href: repoLinks.smartCmp },
        { label: "Jira Provider 示例", href: repoLinks.jira }
      ]
    },
    deployment: {
      title: "AtlasClaw 部署 | 多用户企业级 AI Agent",
      description:
        "AtlasClaw 的部署模式、SSO/RBAC 配置基础、Provider 运行时接线与企业级 AI Agent 运行时关键点。",
      intro:
        "AtlasClaw 支持两种实用形态：嵌入已有产品，或者作为统一的多用户 AI Agent 层运行在多个企业系统之上。",
      modes: [
        {
          title: "嵌入式部署",
          description:
            "适合已有企业应用希望原位增加 AI 能力，而不把用户迁移到新的独立产品入口。"
        },
        {
          title: "独立式部署",
          description:
            "适合企业需要在多个系统之上提供统一的 SSO 多用户 AI Agent 入口。"
        }
      ],
      config: `{
  "providers_root": "../atlasclaw-providers/providers",
  "service_providers": {
    "jira": {
      "cloud": {
        "base_url": "https://company.atlassian.net",
        "token": "\${JIRA_API_TOKEN}"
      }
    },
    "smartcmp": {
      "prod": {
        "base_url": "https://cmp.corp.com/platform-api",
        "cookie": "\${CMP_COOKIE}"
      }
    }
  }
}`,
      notes: [
        "使用 `providers_root` 从外部 providers 仓库加载 Provider 文件夹。",
        "密钥放在环境变量里，不要提交到 JSON 配置。",
        "Webhook 模式适合系统到系统的 fire-and-forget 调用，并通过受限 Skills 控制执行边界。",
        "目标平台的鉴权与审计继续保留在 Provider 和下游平台内部。"
      ],
      references: [
        { label: "核心仓库 README", href: repoLinks.architecture },
        { label: "Providers 仓库 README", href: repoLinks.providerGuide }
      ]
    }
  }
};
