# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Project structure
- ASP.NET Core Web API
- Angular frontend application

---

## [0.0.1] - 2026-08-03

### Added

- Initialized Git repository
- Created backend project structure
- Created Angular frontend
- Added root `.gitignore`
- Configured project folder structure
- Configured Swagger for API documentation
- Installed Entity Framework Core 9.0.8 packages
- Added Entity Framework Core Design and Tools packages
- Configured `ApplicationDbContext`
- Added Entity Relationship Diagram (ERD)
- Created `User`, `Sentence`, `SentenceWord`, `WordType`, and `Word` entities

### Modified

- Registered all entities in `ApplicationDbContext`

### Removed

- Deleted default WeatherForecast API
- Removed default OpenAPI configuration in favor of Swagger

---

## [0.0.2] - 2026-08-04

### Added

#### Authentication

- Created `BaseController`
- Added `AccountController`
- Added login endpoint
- Created `LoginDto`
- Added `IAccountService`
- Implemented `AccountService`
- Registered services using dependency injection
- Added database seed data
- Created Login page
- Created Navbar component
- Created Dashboard component
- Created Sentence Builder component
- Created Sentence History component
- Added responsive login page
- Added demo login credentials

### Changed

- Renamed solution and project to **LexiCraft**
- Organized project into Controllers, Interfaces and Services

### Fixed

- Fixed database seeding
- Fixed entity ID generation
- Added sentence creation endpoint
- Connected Angular builder to save sentence API
- Refactored `ApplicationDbContext` to use a primary constructor

---

## [0.0.3] - 2026-08-05

### Added

- Implemented Word Type API
- Implemented Words by Word Type API
- Created `WordTypeService`
- Created `WordService`
- Connected Angular Builder to Word Type API
- Connected Angular Builder to Words API
- Implemented dynamic sentence builder
- Added sentence save functionality
- Created `SentenceService`
- Created Save Sentence endpoint
- Persisted sentence and sentence words
- Added sentence history API
- Implemented History page
- Connected History page to backend API

### Changed

- Refactored Builder component to retrieve all data from APIs
- Removed hardcoded word types
- Removed hardcoded words

---

## [0.0.4] - 2026-08-06

### Added

- Implemented Get Sentence By Id endpoint
- Implemented Update Sentence endpoint
- Added Angular Material Table for sentence history
- Added pagination using Angular Material
- Added edit sentence backend functionality
- Added sentence retrieval for editing
- Added reusable sentence update API
- Added navigation property between `Sentence` and `SentenceWord`
- Added Check for Loggin user

### Changed

- Refactored sentence history to use Angular Material Table
- Improved RESTful API structure
- Simplified sentence retrieval for editing
- Improved Entity Framework relationships

### Fixed

- Fixed sentence retrieval by including related words
- Fixed sentence update functionality
- Fixed duplicate navigation property issues
- Fixed history table data binding