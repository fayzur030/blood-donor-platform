export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='sticky top-0 z-50'></div>

      <main className='flex-1'>{children}</main>
    </div>
  )
}

//fallback={<div className='h-12 border-b bg-white' />}
