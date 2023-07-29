"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);
  if (providers === null) {
    // Return a fallback, loading state, or null if desired
    return null;
  }

 
    return (
      <>
        <div>
          {Object.values(providers).map((provider: Provider, i) => (
            <Button
              title="Sign In"
              key={i}
              handleClick={() => signIn(provider?.id)}
            />
          ))}
        </div>
      </>
    );
  
};

export default AuthProviders;
