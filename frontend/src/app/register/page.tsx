"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the Terms and Privacy Policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock registration - in real app, this would call backend
    if (fullName && email && password.length >= 8 && password === confirmPassword) {
      router.push("/login")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <Card className="w-full max-w-[520px] border-border bg-card">
        <CardHeader className="space-y-6 pb-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-text-primary">Zenix AI</h1>
              <p className="text-sm font-medium text-[#D4AF37]">
                Create your mission-ready workspace.
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-sm text-text-secondary">
            Build your personalized AI academic operating system.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-text-primary">
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (errors.fullName) {
                    setErrors({ ...errors, fullName: "" })
                  }
                }}
                className={cn(
                  errors.fullName && "border-[#EF4444] focus-visible:border-[#EF4444]"
                )}
                disabled={isLoading}
                autoComplete="name"
              />
              {errors.fullName && (
                <p className="text-xs text-[#EF4444] mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) {
                    setErrors({ ...errors, email: "" })
                  }
                }}
                className={cn(
                  errors.email && "border-[#EF4444] focus-visible:border-[#EF4444]"
                )}
                disabled={isLoading}
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-xs text-[#EF4444] mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) {
                      setErrors({ ...errors, password: "" })
                    }
                  }}
                  className={cn(
                    "pr-12",
                    errors.password && "border-[#EF4444] focus-visible:border-[#EF4444]"
                  )}
                  disabled={isLoading}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors disabled:opacity-50"
                  disabled={isLoading}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-[#EF4444] mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (errors.confirmPassword) {
                      setErrors({ ...errors, confirmPassword: "" })
                    }
                  }}
                  className={cn(
                    "pr-12",
                    errors.confirmPassword && "border-[#EF4444] focus-visible:border-[#EF4444]"
                  )}
                  disabled={isLoading}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors disabled:opacity-50"
                  disabled={isLoading}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-[#EF4444] mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => {
                  setAgreeToTerms(checked as boolean)
                  if (errors.terms) {
                    setErrors({ ...errors, terms: "" })
                  }
                }}
                disabled={isLoading}
                className="mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm text-text-secondary cursor-pointer hover:text-text-primary transition-colors select-none leading-relaxed"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-[#D4AF37] hover:text-[#E6C766] transition-colors"
                >
                  Terms
                </Link>
                {" "}and{" "}
                <Link
                  href="#"
                  className="text-[#D4AF37] hover:text-[#E6C766] transition-colors"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-[#EF4444] -mt-3">{errors.terms}</p>
            )}

            {/* Create Account Button */}
            <Button
              type="submit"
              className="w-full h-12 rounded-lg font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Creating account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="pt-2 text-center text-sm">
            <span className="text-text-secondary">Already have an account? </span>
            <Link
              href="/login"
              className="text-[#D4AF37] font-medium hover:text-[#E6C766] transition-colors"
            >
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
