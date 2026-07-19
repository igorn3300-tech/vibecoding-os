# VibeCoding OS Repository Blueprint
Version: 1.0
Status: Approved

# Purpose

Этот документ определяет официальную структуру репозитория VibeCoding OS.

Любые новые файлы, папки и модули должны соответствовать данному Blueprint.

---

# Repository Structure

```
VibeCoding OS

ADAPTERS/
CHECKLISTS/
CORE/
DOCUMENTATION/
EXAMPLES/
GENERATORS/
KNOWLEDGE/
PROJECTS/
RULES/
SNIPPETS/
TEMPLATES/
TOOLS/
WORKFLOWS/

README.md
LICENSE
ROADMAP.md
CHANGELOG.md
REPOSITORY_BLUEPRINT.md
```

---

# Folder Responsibilities

## CORE

Ядро платформы.

Содержит Engines, интерфейсы и системную архитектуру.

---

## GENERATORS

Генераторы продуктов.

Каждый генератор отвечает за создание определенного типа проекта.

---

## KNOWLEDGE

База знаний платформы.

Содержит шаблоны, лучшие практики и инженерные паттерны.

---

## PROJECTS

Все проекты, созданные через VibeCoding OS.

Каждый проект полностью автономен.

---

## ADAPTERS

Правила работы с различными AI моделями.

---

## DOCUMENTATION

Общая документация платформы.

Не содержит документацию отдельных проектов.

---

## EXAMPLES

Примеры использования.

---

## RULES

Общие стандарты и правила разработки.

---

## TEMPLATES

Шаблоны документов.

---

## TOOLS

Вспомогательные инструменты.

---

## WORKFLOWS

Описание процессов и сценариев работы.

---

## CHECKLISTS

Контрольные списки качества.

---

## SNIPPETS

Повторно используемые фрагменты.

---

# Naming Convention

Папки:

UPPER_CASE

Файлы:

UPPER_CASE_WITH_UNDERSCORES.md

Без пробелов.

Без специальных символов.

---

# Project Standard

Каждый проект должен содержать минимум:

README

DISCOVERY

PRD

ARCHITECTURE

ROADMAP

LESSONS_LEARNED

---

# Git Rules

Каждое логическое изменение оформляется отдельным коммитом.

История должна быть читаемой.

---

# Architecture Rule

Новые модули добавляются.

Существующие модули не изменяются без необходимости.

---

# Principle

Структура репозитория считается утвержденной.

Все дальнейшее развитие происходит внутри данной архитектуры.