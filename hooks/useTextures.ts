"use client";

import { useState, useEffect, useCallback } from "react";

export interface TextureData {
  _id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  resolution: string;
  format: string;
  tags: string[];
  featured: boolean;
  trending: boolean;
  likes: number;
  views: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationData {
  current: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface TexturesResponse {
  success: boolean;
  data: TextureData[];
  pagination: PaginationData;
  total: number;
}

interface UseTexturesOptions {
  category?: string;
  featured?: boolean;
  trending?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export function useTextures(options: UseTexturesOptions = {}) {
  const [textures, setTextures] = useState<TextureData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [total, setTotal] = useState(0);

  const fetchTextures = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();

      if (options.category) params.append("category", options.category);
      if (options.featured) params.append("featured", "true");
      if (options.trending) params.append("trending", "true");
      if (options.search) params.append("search", options.search);
      if (options.page) params.append("page", options.page.toString());
      if (options.limit) params.append("limit", options.limit.toString());

      const response = await fetch(`/api/textures?${params.toString()}`);
      const result: TexturesResponse = await response.json();

      if (result.success) {
        setTextures(result.data);
        setPagination(result.pagination);
        setTotal(result.total);
      } else {
        setError("Failed to fetch textures");
      }
    } catch (err) {
      setError("Network error occurred");
      console.error("Error fetching textures:", err);
    } finally {
      setLoading(false);
    }
  }, [
    options.category,
    options.featured,
    options.trending,
    options.search,
    options.page,
    options.limit,
  ]);

  useEffect(() => {
    fetchTextures();
  }, [fetchTextures]);

  return {
    textures,
    loading,
    error,
    pagination,
    total,
    refetch: fetchTextures,
  };
}

export function useTexture(id: string) {
  const [texture, setTexture] = useState<TextureData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchTexture = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/textures/${id}`);
        const result = await response.json();

        if (result.success) {
          setTexture(result.data);
        } else {
          setError(result.error || "Failed to fetch texture");
        }
      } catch (err) {
        setError("Network error occurred");
        console.error("Error fetching texture:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTexture();
  }, [id]);

  return { texture, loading, error };
}
