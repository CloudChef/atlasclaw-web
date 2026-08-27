export const repoLinks = {
  core: "https://github.com/CloudChef/atlasclaw",
  providers: "https://github.com/CloudChef/atlasclaw-providers",
  docs: "https://github.com/CloudChef/atlasclaw-doc",
  website: "https://github.com/CloudChef/atlasclaw-web",
  contact: "mailto:atlasclaw@cloudchef.io",
  architecture:
    "https://github.com/CloudChef/atlasclaw/blob/main/README.md",
  providerGuide:
    "https://github.com/CloudChef/atlasclaw-providers/blob/main/README.md",
  embedGuide:
    "https://github.com/CloudChef/atlasclaw/blob/main/docs/EMBED-INTEGRATION.md",
  providerLoading:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/docs/provider-integration/provider-loading.md",
  providerLoadingZh:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/provider-integration/provider-loading.md",
  haGuide:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/docs/manuals/installation/configuration.md",
  haGuideZh:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/manuals/installation/configuration.md",
  embeddedDocs:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/docs/provider-integration/embedded-menu-and-floating-ui.md",
  embeddedDocsZh:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/provider-integration/embedded-menu-and-floating-ui.md",
  editorAssistance:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/docs/provider-integration/smartcmp/editor-assistance.md",
  editorAssistanceZh:
    "https://github.com/CloudChef/atlasclaw-doc/blob/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/provider-integration/smartcmp/editor-assistance.md",
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
      embedded: "Embedded Mode",
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
          "AtlasClaw is designed for organizations that want enterprise AI agent capabilities to live inside actual products, page context, workflows, permissions, and system boundaries.",
        items: [
          {
            title: "Embedded Agent with live Context",
            description:
              "Embed AtlasClaw into an enterprise application so the system gains an AI assistant through independent menu access or a compact floating interface."
          },
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
              "Bring the same AtlasClaw assistant into an Enterprise System through an independent menu entry or a floating interface. Both reuse the enterprise-system Cookie identity; the floating interface can follow page changes through dynamic Context matching."
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
          },
          {
            title: "Embed AtlasClaw in an enterprise application",
            description:
              "See the two Embedded surfaces, Cookie identity, dynamic Context matching, and the small enterprise-system bridge behind deep interaction.",
            href: "/en/embedded-agent/"
          }
        ]
      }
    },
    releases: {
      title: "AtlasClaw Release Notes | Enterprise AI Agent Updates",
      description:
        "AtlasClaw release notes for embedded AI assistants, dynamic Context matching, object actions, SmartCMP resource analysis, Provider routing, workflow orchestration, and integrations.",
      keywords: [
        "AtlasClaw release notes",
        "AtlasClaw releases",
        "AtlasClaw v1.0.0",
        "embedded AI assistant",
        "dynamic Context matching",
        "object actions",
        "enterprise AI agent updates",
        "enterprise AI agent release notes",
        "open source AI agent framework releases",
        "Provider instance routing",
        "multi-instance Provider integration",
        "Markdown Vault runtime retrieval",
        "long-term memory AI agent",
        "Markdown Vault Provider",
        "SmartCMP Provider",
        "SmartCMP request field contract",
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
        eyebrow: "Releases",
        title: "AtlasClaw Release Notes",
        description:
          "Version updates for AtlasClaw Core and Providers, including runtime capabilities, enterprise security, provider integrations, and workflow automation."
      },
      stats: [
        {
          label: "Latest release",
          value: "v1.0.0",
          detail: "Reliable workflows, responsive Embedded intelligence, minimal HA, and versioned Provider packages."
        },
        {
          label: "Release entries",
          value: "7",
          detail: "Seven curated release entries spanning April through August 2026."
        },
        {
          label: "Coverage",
          value: "Core + Providers",
          detail: "Agent workflows, Embedded UX, governed actions, HA runtime, versioned Providers, and deployment."
        }
      ],
      index: {
        eyebrow: "Version history",
        title: "Current and recent platform updates",
        description:
          "Browse release entries by version to see Core runtime changes, Provider capabilities, and enterprise workflow improvements.",
        actionLabel: "Open release"
      },
      cta: {
        eyebrow: "Source and implementation",
        title: "Review the source behind each release",
        description:
          "The release notes summarize product changes. The Core and Providers repositories contain the implementation details, examples, and contribution path.",
        href: repoLinks.core,
        label: "Open core repo",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "Open providers repo"
      },
      items: [
        {
          id: "v1-0-0",
          version: "v1.0.0",
          dateIso: "2026-08-27",
          date: "August 27, 2026",
          title: "Reliable workflows, embedded intelligence, and HA runtime",
          keywords: [
            "AtlasClaw v1.0.0",
            "enterprise AI agent",
            "high availability AI agent",
            "embedded AI assistant",
            "Agent workflow continuity",
            "SmartCMP Provider 1.0"
          ],
          summary:
            "AtlasClaw 1.0 establishes a more reliable enterprise runtime with durable Agent workflows, native cancellation, responsive Embedded Context, minimal HA support, and a reusable SmartCMP Provider package.",
          lede:
            "v1.0.0 is the first major AtlasClaw baseline across Core and Providers. It strengthens multi-step Agent execution, preserves the current business target across follow-up turns, adds user-controlled cancellation, expands page-aware Embedded intelligence, introduces a minimal high-availability runtime, and packages SmartCMP domain execution behind typed Provider operations and thin Skill adapters.",
          tags: ["1.0", "Agent Runtime", "Embedded", "High Availability", "SmartCMP"],
          highlights: [
            {
              title: "Durable Agent workflows",
              description:
                "Structured workflow state, tool scope, exact targets, and bounded continuation metadata remain coherent across follow-up turns."
            },
            {
              title: "Responsive user control",
              description:
                "Native stop cancels the active Agent run while preserving usable partial content, complete generated output, and generic code copy."
            },
            {
              title: "Minimal HA runtime",
              description:
                "Shared state, stable node identity, sticky routing, and coordinated long-connection Channel ownership support multi-node operation."
            },
            {
              title: "SmartCMP Provider 1.0",
              description:
                "SmartCMP becomes a versioned Python package with centralized auth, typed domain operations, deterministic Context, and thin Skill adapters."
            }
          ],
          sections: [
            {
              eyebrow: "Agent runtime",
              title: "Multi-step work stays bound to the right capability and target",
              body: [
                "Core now restores structured and serialized workflow context more reliably. Contextual text turns stay bound to the current business object without hiding other Skills that remain valid for the request."
              ],
              points: [
                "Capability planning, tool execution, retries, and authorization are more stable.",
                "Selected Skills retain their complete authorized Tool scope.",
                "Trace-bound continuation metadata is bounded and produces diagnostics when it exceeds its context budget."
              ]
            },
            {
              eyebrow: "Chat and Embedded experience",
              title: "Users can stop work safely while the assistant follows the latest page",
              body: [
                "The Chat interface adds a native stop control backed by real Agent cancellation. Embedded Context resolution now debounces rapid navigation, exposes a loading state, and applies only the latest page generation."
              ],
              points: [
                "Cancelled runs preserve useful partial assistant output instead of discarding it.",
                "Generated forms, scripts, policies, and code remain complete and copyable.",
                "Generic object actions enter the ordinary Chat, Skill, Tool, RBAC, confirmation, and audit pipeline."
              ]
            },
            {
              eyebrow: "High availability",
              title: "A minimal multi-node runtime defines explicit ownership boundaries",
              body: [
                "HA deployments use shared MySQL and an initialized shared Workspace, stable unique node IDs, and upstream sticky routing for authenticated users. Runtime-local state remains local to each node."
              ],
              points: [
                "Agent Heartbeat work runs on at most one configured node.",
                "HA accepts only registered long-connection Channel modes; webhook modes remain available for single-node deployments.",
                "Channel ownership does not automatically transfer after a permanent node failure."
              ]
            },
            {
              eyebrow: "Provider 1.0",
              title: "SmartCMP workflows use reusable domain operations and exact targets",
              body: [
                "SmartCMP centralizes authentication, transport, typed models, request placement, lifecycle operations, and business services in an installable Provider package. Skills and Context resolvers stay thin and AtlasClaw-facing."
              ],
              points: [
                "Request, approval, work-order, resource, alarm, cost, compliance, and editor Contexts preserve exact target identity.",
                "Template-aware provisioning revalidates live choices before submission and preserves opaque request IDs.",
                "Lifecycle actions follow the recycle workflow, with permanent removal available only for already recycled resources."
              ]
            }
          ],
          links: [
            {
              label: "Core v1.0.0 release",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v1.0.0"
            },
            {
              label: "Providers v1.0.0 release",
              href: "https://github.com/CloudChef/atlasclaw-providers/releases/tag/v1.0.0"
            }
          ]
        },
        {
          id: "v0-9-14",
          version: "v0.9.14",
          dateIso: "2026-07-24",
          date: "July 24, 2026",
          title: "Embedded Context, object actions, and resource intelligence",
          keywords: [
            "AtlasClaw v0.9.14",
            "embedded AI assistant",
            "floating AI assistant",
            "dynamic Context matching",
            "Provider object actions",
            "SmartCMP resource analysis"
          ],
          summary:
            "AtlasClaw can now follow an Enterprise System page, resolve Provider-owned Context, and surface governed actions inside a compact floating assistant. SmartCMP adds page-aware alarm, cost, request, approval, and resource workflows.",
          lede:
            "v0.9.14 turns Embedded Mode into a deeply interactive product experience. An Enterprise System can provide independent menu access to AtlasClaw and add a compact floating assistant that follows page navigation. Both reach the same Agent runtime. Core matches the page deterministically, a Provider resolves the current domain object and actions, and the ordinary Agent permission and confirmation pipeline remains responsible for execution.",
          tags: ["Embedded", "Dynamic Context", "Object Actions", "Floating UI", "SmartCMP"],
          highlights: [
            {
              title: "Provider-scoped page Context",
              description:
                "Configured HostApp Provider routes map page paths to one resolver, which returns the current object and its available actions."
            },
            {
              title: "Compact floating assistant",
              description:
                "The Embedded floating surface now keeps Context and object actions visible without taking over the Enterprise System page."
            },
            {
              title: "Governed object actions",
              description:
                "Provider-authored prompt actions enter the normal Chat, Skill, Tool, RBAC, and confirmation path instead of bypassing the Agent runtime."
            },
            {
              title: "Resource-level intelligence",
              description:
                "SmartCMP adds health, cost, compliance, and comprehensive analysis grounded in the current resource and available evidence."
            }
          ],
          sections: [
            {
              eyebrow: "Embedded runtime",
              title: "A floating assistant can follow the active Enterprise System page",
              body: [
                "The Enterprise System sends a normalized router path, nonce, and generation through a strict cross-window message contract. Core rejects stale updates and refreshes Context only for the current page.",
                "Independent menu access does not require page Context. Both access surfaces reach the same Agent runtime under the signed-in browser identity."
              ],
              points: [
                "Menu and floating surfaces can be adopted independently.",
                "Enterprise System messages do not carry AtlasClaw session keys, Provider configuration, or business DTOs.",
                "Unsupported pages keep ordinary Chat available without page Context; unavailable Context remains closed without falling back to unrelated capabilities."
              ]
            },
            {
              eyebrow: "Context and actions",
              title: "Providers own domain meaning while Core owns the protocol",
              body: [
                "A single configured Embedded integration fixes the HostApp Provider binding. Its resolver turns deterministically matched route parameters into a domain object and an ordered set of actions."
              ],
              points: [
                "Core owns route matching, generation handling, snapshots, and permission revalidation.",
                "Providers own object resolution, labels, safe navigation targets, and state-aware action builders in Domain Skills.",
                "Prompted operations are rechecked at execution time and remain subject to runtime confirmation rules."
              ]
            },
            {
              eyebrow: "SmartCMP Provider",
              title: "Current-page intelligence now spans key cloud operations",
              body: [
                "SmartCMP uses the Context contract across alarm details, cost recommendations, approvals, service catalog requests, applications, cloud resources, and VM details."
              ],
              points: [
                "Alarm and cost Context can expose analysis and remediation actions.",
                "Comprehensive resource analysis keeps alert evidence separate from component-model-driven Prometheus health analysis.",
                "Resource cost, compliance, and comprehensive analysis use explicit evidence states and Provider-owned workflows."
              ]
            },
            {
              eyebrow: "Agent routing",
              title: "Capability selection and follow-up continuity are more direct",
              body: [
                "The release also streamlines capability routing so the active Provider capability and its evidence stay coherent across follow-up turns."
              ],
              points: [
                "Capability projection is clearer for the model and user.",
                "Follow-up questions can continue the active workflow when the evidence still applies.",
                "Tool execution retains the selected Provider and permission boundary."
              ]
            }
          ],
          links: [
            {
              label: "Core v0.9.14 release",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v0.9.14"
            },
            {
              label: "Providers v0.9.14 release",
              href: "https://github.com/CloudChef/atlasclaw-providers/releases/tag/v0.9.14"
            },
            { label: "Explore Embedded Agent", href: "/en/embedded-agent/" }
          ]
        },
        {
          id: "v0-9-13",
          version: "v0.9.13",
          dateIso: "2026-07-10",
          date: "July 10, 2026",
          title: "Timezone-safe Skill execution and stronger form design",
          keywords: [
            "AtlasClaw v0.9.13",
            "Skill timezone context",
            "cost optimization timezone",
            "form designer validation",
            "Provider workflow reliability"
          ],
          summary:
            "Skill scripts now receive the request timezone without leaking timezone state between runs. SmartCMP cost workflows and the form designer gain safer defaults, validation, and value handling.",
          lede:
            "v0.9.13 focuses on execution correctness at two external boundaries: time-sensitive Skill scripts and generated form logic. Core isolates the timezone for each request, while Providers use that context in cost workflows and validate generated JavaScript before form definitions move forward.",
          tags: ["Timezone", "Skills", "Cost Optimization", "Form Designer"],
          highlights: [
            {
              title: "Request timezone reaches Skills",
              description:
                "Scripts can interpret dates and cost periods in the user's request timezone instead of relying on process-wide defaults."
            },
            {
              title: "Timezone context stays isolated",
              description:
                "One execution cannot leave timezone state behind for a later user or workflow."
            },
            {
              title: "Generated forms fail earlier",
              description:
                "SmartCMP validates generated JavaScript syntax and improves catalog context and field value handling."
            }
          ],
          sections: [
            {
              eyebrow: "Core execution",
              title: "Timezone becomes request-scoped runtime context",
              body: [
                "Core passes the request timezone into Skill scripts and restores the surrounding process state after execution. This matters for shared multi-user deployments where concurrent tasks may use different locales."
              ],
              points: [
                "Date calculations can follow the user's request context.",
                "Timezone state does not leak between script executions.",
                "Invalid or absent controls can fall back without corrupting later runs."
              ]
            },
            {
              eyebrow: "SmartCMP Provider",
              title: "Cost and form workflows handle generated inputs more safely",
              body: [
                "Cost optimization uses the request timezone and current defaults more consistently. The form designer checks generated JavaScript syntax and improves how catalog context and values are carried into the design flow."
              ],
              points: [
                "Cost windows stay aligned with the requesting user's time context.",
                "Invalid timezone controls use a defined fallback path.",
                "Form logic errors are detected before they become harder-to-debug runtime failures."
              ]
            }
          ],
          links: [
            {
              label: "Core v0.9.13 release",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v0.9.13"
            },
            {
              label: "Providers v0.9.13 release",
              href: "https://github.com/CloudChef/atlasclaw-providers/releases/tag/v0.9.13"
            }
          ]
        },
        {
          id: "v0-9-12",
          version: "v0.9.12",
          dateIso: "2026-06-24",
          date: "June 24, 2026",
          title: "Object action controls and safer response handling",
          keywords: [
            "AtlasClaw v0.9.12",
            "object action buttons",
            "Agent confirmation",
            "Provider response handling",
            "Minimax compatibility"
          ],
          summary:
            "Provider responses can expose structured object actions as clear UI controls, while confirmation handling, response parsing, and model compatibility become more reliable.",
          lede:
            "v0.9.12 makes Provider-defined actions easier to discover and safer to execute. AtlasClaw renders structured actions as buttons, preserves confirmation boundaries, and avoids treating ordinary schema output as an authentication failure.",
          tags: ["Object Actions", "Confirmation", "Chat UI", "Compatibility"],
          highlights: [
            {
              title: "Provider actions become visible controls",
              description:
                "Structured object actions can appear as buttons instead of requiring users to infer the next operation from raw output."
            },
            {
              title: "Confirmation remains explicit",
              description:
                "Action prompts and confirmation metadata stay attached to the selected operation before execution proceeds."
            },
            {
              title: "Response handling distinguishes schema from auth errors",
              description:
                "Ordinary JSON schema output is no longer rewritten as a Provider credential failure."
            }
          ],
          sections: [
            {
              eyebrow: "Agent interaction",
              title: "Object actions connect Provider results to the next safe step",
              body: [
                "The runtime normalizes Provider-authored object actions and renders them in Chat while preserving the ordinary Agent, Skill, Tool, permission, and confirmation path."
              ],
              points: [
                "Navigation and prompt actions have a consistent UI contract.",
                "Confirmation-required operations stay visibly distinct.",
                "Message layout keeps action controls aligned with the related result."
              ]
            },
            {
              eyebrow: "Runtime reliability",
              title: "Model and Provider responses are interpreted more precisely",
              body: [
                "The release narrows authentication-failure detection and improves model-message compatibility so valid structured output remains available to the conversation."
              ],
              points: [
                "Schema output is not mistaken for a missing credential.",
                "Minimax-compatible requests merge system messages correctly.",
                "Streaming and stored messages retain action metadata."
              ]
            }
          ],
          links: [
            {
              label: "Core v0.9.12 release",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v0.9.12"
            }
          ]
        },
        {
          id: "v0-9-11",
          version: "v0.9.11",
          dateIso: "2026-06-04",
          date: "June 4, 2026",
          title: "Provider instance routing and runtime Markdown Vault retrieval",
          keywords: [
            "AtlasClaw v0.9.11",
            "Provider instance routing",
            "multi-instance Provider integration",
            "Markdown Vault runtime retrieval",
            "Markdown knowledge base AI agent",
            "SmartCMP request field contract",
            "workflow continuation routing",
            "Qwen vLLM compatibility",
            "enterprise AI agent operations"
          ],
          summary:
            "This release tightens the runtime boundary for multi-system enterprise deployments: provider skills can route to specific provider instances, workflow continuations use model and evidence context, Markdown Vault reads files at runtime, and SmartCMP request contracts are clearer.",
          lede:
            "AtlasClaw v0.9.11 focuses on the situations enterprise teams hit once a single integration type maps to several real systems. A SmartCMP Provider can represent development, test, and production CMP instances; a Markdown Vault Provider can represent separate product, operations, and project knowledge bases. The release makes those instance boundaries visible to skill selection, tool projection, and script execution while improving evidence-grounded knowledge retrieval and production operations settings.",
          tags: ["Provider Routing", "Markdown Vault", "SmartCMP", "Operations", "Local Models"],
          highlights: [
            {
              title: "Instance-scoped Provider Skills",
              description:
                "Slash Commands and webhook preselection now preserve both the selected Provider instance and the selected Skill."
            },
            {
              title: "Workflow continuation by context",
              description:
                "The runtime can use conversation state, active capability, and tool evidence to decide whether to continue a flow, switch capability, or answer directly."
            },
            {
              title: "Markdown Vault runtime retrieval",
              description:
                "Markdown Vault no longer depends on database index maintenance. Vault paths, include/exclude rules, and context budgets define runtime retrieval."
            },
            {
              title: "Production runtime hardening",
              description:
                "Log rotation, systemd/logrotate templates, MySQL pre-ping, and OpenAI-compatible system prompt handling reduce operational friction."
            }
          ],
          sections: [
            {
              eyebrow: "Core routing",
              title: "Provider instance boundaries are explicit during selection and execution",
              body: [
                "The core now separates Provider type from Provider instance. The type describes an integration capability, while the instance identifies a concrete system or data source.",
                "That distinction matters when one AtlasClaw deployment connects to several systems of the same kind. A team can configure development CMP, test CMP, and production CMP as separate SmartCMP instances, or connect multiple Markdown Vault instances for product docs, operations runbooks, and project delivery material."
              ],
              points: [
                "Capability selection, tool projection, and execution keep the chosen Provider instance in scope.",
                "Provider scripts receive only the active instance configuration, which avoids leaking unrelated instance settings into the script environment.",
                "User-facing capability lists hide internal Skill snapshots and expose a cleaner set of selectable capabilities."
              ]
            },
            {
              eyebrow: "Workflow routing",
              title: "Multi-step flows rely less on fixed confirmation phrases",
              body: [
                "Earlier workflow continuations could depend on fixed confirmation wording. v0.9.11 moves that decision closer to the model and the available runtime evidence."
              ],
              points: [
                "An activated Provider Skill can stay active across follow-up turns when the conversation still belongs to the same flow.",
                "When a question does not need another tool call, AtlasClaw can keep a direct answer path grounded in existing evidence.",
                "Generated files and intermediate artifacts stay inside the user workspace so they remain traceable."
              ]
            },
            {
              eyebrow: "History and models",
              title: "Conversation replay and private model compatibility are cleaner",
              body: [
                "This release fixes several details in history handling and model adaptation, including preserving the user's original wording, keeping runtime system prompts out of replayed history, and normalizing system prompts for OpenAI Chat API-compatible models."
              ],
              points: [
                "Multi-turn conversations are less likely to be affected by stale runtime instructions.",
                "Original user wording is preserved more completely during error recovery and evidence tracing.",
                "vLLM, Qwen, and other local or privately deployed models receive system prompts in a more compatible form."
              ]
            },
            {
              eyebrow: "Operations",
              title: "Long-running deployments get more runtime controls",
              body: [
                "The production configuration set continues to grow. v0.9.11 adds practical operational pieces for container logging, VM service management, and database connection health."
              ],
              points: [
                "Container logs can follow standard rotation policies, reducing unbounded log growth in long-running deployments.",
                "VM deployments can use the systemd and logrotate templates as a starting point for service management and log retention.",
                "MySQL connection pool pre-ping can be configured for environments where network behavior or database timeouts require explicit connection checks."
              ]
            },
            {
              eyebrow: "Markdown Vault",
              title: "Multiple Markdown knowledge bases can be queried directly at runtime",
              body: [
                "Markdown Vault moves from database-indexed retrieval to runtime Markdown file scanning. After configuring the vault path, include and exclude rules, and context budget, teams can expose internal documents, runbooks, design notes, or Obsidian notes as read-only AtlasClaw knowledge sources."
              ],
              points: [
                "SQLite or MySQL index tables are no longer required for Markdown Vault retrieval.",
                "A single AtlasClaw deployment can keep product documentation, operations runbooks, and customer project material in separate vault instances.",
                "Search and get outputs are treated as internal evidence; the agent generates conclusions, rationale, and references from that evidence instead of returning raw retrieval blocks."
              ]
            },
            {
              eyebrow: "SmartCMP",
              title: "Request field contracts reduce cloud automation failures",
              body: [
                "The SmartCMP Provider now carries clearer Compute and VM request field rules. For example, `systemDisk` must be submitted as an object, such as a JSON object containing the disk size. It should not be reduced to a number or string, and it should not be moved under `params`."
              ],
              points: [
                "System disk, flavor, image, network, and security group fields now map more closely to the SmartCMP API contract.",
                "Field names declared in generated Markdown should be preserved exactly, which reduces failures caused by rewriting request parameters.",
                "The contract improves resource request, approval, and automated delivery success rates."
              ]
            },
            {
              eyebrow: "Provider boundary",
              title: "Core stays neutral while Providers own system-specific rules",
              body: [
                "The release keeps the Core and Provider boundary strict. Core owns runtime selection, orchestration, and permission framing; Providers own authentication details, field structures, business semantics, and retrieval behavior for each target system."
              ],
              points: [
                "Markdown Vault remains a read-only knowledge boundary and does not automate document writing or Obsidian operations.",
                "Provider metadata stays runtime-neutral instead of encoding concrete business systems into Core rules.",
                "New enterprise systems can reuse the Provider package structure and Skill constraints without pushing system assumptions into the Core."
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
            "Each Provider packages configuration schema, auth behavior, reusable domain operations, thin Skills, Context, and normalization for target systems such as SmartCMP, Jira, ITSM, observability, OA, and CRM."
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
          "AtlasClaw turns integrations into provider contracts so IM, web, embedded apps, and webhook AI integration calls can reach one multi-user AI agent layer. Configured Providers can also map Enterprise System pages to live business objects and governed actions."
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
              "Each provider-based integration owns its configuration schema, auth model, reusable domain rules, thin adapters, and references instead of leaking them into the core."
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
          },
          {
            title: "Providers define page Context",
            description:
              "Deterministic routes map an Enterprise System page to its current domain object, available actions, and the Provider capability that understands it."
          }
        ]
      },
      flow: {
        eyebrow: "Execution path",
        title: "From access channel to governed system action.",
        description:
          "The integration model stays readable because every hop has a clear responsibility boundary.",
        items: [
          "Users or systems reach AtlasClaw through IM, web UI, embedded panels, or webhook entrypoints; an Enterprise System can also publish normalized page changes for a floating assistant.",
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
              "A versioned SmartCMP Provider reference with typed domain operations, page-aware requests and approvals, governed resource lifecycles, Security workflows, and read-only editor assistance.",
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
          "A Provider is a self-contained integration package: metadata and configuration schema, auth conventions, reusable domain code, thin Skill adapters, optional page Context, and reference material. Core loads Providers from `providers_root` and exposes provider-qualified Skills for runtime dispatch.",
        points: [
          "Providers keep platform-specific auth and workflow logic out of the core.",
          "Reusable API and business operations live in an importable Provider package while Skills stay readable, explicit, and thin.",
          "Explicit callable entrypoints receive scoped runtime Context without duplicating domain rules in protocol adapters.",
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
          "Use the SmartCMP and Jira examples as reference points, then package your own platform with provider metadata, configuration schema, reusable domain operations, and thin Skill adapters. Contributions of new system integrations are welcome in the atlasclaw-providers repository.",
        href: "/en/docs/providers/",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "Contribute integrations on GitHub"
      }
    },
    embedded: {
      title: "Transform Existing Systems with an Embedded AI Agent | AtlasClaw",
      description:
        "Embed AtlasClaw as an enterprise AI assistant in your existing systems. Add context-aware help and AI Agent capabilities without rebuilding your applications.",
      keywords: [
        "AI assistant",
        "enterprise AI assistant",
        "embedded AI assistant",
        "AI agent for enterprise systems",
        "context-aware AI assistant",
        "enterprise AI agent",
        "AI assistant for business applications",
        "AtlasClaw"
      ],
      socialImage: {
        path: "/og/embedded-mode.png",
        alt: "AtlasClaw Embedded Mode brings an enterprise AI assistant into an existing system"
      },
      hero: {
        eyebrow: "Embedded Mode",
        title: "Transform your existing systems with an embedded AI Agent.",
        description:
          "Without rebuilding your existing systems, embed AtlasClaw as an enterprise AI assistant to add context-aware help, cross-system intelligence, and governed Agent actions.",
        primaryLabel: "See the architecture",
        secondaryLabel: "Explore access modes",
        guideLabel: "Read integration guide",
        status: "Expanded in v1.0.0"
      },
      surfaces: {
        eyebrow: "Two access modes",
        title: "One AtlasClaw Agent, available through two access points.",
        description:
          "Independent menu access and the floating interface are two ways to reach the same AtlasClaw Agent. An enterprise system can use either one or both without duplicating the AtlasClaw integration.",
        items: [
          {
            number: "01",
            title: "Independent menu access",
            subtitle: "Full-page access to the same AtlasClaw Agent",
            description:
              "Add an independent menu entry that opens AtlasClaw as a full conversational workspace. It is another access point to the same AtlasClaw Agent, not a separate AtlasClaw implementation.",
            points: [
              "Full chat and workspace experience",
              "No page Context bridge required",
              "Ideal for cross-system work"
            ]
          },
          {
            number: "02",
            title: "Floating Assistant",
            subtitle: "Help that follows the current page",
            description:
              "Open a compact assistant above the current system page. A small message bridge publishes normalized page changes so AtlasClaw can refresh Context without exposing internal session or business payloads.",
            points: [
              "Compact launcher and overlay lifecycle",
              "Dynamic page Context and object actions",
              "Ideal for in-place analysis and operations"
            ]
          }
        ]
      },
      architecture: {
        eyebrow: "Fusion core",
        title: "AtlasClaw understands and acts within your existing system.",
        description:
          "Configured through embed_integration, the HostApp Provider maps pages to business objects, Domain Skills, and state-aware actions. AtlasClaw can then respond to the current Context and act through existing APIs, identity, permissions, workflows, and audit—without adding a new service or rebuilding the backend.",
        caption:
          "The enterprise system adds access surfaces and a lightweight page bridge. Its existing APIs, identity, permissions, workflows, and audit remain in place.",
        signals: [
          {
            label: "Runs with AtlasClaw",
            value: "Provider package, not a new enterprise-system service"
          },
          {
            label: "Understands your system",
            value: "Routes, objects, Domain Skills, and object actions"
          },
          {
            label: "Reuses what exists",
            value: "Current APIs, Cookie identity, RBAC, workflows, and audit"
          }
        ]
      },
      showcase: {
        eyebrow: "SmartCMP reference",
        title: "AtlasClaw understands the current page, its business object, and available actions.",
        description:
          "SmartCMP keeps its existing architecture. Its AtlasClaw Provider matches supported routes, resolves the visible object through existing APIs, and reuses Domain Skill action builders for floating Context and normal Chat. The routes below are representative examples from the broader v1.0.0 coverage.",
        referenceLabel: "Read the editor-assistance contract",
        referenceHref: repoLinks.editorAssistance,
        primaryCaption:
          "A VM detail route resolves to virtual_machine and smartcmp:resource. The resource Domain Skill exposes Open, Analyze, and Operations without requiring SmartCMP to send a resource DTO.",
        secondaryCaption:
          "An alert detail route resolves to alarm_alert and smartcmp:alarm. The alarm Domain Skill offers Analyze plus status-valid Mute, Resolve, or Reopen actions.",
        routes: [
          {
            label: "Virtual machine",
            path: "/main/virtual-machines/{resource_id}/details",
            object: "virtual_machine",
            skill: "smartcmp:resource",
            actions: "Open · Analyze · Operations"
          },
          {
            label: "Alarm alert",
            path: "/main/alarm-activity-management/alarm-triggered/edit/{alert_id}",
            object: "alarm_alert",
            skill: "smartcmp:alarm",
            actions: "Analyze · Mute · Resolve · Reopen"
          },
          {
            label: "Service request",
            path: "/main/work-order-request/{catalog_id}",
            object: "catalog",
            skill: "smartcmp:request",
            actions: "Build request · Validate live choices"
          },
          {
            label: "Work-order approval",
            path: "/main/work-order-process/ServiceRequest/myApproval/{generic_request_id}",
            object: "approval_request",
            skill: "smartcmp:approval",
            actions: "Analyze · Approve · Reject with reason"
          },
          {
            label: "Security policy",
            path: "/main/resource-management/policy/edit/{policy_id}",
            object: "security_policy",
            skill: "smartcmp:security-compliance",
            actions: "Read-only policy Context"
          },
          {
            label: "Editor assistance",
            path: "/main/service-model/forms/edit/{form_id}",
            object: "form_definition",
            skill: "smartcmp:form-designer",
            actions: "Generate complete replacement · Review and copy"
          }
        ]
      },
      contextFlow: {
        eyebrow: "Dynamic Context",
        title: "From a page change to a governed action.",
        description:
          "The enterprise system publishes navigation state. AtlasClaw and its configured HostApp Provider own the meaning, data resolution, and execution path.",
        steps: [
          {
            label: "Enterprise System",
            title: "Publish the page",
            description:
              "Send the normalized router path with a monotonically increasing generation."
          },
          {
            label: "Core",
            title: "Resolve only the latest page",
            description:
              "Debounce rapid navigation, expose loading, use the fixed HostApp Provider, and reject stale generations."
          },
          {
            label: "HostApp Provider",
            title: "Resolve meaning and actions",
            description:
              "Read the object through existing system APIs and reuse its Domain Skill action builder."
          },
          {
            label: "AtlasClaw Agent",
            title: "Reason and execute",
            description:
              "Bind action-only follow-ups to the current object while retaining ordinary Skill routing, RBAC, confirmation, and audit boundaries."
          }
        ]
      },
      hostApp: {
        eyebrow: "Enterprise system integration",
        title: "Add a light integration without rebuilding your enterprise system.",
        description:
          "Your enterprise system only adds access points and page lifecycle events. AtlasClaw and its configured Provider supply the intelligence while the existing architecture remains in place.",
        common: {
          title: "For both surfaces",
          points: [
            "Embed AtlasClaw in the enterprise system's signed-in browser session.",
            "Share the enterprise system Cookie so Provider calls use the same user identity and upstream permissions.",
            "Keep AtlasClaw session keys, Provider configuration, and business DTOs out of cross-window messages."
          ]
        },
        menu: {
          title: "Independent menu access",
          points: [
            "Add an independent AtlasClaw entry in the enterprise system navigation.",
            "Load the full AtlasClaw interface through that menu route.",
            "No page event protocol is required."
          ]
        },
        floating: {
          title: "Floating additionally",
          points: [
            "Manage launcher, iframe, ready, and close lifecycle.",
            "Provide exact host origin and a per-frame nonce.",
            "Send validated page changes with strict message type, nonce, and generation."
          ]
        }
      },
      identity: {
        eyebrow: "Identity and continuity",
        title: "AtlasClaw acts as the same signed-in user.",
        description:
          "Embedded authentication is Cookie-based, so Provider access shares the enterprise system's browser session and remains subject to the signed-in user's real permissions. Menu and floating surfaces can also share the active AtlasClaw Chat session; the embedding page never receives the internal session key.",
        signals: [
          "Enterprise system Cookie identity",
          "Provider-side user permissions",
          "Shared active Chat session",
          "No session key in embedding messages"
        ]
      },
      boundary: {
        eyebrow: "Clear ownership",
        title: "The enterprise system reports the route. AtlasClaw supplies the business meaning.",
        description:
          "Enterprise system code does not select a Provider, send business DTOs, or decide which Skills and operations apply. AtlasClaw matches Context through the configured HostApp Provider; Domain Skills define actions, and the ordinary permission and confirmation pipeline governs execution."
      },
      faq: {
        eyebrow: "Embedded AI assistant",
        title: "What teams ask before bringing AtlasClaw into an existing system.",
        description:
          "AtlasClaw adds a context-aware enterprise AI assistant while preserving the system architecture, identity, and controls already in place.",
        items: [
          {
            question: "What is an embedded AI assistant?",
            answer:
              "An embedded AI assistant is available inside the enterprise application people already use. AtlasClaw provides independent menu access and a floating assistant so users can ask questions, understand the current page, and take governed actions without switching to a separate AI product."
          },
          {
            question: "Can AtlasClaw add an AI assistant without rebuilding the application?",
            answer:
              "Yes. The existing system keeps its backend, APIs, workflows, and audit model. A light integration adds the AtlasClaw access surfaces and, for the floating assistant, publishes normalized page changes for dynamic Context matching."
          },
          {
            question: "How does the context-aware AI assistant understand the current page?",
            answer:
              "The enterprise system publishes a normalized route change. The configured Provider matches that route to a business object, retrieves current data through existing APIs, and exposes the relevant Domain Skill and object actions to AtlasClaw."
          },
          {
            question: "Does the embedded AI Agent reuse existing user permissions?",
            answer:
              "Yes. Cookie-based authentication shares the signed-in browser session, so Provider calls remain subject to the user's existing permissions, workflows, confirmations, and audit controls. Internal AtlasClaw session keys are not exposed to the embedding page."
          }
        ]
      },
      cta: {
        title: "Bring AtlasClaw into your enterprise application",
        description:
          "Start with the Embedded integration contract, then add Provider Context routes for the pages where users need analysis and action.",
        primaryLabel: "Read Embedded integration",
        secondaryLabel: "Explore Providers"
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
            "How AtlasClaw packages integrations as versioned metadata, reusable domain code, thin Skills, optional Context, and references.",
          href: "/en/docs/providers/"
        },
        {
          title: "Deployment",
          description:
            "How embedded, standalone, and minimal HA runtime modes differ and what configuration anchors them.",
          href: "/en/docs/deployment/"
        },
        {
          title: "Full Documentation",
          description:
            "Open the versioned installation, administration, user, Core, Provider, and reference documentation.",
          href: repoLinks.docs
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
          title: "atlasclaw-doc",
          description: "Versioned Docusaurus documentation for installation, operations, Core, and Provider integrations.",
          href: repoLinks.docs
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
          name: "atlasclaw-doc",
          description:
            "Versioned installation, administration, user, Core, Provider integration, and reference documentation.",
          href: repoLinks.docs
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
        { label: "Providers README", href: repoLinks.providerGuide },
        { label: "Full documentation", href: repoLinks.docs }
      ]
    },
    providers: {
      title: "AtlasClaw Providers | Skills and Enterprise AI Integrations",
      description:
        "AtlasClaw Provider structure, Skill model, provider-qualified naming, webhook AI integration, SmartCMP, Jira, and enterprise AI integration references.",
      intro:
        "Providers are AtlasClaw's integration boundary. Each Provider packages target-system metadata, configuration and auth contracts, reusable domain operations, thin Skills, optional page Context, and the references needed to keep enterprise AI integrations understandable.",
      structure: `providers/<provider-name>/
├── PROVIDER.md
├── provider.schema.json
├── README.md
├── pyproject.toml              # optional importable package
├── assets/                     # optional static assets
├── src/<provider_package>/     # optional reusable domain code
├── assistant_context/          # optional page Context
└── skills/
    ├── <skill-a>/
    │   ├── SKILL.md
    │   ├── scripts/
    │   └── references/
    └── <skill-b>/`,
      points: [
        "The provider owns how AtlasClaw identity becomes provider-native target-system auth.",
        "Reusable authentication, API, typed model, and business operations belong in the importable Provider package.",
        "Skills stay human-readable and thin while binding to explicit `file.py:callable` entrypoints.",
        "Optional `assistant_context` routes resolve the current enterprise-system page without accepting business DTOs from the host.",
        "Provider-qualified naming avoids collisions across integrations.",
        "Callable results may carry small trace-bound continuation metadata, while public evidence remains visible to the Agent and user."
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
        { label: "Jira provider example", href: repoLinks.jira },
        { label: "Provider loading reference", href: repoLinks.providerLoading }
      ]
    },
    deployment: {
      title: "AtlasClaw Deployment | Multi-User Enterprise AI Agent",
      description:
        "AtlasClaw deployment modes, minimal high availability, independent menu access, floating AI assistance, Cookie identity, SSO/RBAC, Channels, and Provider runtime wiring.",
      intro:
        "AtlasClaw supports embedded access and a standalone multi-user AI agent layer. Standalone deployments can run on one node or use the minimal v1.0.0 HA runtime when explicit shared-state, routing, and Channel constraints are met.",
      modes: [
        {
          title: "Embedded deployment",
          description:
            "Expose the same Agent through an independent menu entry and an optional Context-aware floating assistant. Both share the enterprise-system Cookie identity; only the floating interface needs the strict page-change bridge."
        },
        {
          title: "Standalone deployment",
          description:
            "Best when the enterprise needs one SSO-backed multi-user AI agent entry point above multiple systems. A single node supports both long-connection and webhook Channel modes."
        },
        {
          title: "High-availability runtime",
          description:
            "Runs multiple application nodes against shared MySQL and an initialized shared Workspace, with stable node IDs and sticky routing for each authenticated user."
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
      haConfig: `alembic upgrade head

ATLASCLAW_ENABLE_HA=true
ATLASCLAW_HA_NODE_ID=<unique-node-id>
ATLASCLAW_RUN_AGENT_HEARTBEAT=false`,
      haNotes: [
        "Use shared MySQL; SQLite is not an HA database. Initialize the shared Workspace and run migrations once before application nodes start.",
        "Assign every instance a stable unique node ID and configure the upstream proxy to keep each authenticated user's requests on one node.",
        "Set `ATLASCLAW_RUN_AGENT_HEARTBEAT=true` on at most one node when singleton Agent Heartbeat work is enabled.",
        "Keep each node's process-owned Token Health, Heartbeat state, and working runtime directory local to that node.",
        "HA accepts only registered long-connection Channel modes. Webhook modes are rejected, and Channel ownership does not automatically transfer after permanent node failure."
      ],
      notes: [
        "Use `providers_root` to load provider folders from the external providers repository.",
        "Keep secrets in environment variables, not committed JSON.",
        "Embedded access uses the enterprise-system Cookie identity. Independent menu access only needs an Enterprise System route; the floating interface additionally sends normalized path, nonce, and generation.",
        "Keep Context resolution and object actions inside AtlasClaw and Providers rather than sending business DTOs or calling Agent and Tool APIs from Enterprise System code.",
        "Use webhook mode for fire-and-forget system-to-system invocation with constrained Skills in a single-node deployment; HA rejects webhook Channel modes.",
        "Keep target-platform auth and audit in the provider and the downstream platform."
      ],
      references: [
        { label: "Embedded Agent overview", href: "/en/embedded-agent/" },
        { label: "Embedded integration reference", href: repoLinks.embeddedDocs },
        { label: "High-availability configuration", href: repoLinks.haGuide },
        { label: "Core repo README", href: repoLinks.architecture },
        { label: "Provider loading reference", href: repoLinks.providerLoading }
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
      embedded: "内嵌模式",
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
          "它不是给单个用户堆工具，而是为了让企业级 AI Agent 应用真正落到产品页面、动态 Context、流程、权限治理和受控执行边界之内。",
        items: [
          {
            title: "带实时 Context 的内嵌 Agent",
            description:
              "把 AtlasClaw 内嵌到现有业务系统，让用户可以通过独立菜单入口或紧凑悬浮界面访问同一个 AI 助手。"
          },
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
              "把同一个 AtlasClaw 助手通过独立菜单入口或悬浮界面带入企业系统。两者复用企业系统 Cookie 身份；悬浮界面可随页面变化进行动态 Context 匹配。"
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
          },
          {
            title: "把 AtlasClaw 内嵌到业务系统",
            description:
              "了解两种 Embedded 界面、Cookie 身份、动态 Context 匹配，以及实现深度互动所需的轻量企业系统桥接。",
            href: "/zh/embedded-agent/"
          }
        ]
      }
    },
    releases: {
      title: "AtlasClaw 发布记录 | 企业级 AI Agent 更新",
      description:
        "AtlasClaw 发布记录，覆盖悬浮 AI 助手、动态 Context 匹配、对象操作、SmartCMP 资源分析、Provider 路由、工作流编排和集成更新。",
      keywords: [
        "AtlasClaw 发布记录",
        "AtlasClaw 版本更新",
        "AtlasClaw v1.0.0",
        "悬浮 AI 助手",
        "动态 Context 匹配",
        "对象操作",
        "企业级 AI Agent 更新",
        "企业级 AI Agent 发布说明",
        "开源 AI Agent 框架发布记录",
        "Provider 实例路由",
        "多实例 Provider 集成",
        "Markdown Vault 运行时检索",
        "长期记忆 AI Agent",
        "Markdown Vault Provider",
        "SmartCMP Provider",
        "SmartCMP 请求字段契约",
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
        eyebrow: "版本发布",
        title: "AtlasClaw 发布记录",
        description:
          "查看 AtlasClaw Core 与 Providers 的版本更新，包括运行时能力、企业安全、Provider 集成和工作流自动化。"
      },
      stats: [
        {
          label: "最新版本",
          value: "v1.0.0",
          detail: "可靠工作流、响应式 Embedded 智能、最小 HA 与版本化 Provider 包。"
        },
        {
          label: "发布条目",
          value: "7",
          detail: "整理 2026 年 4 月至 8 月的七个代表性版本，并改写为中英文官网内容。"
        },
        {
          label: "覆盖范围",
          value: "Core + Providers",
          detail: "Agent 工作流、Embedded 体验、受控操作、HA 运行时、版本化 Providers 与部署。"
        }
      ],
      index: {
        eyebrow: "版本历史",
        title: "当前与近期平台更新",
        description:
          "按版本查看 Core 运行时变化、Provider 能力更新和企业工作流改进。",
        actionLabel: "打开版本"
      },
      cta: {
        eyebrow: "源码与实现",
        title: "查看每个版本背后的实现",
        description:
          "发布记录概括产品变化；Core 和 Providers 仓库保留实现细节、参考示例和贡献入口。",
        href: repoLinks.core,
        label: "打开 Core 仓库",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "打开 Providers 仓库"
      },
      items: [
        {
          id: "v1-0-0",
          version: "v1.0.0",
          dateIso: "2026-08-27",
          date: "2026 年 8 月 27 日",
          title: "可靠工作流、内嵌智能与高可用运行时",
          keywords: [
            "AtlasClaw v1.0.0",
            "企业级 AI Agent",
            "高可用 AI Agent",
            "内嵌 AI 助手",
            "Agent 工作流连续性",
            "SmartCMP Provider 1.0"
          ],
          summary:
            "AtlasClaw 1.0 建立更可靠的企业运行基线，带来持久的 Agent 工作流、原生取消、响应式 Embedded Context、最小 HA 支持，以及可复用的 SmartCMP Provider 包。",
          lede:
            "v1.0.0 是 AtlasClaw Core 与 Providers 的首个大版本基线。它强化多步骤 Agent 执行，在追问中保留当前业务目标，增加用户可控的取消能力，扩展页面感知的 Embedded 智能，引入最小高可用运行时，并将 SmartCMP 领域执行封装为 typed Provider operations 与薄 Skill adapters。",
          tags: ["1.0", "Agent 运行时", "Embedded", "高可用", "SmartCMP"],
          highlights: [
            {
              title: "持久的 Agent 工作流",
              description:
                "结构化工作流状态、Tool scope、精确目标与有界续跑 metadata 能在追问过程中保持一致。"
            },
            {
              title: "响应式用户控制",
              description:
                "原生停止会真正取消当前 Agent run，同时保留可用的部分内容、完整生成结果和通用代码复制。"
            },
            {
              title: "最小 HA 运行时",
              description:
                "共享状态、稳定节点身份、粘性路由与受控的长连接 Channel ownership 支持多节点运行。"
            },
            {
              title: "SmartCMP Provider 1.0",
              description:
                "SmartCMP 成为版本化 Python 包，集中管理鉴权、typed domain operations、确定性 Context 与薄 Skill adapters。"
            }
          ],
          sections: [
            {
              eyebrow: "Agent 运行时",
              title: "多步骤任务持续绑定正确能力和目标",
              body: [
                "Core 现在能更可靠地恢复结构化和序列化工作流 Context。上下文文本会继续绑定当前业务对象，同时不隐藏请求仍可使用的其他 Skills。"
              ],
              points: [
                "能力规划、Tool 执行、重试与授权更加稳定。",
                "选中的 Skills 保留完整的已授权 Tool scope。",
                "与请求 trace 绑定的续跑 metadata 保持有界，超出 Context 预算时产生明确诊断。"
              ]
            },
            {
              eyebrow: "Chat 与 Embedded 体验",
              title: "用户可以安全停止任务，助手只跟随最新页面",
              body: [
                "Chat 界面增加由真实 Agent cancellation 支撑的原生停止控制。Embedded Context 解析会对快速导航进行防抖、呈现加载状态，并且只应用最新页面 generation。"
              ],
              points: [
                "取消任务时保留有用的部分回答，而不是丢弃全部内容。",
                "生成的表单、脚本、策略与代码保持完整并可复制。",
                "通用对象操作继续进入普通 Chat、Skill、Tool、RBAC、确认与审计链路。"
              ]
            },
            {
              eyebrow: "高可用",
              title: "最小多节点运行时定义明确的 ownership 边界",
              body: [
                "HA 部署使用共享 MySQL、已初始化的共享 Workspace、稳定且唯一的节点 ID，以及面向已认证用户的上游粘性路由；节点自身的运行状态仍保留在本地。"
              ],
              points: [
                "Agent Heartbeat 任务最多只在一个配置节点运行。",
                "HA 只接受已注册的 long-connection Channel 模式；Webhook 模式继续用于单节点部署。",
                "节点永久故障后，Channel ownership 不会自动转移。"
              ]
            },
            {
              eyebrow: "Provider 1.0",
              title: "SmartCMP 工作流复用领域操作并绑定精确目标",
              body: [
                "SmartCMP 将鉴权、传输、typed models、请求放置、生命周期操作和业务服务集中到可安装 Provider 包中，Skills 与 Context resolvers 保持为面向 AtlasClaw 的薄层。"
              ],
              points: [
                "请求、审批、工单、资源、告警、成本、合规和编辑器 Context 都会保留精确目标 identity。",
                "模板感知的资源申请会在提交前重新解析实时选项，并保留 opaque Request ID。",
                "资源生命周期遵循回收站流程，只有已经回收的资源才能永久移除。"
              ]
            }
          ],
          links: [
            {
              label: "Core v1.0.0 发布",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v1.0.0"
            },
            {
              label: "Providers v1.0.0 发布",
              href: "https://github.com/CloudChef/atlasclaw-providers/releases/tag/v1.0.0"
            }
          ]
        },
        {
          id: "v0-9-14",
          version: "v0.9.14",
          dateIso: "2026-07-24",
          date: "2026 年 7 月 24 日",
          title: "Embedded Context、对象操作与资源智能",
          keywords: [
            "AtlasClaw v0.9.14",
            "嵌入式 AI 助手",
            "悬浮 AI 助手",
            "动态 Context 匹配",
            "Provider 对象操作",
            "SmartCMP 资源分析"
          ],
          summary:
            "AtlasClaw 现在可以跟随企业系统页面，解析 Provider 定义的 Context，并在紧凑悬浮助手中呈现受控操作。SmartCMP 同步增加面向告警、成本、请求、审批与资源页面的上下文工作流。",
          lede:
            "v0.9.14 让 Embedded 模式从简单嵌入升级为与企业系统深度互动的体验。企业系统可以提供独立菜单入口访问 AtlasClaw，并增加跟随页面导航的紧凑悬浮助手；两者访问同一个 Agent 运行时。Core 确定性匹配当前页面，Provider 解析业务对象与操作，普通 Agent 权限和确认流程继续负责治理执行。",
          tags: ["Embedded", "动态 Context", "对象操作", "悬浮界面", "SmartCMP"],
          highlights: [
            {
              title: "Provider 作用域页面 Context",
              description:
                "HostApp Provider 的配置路由把页面路径映射到唯一 resolver，再返回当前对象与可用操作。"
            },
            {
              title: "紧凑悬浮助手",
              description:
                "Embedded 悬浮界面可以持续显示 Context 与对象操作，同时不遮蔽整个企业系统页面。"
            },
            {
              title: "受控对象操作",
              description:
                "Provider 定义的 Prompt 操作进入普通 Chat、Skill、Tool、RBAC 与确认路径，不绕过 Agent 运行时。"
            },
            {
              title: "资源级智能分析",
              description:
                "SmartCMP 增加基于当前资源与实际证据的健康、成本、合规和综合分析。"
            }
          ],
          sections: [
            {
              eyebrow: "Embedded 运行时",
              title: "悬浮助手可以跟随当前企业系统页面",
              body: [
                "企业系统通过严格的跨窗口消息合同发送规范化 router path、nonce 和 generation。Core 拒绝过期更新，只为当前页面刷新 Context。",
                "独立菜单访问不要求页面 Context。两种访问界面都在当前浏览器登录身份下进入同一个 Agent 运行时。"
              ],
              points: [
                "菜单与悬浮界面可以独立采用。",
                "企业系统消息不携带 AtlasClaw session key、Provider 配置或业务 DTO。",
                "页面不受支持时可继续不带页面 Context 的普通 Chat；Context 暂时不可用时保持关闭，不回退到无关能力。"
              ]
            },
            {
              eyebrow: "Context 与操作",
              title: "Provider 负责业务含义，Core 负责协议与生命周期",
              body: [
                "唯一配置的 Embedded 集成固定绑定 HostApp Provider，其 resolver 把确定性匹配的路由参数转换为业务对象和有序操作集合。"
              ],
              points: [
                "Core 负责路由匹配、generation、快照和权限重新校验。",
                "Provider 负责对象解析、标签、安全导航目标，以及 Domain Skills 中的状态相关操作构建器。",
                "Prompt 操作在执行时重新检查，并继续服从运行时确认规则。"
              ]
            },
            {
              eyebrow: "SmartCMP Provider",
              title: "当前页面智能覆盖主要云管理场景",
              body: [
                "SmartCMP 在告警详情、成本建议、审批、服务目录请求、我的申请、云资源和 VM 详情中使用统一 Context 合同。"
              ],
              points: [
                "告警与成本 Context 可以提供分析和修复操作。",
                "综合资源分析将告警证据与基于组件模型和 Prometheus 的健康分析保持为两个独立维度。",
                "资源成本、合规与综合分析使用明确的证据状态和 Provider 工作流。"
              ]
            },
            {
              eyebrow: "Agent 路由",
              title: "能力选择和后续流程连续性更加直接",
              body: [
                "本次发布还精简了能力路由，使当前 Provider 能力与相关证据在后续对话中保持一致。"
              ],
              points: [
                "模型与用户看到的能力投影更清晰。",
                "证据仍然适用时，追问可以继续当前工作流。",
                "工具执行持续保留选中的 Provider 与权限边界。"
              ]
            }
          ],
          links: [
            {
              label: "Core v0.9.14 发布",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v0.9.14"
            },
            {
              label: "Providers v0.9.14 发布",
              href: "https://github.com/CloudChef/atlasclaw-providers/releases/tag/v0.9.14"
            },
            { label: "查看内嵌 Agent", href: "/zh/embedded-agent/" }
          ]
        },
        {
          id: "v0-9-13",
          version: "v0.9.13",
          dateIso: "2026-07-10",
          date: "2026 年 7 月 10 日",
          title: "时区安全的 Skill 执行与更可靠的表单设计",
          keywords: [
            "AtlasClaw v0.9.13",
            "Skill 时区上下文",
            "成本优化时区",
            "表单设计器校验",
            "Provider 工作流可靠性"
          ],
          summary:
            "Skill 脚本现在接收请求时区，同时避免时区状态在不同执行之间泄漏。SmartCMP 成本工作流和表单设计器获得更安全的默认值、校验与字段值处理。",
          lede:
            "v0.9.13 重点解决两个外部边界的执行正确性：对时间敏感的 Skill 脚本，以及生成式表单逻辑。Core 为每个请求隔离时区，Provider 在成本流程中使用该上下文，并在表单定义继续流转前校验生成的 JavaScript。",
          tags: ["时区", "Skills", "成本优化", "表单设计器"],
          highlights: [
            {
              title: "请求时区进入 Skills",
              description:
                "脚本可以按用户请求时区解释日期与成本周期，不再依赖进程级默认值。"
            },
            {
              title: "时区上下文保持隔离",
              description:
                "一次执行不会把时区状态残留给后续用户或工作流。"
            },
            {
              title: "生成表单更早失败",
              description:
                "SmartCMP 校验生成的 JavaScript 语法，并改进目录 Context 与字段值处理。"
            }
          ],
          sections: [
            {
              eyebrow: "Core 执行",
              title: "时区成为请求级运行上下文",
              body: [
                "Core 把请求时区传给 Skill 脚本，并在执行结束后恢复外围进程状态。这对并发任务可能使用不同时区的多用户部署尤其重要。"
              ],
              points: [
                "日期计算可以服从用户请求上下文。",
                "时区状态不会在脚本执行之间泄漏。",
                "时区控制无效或缺失时可以回退，同时不污染后续运行。"
              ]
            },
            {
              eyebrow: "SmartCMP Provider",
              title: "成本和表单流程更安全地处理生成输入",
              body: [
                "成本优化更一致地使用请求时区和最新默认值。表单设计器检查生成 JavaScript 语法，并改进目录 Context 与字段值进入设计流程的方式。"
              ],
              points: [
                "成本窗口与请求用户的时间上下文保持一致。",
                "无效时区控制进入定义明确的回退路径。",
                "表单逻辑错误会在成为难排查的运行时失败之前被发现。"
              ]
            }
          ],
          links: [
            {
              label: "Core v0.9.13 发布",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v0.9.13"
            },
            {
              label: "Providers v0.9.13 发布",
              href: "https://github.com/CloudChef/atlasclaw-providers/releases/tag/v0.9.13"
            }
          ]
        },
        {
          id: "v0-9-12",
          version: "v0.9.12",
          dateIso: "2026-06-24",
          date: "2026 年 6 月 24 日",
          title: "对象操作控件与更安全的响应处理",
          keywords: [
            "AtlasClaw v0.9.12",
            "对象操作按钮",
            "Agent 操作确认",
            "Provider 响应处理",
            "Minimax 兼容性"
          ],
          summary:
            "Provider 响应可以把结构化对象操作显示为清晰的界面控件，同时提升操作确认、响应解析和模型兼容性的可靠性。",
          lede:
            "v0.9.12 让 Provider 定义的操作更容易发现，也更安全地进入执行流程。AtlasClaw 将结构化操作呈现为按钮，保留确认边界，并避免把普通 schema 输出误判为认证失败。",
          tags: ["对象操作", "操作确认", "Chat UI", "兼容性"],
          highlights: [
            {
              title: "Provider 操作成为可见控件",
              description:
                "结构化对象操作可以显示为按钮，用户无需从原始输出中猜测下一步操作。"
            },
            {
              title: "确认边界保持明确",
              description:
                "操作 Prompt 与确认 metadata 始终关联到用户选择的操作，确认后才继续执行。"
            },
            {
              title: "正确区分 schema 与认证错误",
              description:
                "普通 JSON schema 输出不再被改写成 Provider 凭证失败。"
            }
          ],
          sections: [
            {
              eyebrow: "Agent 交互",
              title: "对象操作把 Provider 结果连接到安全的下一步",
              body: [
                "运行时规范化 Provider 定义的对象操作并在 Chat 中展示，同时继续沿用普通 Agent、Skill、Tool、权限与确认路径。"
              ],
              points: [
                "导航操作与 Prompt 操作使用一致的界面合同。",
                "需要确认的操作在界面中保持明确区分。",
                "消息布局让操作控件与对应结果保持关联。"
              ]
            },
            {
              eyebrow: "运行时可靠性",
              title: "更准确地解释模型与 Provider 响应",
              body: [
                "该版本收窄认证失败识别条件，并改进模型消息兼容性，让有效的结构化输出继续保留在对话中。"
              ],
              points: [
                "Schema 输出不会被误判为缺少凭证。",
                "兼容 Minimax 的请求会正确合并 system messages。",
                "流式消息与已保存消息保留对象操作 metadata。"
              ]
            }
          ],
          links: [
            {
              label: "Core v0.9.12 发布",
              href: "https://github.com/CloudChef/atlasclaw/releases/tag/v0.9.12"
            }
          ]
        },
        {
          id: "v0-9-11",
          version: "v0.9.11",
          dateIso: "2026-06-04",
          date: "2026 年 6 月 4 日",
          title: "Provider 实例路由与 Markdown Vault 运行时检索",
          keywords: [
            "AtlasClaw v0.9.11",
            "Provider 实例路由",
            "多实例 Provider 集成",
            "Markdown Vault 运行时检索",
            "Markdown 知识库 AI Agent",
            "SmartCMP 请求字段契约",
            "工作流继续路由",
            "Qwen vLLM 兼容",
            "企业级 AI Agent 运维"
          ],
          summary:
            "本次更新收紧多系统企业部署中的运行边界：Provider Skill 可以路由到具体 Provider 实例，多步流程由模型结合上下文和证据判断是否继续，Markdown Vault 改为运行时直接检索文件，SmartCMP 请求字段契约更明确。",
          lede:
            "AtlasClaw v0.9.11 处理的是企业接入后很快会遇到的问题：同一种 Provider 类型往往对应多个真实系统。SmartCMP Provider 可能同时连接开发、测试、生产 CMP；Markdown Vault Provider 可能连接产品文档、运维 Runbook 和项目资料。这个版本把实例边界带入能力选择、工具投影和脚本执行，同时强化基于证据的知识库回答和生产运行配置。",
          tags: ["Provider 路由", "Markdown Vault", "SmartCMP", "生产运维", "本地模型"],
          highlights: [
            {
              title: "按实例限定的 Provider Skill",
              description:
                "Slash Command 和 Webhook 预选能力时，运行时会同时保留选中的 Provider 实例和 Skill。"
            },
            {
              title: "多步流程按上下文继续",
              description:
                "系统可以结合对话状态、当前能力和工具证据，判断继续当前流程、切换能力，或直接基于证据回答。"
            },
            {
              title: "Markdown Vault 运行时检索",
              description:
                "Markdown Vault 不再依赖数据库索引维护，通过 vault 路径、包含/排除规则和上下文预算控制检索范围。"
            },
            {
              title: "生产运行配置继续补齐",
              description:
                "日志轮转、systemd/logrotate 模板、MySQL pre-ping 和 OpenAI 兼容系统提示处理降低长期运行成本。"
            }
          ],
          sections: [
            {
              eyebrow: "Core 路由",
              title: "能力选择和执行阶段都保留 Provider 实例边界",
              body: [
                "Core 现在明确区分 Provider 类型和 Provider 实例。Provider 类型表示一种集成能力，Provider 实例表示一个具体系统或数据源。",
                "这个区分解决了多系统接入时的目标选择问题。团队可以把开发 CMP、测试 CMP、生产 CMP 配置为不同 SmartCMP 实例，也可以把产品文档、运维 Runbook、项目交付资料配置为不同 Markdown Vault 实例。"
              ],
              points: [
                "能力选择、工具投影和执行阶段会持续保留当前选中的 Provider 实例。",
                "Provider 脚本只接收当前实例配置，避免无关实例配置进入脚本运行环境。",
                "面向用户和自动化入口的能力列表隐藏内部 Skill 快照，只展示整理后的可选能力。"
              ]
            },
            {
              eyebrow: "流程路由",
              title: "多步流程减少对固定确认短语的依赖",
              body: [
                "此前部分流程依赖固定确认短语判断是否继续执行。v0.9.11 把这个判断交给模型和运行时证据，由系统结合对话、已选能力和工具结果决定下一步。"
              ],
              points: [
                "已激活的 Provider Skill 可以在后续对话中继续作为当前能力使用，减少重复选择。",
                "当前问题不需要工具调用时，AtlasClaw 可以保留基于已有证据的直接回答路径。",
                "生成文件和中间产物仍限定在用户工作区内，便于追踪和治理。"
              ]
            },
            {
              eyebrow: "历史与模型",
              title: "历史回放和私有模型兼容更干净",
              body: [
                "本次更新修正了历史上下文和模型适配中的细节，包括保留用户原始表达、避免运行时系统提示重复进入历史，以及归一化 OpenAI Chat API 兼容模型的系统提示。"
              ],
              points: [
                "多轮对话更少受到旧运行提示干扰。",
                "错误恢复和证据追踪时，用户原始表达保留更完整。",
                "vLLM、Qwen 等本地或私有化模型的系统提示兼容性更稳定。"
              ]
            },
            {
              eyebrow: "生产运维",
              title: "长期运行部署获得更多基础配置",
              body: [
                "生产运行相关配置继续补充。v0.9.11 覆盖容器日志、VM 服务管理和数据库连接健康检查这些日常运维问题。"
              ],
              points: [
                "容器日志可以按标准策略轮转，降低长期运行时日志无限增长的风险。",
                "VM 部署可参考 systemd 和 logrotate 模板进行服务管理和日志保留。",
                "MySQL 连接池 pre-ping 可配置，便于适配不同网络和数据库超时环境。"
              ]
            },
            {
              eyebrow: "Markdown Vault",
              title: "多个 Markdown 知识库可以在运行时直接检索",
              body: [
                "Markdown Vault Provider 从数据库索引模式切换为运行时扫描 Markdown 文件。配置 vault 路径、包含/排除规则和上下文预算后，内部文档、Runbook、设计记录或 Obsidian 笔记都可以作为只读知识库接入 AtlasClaw。"
              ],
              points: [
                "Markdown Vault 检索不再需要 SQLite 或 MySQL 索引表，也不需要单独执行索引刷新。",
                "同一个 AtlasClaw 环境可以把产品文档、运维知识库、客户项目资料放在不同 vault 实例中。",
                "Search/Get 输出作为内部证据使用，Agent 基于证据生成结论、依据和引用，而不是直接返回检索块。"
              ]
            },
            {
              eyebrow: "SmartCMP",
              title: "请求字段契约降低云资源自动化失败率",
              body: [
                "SmartCMP Provider 补充了 Compute/VM 申请字段规则。以 `systemDisk` 为例，该字段必须按对象提交，例如包含磁盘大小的 JSON 对象；不能写成数字或字符串，也不能移动到 `params` 下。"
              ],
              points: [
                "系统盘、规格、镜像、网络、安全组等字段更贴近 SmartCMP 接口要求。",
                "生成 Markdown 中声明的字段名需要原样保留，减少字段改写导致的请求失败。",
                "这些字段契约会影响资源申请、审批和自动化交付流程的成功率。"
              ]
            },
            {
              eyebrow: "Provider 边界",
              title: "Core 保持中立，具体系统规则留在 Provider 包中",
              body: [
                "Core 继续负责统一的运行、选择、编排和权限框架；具体系统的认证方式、字段结构、业务语义和检索逻辑保留在 Provider 包中。"
              ],
              points: [
                "Markdown Vault 保持只读边界，不处理文档写入或 Obsidian 自动化。",
                "Provider metadata 保持运行中立，避免将具体业务系统写入 Core 规则。",
                "新增系统接入时，可以复用 Provider 包结构和 Skill 约束，而不把系统假设推入 Core。"
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
            "每个 Provider 都封装 SmartCMP、Jira、ITSM、可观测、OA、CRM 等目标系统的配置 schema、鉴权行为、可复用领域操作、薄 Skills、Context 与接口归一化。"
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
          "AtlasClaw 把集成建模为 Provider 合同，让 IM、Web、嵌入式应用与 Webhook AI 集成都能访问同一个多用户 AI Agent 层。配置的 Provider 还可以把企业系统页面映射为实时业务对象与受控操作。"
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
              "每个 Provider 集成自己承接配置 schema、鉴权模型、可复用领域规则、薄 adapters 与参考资料，而不是把这些逻辑泄漏到核心里。"
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
          },
          {
            title: "由 Provider 定义页面 Context",
            description:
              "通过确定性路由，把企业系统页面映射到当前业务对象、可用操作，以及真正理解该对象的 Provider 能力。"
          }
        ]
      },
      flow: {
        eyebrow: "执行路径",
        title: "从访问入口到受控系统动作。",
        description:
          "这套集成模型可读，是因为每一跳的职责边界都清晰。",
        items: [
          "用户或系统通过 IM、Web UI、嵌入面板或 Webhook 入口访问 AtlasClaw；企业系统还可为悬浮助手发送规范化的页面变化。",
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
              "版本化 SmartCMP Provider 参考实现，覆盖 typed domain operations、页面感知的请求与审批、受控资源生命周期、Security 工作流和只读编辑辅助。",
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
          "Provider 是自包含集成包：metadata 与配置 schema、鉴权约定、可复用领域代码、薄 Skill adapters、可选页面 Context 与参考资料。Core 从 `providers_root` 加载它们，并以 provider-qualified Skills 暴露给运行时。",
        points: [
          "Provider 让平台特定的鉴权和流程逻辑不污染核心。",
          "可复用 API 与业务操作位于可导入 Provider 包中，Skills 保持对用户可读、对运行时显式且足够薄。",
          "显式 callable entrypoint 接收限定范围的运行 Context，不在协议 Adapter 中重复领域规则。",
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
          "从 SmartCMP 与 Jira 示例开始，按 Provider metadata、配置 schema、可复用领域操作与薄 Skill adapters 实现你的目标系统。欢迎把新的系统集成代码提交到 atlasclaw-providers 仓库。",
        href: "/zh/docs/providers/",
        secondaryHref: repoLinks.providers,
        secondaryLabel: "前往 GitHub 提交集成"
      }
    },
    embedded: {
      title: "用内嵌 AI Agent 推动现有系统智能化升级 | AtlasClaw",
      description:
        "将 AtlasClaw 作为企业 AI 助手嵌入现有系统，无需重构应用，即可获得上下文感知、智能分析和 AI Agent 执行能力。",
      keywords: [
        "AI 助手",
        "企业 AI 助手",
        "嵌入式 AI 助手",
        "业务系统 AI 助手",
        "企业 AI Agent",
        "上下文感知 AI 助手",
        "现有系统 AI 化",
        "AtlasClaw"
      ],
      socialImage: {
        path: "/og/embedded-mode.png",
        alt: "AtlasClaw 内嵌模式为现有系统带来企业 AI 助手"
      },
      hero: {
        eyebrow: "内嵌模式",
        title: "用内嵌 AI Agent 推动现有系统智能化升级。",
        description:
          "无需彻底改造现有系统，即可将 AtlasClaw 作为企业 AI 助手轻量嵌入，在当前页面提供上下文感知协助、跨系统分析与受控 Agent 操作。",
        primaryLabel: "查看架构",
        secondaryLabel: "了解访问方式",
        guideLabel: "阅读集成指南",
        status: "v1.0.0 增强"
      },
      surfaces: {
        eyebrow: "两种访问方式",
        title: "同一个 AtlasClaw Agent，通过两种入口访问。",
        description:
          "独立菜单访问和悬浮界面，都是进入同一个 AtlasClaw Agent 的方式。企业系统可以选择其中一个，也可以同时使用，不需要重复建设 AtlasClaw 集成。",
        items: [
          {
            number: "01",
            title: "独立菜单访问",
            subtitle: "以完整页面访问同一个 AtlasClaw Agent",
            description:
              "在企业系统导航中增加独立菜单入口，以完整对话工作区打开 AtlasClaw。它只是访问同一个 AtlasClaw Agent 的另一个入口，不是另一套 AtlasClaw 实现。",
            points: [
              "完整对话与工作区体验",
              "不需要页面 Context 桥接",
              "适合跨系统任务"
            ]
          },
          {
            number: "02",
            title: "悬浮助手",
            subtitle: "跟随当前页面的即时协作",
            description:
              "在当前系统页面上打开紧凑助手。轻量消息桥发送规范化页面变化，让 AtlasClaw 动态刷新 Context，同时不暴露内部会话或业务数据对象。",
            points: [
              "紧凑启动器与悬浮层生命周期",
              "动态页面 Context 与对象操作",
              "适合原地分析和操作"
            ]
          }
        ]
      },
      architecture: {
        eyebrow: "融合核心",
        title: "AtlasClaw 理解并操作你的现有系统。",
        description:
          "通过 embed_integration 配置的 HostApp Provider，将页面映射为业务对象、Domain Skills 与状态相关操作。AtlasClaw 因此能够响应当前 Context，并复用现有 API、身份、权限、流程与审计执行操作，无需新增服务或重构后端。",
        caption:
          "企业系统只增加访问入口与轻量页面桥接；现有 API、身份、权限、业务流程与审计继续沿用。",
        signals: [
          {
            label: "运行在 AtlasClaw 中",
            value: "Provider 包，不是企业系统新增服务"
          },
          {
            label: "理解现有系统",
            value: "页面路由、业务对象、Domain Skills 与对象操作"
          },
          {
            label: "复用现有能力",
            value: "现有 API、Cookie 身份、RBAC、流程与审计"
          }
        ]
      },
      showcase: {
        eyebrow: "SmartCMP 参考实现",
        title: "AtlasClaw 理解当前页面、对应的业务对象与可用操作。",
        description:
          "SmartCMP 保持现有架构。它的 AtlasClaw Provider 匹配受支持的页面路由，通过现有 API 解析当前对象，并让悬浮 Context 与普通 Chat 复用同一套 Domain Skill 操作构建器。以下是 v1.0.0 更广泛覆盖范围中的代表性示例。",
        referenceLabel: "阅读编辑辅助合同",
        referenceHref: repoLinks.editorAssistanceZh,
        primaryCaption:
          "VM 详情路由匹配为 virtual_machine 与 smartcmp:resource。resource Domain Skill 提供打开、综合分析与操作，无需 SmartCMP 发送资源 DTO。",
        secondaryCaption:
          "告警详情路由匹配为 alarm_alert 与 smartcmp:alarm。alarm Domain Skill 提供分析，以及符合当前状态的静音、解决或重新打开操作。",
        routes: [
          {
            label: "虚拟机",
            path: "/main/virtual-machines/{resource_id}/details",
            object: "virtual_machine",
            skill: "smartcmp:resource",
            actions: "打开 · 综合分析 · 操作"
          },
          {
            label: "告警",
            path: "/main/alarm-activity-management/alarm-triggered/edit/{alert_id}",
            object: "alarm_alert",
            skill: "smartcmp:alarm",
            actions: "分析 · 静音 · 解决 · 重新打开"
          },
          {
            label: "服务申请",
            path: "/main/work-order-request/{catalog_id}",
            object: "catalog",
            skill: "smartcmp:request",
            actions: "创建申请 · 校验实时选项"
          },
          {
            label: "工单审批",
            path: "/main/work-order-process/ServiceRequest/myApproval/{generic_request_id}",
            object: "approval_request",
            skill: "smartcmp:approval",
            actions: "分析 · 同意 · 填写原因后拒绝"
          },
          {
            label: "安全策略",
            path: "/main/resource-management/policy/edit/{policy_id}",
            object: "security_policy",
            skill: "smartcmp:security-compliance",
            actions: "只读策略 Context"
          },
          {
            label: "编辑辅助",
            path: "/main/service-model/forms/edit/{form_id}",
            object: "form_definition",
            skill: "smartcmp:form-designer",
            actions: "生成完整替换内容 · 人工检查并复制"
          }
        ]
      },
      contextFlow: {
        eyebrow: "动态 Context",
        title: "从页面变化到受控操作。",
        description:
          "企业系统发送导航状态；AtlasClaw 与配置的 HostApp Provider 负责解释含义、解析数据并组织执行。",
        steps: [
          {
            label: "企业系统",
            title: "发送当前页面",
            description: "发送规范化 router path，以及单调递增的 generation。"
          },
          {
            label: "Core",
            title: "只解析最新页面",
            description:
              "对快速导航进行防抖、呈现加载状态、使用固定 HostApp Provider，并拒绝过期 generation。"
          },
          {
            label: "HostApp Provider",
            title: "解析含义与操作",
            description:
              "通过现有系统 API 读取对象，并复用所属 Domain Skill 的操作构建器。"
          },
          {
            label: "AtlasClaw Agent",
            title: "推理与执行",
            description:
              "把仅包含动作的追问绑定到当前对象，同时保留普通 Skill 路由、RBAC、确认与审计边界。"
          }
        ]
      },
      hostApp: {
        eyebrow: "企业系统集成",
        title: "轻量集成，无需重构企业系统。",
        description:
          "企业系统只需增加访问入口与页面生命周期事件；AtlasClaw 及其配置的 Provider 提供智能能力，现有架构保持不变。",
        common: {
          title: "两个界面都需要",
          points: [
            "在企业系统已登录的浏览器会话中嵌入 AtlasClaw。",
            "共享企业系统 Cookie，使 Provider 调用使用同一用户身份与上游权限。",
            "跨窗口消息不传递 AtlasClaw session key、Provider 配置或业务 DTO。"
          ]
        },
        menu: {
          title: "独立菜单访问",
          points: [
            "在企业系统导航中添加独立 AtlasClaw 入口。",
            "通过该菜单路由加载完整 AtlasClaw 界面。",
            "不需要页面事件协议。"
          ]
        },
        floating: {
          title: "悬浮模式额外需要",
          points: [
            "管理启动器、iframe、ready 与 close 生命周期。",
            "提供精确 host origin 和每个 iframe 独立的 nonce。",
            "用严格的消息类型、nonce 与 generation 发送校验后的页面变化。"
          ]
        }
      },
      identity: {
        eyebrow: "身份与连续性",
        title: "AtlasClaw 以同一个已登录用户的身份工作。",
        description:
          "Embedded 认证基于 Cookie，因此 Provider 访问共享企业系统的浏览器会话，并继续服从已登录用户的真实权限。菜单与悬浮界面还可以共享当前 AtlasClaw Chat 会话；内嵌页面永远不会拿到内部 session key。",
        signals: [
          "企业系统 Cookie 身份",
          "Provider 侧用户权限",
          "共享当前 Chat 会话",
          "宿主消息不包含 session key"
        ]
      },
      boundary: {
        eyebrow: "清晰归属",
        title: "企业系统上报当前路由，AtlasClaw 提供业务含义。",
        description:
          "企业系统代码不选择 Provider、不发送业务 DTO，也不决定应该启用哪些 Skills 或操作。AtlasClaw 通过配置的 HostApp Provider 匹配 Context，Domain Skills 定义对象操作，普通权限和确认流程负责治理执行。"
      },
      faq: {
        eyebrow: "嵌入式 AI 助手",
        title: "将 AtlasClaw 带入现有系统前，团队通常关心这些问题。",
        description:
          "AtlasClaw 为现有系统增加上下文感知的企业 AI 助手，同时保留原有系统架构、用户身份与治理边界。",
        items: [
          {
            question: "什么是嵌入式 AI 助手？",
            answer:
              "嵌入式 AI 助手直接运行在用户日常使用的企业应用中。AtlasClaw 同时支持独立菜单和悬浮助手，让用户无需切换到另一个 AI 产品，就能提问、理解当前页面并执行受控操作。"
          },
          {
            question: "不重构现有应用，也能加入 AI 助手吗？",
            answer:
              "可以。现有系统继续使用原来的后端、API、业务流程与审计模型。轻量集成只增加 AtlasClaw 访问入口；悬浮助手再发送规范化页面变化，用于动态 Context 匹配。"
          },
          {
            question: "上下文感知 AI 助手如何理解当前页面？",
            answer:
              "企业系统发送规范化路由变化，配置的 Provider 将路由匹配为业务对象，通过现有 API 获取最新数据，并向 AtlasClaw 提供相关 Domain Skill 与对象操作。"
          },
          {
            question: "内嵌 AI Agent 是否沿用现有用户权限？",
            answer:
              "是。基于 Cookie 的认证共享已登录浏览器会话，Provider 调用继续服从用户原有权限、流程、确认与审计控制；AtlasClaw 内部 session key 不会暴露给内嵌页面。"
          }
        ]
      },
      cta: {
        title: "把 AtlasClaw 带进你的业务系统",
        description:
          "先从 Embedded 集成合同开始，再为真正需要分析与操作的产品页面增加 Provider Context 路由。",
        primaryLabel: "阅读 Embedded 集成",
        secondaryLabel: "查看 Providers"
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
          description: "理解版本化 Provider metadata、可复用领域代码、薄 Skills、可选 Context 与 provider-qualified naming。",
          href: "/zh/docs/providers/"
        },
        {
          title: "部署",
          description: "理解嵌入式、独立式与最小 HA 运行模式的差异，以及各自的配置锚点。",
          href: "/zh/docs/deployment/"
        },
        {
          title: "完整文档",
          description: "打开版本化的安装、管理、用户、Core、Provider 与参考文档。",
          href: repoLinks.docs
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
          title: "atlasclaw-doc",
          description: "安装、运维、Core 与 Provider 集成的版本化 Docusaurus 文档。",
          href: repoLinks.docs
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
          name: "atlasclaw-doc",
          description: "版本化安装、管理、用户、Core、Provider 集成与参考文档。",
          href: repoLinks.docs
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
        { label: "Providers 仓库 README", href: repoLinks.providerGuide },
        { label: "完整文档", href: repoLinks.docs }
      ]
    },
    providers: {
      title: "AtlasClaw Providers | Skill 执行与企业 AI 集成",
      description:
        "AtlasClaw Provider 结构、Skill 模型、provider-qualified naming、Webhook AI 集成、SmartCMP、Jira 与企业 AI 集成参考示例。",
      intro:
        "Provider 是 AtlasClaw 的集成边界。每个 Provider 都封装目标系统 metadata、配置与鉴权合同、可复用领域操作、薄 Skills、可选页面 Context，以及让企业 AI 集成保持可理解的参考资料。",
      structure: `providers/<provider-name>/
├── PROVIDER.md
├── provider.schema.json
├── README.md
├── pyproject.toml              # 可选可导入包
├── assets/                     # 可选静态资源
├── src/<provider_package>/     # 可选可复用领域代码
├── assistant_context/          # 可选页面 Context
└── skills/
    ├── <skill-a>/
    │   ├── SKILL.md
    │   ├── scripts/
    │   └── references/
    └── <skill-b>/`,
      points: [
        "Provider 负责把 AtlasClaw 的身份上下文变成目标系统可接受的鉴权方式。",
        "可复用鉴权、API、typed models 与业务操作归属于可导入 Provider 包。",
        "Skill 保持人类可读和薄层结构，并绑定到显式 `file.py:callable` entrypoint。",
        "可选 `assistant_context` 路由解析当前企业系统页面，不接受宿主发送的业务 DTO。",
        "Provider Qualified Naming 用于避免跨系统能力冲突。",
        "Callable 结果可以携带少量与请求 trace 绑定的续跑 metadata，公开证据继续对 Agent 和用户可见。"
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
        { label: "Jira Provider 示例", href: repoLinks.jira },
        { label: "Provider 加载参考", href: repoLinks.providerLoadingZh }
      ]
    },
    deployment: {
      title: "AtlasClaw 部署 | 多用户企业级 AI Agent",
      description:
        "AtlasClaw 的部署模式、最小高可用、独立菜单访问、悬浮 AI 助手、Cookie 身份、SSO/RBAC、Channels 与 Provider 运行时接线。",
      intro:
        "AtlasClaw 支持嵌入式访问和独立式多用户 AI Agent 层。独立式部署既可以运行在单节点，也可以在满足明确的共享状态、路由与 Channel 约束时使用 v1.0.0 最小 HA 运行时。",
      modes: [
        {
          title: "嵌入式部署",
          description:
            "通过独立菜单入口和可选的 Context 感知悬浮助手访问同一个 Agent。两者共享企业系统 Cookie 身份；只有悬浮界面需要严格的页面变化桥接。"
        },
        {
          title: "独立式部署",
          description:
            "适合企业需要在多个系统之上提供统一的 SSO 多用户 AI Agent 入口。单节点同时支持 long-connection 与 webhook Channel 模式。"
        },
        {
          title: "高可用运行时",
          description:
            "多个应用节点使用共享 MySQL 与已初始化的共享 Workspace，每个节点具有稳定 ID，并对每个已认证用户执行粘性路由。"
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
      haConfig: `alembic upgrade head

ATLASCLAW_ENABLE_HA=true
ATLASCLAW_HA_NODE_ID=<unique-node-id>
ATLASCLAW_RUN_AGENT_HEARTBEAT=false`,
      haNotes: [
        "使用共享 MySQL；SQLite 不能作为 HA 数据库。应用节点启动前应初始化共享 Workspace，并且只执行一次 migration。",
        "为每个实例分配稳定且唯一的 node ID，并配置上游代理，让同一个已认证用户的请求始终进入同一节点。",
        "启用单例 Agent Heartbeat 任务时，最多只在一个节点设置 `ATLASCLAW_RUN_AGENT_HEARTBEAT=true`。",
        "每个节点的 Token Health、Heartbeat 状态和工作 runtime 目录保持在该节点本地。",
        "HA 只接受已注册的 long-connection Channel 模式；Webhook 模式会被拒绝，节点永久故障后也不会自动转移 Channel ownership。"
      ],
      notes: [
        "使用 `providers_root` 从外部 providers 仓库加载 Provider 文件夹。",
        "密钥放在环境变量里，不要提交到 JSON 配置。",
        "Embedded 访问使用企业系统 Cookie 身份。独立菜单访问只需企业系统路由；悬浮界面还需发送规范化 path、nonce 与 generation。",
        "Context 解析与对象操作保留在 AtlasClaw 和 Providers 内部；企业系统不发送业务 DTO，也不直接调用 Agent 或 Tool API。",
        "单节点部署可以使用 Webhook 模式执行受限 Skills 的系统到系统 fire-and-forget 调用；HA 会拒绝 Webhook Channel 模式。",
        "目标平台的鉴权与审计继续保留在 Provider 和下游平台内部。"
      ],
      references: [
        { label: "内嵌 Agent 概览", href: "/zh/embedded-agent/" },
        { label: "Embedded 集成参考", href: repoLinks.embeddedDocsZh },
        { label: "高可用配置", href: repoLinks.haGuideZh },
        { label: "核心仓库 README", href: repoLinks.architecture },
        { label: "Provider 加载参考", href: repoLinks.providerLoadingZh }
      ]
    }
  }
};
