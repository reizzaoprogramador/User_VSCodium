
  // Settings: Profile >> DENO
  
  // Configurações específicas do Deno para este perfil (se você usar Deno em projetos TS)
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": true,
  // Configurações específicas de JavaScript para este perfil
  "[javascript]": {
    "editor.formatOnSave": true // Formatar ao salvar APENAS para arquivos JS (se não for global)
  },
  "javascript.preferences.quoteStyle": "single", // Aspas simples para JS
  "javascript.validate.enable": false, // Desabilitar validação JS nativa (se usar linter externo)
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  // Configurações específicas de TypeScript para este perfil
  "[typescript]": {
    // Definir o formatador padrão para TypeScript usando o recurso embutido
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "typescript.tsserver.log": "off",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.suggest.autoImports": true,
  "typescript.preferences.preferTypeOnlyAutoImports": true,
  // Configurações específicas para TypeScript React (TSX)
  "[typescriptreact]": {
    // Adicione configurações específicas para arquivos .tsx aqui, se houver.
    // Exemplo: "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // Customização de cores para a UI do VSCodium, específica para este perfil.
  // Coloque as customizações de cores do editor aqui.
  "workbench.colorCustomizations": {
    // Se você usa o tema Dracula, a linha abaixo aplica-se APENAS ao tema Dracula.
    // Substitua o "#640384" pela cor de fundo desejada.
    "[Dracula]": {
      "editor.background": "#640384" // Fundo total do editor (um roxo escuro)
    },
    // Se você quiser que a cor de fundo se aplique independente do tema, use fora do "[Dracula]":
    // "editor.background": "#640384"
  }
