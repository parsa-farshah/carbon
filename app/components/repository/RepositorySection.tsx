// src/components/sections/RepositorySection.tsx

import { repositoryCategories } from "./repositories";
import { RepositoryCard } from "./RepositoryCard";

export function RepositorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">پروژه‌های ما</h2>

        <Tabs defaultValue="frontend" dir="rtl">
          <TabsList>
            {repositoryCategories.map((cat) => (
              <TabsTrigger key={cat.type} value={cat.type}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {repositoryCategories.map((cat) => (
            <TabsContent key={cat.type} value={cat.type}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.repositories.map((repo) => (
                  <RepositoryCard key={repo.id} repository={repo} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
