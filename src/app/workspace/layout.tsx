import type { Metadata } from "next";
import AuthProtectProvider from "@/components/providers/AuthProtectProvider";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME ?? "KanBan App"} | Workspaces`,
  description: "Developed by AjayKhati",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthProtectProvider>{children}</AuthProtectProvider>;
}
