export default function TestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center mb-8">Test Page</h1>
      <p className="text-xl">This is a test page to verify the server is working correctly.</p>
      <div className="mt-8 p-6 bg-njcpGold text-njcpBlack rounded-lg">
        <p className="font-bold">If you can see this with gold background, the styles are working!</p>
      </div>
    </div>
  );
}