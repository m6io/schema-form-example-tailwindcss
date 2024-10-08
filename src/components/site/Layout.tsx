import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="p-10 sm:px-16 lg:px-44">
        <div className="mx-auto max-w-3xl space-y-20">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            @react-formgen/json-schema - Tailwind CSS Example
          </h1>
          {children}
        </div>
      </main>
    </div>
  );
};
