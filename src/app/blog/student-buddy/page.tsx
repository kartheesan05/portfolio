import StudentBuddy from "./StudentBuddy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/student-buddy",
  },
};

export default function Page() {
  return <StudentBuddy />;
}