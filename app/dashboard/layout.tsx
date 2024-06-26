import TopNav from "../ui/dashboard/topnav"


export default function Layout({ children }: { children: React.ReactNode}) {
    return (
    <div className="flex w-screen flex-row md:flex-row md:overflow-hidden">
      <div className="w-full flex-none">
          <TopNav/>
      <div className="flex-grow p-6 text-left md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
    )
  }