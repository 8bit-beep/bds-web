import { CodeBlock } from "./_components/CodeBlock";
import DatePickerShowcase from "./_components/DatePickerShowcase";
import { DocTable } from "./_components/DocTable";
import { UiShowcase } from "./_components/UiShowcase";

const Section = ({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="scroll-mt-24 flex flex-col gap-4 rounded-3xl border border-greyscale-20 bg-white/30 p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-h2 text-greyscale-90">{title}</h2>
        {description ? (
          <p className="text-body text-greyscale-70">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
};

type ApiRow = {
  name: string;
  signature: string;
  description: string;
};

type PropRow = {
  prop: string;
  type: string;
  required: string;
  default: string;
  description: string;
};

const Anchor = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="rounded-xl border border-greyscale-20 bg-white/40 px-3 py-2 text-body text-greyscale-80 hover:bg-white/60">
    {label}
  </a>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-greyscale-20 bg-white/40 px-2 py-0.5 text-[11px] leading-4 text-greyscale-70">
    {children}
  </span>
);

export default function PackagesDocPage() {
  const toc = [
    { href: "#quick-start", label: "빠른 시작" },
    { href: "#colors", label: "@bds-web/colors" },
    { href: "#shapes", label: "@bds-web/shapes" },
    { href: "#typography", label: "@bds-web/typography" },
    { href: "#themes", label: "@bds-web/themes" },
    { href: "#ui", label: "@bds-web/ui" },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8">
      <header className="mb-6 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-h1 text-blue-light">BDS Packages</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {toc.map((item) => (
            <Anchor key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <main className="flex flex-col gap-6">
          <Section
            id="quick-start"
            title="빠른 시작"
            description="Next.js(App Router) + Tailwind v4 기준. CSS 토큰 import가 가장 중요합니다.">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <Chip>PeerDeps</Chip>
                <span className="text-body text-greyscale-80">
                  React 19+, Next 16+, Emotion(사용 시)
                </span>
              </div>

              <CodeBlock
                label="Install + global CSS"
                language="sh"
                code={[
                  "# 설치",
                  "pnpm add @bds-web/ui @bds-web/themes @bds-web/colors @bds-web/typography @bds-web/shapes",
                  "",
                  "# 전역 스타일(예: app/globals.css)에 토큰 CSS import (Tailwind v4)",
                  '@import \"tailwindcss\";',
                  '@import \"@bds-web/themes/theme.tailwind.css\";',
                  '@import \"@bds-web/colors/colors.css\";',
                  '@import \"@bds-web/typography/tokens.tailwind.css\";',
                  '@import \"@bds-web/shapes/tokens.tailwind.css\";',
                ].join("\n")}
              />

              <CodeBlock
                label="(권장) Next App Router - Emotion SSR Registry"
                language="tsx"
                code={[
                  'import { BdsRegistry, ModalProvider } from "@bds-web/ui";',
                  "",
                  "export default function RootLayout({ children }: { children: React.ReactNode }) {",
                  "  return (",
                  "    <html lang=\"en\">",
                  "      <body>",
                  "        <ModalProvider />",
                  "        <BdsRegistry>{children}</BdsRegistry>",
                  "      </body>",
                  "    </html>",
                  "  );",
                  "}",
                ].join("\n")}
              />
            </div>
          </Section>

          <Section
            id="colors"
            title="@bds-web/colors"
            description="CSS 변수 기반 컬러 토큰 + TS에서 사용할 수 있는 colors 객체를 제공합니다.">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Chip>Exports</Chip>
                <span className="text-body text-greyscale-80">colors</span>
                <Chip>CSS</Chip>
                <span className="text-body text-greyscale-80">
                  @bds-web/colors/colors.css
                </span>
              </div>

              <DocTable<ApiRow>
                caption="Public API"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Type / Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "colors",
                    signature:
                      "{ greyScale: {0..90}, red/blue/green: {light,dark}, static: {white,black} }",
                    description:
                      "각 값은 CSS 변수(var(--bds-color-...))를 가리키는 문자열입니다. 인라인 스타일, CSS-in-JS, theme 구성 등에 재사용 가능합니다.",
                  },
                ]}
              />

              <CodeBlock
                label="Example"
                language="tsx"
                code={[
                  'import { colors } from "@bds-web/colors";',
                  "",
                  "export const Example = () => (",
                  "  <div",
                  "    style={{",
                  "      color: colors.blue.light,",
                  "      background: colors.greyScale[0],",
                  "      borderColor: colors.greyScale[20],",
                  "    }}",
                  "  >",
                  "    Hello BDS",
                  "  </div>",
                  ");",
                ].join("\n")}
              />
            </div>
          </Section>

          <Section
            id="shapes"
            title="@bds-web/shapes"
            description="Radius(shape) 토큰을 TS 객체와 Tailwind theme 변수(CSS)로 제공합니다.">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Chip>Exports</Chip>
                <span className="text-body text-greyscale-80">shapes</span>
                <Chip>CSS</Chip>
                <span className="text-body text-greyscale-80">
                  @bds-web/shapes/tokens.tailwind.css
                </span>
              </div>

              <DocTable<ApiRow>
                caption="Public API"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Type / Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "shapes",
                    signature:
                      "{ small: '4px', medium: '8px', large: '12px', full: '100000px' }",
                    description:
                      "borderRadius 등에서 바로 사용할 수 있는 값들입니다. full은 pill/원형 처리를 위한 큰 값입니다.",
                  },
                ]}
              />

              <CodeBlock
                label="Example"
                language="tsx"
                code={[
                  'import { shapes } from "@bds-web/shapes";',
                  "",
                  "export const Example = () => (",
                  "  <div style={{ borderRadius: shapes.medium, border: '1px solid #0002', padding: 12 }}>",
                  "    rounded box",
                  "  </div>",
                  ");",
                ].join("\n")}
              />

              <CodeBlock
                label="Tailwind v4 theme variables"
                language="css"
                code={[
                  "@theme {",
                  "  --radius-small: 4px;",
                  "  --radius-medium: 8px;",
                  "  --radius-large: 12px;",
                  "  --radius-full: 100000px;",
                  "}",
                ].join("\n")}
              />
            </div>
          </Section>

          <Section
            id="typography"
            title="@bds-web/typography"
            description="Typography 토큰과 Emotion helper(typoCss)를 제공합니다.">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Chip>Exports</Chip>
                <span className="text-body text-greyscale-80">
                  TypographyLevel, weightTokens, typographyTokens, typoCss
                </span>
                <Chip>CSS</Chip>
                <span className="text-body text-greyscale-80">
                  @bds-web/typography/tokens.tailwind.css
                </span>
              </div>

              <DocTable<ApiRow>
                caption="Public API"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Type / Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "TypographyLevel",
                    signature:
                      "'H1' | 'H2' | 'H3' | 'H4' | 'Accent' | 'Body' | 'Caption1' | 'Caption2'",
                    description: "typoCss / typographyTokens에서 사용하는 레벨 유니온 타입",
                  },
                  {
                    name: "weightTokens",
                    signature:
                      "{ Bold:700, SemiBold:600, Medium:500, Regular:400 }",
                    description: "font-weight 상수 토큰",
                  },
                  {
                    name: "typographyTokens",
                    signature:
                      "Record<TypographyLevel, { size: string; weights: number }> ",
                    description:
                      "각 타이포 레벨의 size(px)와 weights(font-weight)를 제공합니다.",
                  },
                  {
                    name: "typoCss",
                    signature:
                      "(level: TypographyLevel) => SerializedStyles (@emotion/react)",
                    description:
                      "Emotion css helper. font-size와 font-weight를 토큰 기반으로 생성합니다.",
                  },
                ]}
              />

              <CodeBlock
                label="Emotion example"
                language="tsx"
                code={[
                  'import { typoCss } from "@bds-web/typography";',
                  "",
                  "export const Title = () => (",
                  '  <h1 css={typoCss("H1")}>Hello</h1>',
                  ");",
                ].join("\n")}
              />

              <CodeBlock
                label="Tailwind v4 theme variables"
                language="css"
                code={[
                  "@theme {",
                  "  --text-h1: 36px;",
                  "  --text-h1--font-weight: 500;",
                  "  ...",
                  "}",
                ].join("\n")}
              />
            </div>
          </Section>

          <Section
            id="themes"
            title="@bds-web/themes"
            description="light/dark 테마를 DOM에 적용하고 구독/토글하는 유틸 + hook, Next용 ThemeSetter를 제공합니다.">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Chip>Theme</Chip>
                <span className="text-body text-greyscale-80">
                  &quot;light&quot; | &quot;dark&quot;
                </span>
                <Chip>Next</Chip>
                <span className="text-body text-greyscale-80">@bds-web/themes/next</span>
                <Chip>Init (IIFE)</Chip>
                <span className="text-body text-greyscale-80">@bds-web/themes/init</span>
              </div>

              <DocTable<ApiRow>
                caption="DOM utilities (from @bds-web/themes)"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "getSystemTheme",
                    signature: "() => Theme",
                    description:
                      "prefers-color-scheme를 읽어 system theme을 반환합니다.",
                  },
                  {
                    name: "getStoredTheme",
                    signature: "() => Theme | null",
                    description:
                      "localStorage('bds-theme')에서 저장된 테마를 읽습니다. 값이 없거나 잘못되면 null.",
                  },
                  {
                    name: "resolveInitialTheme",
                    signature: "() => Theme",
                    description:
                      "저장된 테마가 있으면 사용하고, 없으면 system theme을 사용합니다.",
                  },
                  {
                    name: "getCurrentTheme",
                    signature: "() => Theme | null",
                    description:
                      "documentElement.dataset.theme에서 현재 적용된 테마를 읽습니다.",
                  },
                  {
                    name: "applyTheme",
                    signature: "(theme: Theme) => void",
                    description:
                      "dataset.theme을 설정하고 localStorage에 저장한 뒤 커스텀 이벤트(bds-theme-change)를 dispatch 합니다.",
                  },
                  {
                    name: "subscribeThemeChange",
                    signature: "(cb: () => void) => () => void",
                    description:
                      "bds-theme-change 이벤트를 구독하고, unsubscribe 함수를 반환합니다.",
                  },
                  {
                    name: "toggleTheme",
                    signature: "() => void",
                    description:
                      "현재 테마(없으면 초기 테마)를 기준으로 light/dark를 토글합니다.",
                  },
                  {
                    name: "useTheme",
                    signature: "() => Theme",
                    description:
                      "useSyncExternalStore 기반 hook. theme-change 이벤트를 구독해 Theme 값을 제공합니다.",
                  },
                  {
                    name: "initTheme",
                    signature: "() => Theme | void",
                    description:
                      "(client only) 초기 테마를 dataset.theme에 설정합니다. try/catch로 감싸져 있어 실패 시 void.",
                  },
                ]}
              />

              <DocTable<ApiRow>
                caption="Next export (from @bds-web/themes/next)"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "ThemeSetter",
                    signature: "() => JSX.Element",
                    description:
                      "head에 넣는 inline script 컴포넌트. localStorage/system을 읽어 dataset.theme을 가능한 빨리 설정해 FOUC를 줄입니다.",
                  },
                ]}
              />

              <CodeBlock
                label="Next(App Router)에서 ThemeSetter 사용"
                language="tsx"
                code={[
                  'import { ThemeSetter } from "@bds-web/themes/next";',
                  "",
                  "export default function RootLayout({ children }: { children: React.ReactNode }) {",
                  "  return (",
                  "    <html lang=\"en\">",
                  "      <head>",
                  "        <ThemeSetter />",
                  "      </head>",
                  "      <body>{children}</body>",
                  "    </html>",
                  "  );",
                  "}",
                ].join("\n")}
              />

              <CodeBlock
                label="테마 토글 예시"
                language="tsx"
                code={[
                  'import { toggleTheme, useTheme } from "@bds-web/themes";',
                  "",
                  "export const ThemeToggle = () => {",
                  "  const theme = useTheme();",
                  "  return (",
                  "    <button onClick={toggleTheme}>",
                  "      current: {theme}",
                  "    </button>",
                  "  );",
                  "};",
                ].join("\n")}
              />
            </div>
          </Section>

          <Section
            id="ui"
            title="@bds-web/ui"
            description="핵심 UI 컴포넌트와 Modal 유틸, Next(Emotion) Registry를 제공합니다. (아이콘 컴포넌트는 문서에서 제외)">
            <div className="flex flex-col gap-6">

              {/* DatePicker 설명 및 체험 */}
              <div className="flex flex-col gap-4">
                <div className="text-h3 text-greyscale-90">DatePicker</div>
                <p className="text-body text-greyscale-70">
                  날짜를 선택할 수 있는 달력 UI 컴포넌트입니다. <br />
                  <b>date</b> (기본값: 오늘), <b>onChangeDate</b> (날짜 변경 콜백), <b>disablePast</b> (과거 비활성화), <b>title</b> (달력 상단 제목) props를 지원합니다.
                </p>
                <DocTable<PropRow>
                  caption="DatePickerProps (DatePicker)"
                  columns={[
                    { key: "prop", header: "Prop", widthClassName: "w-[180px]" },
                    { key: "type", header: "Type", widthClassName: "w-[260px]" },
                    { key: "required", header: "Required", widthClassName: "w-[110px]" },
                    { key: "default", header: "Default", widthClassName: "w-[140px]" },
                    { key: "description", header: "Description" },
                  ]}
                  rows={[
                    {
                      prop: "date",
                      type: "Date",
                      required: "No",
                      default: "오늘(new Date())",
                      description: "선택된 날짜 값 (컨트롤용)",
                    },
                    {
                      prop: "onChangeDate",
                      type: "(date: Date) => void",
                      required: "No",
                      default: "() => {}",
                      description: "날짜 선택 시 호출되는 콜백",
                    },
                    {
                      prop: "disablePast",
                      type: "boolean",
                      required: "No",
                      default: "false",
                      description: "과거 날짜 비활성화 여부",
                    },
                    {
                      prop: "title",
                      type: "string",
                      required: "No",
                      default: '"날짜 선택"',
                      description: "달력 상단 제목",
                    },
                  ]}
                />
                <CodeBlock
                  label="DatePicker 사용 예시"
                  language="tsx"
                  code={[
                    'import { DatePicker } from "@bds-web/ui/DatePicker/ui/index";',
                    'import { useState } from "react";',
                    '',
                    'export default function Example() {',
                    '  const [date, setDate] = useState(new Date());',
                    '  return (',
                    '    <DatePicker date={date} onChangeDate={setDate} />',
                    '  );',
                    '}',
                  ].join("\n")}
                />
                <div className="mt-2">
                  <div className="text-caption2 text-greyscale-70 mb-1">체험</div>
                  <DatePickerShowcase />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip>Exports</Chip>
                <span className="text-body text-greyscale-80">
                  Button, TextInput, Dropdown, Checkbox, ModalProvider, modal, BdsRegistry
                </span>
              </div>

              <DocTable<PropRow>
                caption="ButtonProps (Button)"
                columns={[
                  { key: "prop", header: "Prop", widthClassName: "w-[180px]" },
                  { key: "type", header: "Type", widthClassName: "w-[260px]" },
                  { key: "required", header: "Required", widthClassName: "w-[110px]" },
                  { key: "default", header: "Default", widthClassName: "w-[140px]" },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    prop: "buttonType",
                    type: '"primary" | "secondary" | "ghost" | "text" | "danger"',
                    required: "No",
                    default: '"primary"',
                    description: "버튼 스타일 변형(variant) 선택",
                  },
                  {
                    prop: "buttonSize",
                    type: '"small" | "medium" | "large"',
                    required: "No",
                    default: '"small"',
                    description: "버튼 크기",
                  },
                  {
                    prop: "showIcon",
                    type: "boolean",
                    required: "No",
                    default: "false",
                    description:
                      "우측에 아이콘을 표시합니다. (아이콘 컴포넌트 자체 문서는 제외)",
                  },
                  {
                    prop: "...rest",
                    type: "React.ButtonHTMLAttributes<HTMLButtonElement>",
                    required: "-",
                    default: "-",
                    description:
                      "onClick, disabled, type 등 기본 버튼 속성을 모두 지원합니다.",
                  },
                ]}
              />

              <DocTable<PropRow>
                caption="TextInputProps (TextInput)"
                columns={[
                  { key: "prop", header: "Prop", widthClassName: "w-[180px]" },
                  { key: "type", header: "Type", widthClassName: "w-[260px]" },
                  { key: "required", header: "Required", widthClassName: "w-[110px]" },
                  { key: "default", header: "Default", widthClassName: "w-[140px]" },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    prop: "label",
                    type: "string",
                    required: "No",
                    default: "-",
                    description: "상단 라벨 텍스트",
                  },
                  {
                    prop: "errorMessage",
                    type: "string",
                    required: "No",
                    default: "-",
                    description:
                      "에러 메시지가 있으면 입력창 에러 스타일 + 메시지 표시",
                  },
                  {
                    prop: "...rest",
                    type: "React.InputHTMLAttributes<HTMLInputElement>",
                    required: "-",
                    default: "-",
                    description:
                      "value/onChange/placeholder/type 등 기본 input 속성을 모두 지원합니다.",
                  },
                ]}
              />

              <DocTable<PropRow>
                caption="DropdownProps (Dropdown)"
                columns={[
                  { key: "prop", header: "Prop", widthClassName: "w-[180px]" },
                  { key: "type", header: "Type", widthClassName: "w-[260px]" },
                  { key: "required", header: "Required", widthClassName: "w-[110px]" },
                  { key: "default", header: "Default", widthClassName: "w-[140px]" },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    prop: "dropdownSize",
                    type: '"small" | "medium" | "large"',
                    required: "No",
                    default: '"small"',
                    description: "드롭다운 크기",
                  },
                  {
                    prop: "options",
                    type: "DropdownItem[] ( { name: string; value: string } )",
                    required: "Yes",
                    default: "-",
                    description:
                      "표시 가능한 옵션 목록. name은 라벨, value는 식별 값입니다.",
                  },
                  {
                    prop: "selected",
                    type: "DropdownItem | null",
                    required: "Yes",
                    default: "-",
                    description:
                      "현재 선택 값. null이면 placeholder(선택해주세요.)를 보여줍니다.",
                  },
                  {
                    prop: "onSelect",
                    type: "(item: DropdownItem | null) => void",
                    required: "Yes",
                    default: "-",
                    description:
                      "옵션 클릭 시 호출됩니다. (현재 구현은 옵션 클릭으로만 값 변경)",
                  },
                  {
                    prop: "width",
                    type: "string",
                    required: "No",
                    default: '"auto"',
                    description:
                      "컨테이너 width. 예: '240px', '100%', 'fit-content'",
                  },
                ]}
              />

              <DocTable<PropRow>
                caption="CheckboxProps (Checkbox)"
                columns={[
                  { key: "prop", header: "Prop", widthClassName: "w-[180px]" },
                  { key: "type", header: "Type", widthClassName: "w-[260px]" },
                  { key: "required", header: "Required", widthClassName: "w-[110px]" },
                  { key: "default", header: "Default", widthClassName: "w-[140px]" },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    prop: "checked",
                    type: "boolean",
                    required: "Yes",
                    default: "-",
                    description: "체크박스의 체크 상태",
                  },
                  {
                    prop: "onChange",
                    type: "(checked: boolean) => void",
                    required: "Yes",
                    default: "-",
                    description:
                      "체크박스 클릭 시 호출됩니다. 새로운 체크 상태를 인자로 받습니다.",
                  },
                  {
                    prop: "size",
                    type: "number",
                    required: "No",
                    default: "20",
                    description: "체크박스의 가로/세로 크기(픽셀)",
                  },
                ]}
              />

              <DocTable<PropRow>
                caption="ModalProviderProps (ModalProvider)"
                columns={[
                  { key: "prop", header: "Prop", widthClassName: "w-[180px]" },
                  { key: "type", header: "Type", widthClassName: "w-[260px]" },
                  { key: "required", header: "Required", widthClassName: "w-[110px]" },
                  { key: "default", header: "Default", widthClassName: "w-[140px]" },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    prop: "baseZIndex",
                    type: "number",
                    required: "No",
                    default: "10000",
                    description:
                      "모달이 여러 개 쌓일 때 z-index의 기준값입니다. (index 만큼 +1씩 증가)",
                  },
                ]}
              />

              <DocTable<ApiRow>
                caption="Modal utility (modal)"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "modal.open",
                    signature: "(content: { title: string; content: React.ReactNode }) => void",
                    description:
                      "새 모달을 스택에 push 합니다. 내부적으로 crypto.randomUUID()로 id 생성.",
                  },
                  {
                    name: "modal.close",
                    signature: "() => void",
                    description:
                      "최상단 모달 1개를 닫습니다. 마지막 1개면 전체 스택을 비웁니다.",
                  },
                  {
                    name: "modal.closeAll",
                    signature: "() => void",
                    description: "모달 스택을 모두 비웁니다.",
                  },
                ]}
              />

              <DocTable<ApiRow>
                caption="Next export (from @bds-web/ui/next)"
                columns={[
                  { key: "name", header: "Name", widthClassName: "w-[180px]" },
                  {
                    key: "signature",
                    header: "Signature",
                    widthClassName: "w-[360px]",
                  },
                  { key: "description", header: "Description" },
                ]}
                rows={[
                  {
                    name: "BdsRegistry",
                    signature: "({ children }: { children: React.ReactNode }) => JSX.Element",
                    description:
                      "Next App Router에서 Emotion 스타일을 SSR/Streaming 시점에 주입하기 위한 registry 컴포넌트입니다.",
                  },
                ]}
              />

              <div className="flex flex-col gap-3">
                <div className="text-h3 text-greyscale-90">Interactive Showcase</div>
                <p className="text-body text-greyscale-70">
                  MDX 문서처럼, 아래에서 실제 컴포넌트를 눌러보고(입력/선택/모달)
                  props 조합별 렌더링 결과를 한 번에 확인할 수 있습니다.
                </p>
                <UiShowcase />
              </div>

              <CodeBlock
                label="UI 사용 예시"
                language="tsx"
                code={[
                  'import { Button, TextInput, Dropdown, Checkbox, modal } from "@bds-web/ui";',
                  'import { useState } from "react";',
                  "",
                  "export const Example = () => {",
                  "  const [checked, setChecked] = useState(false);",
                  "  ",
                  "  return (",
                  "    <div>",
                  "      <Button onClick={() => modal.open({ title: 'Hello', content: <div>content</div> })}>",
                  "        Open Modal",
                  "      </Button>",
                  "      <TextInput label=\"Name\" placeholder=\"Enter\" />",
                  "      <Dropdown",
                  "        options={[{ name: 'A', value: 'A' }]}",
                  "        selected={null}",
                  "        onSelect={() => {}}",
                  "      />",
                  "      <Checkbox checked={checked} onChange={setChecked} size={24} />",
                  "    </div>",
                  "  );",
                  "};",
                ].join("\n")}
              />

              <div className="rounded-2xl border border-greyscale-20 bg-white/30 p-4">
                <div className="text-caption2 text-greyscale-70">Notes</div>
                <ul className="mt-2 list-disc pl-5 text-body text-greyscale-80">
                  <li>ModalProvider는 최상단(예: layout.tsx)에 1회만 마운트 권장</li>
                  <li>
                    Dropdown은 컨테이너 클릭으로 open/close 토글되며, 옵션 클릭 시 onSelect가 호출됩니다.
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <footer className="pb-10 pt-2 text-caption2 text-greyscale-60">
            실제 코드(export/props) 기준으로 작성된 문서입니다.
          </footer>
        </main>

        <aside className="hidden lg:block">
          <div className="sticky top-6 flex flex-col gap-3 rounded-3xl border border-greyscale-20 bg-white/30 p-5">
            <div className="text-caption1 text-greyscale-80">On this page</div>
            <nav className="flex flex-col gap-2">
              {toc.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-body text-greyscale-80 hover:bg-white/50">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 rounded-2xl border border-greyscale-20 bg-white/30 p-4">
              <div className="text-caption2 text-greyscale-70">Scopes</div>
              <div className="mt-2 flex flex-col gap-1 text-body text-greyscale-80">
                <span>패키지: colors / shapes / typography / themes / ui</span>
                <span>아이콘 컴포넌트: 문서에서 제외</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
