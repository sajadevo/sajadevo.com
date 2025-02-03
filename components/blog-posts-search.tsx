"use client";

import React from "react";

// @components
import { Input } from "@/components/input";

// @icons
import { RiSearchLine } from "@remixicon/react";

// @hooks
import { useRouter } from "next/navigation";
import { useDebounceValue } from "usehooks-ts";

export function BlogPostsSearch({ search }: { search: string }) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();
  const [searchValue, setSearchValue] = React.useState(() => search || "");
  const [debouncedSearchValue, setDebouncedSearchValue] = useDebounceValue(
    search,
    500,
  );

  React.useEffect(() => {
    if (!search && search === debouncedSearchValue) return;

    const urlValue = debouncedSearchValue.trim();

    startTransition(() => {
      router.push(`?search=${urlValue}`);
    });
  }, [debouncedSearchValue]);

  return (
    <div
      data-pending={pending ? "" : undefined}
      className="relative mt-12 mb-8 w-full"
    >
      <Input
        className="peer rounded-full pl-10"
        placeholder="Search posts"
        value={searchValue}
        onChange={({ target }) => {
          setSearchValue(target.value);
          setDebouncedSearchValue(target.value);
        }}
      />
      <RiSearchLine className="text-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2 transition-colors duration-200 peer-hover:text-black peer-focus:text-black" />
    </div>
  );
}
