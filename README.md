# LexiCraft

LexiCraft is a sentence builder application built using ASP.NET Core 9 and Angular 20.
LexiCraft is a combination of two words:

Lexi –  which means word, speech, or vocabulary.
Craft – means to create, build, design, or skillfully make something.

## Technologies Used

### Backend

- ASP.NET Core 9
- Entity Framework Core 9.0.8
- SQL Server LocalDB

### Frontend

- Angular 20
- Angular Material
- Bootstrap 5

---

## Software Required

Before running the project make sure the following software is installed:

- Visual Studio 2022
- .NET 9 SDK
- Node.js (22.x LTS recommended)
- Angular CLI 20
- SQL Server LocalDB
- SQL Server Management Studio (SSMS) (Recommended)
- Git

---

## Clone the Repository

```bash
git clone https://github.com/Nhlamulo-Reply/sentence-builder-project.git

cd SentenceBuilderProject
```

---

## Install Backend Packages

Navigate to the Backend folder.

```bash
cd Backend
```

Install Entity Framework packages.

```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.8

dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.8

dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.8

dotnet restore
```

---

## SQL Server

Check that LocalDB is installed.

```bash
sqllocaldb info
```

Start LocalDB.

```bash
sqllocaldb start MSSQLLocalDB
```

Open SQL Server Management Studio and connect using:

```
Server Name:
(localdb)\MSSQLLocalDB or Use the one shown on your laptop when you ran sqllocaldb info

Authentication:
Windows Authentication
```

---

## Connection String

Update your `appsettings.json`.

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=WordBuilderDB;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"
}
```

---

## Create the Database

```bash
dotnet ef database update
```

---

## Database name

```bash
WordBuilderDB
```

---

## Run the Backend

```bash
cd Backend

dotnet watch run
```

To open Swagger go to :

```
https://localhost:5010/index.html
```

---

## Run the Frontend

Navigate to the Angular project.

```bash
cd FrontEnd/client

npm install

ng serve
```

Open

```
http://localhost:4200
```

---

## Login

```
Email:
john@lexicraft.com

Password:
Password123!
```

---

