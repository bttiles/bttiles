import { useState, useEffect } from "react";

export interface CategoryData {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export function useCategories(search?: string) {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/categories${search ? `?search=${search}` : ""}`);
        const result = await res.json();

        if (result.success) {
          setCategories(result.data);
        } else {
          setError("Failed to fetch categories");
        }
      } catch (err) {
        setError("Network error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [search]);

  return { categories, loading, error };
}
