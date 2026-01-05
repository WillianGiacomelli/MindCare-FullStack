# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY ["NotesService.csproj", "./"]
RUN dotnet restore "NotesService.csproj"

# Copy everything else and build
COPY . .
RUN dotnet build "NotesService.csproj" -c Release -o /app/build

# Publish Stage
FROM build AS publish
RUN dotnet publish "NotesService.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Environment variables
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "NotesService.dll"]
