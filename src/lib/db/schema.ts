import { relations } from "drizzle-orm";
import { pgTable, text, unique } from "drizzle-orm/pg-core";

export const projects = pgTable(
  "Project",
  {
    sanityId: text("sanityId").primaryKey(),
    successorId: text("successorId"),
  },
  (table) => ({
    successorIdUnique: unique().on(table.successorId),
  })
);

export const projectsRelations = relations(projects, ({ one }) => ({
  successor: one(projects, {
    fields: [projects.successorId],
    references: [projects.sanityId],
    relationName: "ProjectsOrder",
  }),
  predecessor: one(projects, {
    fields: [projects.sanityId],
    references: [projects.successorId],
    relationName: "ProjectsOrder",
  }),
}));

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
