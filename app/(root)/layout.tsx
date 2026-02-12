import { isAuthenticated } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="InterAI logo" width={38} height={32} />
          <h2 className="text-primary-200">InterAI</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
}
