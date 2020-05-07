# <%= name %>

<%= description %>

## Build configuration

This project includes azure-pipelines.yml to build an image using Azure devops.

```
- task: Docker@2
  displayName: 'docker: build image'
  inputs:
    containerRegistry: 'ACR Connection'
    repository: $(Build.Repository.Name)
    command: 'build'
    Dockerfile: '**/Dockerfile'
    tags: |
     $(Build.BuildId)
     latest
    arguments: '--build-arg NPM_TOKEN=$(NPM_TOKEN)'
```

If you want to run this task you will need to configure in your Azure devops project a service connection called 'ACR conntection'. In Azure devops you will find this in the [service connection section](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml)

## Sonarqube configuration

This project includes azure-pipelines.yml to run a sonarqube analysis.

```
- task: SonarQubePrepare@4
  displayName: 'sonarqube: prepare analysis'
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/master')
  inputs:
    SonarQube: 'infinitas-sonarqube'
    scannerMode: 'CLI'
    configMode: 'manual'
    cliProjectKey: <%= name %>
    cliProjectName: $(Build.Repository.Name)
    cliSources: '.'
    extraProperties: |
      sonar.sources=.
      sonar.exclusions=node_modules/**
      sonar.language=js
      sonar.projectVersion=$(Build.BuildNumber)
      sonar.javascript.lcov.reportPaths=lcov.info

- task: SonarQubeAnalyze@4
  displayName: 'sonarqube: run analysis'
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/master')

- task: SonarQubePublish@4
  displayName: 'sonarqube: publish analysis'
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/master')
  inputs:
    pollingTimeoutSec: '300'
```

If you want to run this task you will need to configure in your Azure devops project a service connection 'infinitas-sonarqube'. In Azure devops you will find this in the [service connection section](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml)

It is also important to keep in the cliProjectName the name of your service.

```
cliProjectKey: <%= name %>
```
