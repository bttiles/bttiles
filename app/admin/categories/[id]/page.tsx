"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
// import { CategoryForm } from "../../../../components/admin/CategoryForm";

import { TextureForm } from "../../../../components/admin/TextureForm";
import { CategoryForm } from "@/admin/CategoryForm";

interface Category {
  _id: string;
  name: string;
  description?: string;
}

export default function EditCategory() {
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await fetch(`/api/categories/${params.id}`);
    //   h(`/api/textures/${params.id}`); 
      const data = await response.json();

      if (data.success) {
        setCategory(data.data);
      } else {
        toast.error("Category not found");
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      toast.error("Failed to load category");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
        <p className="text-muted-foreground">
          The category you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Category</h1>
        <p className="text-muted-foreground">Update category information.</p>
      </div>

     <CategoryForm initialData={category} categoryId={category._id} />

    </div>
  );
}
