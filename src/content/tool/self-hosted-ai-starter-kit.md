---
title: Self-Hosted AI Starter Kit
slug: self-hosted-ai-starter-kit
published: false
publishedDate: 2025-03-05
description: The Self-hosted AI Starter Kit is an open, docker compose template that bootstraps a fully featured Local AI and Low Code development environment. Curated by n8n, it combines the self-hosted n8n platform with a list of compatible AI products and components to get you started building self-hosted AI workflows.
image: /logo/n8n-demo.gif
---

The AI starter kit consists of four components:

1. <a href="https://n8n.io/" target="_blank">n8n</a>: **workflow automation platform** and **low-code platform** with many integrations and AI components
2. <a href="https://ollama.com/" target="_blank">Ollama</a>: **LLM platform** to install and run LLMs locally
3. <a href="https://qdrant.tech/" target="_blank">Qdrant</a>: **vector database**
4. <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>: **relational database**, but it can also be used as a vector database with the **pgvector** extension.

and it allows you to build:

1. AI Agents that schedule appointments or send emails
2. Summaries of documents locally, which means without leaking data
3. Smart messaging bots, like Slackbots, for communication and IT-ops
4. Private analyses of financial documents
5. Much, much more

You can find documentation about this stack at the following places:

1. <a href="https://docs.n8n.io/hosting/starter-kits/ai-starter-kit/" target="_blank">n8n's website</a>
2. <a href="https://github.com/n8n-io/self-hosted-ai-starter-kit" target="_blank">GitHub repo for this stack</a>

The easiest way to set up this AI stack is to use the provided Docker compose file (docker-compose.yml):


    volumes:
        n8n_storage:
        postgres_storage:
        ollama_storage:
        qdrant_storage:

    networks:
        demo:

    x-n8n: &service-n8n
        image: n8nio/n8n:latest
        networks: ['demo']
        environment:
            - DB_TYPE=postgresdb
            - DB_POSTGRESDB_HOST=postgres
            - DB_POSTGRESDB_USER=${POSTGRES_USER}
            - DB_POSTGRESDB_PASSWORD=${POSTGRES_PASSWORD}
            - N8N_DIAGNOSTICS_ENABLED=false
            - N8N_PERSONALIZATION_ENABLED=false
            - N8N_ENCRYPTION_KEY
            - N8N_USER_MANAGEMENT_JWT_SECRET
            - OLLAMA_HOST=ollama:11434

    x-ollama: &service-ollama
        image: ollama/ollama:latest
        container_name: ollama
        networks: ['demo']
        restart: unless-stopped
        ports:
            - 11434:11434
        volumes:
            - ollama_storage:/root/.ollama

    x-init-ollama: &init-ollama
        image: ollama/ollama:latest
        networks: ['demo']
        container_name: ollama-pull-llama
        volumes:
            - ollama_storage:/root/.ollama
        entrypoint: /bin/sh
        environment:
            - OLLAMA_HOST=ollama:11434
        command:
            - "-c"
            - "sleep 3; ollama pull llama3.2"

    services:
        postgres:
            image: postgres:16-alpine
            hostname: postgres
            networks: ['demo']
            restart: unless-stopped
            environment:
            - POSTGRES_USER
            - POSTGRES_PASSWORD
            - POSTGRES_DB
            volumes:
            - postgres_storage:/var/lib/postgresql/data
            healthcheck:
            test: ['CMD-SHELL', 'pg_isready -h localhost -U ${POSTGRES_USER} -d ${POSTGRES_DB}']
            interval: 5s
            timeout: 5s
            retries: 10

        n8n-import:
            <<: *service-n8n
            hostname: n8n-import
            container_name: n8n-import
            entrypoint: /bin/sh
            command:
            - "-c"
            - "n8n import:credentials --separate --input=/backup/credentials && n8n import:workflow --separate --input=/backup/workflows"
            volumes:
            - ./n8n/backup:/backup
            depends_on:
            postgres:
                condition: service_healthy

        n8n:
            <<: *service-n8n
            hostname: n8n
            container_name: n8n
            restart: unless-stopped
            ports:
            - 5678:5678
            volumes:
            - n8n_storage:/home/node/.n8n
            - ./n8n/backup:/backup
            - ./shared:/data/shared
            depends_on:
            postgres:
                condition: service_healthy
            n8n-import:
                condition: service_completed_successfully

        qdrant:
            image: qdrant/qdrant
            hostname: qdrant
            container_name: qdrant
            networks: ['demo']
            restart: unless-stopped
            ports:
            - 6333:6333
            volumes:
            - qdrant_storage:/qdrant/storage

        ollama-cpu:
            profiles: ["cpu"]
            <<: *service-ollama

        ollama-gpu:
            profiles: ["gpu-nvidia"]
            <<: *service-ollama
            deploy:
            resources:
                reservations:
                devices:
                    - driver: nvidia
                    count: 1
                    capabilities: [gpu]

        ollama-gpu-amd:
            profiles: ["gpu-amd"]
            <<: *service-ollama
            image: ollama/ollama:rocm
            devices:
            - "/dev/kfd"
            - "/dev/dri"

        ollama-pull-llama-cpu:
            profiles: ["cpu"]
            <<: *init-ollama
            depends_on:
            - ollama-cpu

        ollama-pull-llama-gpu:
            profiles: ["gpu-nvidia"]
            <<: *init-ollama
            depends_on:
            - ollama-gpu

        ollama-pull-llama-gpu-amd:
            profiles: [gpu-amd]
            <<: *init-ollama
            image: ollama/ollama:rocm
            depends_on:
            - ollama-gpu-amd

The setup instructions in the README file are clear and you only have to do something extra if you are running Docker on a Mac/Apple Silicon.

So, what happens if we clone the repo and start the Docker compose stack.