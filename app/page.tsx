
"use client";

import { LoginForm } from "@/components/login-form";
import { UserProfile } from "@/components/user-profile";
import { useAuth } from "@/hooks/useAuth";
import { CONTACT_INFO } from "@/lib/constants";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Introduction Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


          {/* Authentication Section */}
          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
                  {CONTACT_INFO.developer}
                </h1>
                <div className="w-20 h-px bg-orange-500 mx-auto mb-4"></div>
                <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
                  {CONTACT_INFO.role}
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8 flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <span className="text-sm">📧</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="w-px h-4 bg-gray-500" />
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <span className="text-sm">📱</span>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <LoginForm />
            </>

          )}
        </div>
      </section>
    </main>
  );
}
