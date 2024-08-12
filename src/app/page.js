import Teams from "@/components/Teams/teams";
import Events from "@/components/Events/Events";
import MainLayout from "@/components/MainLayout";

import RootLayout from "./layout";
export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-[100vw]">
      <MainLayout/>
    </div>
  );
}
