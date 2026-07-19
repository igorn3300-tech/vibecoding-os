# MODULE_REGISTRY.md

VibeCoding OS Module Registry

Version: 1.0 MVP

Status: APPROVED

---

# Purpose

The Module Registry is the official catalogue of every module within VibeCoding OS.

It defines the responsibility, dependencies and lifecycle of each module.

The registry ensures that every module has one clearly defined purpose.

---

# Module Categories

The operating system is divided into four categories.

CORE

KNOWLEDGE

GENERATORS

PROJECTS

Each category has different responsibilities.

---

# CORE Modules

## AI_CONSTITUTION

Purpose

Defines immutable operating principles.

Depends On

None

Used By

Entire system

---

## MASTER_ENGINE

Purpose

Defines reasoning and decision making.

Depends On

AI_CONSTITUTION

Used By

Entire system

---

## DEVELOPMENT_STANDARD

Purpose

Defines engineering standards.

Depends On

MASTER_ENGINE

Used By

All generators

---

## OUTPUT_STANDARD

Purpose

Defines quality requirements.

Depends On

DEVELOPMENT_STANDARD

Used By

Entire system

---

## SYSTEM_INDEX

Purpose

Defines overall architecture.

Depends On

CORE

Used By

Entire system

---

## MODULE_REGISTRY

Purpose

Defines module responsibilities.

Depends On

SYSTEM_INDEX

Used By

Entire system

---

## EXECUTION_FLOW

Purpose

Defines execution sequence.

Depends On

MODULE_REGISTRY

Used By

All generators

---

# KNOWLEDGE Modules

Business Patterns

Purpose

Business reasoning.

---

UX Patterns

Purpose

User experience best practices.

---

UI Patterns

Purpose

Interface design principles.

---

Database Patterns

Purpose

Data architecture.

---

API Patterns

Purpose

Service communication.

---

Security Patterns

Purpose

Security architecture.

---

# GENERATORS

PRD Generator

Purpose

Transforms business ideas into implementation ready specifications.

---

Website Generator

Purpose

Designs business focused websites.

---

CRM Generator

Purpose

Designs CRM solutions.

---

SaaS Generator

Purpose

Designs subscription based software.

---

Telegram Generator

Purpose

Designs conversational applications.

---

# Module Rules

Every module must have:

Purpose

Scope

Dependencies

Version

Status

Final Rule

Modules should remain independent whenever possible.

---

# Dependency Principle

Dependencies always move downward.

CORE

↓

KNOWLEDGE

↓

GENERATORS

↓

PROJECTS

Reverse dependencies are prohibited.

---

# Version Policy

Every module maintains its own version.

Major

Breaking architectural changes.

Minor

New capabilities.

Patch

Corrections and improvements.

---

# Lifecycle

Draft

↓

Reviewed

↓

Approved

↓

Released

↓

Deprecated

↓

Archived

Every module follows this lifecycle.

---

# Final Principle

A module should solve one problem exceptionally well.

If a module attempts to solve multiple unrelated problems, it should be divided.

---

End of Module Registry