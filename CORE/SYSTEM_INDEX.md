# SYSTEM_INDEX.md

VibeCoding OS System Index

Version: 1.0 MVP

Status: APPROVED

---

# Purpose

SYSTEM_INDEX is the entry point of VibeCoding OS.

Every AI model should read this document before loading any other module.

Its purpose is to understand the architecture of the operating system and determine which modules are required for the current task.

SYSTEM_INDEX does not contain business logic.

It describes how the system is organized.

---

# System Architecture

The operating system consists of five layers.

```
User Request

↓

CORE

↓

KNOWLEDGE

↓

GENERATORS

↓

PROJECT OUTPUT
```

Each layer has a different responsibility.

---

# Layer Responsibilities

## CORE

Defines immutable operating rules.

Contains:

AI Constitution

Master Engine

Development Standard

Output Standard

Execution Flow

Module Registry

System Index

---

## KNOWLEDGE

Contains reusable engineering knowledge.

Examples include:

Business Patterns

UX Patterns

UI Patterns

Database Patterns

API Patterns

Security Patterns

Knowledge modules never generate output directly.

They provide expertise.

---

## GENERATORS

Generators transform knowledge into project artifacts.

Examples:

PRD Generator

Website Generator

CRM Generator

SaaS Generator

Telegram Generator

Generators orchestrate the work.

---

## PROJECTS

Stores generated products.

Each project contains its own documentation and implementation artifacts.

---

# Module Loading Strategy

Only load modules required for the current task.

Example:

Website

↓

Website Generator

↓

UX Patterns

↓

UI Patterns

↓

Business Patterns

↓

Core

CRM

↓

CRM Generator

↓

Database Patterns

↓

API Patterns

↓

Security Patterns

↓

Business Patterns

↓

Core

Never load unnecessary modules.

---

# Design Philosophy

Think first.

Analyze second.

Design third.

Build fourth.

Validate fifth.

Deliver last.

Skipping stages is prohibited.

---

# Operating Rules

Every module inherits CORE.

Every generator uses KNOWLEDGE.

Projects never modify CORE.

Knowledge evolves independently.

Generators remain lightweight.

---

# Version Control

Every module should contain:

Version

Status

Purpose

Inheritance

Scope

Final Rule

Maintain consistent structure across the system.

---

# Long Term Vision

VibeCoding OS should become a modular engineering operating system capable of producing production ready digital products with minimal supervision.

---

End of SYSTEM INDEX