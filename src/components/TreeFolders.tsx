import { useState } from "react";

type TEntry = {
  name: string;
  children?: TEntry[];
};
export default function TreeFolders() {
  const files = {
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: ".bin",
            children: [
              { name: "acorn" },
              { name: "autoprefixer" },
              { name: "json5" },
              { name: "tailwindcss" },
            ],
          },
          {
            name: "@types",
            children: [
              { name: "eslint" },
              { name: "estree" },
              { name: "json5" },
              { name: "react-dom" },
            ],
          },
        ],
      },
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [
              { name: "CountryCityGame.tsx" },
              { name: "TrafficLight.tsx" },
              { name: "TreeFolder.tsx" },
              { name: "WhackAMole.module.css" },
              { name: "WhackAMole.tsx" },
            ],
          },
          {
            name: "styles",
            children: [{ name: "global.css" }, { name: "wam.css" }],
          },
        ],
      },
    ],
  };

  function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    return (
      <div>
        {entry.children ? (
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? '-' : "+"}
            {entry.name}
          </button>
        ) : (
          <div>{entry.name}</div>
        )}

        {isExpanded && (
          <div style={{ paddingLeft: `${depth * 30}px` }}>
            {entry.children?.map((en: TEntry) => (
              <Entry key={en.name} entry={en} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {files.children.map((entry: TEntry) => (
        <Entry key={entry.name} entry={entry} depth={1} />
      ))}
    </>
  );
}
