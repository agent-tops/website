const a=`---
title: Self-Hosted AI Starter Kit
slug: self-hosted-ai-starter-kit
published: false
publishedDate: 2025-03-05
description: The Self-hosted AI Starter Kit is an open, docker compose template that bootstraps a fully featured Local AI and Low Code development environment. Curated by n8n, it combines the self-hosted n8n platform with a list of compatible AI products and components to get you started building self-hosted AI workflows.
image: /logo/n8n-demo.gif
---

<p>The AI starter kit consists of four components:</p>
<ol>
<li><a href="https://n8n.io/" target="_blank">n8n</a>: <strong>workflow automation platform</strong> and <strong>low-code platform</strong> with many integrations and AI components</li>
<li><a href="https://ollama.com/" target="_blank">Ollama</a>: <strong>LLM platform</strong> to install and run LLMs locally</li>
<li><a href="https://qdrant.tech/" target="_blank">Qdrant</a>: <strong>vector database</strong></li>
<li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>: <strong>relational database</strong>, but it can also be used as a vector database with the <strong>pgvector</strong> extension.</li>
</ol>
<p>and it allows you to build:</p>
<ol>
<li>AI Agents that schedule appointments or send emails</li>
<li>Summaries of documents locally, which means without leaking data</li>
<li>Smart messaging bots, like Slackbots, for communication and IT-ops</li>
<li>Private analyses of financial documents</li>
<li>Much, much more</li>
</ol>
<p>You can find documentation about this stack at the following places:</p>
<ol>
<li><a href="https://docs.n8n.io/hosting/starter-kits/ai-starter-kit/" target="_blank">n8n&#39;s website</a></li>
<li><a href="https://github.com/n8n-io/self-hosted-ai-starter-kit" target="_blank">GitHub repo for this stack</a></li>
</ol>
<p>The easiest way to set up this AI stack is to use the provided Docker compose file (docker-compose.yml):</p>
<pre><code>volumes<span class="token operator">:</span>
    n8n_storage<span class="token operator">:</span>
    postgres_storage<span class="token operator">:</span>
    ollama_storage<span class="token operator">:</span>
    qdrant_storage<span class="token operator">:</span>

networks<span class="token operator">:</span>
    demo<span class="token operator">:</span>

x<span class="token operator">-</span>n8n<span class="token operator">:</span> <span class="token operator">&amp;</span>service<span class="token operator">-</span>n8n
    image<span class="token operator">:</span> n8nio<span class="token operator">/</span>n8n<span class="token operator">:</span>latest
    networks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'demo'</span><span class="token punctuation">]</span>
    environment<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token constant">DB_TYPE</span><span class="token operator">=</span>postgresdb
        <span class="token operator">-</span> <span class="token constant">DB_POSTGRESDB_HOST</span><span class="token operator">=</span>postgres
        <span class="token operator">-</span> <span class="token constant">DB_POSTGRESDB_USER</span><span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">POSTGRES_USER</span><span class="token punctuation">}</span>
        <span class="token operator">-</span> <span class="token constant">DB_POSTGRESDB_PASSWORD</span><span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">POSTGRES_PASSWORD</span><span class="token punctuation">}</span>
        <span class="token operator">-</span> <span class="token constant">N8N_DIAGNOSTICS_ENABLED</span><span class="token operator">=</span><span class="token boolean">false</span>
        <span class="token operator">-</span> <span class="token constant">N8N_PERSONALIZATION_ENABLED</span><span class="token operator">=</span><span class="token boolean">false</span>
        <span class="token operator">-</span> <span class="token constant">N8N_ENCRYPTION_KEY</span>
        <span class="token operator">-</span> <span class="token constant">N8N_USER_MANAGEMENT_JWT_SECRET</span>
        <span class="token operator">-</span> <span class="token constant">OLLAMA_HOST</span><span class="token operator">=</span>ollama<span class="token operator">:</span><span class="token number">11434</span>

x<span class="token operator">-</span>ollama<span class="token operator">:</span> <span class="token operator">&amp;</span>service<span class="token operator">-</span>ollama
    image<span class="token operator">:</span> ollama<span class="token operator">/</span>ollama<span class="token operator">:</span>latest
    container_name<span class="token operator">:</span> ollama
    networks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'demo'</span><span class="token punctuation">]</span>
    restart<span class="token operator">:</span> unless<span class="token operator">-</span>stopped
    ports<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token number">11434</span><span class="token operator">:</span><span class="token number">11434</span>
    volumes<span class="token operator">:</span>
        <span class="token operator">-</span> ollama_storage<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">root</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span>ollama

x<span class="token operator">-</span>init<span class="token operator">-</span>ollama<span class="token operator">:</span> <span class="token operator">&amp;</span>init<span class="token operator">-</span>ollama
    image<span class="token operator">:</span> ollama<span class="token operator">/</span>ollama<span class="token operator">:</span>latest
    networks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'demo'</span><span class="token punctuation">]</span>
    container_name<span class="token operator">:</span> ollama<span class="token operator">-</span>pull<span class="token operator">-</span>llama
    volumes<span class="token operator">:</span>
        <span class="token operator">-</span> ollama_storage<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">root</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span>ollama
    entrypoint<span class="token operator">:</span> <span class="token operator">/</span>bin<span class="token operator">/</span>sh
    environment<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token constant">OLLAMA_HOST</span><span class="token operator">=</span>ollama<span class="token operator">:</span><span class="token number">11434</span>
    command<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token string">"-c"</span>
        <span class="token operator">-</span> <span class="token string">"sleep 3; ollama pull llama3.2"</span>

services<span class="token operator">:</span>
    postgres<span class="token operator">:</span>
        image<span class="token operator">:</span> postgres<span class="token operator">:</span><span class="token number">16</span><span class="token operator">-</span>alpine
        hostname<span class="token operator">:</span> postgres
        networks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'demo'</span><span class="token punctuation">]</span>
        restart<span class="token operator">:</span> unless<span class="token operator">-</span>stopped
        environment<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token constant">POSTGRES_USER</span>
        <span class="token operator">-</span> <span class="token constant">POSTGRES_PASSWORD</span>
        <span class="token operator">-</span> <span class="token constant">POSTGRES_DB</span>
        volumes<span class="token operator">:</span>
        <span class="token operator">-</span> postgres_storage<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib<span class="token operator">/</span>postgresql<span class="token operator">/</span>data
        healthcheck<span class="token operator">:</span>
        test<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'CMD-SHELL'</span><span class="token punctuation">,</span> <span class="token string">'pg_isready -h localhost -U \${POSTGRES_USER} -d \${POSTGRES_DB}'</span><span class="token punctuation">]</span>
        interval<span class="token operator">:</span> 5s
        timeout<span class="token operator">:</span> 5s
        retries<span class="token operator">:</span> <span class="token number">10</span>

    n8n<span class="token operator">-</span><span class="token keyword">import</span><span class="token operator">:</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>service<span class="token operator">-</span>n8n
        hostname<span class="token operator">:</span> n8n<span class="token operator">-</span><span class="token keyword">import</span>
        container_name<span class="token operator">:</span> n8n<span class="token operator">-</span><span class="token keyword">import</span>
        entrypoint<span class="token operator">:</span> <span class="token operator">/</span>bin<span class="token operator">/</span>sh
        command<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token string">"-c"</span>
        <span class="token operator">-</span> <span class="token string">"n8n import:credentials --separate --input=/backup/credentials &amp;&amp; n8n import:workflow --separate --input=/backup/workflows"</span>
        volumes<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>n8n<span class="token operator">/</span>backup<span class="token operator">:</span><span class="token operator">/</span>backup
        depends_on<span class="token operator">:</span>
        postgres<span class="token operator">:</span>
            condition<span class="token operator">:</span> service_healthy

    n8n<span class="token operator">:</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>service<span class="token operator">-</span>n8n
        hostname<span class="token operator">:</span> n8n
        container_name<span class="token operator">:</span> n8n
        restart<span class="token operator">:</span> unless<span class="token operator">-</span>stopped
        ports<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token number">5678</span><span class="token operator">:</span><span class="token number">5678</span>
        volumes<span class="token operator">:</span>
        <span class="token operator">-</span> n8n_storage<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>node<span class="token operator">/</span><span class="token punctuation">.</span>n8n
        <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>n8n<span class="token operator">/</span>backup<span class="token operator">:</span><span class="token operator">/</span>backup
        <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>shared<span class="token operator">:</span><span class="token operator">/</span>data<span class="token operator">/</span>shared
        depends_on<span class="token operator">:</span>
        postgres<span class="token operator">:</span>
            condition<span class="token operator">:</span> service_healthy
        n8n<span class="token operator">-</span><span class="token keyword">import</span><span class="token operator">:</span>
            condition<span class="token operator">:</span> service_completed_successfully

    qdrant<span class="token operator">:</span>
        image<span class="token operator">:</span> qdrant<span class="token operator">/</span>qdrant
        hostname<span class="token operator">:</span> qdrant
        container_name<span class="token operator">:</span> qdrant
        networks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'demo'</span><span class="token punctuation">]</span>
        restart<span class="token operator">:</span> unless<span class="token operator">-</span>stopped
        ports<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token number">6333</span><span class="token operator">:</span><span class="token number">6333</span>
        volumes<span class="token operator">:</span>
        <span class="token operator">-</span> qdrant_storage<span class="token operator">:</span><span class="token operator">/</span>qdrant<span class="token operator">/</span>storage

    ollama<span class="token operator">-</span>cpu<span class="token operator">:</span>
        profiles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"cpu"</span><span class="token punctuation">]</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>service<span class="token operator">-</span>ollama

    ollama<span class="token operator">-</span>gpu<span class="token operator">:</span>
        profiles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"gpu-nvidia"</span><span class="token punctuation">]</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>service<span class="token operator">-</span>ollama
        deploy<span class="token operator">:</span>
        resources<span class="token operator">:</span>
            reservations<span class="token operator">:</span>
            devices<span class="token operator">:</span>
                <span class="token operator">-</span> driver<span class="token operator">:</span> nvidia
                count<span class="token operator">:</span> <span class="token number">1</span>
                capabilities<span class="token operator">:</span> <span class="token punctuation">[</span>gpu<span class="token punctuation">]</span>

    ollama<span class="token operator">-</span>gpu<span class="token operator">-</span>amd<span class="token operator">:</span>
        profiles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"gpu-amd"</span><span class="token punctuation">]</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>service<span class="token operator">-</span>ollama
        image<span class="token operator">:</span> ollama<span class="token operator">/</span>ollama<span class="token operator">:</span>rocm
        devices<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token string">"/dev/kfd"</span>
        <span class="token operator">-</span> <span class="token string">"/dev/dri"</span>

    ollama<span class="token operator">-</span>pull<span class="token operator">-</span>llama<span class="token operator">-</span>cpu<span class="token operator">:</span>
        profiles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"cpu"</span><span class="token punctuation">]</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>init<span class="token operator">-</span>ollama
        depends_on<span class="token operator">:</span>
        <span class="token operator">-</span> ollama<span class="token operator">-</span>cpu

    ollama<span class="token operator">-</span>pull<span class="token operator">-</span>llama<span class="token operator">-</span>gpu<span class="token operator">:</span>
        profiles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"gpu-nvidia"</span><span class="token punctuation">]</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>init<span class="token operator">-</span>ollama
        depends_on<span class="token operator">:</span>
        <span class="token operator">-</span> ollama<span class="token operator">-</span>gpu

    ollama<span class="token operator">-</span>pull<span class="token operator">-</span>llama<span class="token operator">-</span>gpu<span class="token operator">-</span>amd<span class="token operator">:</span>
        profiles<span class="token operator">:</span> <span class="token punctuation">[</span>gpu<span class="token operator">-</span>amd<span class="token punctuation">]</span>
        <span class="token operator">&lt;&lt;</span><span class="token operator">:</span> <span class="token operator">*</span>init<span class="token operator">-</span>ollama
        image<span class="token operator">:</span> ollama<span class="token operator">/</span>ollama<span class="token operator">:</span>rocm
        depends_on<span class="token operator">:</span>
        <span class="token operator">-</span> ollama<span class="token operator">-</span>gpu<span class="token operator">-</span>amd</code></pre><p>The setup instructions in the README file are clear and you only have to do something extra if you are running Docker on a Mac/Apple Silicon.</p>
<p>So, what happens if we clone the repo and start the Docker compose stack.</p>
`;export{a as default};
