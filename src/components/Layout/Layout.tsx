import Container from "@components/Containers/Container";

import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <div className="p-6 ml-20 mt-16 dark:bg-black w-full">{children}</div>
    </Container>
  );
};
