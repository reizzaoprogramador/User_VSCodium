
# Variáveis Predefinidas Úteis do VS Code

# Variáveis de Caminho (Path Variables)
${workspaceFolder}          # O caminho completo da pasta aberta no workspace.
${workspaceFolderBasename}  # O nome da pasta base do workspace (sem o caminho completo).
${file}                     # O caminho completo do arquivo atualmente aberto.
${fileWorkspaceFolder}      # O caminho da pasta do workspace onde o arquivo atual está localizado.
${relativeFile}             # O caminho do arquivo atual, relativo à pasta raiz do workspace.
${relativeFileDirname}      # O caminho do diretório do arquivo atual, relativo à pasta raiz do workspace.
${fileBasename}             # O nome do arquivo atualmente aberto (ex: 'app.js').
${fileBasenameNoExtension}  # O nome do arquivo atualmente aberto sem a extensão (ex: 'app').
${fileDirname}              # O caminho completo do diretório que contém o arquivo atualmente aberto.
${fileExtname}              # A extensão do arquivo atualmente aberto (ex: '.js').
${cwd}                      # O diretório de trabalho atual (current working directory) da tarefa ou processo.
${userHome}                 # O caminho para o diretório home do usuário. (Muito útil para você!)

# Variáveis de Seleção e Variáveis Dinâmicas
${selectedText}             # O texto atualmente selecionado no editor ativo.
${lineNumber}               # O número da linha atual do cursor no editor ativo.
${lineNumber:N}             # O número da linha atual + N.
${columnNumber}             # O número da coluna atual do cursor no editor ativo.
${promptString}             # Solicita ao usuário que insira uma string.

# Variáveis de Ambiente (Environment Variables)
${env:NOME_DA_VARIAVEL}     # O valor da variável de ambiente com o NOME_DA_VARIAVEL.
                            # Ex: ${env:PATH}, ${env:HOME} (no Linux/macOS), ${env:USERPROFILE} (no Windows).
                            # Útil para variáveis de ambiente customizadas ou do sistema.

# Variáveis de Configuração (Configuration Variables)
${config:NOME_DA_CONFIG}    # O valor de uma configuração do VS Code.
                            # Ex: ${config:editor.tabSize} (obtém o tamanho da tabulação configurado).
                            # Muito útil para reutilizar configurações globais ou de workspace.

# Variáveis de Comando (Command Variables)
${command:NOME_DO_COMANDO}  # O resultado da execução de um comando do VS Code.
                            # Ex: ${command:workbench.action.findInFiles} (executa a busca global).

# Variáveis para Tasks (Tarefas) e Debug (Depuração)
${input:ID_DO_INPUT}        # Variáveis definidas por um "input" em uma task ou launch configuration,
                            # permitindo solicitar dados ao usuário.

---
## USE
Como usar essas variáveis:

Você as usará dentro de arquivos de configuração JSON do VS Code, como:

settings.json (configurações do usuário ou workspace)
.code-workspace (definições de pastas do workspace)
tasks.json (para definir tarefas personalizadas)
launch.json (para configurações de depuração)
keybindings.json (em alguns contextos para comandos)
Exemplo Prático (repetindo seu caso):

Para adicionar a pasta winfra do seu diretório home ao workspace:

```JSON

{
  "folders": [
    {
      "path": "."
    },
    {
      "path": "${userHome}/winfra"
    }
  ],
  "settings": {}
}
```

Ter essa lista à mão vai te ajudar muito a customizar seu ambiente de desenvolvimento no VS.
---