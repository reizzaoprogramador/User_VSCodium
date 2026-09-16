// Settings: Profile >> Golang

  "go.lintTool": "golangci-lint",
  "go.lintOnSave": "workspace",
  "go.lintFlags": [
    "-E",
    "dogsled",
    "-E",
    "gochecknoglobals"
  ],
  "go.useLanguageServer": true,
  "gopls": {
    "ui.semanticTokens": true
  },
  "go.toolsManagement.autoUpdate": true,