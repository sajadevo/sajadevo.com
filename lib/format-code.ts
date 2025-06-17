import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export async function formatCode(code: string, lang: string = "tsx") {
  const wrappedCode = `\`\`\`${lang}\n${code}\n\`\`\``;

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        dark: "github-dark",
        light: "github-light",
      },
    })
    .use(rehypeStringify)
    .process(wrappedCode);

  return result.toString();
}
