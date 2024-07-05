import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { Card } from "@/components/ui/card";
// https://github.com/guillaumeduhan/nextjs-shadcn-dashboard/blob/main/src/components/Sidebar.tsx

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
          <Lines />
          <Card className="h-[300px]">Hello world</Card>
          <Card className="h-[300px]">Hello world</Card>
        </div>
    </div>
  );
}
