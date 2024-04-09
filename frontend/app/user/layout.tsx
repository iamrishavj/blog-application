import BackToHomeButton from "./backToHome";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackToHomeButton />
      {children}
    </>
  );
}

export default Layout;
