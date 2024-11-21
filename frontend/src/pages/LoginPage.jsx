import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare,Inbox,MessageCircle } from "lucide-react";

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon: Icon,
  toggleVisibility,
  isPasswordField,
  showPassword,
}) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text font-medium">{label}</span>
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-base-content/40" />
        </div>
      )}
      <input
        type={isPasswordField && !showPassword ? "password" : type}
        className="input input-bordered w-full pl-10"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={label}
      />
      {isPasswordField && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={toggleVisibility}
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-base-content/40" />
          ) : (
            <Eye className="h-5 w-5 text-base-content/40" />
          )}
        </button>
      )}
    </div>
  </div>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      await login(formData);
    } catch (err) {
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="you@example.com"
              icon={Mail}
            />
            <InputField
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="••••••••"
              icon={Lock}
              isPasswordField={true}
              toggleVisibility={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoggingIn}
              aria-label="Sign in"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title="Welcome back!"
        subtitle="Sign in to continue your conversations and catch up with your messages."
      />
    </div>
  );
};

export default LoginPage;
