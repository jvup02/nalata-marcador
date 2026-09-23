// Os dois valores da base de dados, do painel do Supabase
// (Project Settings → API). É o único arquivo que muda quando a base muda.
//
// A chave "anon public" é feita pra ficar visível numa página — é o que o
// navegador do narrador usa pra falar com a base. Quem manda no que ela pode
// fazer são as regras da tabela, no Supabase, não o segredo da chave. A outra
// chave do painel, a "service_role", NUNCA entra aqui nem em lugar nenhum
// deste repositório: essa sim abre a base inteira.
window.NALATA = {
  url: "https://mieobgvxqbqppwkwbuex.supabase.co",
  chave: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZW9iZ3Z4cWJxcHB3a3didWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxODQ3MzcsImV4cCI6MjEwNTc2MDczN30.O9XW09oy5gxVJ0mWIJkZ2_efrpTUFhoGP71cOTtQqSk"
};
