# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Added
 - Project Structure
 - ASP.NET core Web API
 - Added Angular application


 ### [0.0.1] - 2026-08-03

 ## Added 
 - Initialized git repository
 - Created backend project structure
 - Created Angular Frontend
 - Added root gitignore
 - Configure project folder structure
 - Configured Swagger for Api documentation
 -  Installed Entity Framework Core 9.0.8 packages.
 -  Added Entity Framework Core tools for migrations. (dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.8, dotnet add package Microsoft. EntityFrameworkCore.Tools --version 9.0.8)
 - Configured DB Context to test database connection application
  - Added ERD design 
- Added user , sentence,sentenceword, wordtype and word entities

 ### Fix

 

 ### Modify

 - Modify dbcontext to register entities


 ### Remove

 - Deleted default weatherforecast api
 - Removed OpenAPI to use swagger for Api documentation
 - Delete default Weatherforecast Api


  ### [0.0.2] - 2026-08-04

### Added 

### Authentication

- Created `BaseController` for all API controllers.
- Added `AccountController` with a login endpoint.
- Added `IAccountService` interface.
- Implemented `AccountService`.
- Created `LoginDto` for login requests.
- Registered account service using dependency injection.
- Exposed `/api/account/login` endpoint in Swagger.
- Added Database seeders 
- Added navbar,dashboard, history, word builder components
- Create login form with email and password fields
- Show demo credentials for quick testing
- Add responsive layout for mobile devices"

## Changed
- Organized authentication logic into dedicated `Controllers`, `Interfaces`, and `Services` folders.
- CHanged project name and  solution to LexiCraft


## Fixed
- Fixed DatabaSeeder to all camelcases data and auto-increment ID's
- Add sentence creation API and integrate frontend save functionality

  ### [0.0.3] - 2026-08-05

  ### Added 
  - Added word functionality and endpoint 
  - Added sentence builder and save sentence integration
  - Implement dynamic sentence builder with API integration
  -  Implement word type API
