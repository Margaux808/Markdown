document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    // Fonction pour mettre à jour le preview
    function updatePreview() {
        preview.innerHTML = marked.parse(editor.value);
    }

    // Écouteur d'événements pour détecter la saisie de l'utilisateur
    editor.addEventListener('input', updatePreview);

    // Texte Markdown par défaut
    const defaultMarkdown = `# Titre H1
## Sous-titre H2
[un lien](http://example.com)
\`code en ligne\`
\`\`\`
bloc de code
\`\`\`
- un élément de liste
> une citation
![Image](http://url_a_une_image.com)
**texte en gras**`;

    // Initialisation du contenu de l'éditeur et mise à jour du preview
    editor.value = defaultMarkdown;
    updatePreview();
});
