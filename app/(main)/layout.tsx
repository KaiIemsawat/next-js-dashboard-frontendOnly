import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden h-[100vh] w-[300px] md:block">
          <Sidebar />
        </div>
        <div className="w-full p-5 md:max-w-[1140px]">{children}</div>
      </div>
    </>
  );
};
export default MainLayout;
