"use client";

import { CategoryForm } from "@/admin/CategoryForm";


export default function NewCategory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Add New Category</h1>
        <p className="text-muted-foreground">
          Create a new category for your texture collection.
        </p>
      </div>

      <CategoryForm />
    </div>
  );
}
