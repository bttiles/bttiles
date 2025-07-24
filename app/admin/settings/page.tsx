"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";

export default function SiteSettings() {
  const [showPassword, setShowPassword] = useState(false);

  const owner = {
    name: "Bismillah Tuff Tiles",
    email: "admin@tiletextures.com",
    password: "admin123",
    role: "Admin",
  };

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-xl shadow-2xl border border-muted/40">
        <CardHeader>
          <CardTitle className="text-lg">Site Settings – Owner Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Owner Name</Label>
            <Input
              id="name"
              value={owner.name}
              disabled
              className="cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={owner.email}
              disabled
              className="cursor-not-allowed"
            />
          </div>

          {/* Password */}
          <div className="space-y-1 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={owner.password}
              disabled
              className="pr-10 cursor-not-allowed"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-muted-foreground"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Role */}
          <div>
            <Label>Role</Label>
            <div className="mt-1">
              <Badge variant="default">{owner.role}</Badge>
            </div>
          </div>

          {/* <Button
            disabled
            className="w-full mt-4 opacity-80 cursor-not-allowed"
          >
            Edit Info (Coming Soon)
          </Button> */}
        </CardContent>
      </Card>
    </div>
  );
}
