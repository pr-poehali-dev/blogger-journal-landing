import React from 'react';

// Компонент для генерации разметки Schema.org
export const SchemaOrgWebsite: React.FC = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Александра Журналова - Творческие дневники и коллажи",
        "url": "https://журналова.рф/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://журналова.рф/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
    </script>
  );
};

// Компонент для генерации разметки Schema.org для автора
export const SchemaOrgPerson: React.FC = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Александра Журналова",
        "url": "https://журналова.рф/",
        "sameAs": [
          "https://instagram.com/alexandra_journals",
          "https://youtube.com/alexandrajournals",
          "https://facebook.com/alexandrajournals"
        ],
        "jobTitle": "Художник, автор дневников",
        "worksFor": {
          "@type": "Organization",
          "name": "Студия творческих дневников"
        }
      })}
    </script>
  );
};

// Компонент для генерации разметки BreadcrumbList Schema.org
export const SchemaBreadcrumbList: React.FC = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://журналова.рф/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Обо мне",
            "item": "https://журналова.рф/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Мои работы",
            "item": "https://журналова.рф/#works"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Галерея",
            "item": "https://журналова.рф/#gallery"
          }
        ]
      })}
    </script>
  );
};
