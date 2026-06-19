
var sites = [
    'https://docs.google.com/document/d/10eDwSBhujWUlhjmwQ0XA4ucHMY4phsv9VfpGHa12ZzM/edit?usp=sharing',
    'https://www.allrecipes.com/recipe/7906/chocolate-chip-muffins/',
    'https://www.reddit.com/r/Old_Recipes/comments/17hmxg1/hidden_muffin_recipe_in_the_rpg_stonekeep_1995/',
    'https://enderslime.itch.io/jane-crockers-bombastic-baking-book',
    'https://arthurmag.com/2009/09/16/mf-dooms-villainous-mac-cheeze/',
    'https://www.greatbritishchefs.com/recipes/tsunami-ube-cheesecake-recipe',
    'https://enderslime.itch.io/jane-and-condys-bombastic-baking-book2',
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    window.open(sites[i], '_blank');
}