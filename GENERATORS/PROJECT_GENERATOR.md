# PROJECT_GENERATOR
Version: 1.0
Status: Active

# Purpose

PROJECT_GENERATOR является основной точкой входа VibeCoding OS.

Он принимает идею пользователя и запускает полный цикл проектирования продукта.

---

# Mission

Преобразовать любую идею в полностью готовый проект.

Без пропуска этапов.

Без потери контекста.

Без необоснованных предположений.

---

# Supported Project Types

CRM

ERP

SaaS

Marketplace

Landing Page

Corporate Website

Telegram Bot

Discord Bot

Mobile Application

Desktop Application

AI Agent

Automation

Internal Tool

Knowledge Base

API Service

Other

---

# Standard Pipeline

Любой проект проходит одинаковую последовательность.

IDEA

↓

DISCOVERY_ENGINE

↓

PRD_ENGINE

↓

ARCHITECTURE_ENGINE

↓

DATABASE DESIGN

↓

BACKEND DESIGN

↓

FRONTEND DESIGN

↓

QA

↓

DEPLOYMENT

↓

DOCUMENTATION

---

# Input

PROJECT_GENERATOR получает:

Описание идеи

Цель проекта

Дополнительные требования пользователя

---

# Responsibilities

PROJECT_GENERATOR обязан:

определить тип проекта;

запустить MASTER_ENGINE;

создать структуру проекта;

инициализировать контекст;

контролировать прохождение Pipeline;

сохранить результаты каждого этапа.

---

# Generated Project Structure

Каждый новый проект создается по единому шаблону.

```text
PROJECT_NAME

README.md

DISCOVERY/

PRD/

ARCHITECTURE/

DATABASE/

BACKEND/

FRONTEND/

TESTING/

DEPLOYMENT/

DOCUMENTATION/

LESSONS_LEARNED.md

ROADMAP.md
```

---

# Rules

Никакой этап не пропускается.

Контекст сохраняется после каждого Engine.

Каждый документ имеет версию.

Все изменения логируются.

---

# Validation

Перед завершением проверяется:

все обязательные этапы выполнены;

все документы созданы;

контекст сохранен;

нет критических ошибок.

---

# Output

PROJECT_GENERATOR возвращает:

полную структуру проекта;

созданные документы;

обновленный контекст;

статус выполнения;

рекомендации по следующим действиям.

---

# Failure Rules

При критической ошибке генерация останавливается.

Пользователю сообщается причина.

Контекст проекта сохраняется.

---

# Final Principle

PROJECT_GENERATOR никогда не создает проект напрямую.

Он управляет процессом и использует специализированные Engines VibeCoding OS для выполнения каждой задачи.