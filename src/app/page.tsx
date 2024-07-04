import General from "@/components/Cards/General";
// https://github.com/guillaumeduhan/nextjs-shadcn-dashboard/blob/main/src/components/Sidebar.tsx

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <General />
      </div>
    </div>
  );
}
