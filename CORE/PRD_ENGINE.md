# PRD_ENGINE
Version: 1.0
Status: Active

# Purpose

PRD_ENGINE отвечает за создание Product Requirements Document.

Он преобразует результаты Discovery в полную спецификацию продукта.

---

# Mission

Создать документ, который позволит разработать продукт без дополнительных предположений.

PRD должен быть понятен человеку и любой AI модели.

---

# Input

PRD_ENGINE получает только утвержденный результат DISCOVERY_ENGINE.

Если Discovery не завершен,

работа запрещена.

---

# Responsibilities

PRD_ENGINE обязан определить:

назначение продукта;

бизнес цели;

пользовательские сценарии;

функциональные требования;

нефункциональные требования;

роли пользователей;

ограничения;

интеграции;

критерии приемки.

---

# PRD Structure

Executive Summary

Business Context

Goals

Target Audience

User Roles

User Stories

Functional Requirements

Non Functional Requirements

Integrations

Permissions

Project Scope

Out of Scope

Success Metrics

Acceptance Criteria

Future Development

---

# Functional Requirements Rules

Каждая функция должна иметь:

название;

описание;

ценность;

критерий завершения.

---

# User Story Rules

Каждая User Story оформляется по шаблону.

Как <роль>

Я хочу <действие>

Чтобы <ценность>

---

# Acceptance Criteria

Каждая функция должна иметь измеримые критерии приемки.

Без Acceptance Criteria функция считается незавершенной.

---

# Scope Rules

Все требования разделяются на:

MVP

Next Release

Future

---

# Quality Rules

PRD не содержит:

архитектурных решений;

структуры базы данных;

описания API;

реализации интерфейсов;

кода.

Эти задачи выполняют другие Engines.

---

# Validation

Перед завершением PRD_ENGINE проверяет:

все User Stories описаны;

все функции имеют Acceptance Criteria;

все ограничения учтены;

нет противоречий с Discovery.

---

# Output

PRD_ENGINE создает:

PRODUCT_REQUIREMENTS.md

Feature List

User Stories

Acceptance Criteria

Updated Project Context

---

# Completion Criteria

PRD считается завершенным только если:

описаны все функции MVP;

определены роли;

определены ограничения;

описаны критерии приемки;

контекст обновлен.

---

# Final Principle

PRD_ENGINE отвечает только за требования к продукту.

Он не принимает технических решений и не описывает реализацию.