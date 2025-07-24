"use client";

import { useState, useEffect, useCallback } from "react";

export interface CategoryData {
  _id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
  imagePublicId: string;
  isActive: boolean;
  sortOrder: number;
  textureCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesResponse {
  success: boolean;
  data: CategoryData[];
  total: number;
}

interface UseCategoriesOptions {
  includeInactive?: boolean;
}

export function useCategories(options: UseCategoriesOptions = {}) {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (options.includeInactive) {
        params.append("includeInactive", "true");
      }

      const response = await fetch(`/api/categories?${params.toString()}`);
      const result: CategoriesResponse = await response.json();

      if (result.success) {
        setCategories(result.data);
      } else {
        setError("Failed to fetch categories");
      }
    } catch (err) {
      setError("Network error occurred");
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  }, [options.includeInactive]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
}

export function useCategory(id: string) {
  const [category, setCategory] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/categories/${id}`);
        const result = await response.json();

        if (result.success) {
          setCategory(result.data);
        } else {
          setError(result.error || "Failed to fetch category");
        }
      } catch (err) {
        setError("Network error occurred");
        console.error("Error fetching category:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  return { category, loading, error };
}
