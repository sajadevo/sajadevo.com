"use client";

import React from "react";
import { Input } from "@/components/input";
import { RiSearchLine } from "@remixicon/react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <RiSearchLine className="text-foreground peer-hover:text-primary peer-focus:text-primary absolute top-1/2 left-4 size-4 -translate-y-1/2 transition-colors duration-300" />
    </div>
  );
}
