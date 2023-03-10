FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./API.sln ./
COPY ./API ./API
COPY ./MRPC.Net ./MRPC.Net

RUN dotnet restore API/API.csproj -s https://api.nuget.org/v3/index.json

RUN dotnet publish API/API.csproj -c Release -o out -f netcoreapp3.1

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:3.1
ARG GIT_COMMIT=unspecified
LABEL git_commit=$GIT_COMMIT
WORKDIR /app
COPY --from=build-env /app/out .
ENV GIT_COMMIT $GIT_COMMIT
ENTRYPOINT ["dotnet", "API.dll", "--urls", "http://127.0.0.1:8080"]
