export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-8 py-16">
      <h1 className="text-2xl font-semibold text-black sm:text-4xl">Blog</h1>
      <div className="mt-6 space-y-6">
        <div className="border-secondary hover:bg-secondary/25 block cursor-pointer rounded-xl border px-5 py-4">
          <h2 className="mb-2 text-lg font-semibold text-black">
            My First Post
          </h2>
          <p className="text-foreground text-balance text-base">
            This is my first post on my new blog.
          </p>
        </div>
      </div>
    </div>
  );
}
