"use client";

import { Button, Checkbox, Dropdown, DropdownItem, modal, TextInput } from "@bds-web/ui";
import { useMemo, useState } from "react";
import { ExampleCard } from "./ExampleCard";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-md border border-greyscale-20 bg-white/40 px-2 py-0.5 text-[11px] leading-4 text-greyscale-70">
    {children}
  </span>
);

const VariantCell = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2 rounded-2xl border border-greyscale-20 bg-white/25 p-3">
    <div className="flex flex-wrap gap-1 text-caption2 text-greyscale-70">
      {title}
    </div>
    <div>{children}</div>
  </div>
);

export const UiShowcase = () => {
  const buttonTypes = useMemo(
    () => ["primary", "secondary", "ghost", "text", "danger"] as const,
    []
  );
  const buttonSizes = useMemo(() => ["small", "medium", "large"] as const, []);
  const iconFlags = useMemo(() => [false, true] as const, []);
  const disabledFlags = useMemo(() => [false, true] as const, []);

  const textInputCombos = useMemo(() => {
    const labelOptions = [undefined, "Name"] as const;
    const errorOptions = [undefined, "Must be at least 5 chars"] as const;
    const disabledOptions = [false, true] as const;
    const requiredOptions = [false, true] as const;

    const combos: Array<{
      id: string;
      label?: string;
      errorMessage?: string;
      disabled: boolean;
      required: boolean;
    }> = [];

    for (const label of labelOptions) {
      for (const errorMessage of errorOptions) {
        for (const disabled of disabledOptions) {
          for (const required of requiredOptions) {
            combos.push({
              id: [
                label ? "label" : "no-label",
                errorMessage ? "error" : "no-error",
                disabled ? "disabled" : "enabled",
                required ? "required" : "optional",
              ].join("__"),
              label: label ?? undefined,
              errorMessage: errorMessage ?? undefined,
              disabled,
              required,
            });
          }
        }
      }
    }

    return combos;
  }, []);

  const [textValues, setTextValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const combo of textInputCombos) init[combo.id] = "";
    return init;
  });

  const dropdownOptions = useMemo<DropdownItem[]>(
    () => [
      { name: "출석", value: "ATTEND" },
      { name: "미출석", value: "NOT_ATTEND" },
      { name: "외박", value: "SLEEP" },
      { name: "외출", value: "OUTGOING" },
      { name: "방과후", value: "AFTER_SCHOOL" },
    ],
    []
  );

  const dropdownCombos = useMemo(() => {
    const sizes = ["small", "medium", "large"] as const;
    const widths = ["auto", "240px"] as const;
    const selectedModes = ["none", "first"] as const;

    const combos: Array<{
      id: string;
      dropdownSize: (typeof sizes)[number];
      width: string;
      initialSelected: DropdownItem | null;
    }> = [];

    for (const dropdownSize of sizes) {
      for (const width of widths) {
        for (const mode of selectedModes) {
          combos.push({
            id: ["dd", dropdownSize, width === "auto" ? "auto" : "240", mode].join(
              "__"
            ),
            dropdownSize,
            width,
            initialSelected: mode === "first" ? dropdownOptions[0] : null,
          });
        }
      }
    }

    return combos;
  }, [dropdownOptions]);

  const [dropdownSelected, setDropdownSelected] = useState<
    Record<string, DropdownItem | null>
  >(() => {
    const init: Record<string, DropdownItem | null> = {};
    for (const combo of dropdownCombos) init[combo.id] = combo.initialSelected;
    return init;
  });

  const checkboxSizes = useMemo(() => [16, 20, 24, 28, 32], []);
  const [checkboxStates, setCheckboxStates] = useState<Record<number, boolean>>(
    () => {
      const init: Record<number, boolean> = {};
      checkboxSizes.forEach((size) => (init[size] = false));
      return init;
    }
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-greyscale-20 bg-white/30 p-4">
        <div className="text-caption2 text-greyscale-70">About this showcase</div>
        <ul className="mt-2 list-disc pl-5 text-body text-greyscale-80">
          <li>
            “가능한 조합”은 디자인 시스템 전용 props(예: buttonType/buttonSize/showIcon)
            + 자주 쓰는 native props(예: disabled/required) 기준으로 전시합니다.
          </li>
          <li>
            HTMLAttributes 전체를 조합하면 경우의 수가 무한에 가까워서, 문서 페이지에서는
            핵심 축만 다룹니다.
          </li>
        </ul>
      </div>

      <ExampleCard
        title="Button — 모든 조합"
        description="buttonType × buttonSize × showIcon × disabled"
        code={[
          "// buttonType: primary | secondary | ghost | text | danger",
          "// buttonSize: small | medium | large",
          "// showIcon: boolean",
          "// disabled: boolean",
          "",
          "buttonTypes.flatMap(type =>",
          "  buttonSizes.flatMap(size =>",
          "    [false, true].flatMap(showIcon =>",
          "      [false, true].map(disabled => ({ type, size, showIcon, disabled }))",
          "    )",
          "  )",
          ");",
        ].join("\n")}>
        <div className="flex flex-col gap-3">
          {iconFlags.map((showIcon) => (
            <div key={String(showIcon)} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Chip>showIcon</Chip>
                <span className="text-body text-greyscale-80">
                  {showIcon ? "true" : "false"}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {buttonSizes.map((buttonSize) => (
                  <div key={buttonSize} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Chip>buttonSize</Chip>
                      <span className="text-body text-greyscale-80">
                        {buttonSize}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {buttonTypes.flatMap((buttonType) =>
                        disabledFlags.map((disabled) => (
                          <VariantCell
                            key={[buttonType, disabled].join("__")}
                            title={
                              <>
                                <Chip>{buttonType}</Chip>
                                <Chip>{disabled ? "disabled" : "enabled"}</Chip>
                              </>
                            }>
                            <Button
                              buttonType={buttonType}
                              buttonSize={buttonSize}
                              showIcon={showIcon}
                              disabled={disabled}>
                              {buttonType}
                            </Button>
                          </VariantCell>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ExampleCard>

      <ExampleCard
        title="TextInput — 모든 조합"
        description="label × errorMessage × disabled × required (총 16개)"
        code={[
          "// label?: string",
          "// errorMessage?: string",
          "// disabled?: boolean (native)",
          "// required?: boolean (native)",
        ].join("\n")}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {textInputCombos.map((combo) => {
            const value = textValues[combo.id] ?? "";
            return (
              <VariantCell
                key={combo.id}
                title={
                  <>
                    <Chip>{combo.label ? "label" : "no-label"}</Chip>
                    <Chip>{combo.errorMessage ? "error" : "no-error"}</Chip>
                    <Chip>{combo.disabled ? "disabled" : "enabled"}</Chip>
                    <Chip>{combo.required ? "required" : "optional"}</Chip>
                  </>
                }>
                <TextInput
                  label={combo.label}
                  placeholder="Type here"
                  value={value}
                  onChange={(e) =>
                    setTextValues((prev) => ({
                      ...prev,
                      [combo.id]: e.target.value,
                    }))
                  }
                  errorMessage={combo.errorMessage}
                  disabled={combo.disabled}
                  required={combo.required}
                />
              </VariantCell>
            );
          })}
        </div>
      </ExampleCard>

      <ExampleCard
        title="Dropdown — 모든 조합"
        description="dropdownSize × width × selected (총 12개)"
        code={[
          "// dropdownSize: small | medium | large",
          "// width?: string",
          "// selected: DropdownItem | null",
          "// onSelect: (item: DropdownItem | null) => void",
        ].join("\n")}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {dropdownCombos.map((combo) => {
            const selected = dropdownSelected[combo.id] ?? null;
            const hasSelected = selected !== null;

            return (
              <VariantCell
                key={combo.id}
                title={
                  <>
                    <Chip>{combo.dropdownSize}</Chip>
                    <Chip>{combo.width}</Chip>
                    <Chip>{hasSelected ? "selected" : "null"}</Chip>
                  </>
                }>
                <Dropdown
                  dropdownSize={combo.dropdownSize}
                  width={combo.width}
                  options={dropdownOptions}
                  selected={selected}
                  onSelect={(item) =>
                    setDropdownSelected((prev) => ({
                      ...prev,
                      [combo.id]: item,
                    }))
                  }
                />
              </VariantCell>
            );
          })}
        </div>
      </ExampleCard>

      <ExampleCard
        title="Modal — 동작 테스트"
        description="modal.open/close/closeAll + stacking 동작을 실제로 눌러볼 수 있습니다."
        code={[
          'import { modal } from "@bds-web/ui";',
          "",
          "modal.open({ title: 'Title', content: <div>Content</div> });",
          "modal.close();",
          "modal.closeAll();",
        ].join("\n")}>
        <div className="flex flex-wrap gap-3">
          <Button
            buttonType="primary"
            onClick={() =>
              modal.open({
                title: "Simple Modal",
                content: <div className="text-body text-greyscale-80">Hello modal</div>,
              })
            }>
            Open simple
          </Button>

          <Button
            buttonType="secondary"
            onClick={() =>
              modal.open({
                title: "Long Content",
                content: (
                  <div className="flex flex-col gap-2">
                    <div className="text-body text-greyscale-80">
                      This is a longer modal content.
                    </div>
                    <div className="text-body text-greyscale-80">
                      Try opening multiple modals to test stacking.
                    </div>
                  </div>
                ),
              })
            }>
            Open long
          </Button>

          <Button
            buttonType="ghost"
            onClick={() => {
              modal.open({
                title: "Stack 1",
                content: <div className="text-body text-greyscale-80">First</div>,
              });
              modal.open({
                title: "Stack 2",
                content: <div className="text-body text-greyscale-80">Second</div>,
              });
              modal.open({
                title: "Stack 3",
                content: <div className="text-body text-greyscale-80">Third</div>,
              });
            }}>
            Open stack x3
          </Button>

          <Button buttonType="text" onClick={() => modal.close()}>
            Close top
          </Button>

          <Button buttonType="danger" onClick={() => modal.closeAll()}>
            Close all
          </Button>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Checkbox — 다양한 크기"
        description="checked 상태와 size를 직접 조작해볼 수 있습니다."
        code={[
          'import { Checkbox } from "@bds-web/ui";',
          'import { useState } from "react";',
          "",
          "const [checked, setChecked] = useState(false);",
          "",
          "<Checkbox checked={checked} onChange={setChecked} size={20} />",
        ].join("\n")}>
        <div className="flex flex-wrap items-center gap-6">
          {checkboxSizes.map((size) => (
            <VariantCell
              key={size}
              title={
                <>
                  <Chip>size={size}</Chip>
                  <Chip>{checkboxStates[size] ? "checked" : "unchecked"}</Chip>
                </>
              }>
              <Checkbox
                checked={checkboxStates[size]}
                onChange={(checked) =>
                  setCheckboxStates((prev) => ({ ...prev, [size]: checked }))
                }
                size={size}
              />
            </VariantCell>
          ))}
        </div>
      </ExampleCard>
    </div>
  );
};
