# ENGINE_INTERFACE
Version: 1.0
Status: Active

# Purpose

ENGINE_INTERFACE определяет единый стандарт взаимодействия между всеми Engines VibeCoding OS.

Ни один Engine не имеет права использовать собственный формат входных или выходных данных.

Все Engines работают по единому контракту.

---

# Engine Lifecycle

Каждый Engine проходит одинаковый цикл.

Receive Input

↓

Validate Input

↓

Execute Task

↓

Generate Artifacts

↓

Return Result

---

# Standard Input

Каждый Engine получает объект Project Context.

Обязательные поля:

Project Name

Project Type

Business Goal

Current Stage

Completed Stages

Project Context

Configuration

User Decisions

Previous Artifacts

---

# Standard Output

Каждый Engine обязан вернуть:

Execution Status

Generated Artifacts

Updated Context

Required User Questions

Warnings

Errors

Recommended Next Engine

---

# Execution Status

Допустимые статусы:

NOT_STARTED

RUNNING

WAITING_USER

COMPLETED

FAILED

CANCELLED

---

# Artifact Rules

Каждый Engine может создавать только собственные документы.

Например:

DISCOVERY_ENGINE

создает только Discovery Documents.

PRD_ENGINE

создает только PRD.

ARCHITECTURE_ENGINE

создает только Architecture.

Изменение документов предыдущих Engines запрещено.

---

# Context Rules

Каждый Engine получает контекст только от MASTER_ENGINE.

Engine не имеет права самостоятельно читать другие Engines.

Engine не имеет права самостоятельно запускать другой Engine.

---

# Validation Rules

Перед началом работы каждый Engine обязан проверить:

наличие обязательных входных данных;

завершение предыдущего этапа;

целостность контекста;

отсутствие конфликтов.

При обнаружении ошибки выполнение прекращается.

---

# User Questions

Если информации недостаточно,

Engine обязан вернуть список вопросов.

Engine не имеет права делать необоснованные предположения.

---

# Error Codes

Стандартные ошибки:

INVALID_INPUT

MISSING_INFORMATION

CONTEXT_CONFLICT

ENGINE_FAILURE

ARTIFACT_ERROR

VALIDATION_ERROR

---

# Warnings

Engine может возвращать предупреждения.

Предупреждение не останавливает выполнение.

Ошибка всегда останавливает выполнение.

---

# Next Engine

После завершения работы Engine рекомендует следующий этап.

Окончательное решение принимает MASTER_ENGINE.

---

# Logging

Каждый Engine обязан записывать:

Start Time

Finish Time

Execution Time

Status

Generated Artifacts

Warnings

Errors

---

# Independence

Любой Engine может быть заменен новой версией.

Если соблюден ENGINE_INTERFACE,

остальная система продолжает работать без изменений.

---

# Compatibility

Все будущие Engines обязаны поддерживать данный интерфейс.

Несовместимые Engines не могут быть подключены к VibeCoding OS.

---

# Final Principle

MASTER_ENGINE управляет системой.

ENGINE_INTERFACE определяет правила взаимодействия.

Каждый Engine отвечает только за собственную область ответственности.