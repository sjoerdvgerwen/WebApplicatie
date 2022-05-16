#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80


FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Lean-To-Green/Lean-To-Green.csproj", "Lean-To-Green/"]
COPY ["Lean-To-Green.Repository/Lean-To-Green.Repository.csproj", "Lean-To-Green.Repository/"]
COPY ["Lean-To-Green.Core/Lean-To-Green.Core.csproj", "Lean-To-Green.Core/"]

RUN dotnet restore "Lean-To-Green/Lean-To-Green.csproj"
COPY . .
WORKDIR "/src/Lean-To-Green"
RUN dotnet build "Lean-To-Green.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Lean-To-Green.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Lean-To-Green.dll"]