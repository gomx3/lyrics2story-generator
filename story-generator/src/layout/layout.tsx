export const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="min-h-screen max-h-screen h-screen w-full flex items-center justify-center bg-white dark:bg-gray-950">
      {children}
    </main>
  )
}
