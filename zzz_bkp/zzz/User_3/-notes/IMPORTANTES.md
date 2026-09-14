
---
### CORRETOR OTOGRAFICO SPELL
Para fucnionar mandar as palavras permitidas para o custom dicionario add a cada settings de profiles custom este trecho :
```
// Configurações de idioma do CSpell. >> para enviar novas palavras permitidas ao dicionario custom ~/.config/VSCodium/User/dictionaries/my_custom_words.txt
  "cSpell.dictionaryDefinitions": [
    {
      "name": "my-personal-words",
      "path": "/home/rzj/.config/VSCodium/User/dictionaries/my_custom_words.txt",
      "addWords": true
    }
  ]
```


---