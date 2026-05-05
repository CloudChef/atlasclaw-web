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
