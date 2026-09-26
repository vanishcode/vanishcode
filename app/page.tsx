import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

const projects = [
  {
    name: "ERC-8010 Demo",
    category: "Ethereum · Signature Verification",
    description:
      "交互式演示 EIP-7702 账户在委托交易上链前，如何通过 ERC-8010 包装签名并完成链下验证。",
    demo: "https://8010.vanish.codes/",
    source: "https://github.com/vanishcode/erc8010",
  },
  {
    name: "my-7702",
    category: "EIP-7702 · Smart Account",
    description:
      "从合约到测试 DApp 的最小化智能账户实现，演示 Passkey、Session Key、多签、插件和原子批量执行。",
    demo: "https://7702.vanish.codes/",
    source: "https://github.com/vanishcode/my-7702",
  },
];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="space-y-8">
      <section aria-labelledby="projects-heading">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <div>
            <h1
              id="projects-heading"
              className="text-lg font-semibold text-ink"
            >
              我的项目
            </h1>
            <p className="mt-1 text-sm text-muted">
              EIP-7702 智能账户与链上签名验证
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="card flex flex-col">
              <p className="text-xs text-muted">{project.category}</p>
              <h2 className="mt-2 text-base font-semibold text-ink">
                {project.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  在线演示 ↗
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub 源码 ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="card">
        <ul className="m-0 p-0 list-none">
          {posts.map((post, idx) => (
            <li
              key={post._id}
              className={
                idx === posts.length - 1
                  ? "py-5"
                  : "py-5 border-b border-line"
              }
            >
              <Link
                href={post.slug}
                className="group flex items-baseline gap-3 sm:gap-4"
              >
                <div className="font-semibold text-ink group-hover:text-accent transition-colors min-w-0 flex-1">
                  {post.title}
                </div>
                <span className="text-[12px] text-muted whitespace-nowrap shrink-0">
                  {formatDate(post.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
