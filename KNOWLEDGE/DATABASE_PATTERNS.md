# DATABASE_PATTERNS.md

VibeCoding OS Database Knowledge

Version: 1.0 MVP

Status: APPROVED

---

# Purpose

This document contains reusable database architecture patterns used by VibeCoding OS.

Its objective is to design scalable, maintainable and secure data models that support business processes.

The database exists to serve the business, not the application.

---

# Core Principle

Design the data model around business entities.

Tables represent business concepts.

Relationships represent business rules.

Never design a database around screens.

---

# Entity First Pattern

Before creating tables identify:

Business entities

Relationships

Ownership

Lifecycle

Dependencies

Business meaning always comes before implementation.

---

# Naming Convention

Use clear singular names.

Examples:

User

Customer

Order

Invoice

Project

Task

Avoid abbreviations unless they are industry standards.

---

# Relationships

Identify relationship types:

One to One

One to Many

Many to Many

Document every relationship explicitly.

Avoid unnecessary complexity.

---

# Normalization

Normalize data by default.

Duplicate data only when justified by performance or business requirements.

Every duplication must have a documented reason.

---

# Primary Keys

Every table must have a stable primary key.

Prefer UUID for distributed systems.

Use auto increment identifiers only when appropriate.

Primary keys should never contain business meaning.

---

# Foreign Keys

Define relationships explicitly.

Use foreign keys whenever possible.

Protect referential integrity.

Avoid orphan records.

---

# Audit Pattern

Business critical tables should include:

Created At

Updated At

Created By

Updated By

Deleted At when soft deletion is required.

Auditability is a default capability.

---

# Soft Delete

Use soft deletion when:

Historical records are valuable.

Legal requirements exist.

Business recovery is required.

Avoid permanent deletion unless explicitly required.

---

# Status Pattern

Prefer explicit status fields.

Typical values:

Draft

Active

Inactive

Archived

Deleted

Avoid ambiguous states.

---

# Index Strategy

Create indexes for:

Primary keys

Foreign keys

Frequently searched fields

Sorting fields

Unique constraints

Do not create unnecessary indexes.

---

# Performance

Optimize for:

Fast reads

Predictable writes

Scalability

Maintainability

Measure before optimizing.

---

# Security

Sensitive data should be:

Protected

Encrypted when necessary

Access controlled

Never expose internal identifiers unnecessarily.

---

# Validation

Before delivery verify:

Entities correctly identified.

Relationships complete.

Naming consistent.

Indexes justified.

Audit supported.

Scalability considered.

Business rules represented.

---

# Deliverables

Every database design should produce:

Entity List

Relationship Diagram

Table Definitions

Key Strategy

Index Strategy

Audit Strategy

Data Lifecycle

Migration Plan

---

# Final Principle

A well designed database should remain understandable years after it was created and should evolve with the business without requiring complete redesign.

---

End of Database Patterns