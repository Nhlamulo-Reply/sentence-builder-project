## Install Entity Framework Core

Install the required Entity Framework Core packages for SQL Server by running the following commands:

```Run
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.8

# Required for creating and managing migrations
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.8

# Entity Framework CLI tools
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 9.0.8

# Restore NuGet packages
dotnet restore
```

## Verify SQL Server LocalDB

Check that SQL Server LocalDB is installed:

```Run
sqllocaldb info
```

You should see an instance similar to:

```text
MSSQLLocalDB
```

Start the LocalDB instance:

```bash
sqllocaldb start MSSQLLocalDB
```

Alternatively, replace `MSSQLLocalDB` with the name of your LocalDB instance if it is different.

To verify that it is running, execute:

```bash
sqllocaldb info MSSQLLocalDB
```

The output should indicate that the instance is in the **Running** state.

## Configure the Connection String

Update the `DefaultConnection` in `appsettings.json` to point to your database.

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=SentenceBuilderDB;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"
}
```

> ```Run
 dotnet ef database update

The above command creates the database and applies all migrations.

